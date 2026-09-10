import { execFileSync } from "node:child_process";
import { basename } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

const releaseType = process.argv[2];
const description = process.argv.slice(3).join(" ").trim();
const allowedTypes = new Set(["patch", "minor", "major"]);

function stop(message) {
  console.error(`\n发布已停止：${message}\n`);
  process.exit(1);
}

function run(command, args, options = {}) {
  try {
    const output = execFileSync(command, args, {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: options.capture ? ["ignore", "pipe", "pipe"] : "inherit",
    });
    return typeof output === "string" ? output.trim() : "";
  } catch (error) {
    if (options.capture) {
      return null;
    }
    throw error;
  }
}

if (!allowedTypes.has(releaseType) || !description) {
  stop('请使用：npm run release -- patch|minor|major "本次更新说明"');
}

if (!run("git", ["rev-parse", "--is-inside-work-tree"], { capture: true })) {
  stop("当前目录不是 Git 项目。");
}

const branch = run("git", ["branch", "--show-current"], { capture: true });
if (branch !== "main") {
  stop(`当前分支是 ${branch || "未知"}，正式发布只能从 main 分支进行。`);
}

if (!run("git", ["remote", "get-url", "origin"], { capture: true })) {
  stop("还没有连接 GitHub 仓库（缺少 origin）。");
}

const changedFiles = run(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
  { capture: true },
)
  ?.split("\0")
  .filter(Boolean) ?? [];

const unsafeFiles = changedFiles.filter((file) => {
  const name = basename(file).toLowerCase();
  if (name === ".env.example") return false;
  return (
    name === ".env" ||
    name.startsWith(".env.") ||
    name === "credentials.json" ||
    name === "id_rsa" ||
    name === "id_ed25519" ||
    /\.(pem|key|p12|pfx)$/i.test(name)
  );
});

if (unsafeFiles.length > 0) {
  stop(`发现可能包含密钥的文件：${unsafeFiles.join(", ")}`);
}

const worktreeStatus = run("git", ["status", "--porcelain"], { capture: true });
if (!worktreeStatus) {
  stop("没有需要发布的修改。");
}

console.log("\n正在执行已有的测试与构建……");
run("npm", ["--prefix", "prototype", "run", "test:sites"]);
run("npm", ["--prefix", "prototype", "run", "build"]);

const packagePath = new URL("../package.json", import.meta.url);
const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));
const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(packageJson.version);
if (!match) {
  stop(`package.json 中的版本号 ${packageJson.version} 不是标准版本号。`);
}

const next = match.slice(1).map(Number);
const index = { major: 0, minor: 1, patch: 2 }[releaseType];
next[index] += 1;
for (let i = index + 1; i < next.length; i += 1) next[i] = 0;
const nextVersion = next.join(".");

packageJson.version = nextVersion;
writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);

const appPackagePath = new URL("../prototype/package.json", import.meta.url);
const appPackageJson = JSON.parse(readFileSync(appPackagePath, "utf8"));
appPackageJson.version = nextVersion;
writeFileSync(appPackagePath, `${JSON.stringify(appPackageJson, null, 2)}\n`);

const appLockPath = new URL("../prototype/package-lock.json", import.meta.url);
const appLockJson = JSON.parse(readFileSync(appLockPath, "utf8"));
appLockJson.version = nextVersion;
if (appLockJson.packages?.[""]) {
  appLockJson.packages[""].version = nextVersion;
}
writeFileSync(appLockPath, `${JSON.stringify(appLockJson, null, 2)}\n`);

const changelogPath = new URL("../CHANGELOG.md", import.meta.url);
const oldChangelog = readFileSync(changelogPath, "utf8");
const date = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());
const entry = `## v${nextVersion} — ${date}\n\n- ${description}\n\n`;
const updatedChangelog = oldChangelog.replace(
  /^# 更新记录\s*/,
  `# 更新记录\n\n${entry}`,
);
writeFileSync(changelogPath, updatedChangelog);

console.log(`\n正在发布 v${nextVersion}：${description}`);
run("git", ["add", "-A"]);
run("git", ["commit", "-m", `release: v${nextVersion} - ${description}`]);
run("git", ["tag", "-a", `v${nextVersion}`, "-m", description]);

try {
  run("git", ["push", "origin", "main", "--follow-tags"]);
} catch {
  stop(
    `本地版本 v${nextVersion} 已创建，但推送失败。网络恢复或重新登录后运行 git push origin main --follow-tags 即可继续。`,
  );
}

console.log(`\n完成：v${nextVersion} 已推送，Vercel 将自动开始部署。\n`);
