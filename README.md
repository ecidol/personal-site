# 个人网站

这是个人网站项目。源代码将保存在 GitHub 私有仓库中；网站连接 Vercel 后，`main` 分支的每次推送都会自动更新正式网站。

网站应用位于 `prototype/`；Vercel 项目名为 `jurneos`，Root Directory 使用 `prototype`，生产构建输出为 `dist/client`。视频素材使用 Git LFS 管理。

## 日常更新

完成内容或代码修改后，在项目目录运行：

```bash
npm run release -- patch "更新首页介绍"
```

这条命令会依次检查敏感文件、执行项目已有的测试和构建、更新版本号与更新记录、提交代码、创建版本标签并推送到 GitHub。Vercel 随后自动部署。

版本类型：

- `patch`：小修改或修复，例如 `v0.1.0` → `v0.1.1`
- `minor`：新增功能或页面，例如 `v0.1.1` → `v0.2.0`
- `major`：不兼容的大改版，例如 `v0.2.0` → `v1.0.0`

查看当前版本：

```bash
npm run version:show
```

## 安全规则

- 不要把密码、验证码、API 密钥、身份证件或其他隐私写进项目文件。
- 本机密钥放在 `.env.local`；线上密钥放在 Vercel 的 Environment Variables。
- GitHub 仓库虽然是私有的，但部署进网页的文字、图片和数据可能被所有访客读取。
- `.env.example` 只能放变量名称和无效示例值。

## 分支与部署

- `main`：正式版本；推送后 Vercel 自动更新公开网站。
- 其他分支：测试版本；Vercel 会生成独立的预览网址，不影响正式网站。
