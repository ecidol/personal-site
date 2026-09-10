import { useEffect, useRef, useState } from "react";
import aboutBlankPanelAppearanceContent from "./content/about-blank-panel-appearance.json";
import aboutBlankPanelContent from "./content/about-blank-panel.json";
import aboutBlankControlsContent from "./content/about-blank-controls.json";
import aboutBlankImageContentData from "./content/about-blank-image-content.json";
import aboutBlankImageFeatureContent from "./content/about-blank-image-feature.json";
import aboutLowerBlankBackgroundContent from "./content/about-lower-blank-background.json";
import aboutLowerBlankCardImageContent from "./content/about-lower-blank-card-image.json";
import aboutLowerBlankCopyContent from "./content/about-lower-blank-copy.json";
import aboutLowerBlankEffectContent from "./content/about-lower-blank-effect.json";
import aboutLowerBlankLayoutContent from "./content/about-lower-blank-layout.json";
import aboutLowerBlankPanelContent from "./content/about-lower-blank-panel.json";
import aboutLowerBlankPositionContent from "./content/about-lower-blank-position.json";
import aboutLowerNextBlankPanelContent from "./content/about-lower-next-blank-panel.json";
import aboutLowerNextBlankLayoutContent from "./content/about-lower-next-blank-layout.json";
import aboutLowerNextBlankCopyContent from "./content/about-lower-next-blank-copy.json";
import aboutLowerNextBlankBackgroundContent from "./content/about-lower-next-blank-background.json";
import aboutLowerNextBlankLineContent from "./content/about-lower-next-blank-line.json";
import aboutLowerNextBlankMarkContent from "./content/about-lower-next-blank-mark.json";
import timelineVideoBlankPanelContent from "./content/timeline-video-blank-panel.json";
import timelineVideoBlankContentData from "./content/timeline-video-blank-content.json";
import aboutBlankVideoContentData from "./content/about-blank-video-content.json";
import aboutBlankVideoFeatureContent from "./content/about-blank-video-feature.json";
import aboutDiscoverLinksContent from "./content/about-discover-links.json";
import aboutExtraGroupsContent from "./content/about-extra-groups.json";
import aboutPanelSelectionRemovalContent from "./content/about-panel-selection-removal.json";
import selectedSevenPageRemovalContent from "./content/selected-seven-page-removal.json";
import impactIntroPanelsContent from "./content/impact-intro-panels.json";
import aboutPanelBackgroundsContent from "./content/about-panel-backgrounds.json";
import aboutPanelBackgroundFeatureContent from "./content/about-panel-background-feature.json";
import aboutPanelCopyContent from "./content/about-panel-copy.json";
import timelineFollowupBlank01Content from "./content/timeline-followup-blank-01.json";
import timelineFollowupBlank02Content from "./content/timeline-followup-blank-02.json";
import timelineFollowupBlank03Content from "./content/timeline-followup-blank-03.json";
import timelineFollowupBlank04Content from "./content/timeline-followup-blank-04.json";
import timelineFollowupBlank05Content from "./content/timeline-followup-blank-05.json";
import timelineFollowupBlank06Content from "./content/timeline-followup-blank-06.json";
import timelineFollowupBlank07Content from "./content/timeline-followup-blank-07.json";
import timelineFollowupBlank08Content from "./content/timeline-followup-blank-08.json";
import timelineBlankOneLayoutContent from "./content/timeline-blank-one-layout.json";
import timelineBlankOneCopyContent from "./content/timeline-blank-one-copy.json";
import timelineBlankOneBackgroundContent from "./content/timeline-blank-one-background.json";
import timelineBlankOneDetailTopContent from "./content/timeline-blank-one-detail-top.json";
import timelineBlankOneDetailBottomContent from "./content/timeline-blank-one-detail-bottom.json";
import timelineBlankOneExtraRowContent from "./content/timeline-blank-one-extra-row.json";
import timelineBlankOnePositionContent from "./content/timeline-blank-one-position.json";
import timelineBlankOneMarkContent from "./content/timeline-blank-one-mark.json";
import timelineBlankOneRemovalContent from "./content/timeline-blank-one-removal.json";
import timelineBlankTwoLayoutContent from "./content/timeline-blank-two-layout.json";
import timelineBlankTwoCopyContent from "./content/timeline-blank-two-copy.json";
import timelineBlankTwoImageContent from "./content/timeline-blank-two-image.json";
import timelineBlankTwoBackgroundContent from "./content/timeline-blank-two-background.json";
import timelineBlankThreeLayoutContent from "./content/timeline-blank-three-layout.json";
import timelineBlankThreeCopyContent from "./content/timeline-blank-three-copy.json";
import timelineBlankThreeImageContent from "./content/timeline-blank-three-image.json";
import timelineBlankFourLayoutContent from "./content/timeline-blank-four-layout.json";
import timelineBlankFourCopyContent from "./content/timeline-blank-four-copy.json";
import timelineBlankFourImageContent from "./content/timeline-blank-four-image.json";
import timelineBlankFourWordFitContent from "./content/timeline-blank-four-word-fit.json";
import timelineBlankEightLayoutContent from "./content/timeline-blank-eight-layout.json";
import timelineBlankEightCopyContent from "./content/timeline-blank-eight-copy.json";
import timelineBlankEightImageContent from "./content/timeline-blank-eight-image.json";
import timelineBlankEightTitleFitContent from "./content/timeline-blank-eight-title-fit.json";
import timelineBlankFiveBackgroundContent from "./content/timeline-blank-five-background.json";
import timelineBlankSevenLayoutContent from "./content/timeline-blank-seven-layout.json";
import timelineGalleryFollowupBlankPanelContent from "./content/timeline-gallery-followup-blank-panel.json";
import timelineGalleryFollowupPricingLayoutContent from "./content/timeline-gallery-followup-pricing-layout.json";
import timelineGalleryFollowupPricingContentData from "./content/timeline-gallery-followup-pricing-content.json";
import timelineBlankSixLayoutContent from "./content/timeline-blank-six-layout.json";
import timelineBlankSixContentData from "./content/timeline-blank-six-content.json";
import timelineBlankSixImagesContent from "./content/timeline-blank-six-images.json";
import timelineBlankSixPositionContent from "./content/timeline-blank-six-position.json";
import { ExpandingCards, expandingCardIconNames } from "./components/ui/expanding-cards.jsx";
import { InteractiveFolderGallery } from "./components/ui/interactive-folder-gallery.jsx";
import { PricingCards } from "./components/ui/pricing-cards.jsx";
import { BlurVignette, BlurVignetteArticle } from "./components/ui/blur-vignette.jsx";
import { CinematicList } from "./components/ui/cinematic-list.jsx";
import { ScrollFlyIn } from "./components/ui/hero-section-3.jsx";
import aboutTwoVideoContentData from "./content/about-two-video-content.json";
import aboutTwoVideoFeatureContent from "./content/about-two-video-feature.json";
import aboutOneEffectContent from "./content/about-one-effect.json";
import aboutOneImageContent from "./content/about-one-image.json";
import aboutOneCopyContent from "./content/about-one-copy.json";
import aboutOnePositionContent from "./content/about-one-position.json";
import aboutOneVideoContentData from "./content/about-one-video-content.json";
import footerInvitationContent from "./content/footer-invitation.json";
import footerSecondaryContent from "./content/footer-secondary-content.json";
import footerVideoContentData from "./content/footer-video-content.json";
import footerVideoPanelContent from "./content/footer-video-panel.json";
import footerVideoPositionContent from "./content/footer-video-position.json";
import footerWordmarkContent from "./content/footer-wordmark.json";
import statementContent from "./content/statement.json";
import statementEditorFeatureContent from "./content/statement-editor-feature.json";
import statementPanelRemovalContent from "./content/statement-panel-removal.json";
import statementFollowupWhitePanelThreeContent from "./content/statement-followup-white-panel-03.json";
import statementFollowupBlankPanelFourContent from "./content/statement-followup-blank-panel-04.json";
import statementFollowupBlankPanelFourAppearanceContent from "./content/statement-followup-blank-panel-04-appearance.json";
import statementFollowupScrollFlyLayoutContent from "./content/statement-followup-scroll-fly-layout.json";
import statementFollowupScrollFlyContentData from "./content/statement-followup-scroll-fly-content.json";
import statementFollowupScrollFlyHeadingFormatContent from "./content/statement-followup-scroll-fly-heading-format.json";
import mediaCardBodyCopyContent from "./content/media-card-body-copy.json";
import mediaCardActionsContent from "./content/media-card-actions.json";
import mediaCardPodcastImageContent from "./content/media-card-podcast-image.json";
import mediaCardCrowdfundingImageContent from "./content/media-card-crowdfunding-image.json";
import impactMediaCopyContentData from "./content/impact-media-copy.json";
import impactMediaCopyEditorFeatureContent from "./content/impact-media-copy-editor-feature.json";
import statementFollowupCinematicLayoutContent from "./content/statement-followup-cinematic-layout.json";
import statementFollowupCinematicContentData from "./content/statement-followup-cinematic-content.json";
import statementFollowupCinematicImagesContent from "./content/statement-followup-cinematic-images.json";
import statementSecondFollowupBlankAppearanceContent from "./content/statement-second-followup-blank-appearance.json";
import statementSecondFollowupBlankPanelContent from "./content/statement-second-followup-blank-panel.json";
import statementSecondFollowupBlurLayoutContent from "./content/statement-second-followup-blur-layout.json";
import statementSecondFollowupBlurRemovalContent from "./content/statement-second-followup-blur-removal.json";
import statementSecondFollowupBlurContentData from "./content/statement-second-followup-blur-content.json";
import statementSecondFollowupBlurVideosContent from "./content/statement-second-followup-blur-videos.json";
import statementFollowupBlankPanelContent from "./content/statement-followup-blank-panel.json";
import statementFollowupBlankImageContent from "./content/statement-followup-blank-image.json";
import statementFollowupBlankRemovalContent from "./content/statement-followup-blank-removal.json";

const initialHeroMedia = {
  kind: "MP4 视频",
  codec: "H.264",
  width: 2560,
  height: 1440,
  ratio: "16:9",
  duration: 13.97,
  fps: 60,
  size: 17421188,
};

const timelineBlankSevenGalleryPhotos = [
  { id: "drone-pair", image: "/assets/images/timeline-blank-seven-gallery/equipment-01.jpg", alt: "两款 DJI 无人机" },
  { id: "action-cameras", image: "/assets/images/timeline-blank-seven-gallery/equipment-02.jpg", alt: "DJI 运动相机与口袋云台相机" },
  { id: "gimbal-cameras", image: "/assets/images/timeline-blank-seven-gallery/equipment-03.jpg", alt: "多款便携云台相机" },
  { id: "smart-glasses", image: "/assets/images/timeline-blank-seven-gallery/equipment-04.jpg", alt: "两副智能拍摄眼镜" },
  { id: "canon-camera", image: "/assets/images/timeline-blank-seven-gallery/equipment-05.jpg", alt: "Canon EOS R5 Mark II 相机" },
];

function formatFileSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function inspectVideo(file) {
  return new Promise((resolve, reject) => {
    const previewUrl = URL.createObjectURL(file);
    const video = document.createElement("video");
    video.preload = "metadata";
    video.onloadedmetadata = () => {
      const divisor = (a, b) => (b ? divisor(b, a % b) : a);
      const common = divisor(video.videoWidth, video.videoHeight);
      resolve({
        width: video.videoWidth,
        height: video.videoHeight,
        ratio: `${video.videoWidth / common}:${video.videoHeight / common}`,
        duration: video.duration,
      });
      URL.revokeObjectURL(previewUrl);
    };
    video.onerror = () => {
      URL.revokeObjectURL(previewUrl);
      reject(new Error("无法读取这个视频，请换一个 MP4 文件。"));
    };
    video.src = previewUrl;
  });
}

function inspectImage(file) {
  return new Promise((resolve, reject) => {
    const previewUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      const divisor = (a, b) => (b ? divisor(b, a % b) : a);
      const common = divisor(image.naturalWidth, image.naturalHeight);
      resolve({
        width: image.naturalWidth,
        height: image.naturalHeight,
        ratio: `${image.naturalWidth / common}:${image.naturalHeight / common}`,
      });
      URL.revokeObjectURL(previewUrl);
    };
    image.onerror = () => {
      URL.revokeObjectURL(previewUrl);
      reject(new Error("无法读取这张图片，请换一个 JPG、PNG、WebP 或 AVIF 文件。"));
    };
    image.src = previewUrl;
  });
}

const projects = [
  {
    slug: "wardrobe-theory-project",
    name: "Wardrobe Theory Project",
    image: "/assets/images/wardrobe.avif",
    description:
      "WTP helps individuals and organizations reimagine their relationship to clothing and consumption through systems, storytelling, analysis, and community-based events.",
    field: "Fashion Publishing / Design",
    place: "Des Moines, Iowa, United States",
    year: "2024",
  },
  {
    slug: "positive-money",
    name: "Positive Money",
    image: "/assets/images/positive-money.avif",
    description:
      "Redesign the global economic system for social justice and a livable planet.",
    field: "Economics",
    place: "London, United Kingdom",
    year: "2010",
  },
  {
    slug: "time-use-initiative",
    name: "Time use initiative",
    image: "/assets/images/time-use.avif",
    description:
      "The global initiative promoting time policies and the right to time to reduce time inequality and enhance health and overall wellbeing.",
    field: "Human Wellfare",
    place: "Barcelona, Spain",
    year: "2014",
  },
  {
    slug: "escuela-de-cateura",
    name: "Escuela de cateura",
    image: "/assets/images/cateura.jpg",
    description:
      "School and orchestra which uses instruments made from waste to combine recycling and social inclusion.",
    field: "Recycling, education, social inclusion",
    place: "Asunción, Paraguay",
    year: "2006",
  },
  {
    slug: "ghana-bamboo-bikes-initiative",
    name: "Ghana Bamboo Bikes Initiative",
    image: "/assets/images/ghana.jpg",
    description:
      "A bamboo bicycle company that promotes low-carbon transport and road safety measures for vulnerable road users.",
    field: "Mobility",
    place: "Kumasi, Ghana",
    year: "2010",
  },
  {
    slug: "vtaiwan",
    name: "Vtaiwan",
    image: "/assets/images/vtaiwan.jpg",
    description:
      "A decentralized open consultation process, bringing together Taiwan's citizens and government to deliberate on national issues.",
    field: "Democracy",
    place: "Taipei, Taiwan",
    year: "2014",
  },
];

const navItems = [
  ["The project", "#the-project"],
  ["Impact in Action", "#impact"],
  ["Join the Jurneos", "#join"],
];

const extraAboutTemplates = [
  {
    variant: 2,
    copy: "Through film, podcasts, shared initiatives, and crowdfunding, Iceberg challenges the narrative of helplessness and reveals the global solutions already emerging beneath the surface.",
  },
  {
    variant: 3,
    copy: "It’s an invitation to reimagine the future and reconnect with our ability to transform it.",
    link: true,
  },
];

const editableAboutPanelIds = ["02", "03", "04", "05", "06", "07", "08", "09"];
const editableAboutPanelBackgroundIds = ["02", "03", "04", "05", "06"];

function Logo({ footer = false, text = "ICEBERG" }) {
  return (
    <span id={footer ? "footer-wordmark" : undefined} className={footer ? "logo logo--footer" : "logo"} aria-label={text}>
      <span>{text}</span>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}

function RoundLink({ href, children, light = false, external = false }) {
  return (
    <a
      className={`round-link${light ? " round-link--light" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <img src="/assets/icons/round-arrow.svg" alt="" />
      <span>{children}</span>
    </a>
  );
}

function Menu({ open, onClose }) {
  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
      <Logo />
      <nav aria-label="Mobile navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={href} onClick={onClose}>
            {label}
          </a>
        ))}
        <a href="mailto:contact@icebergdoc.org">Contact</a>
      </nav>
      <div className="mobile-menu__meta">
        <p>ALHENA PRODUCTION.<br />©ALL RIGHTS RESERVED 2026</p>
        <p><a href="#top" onClick={onClose}>ENGLISH</a> / <a href="https://www.icebergdoc.org/es">ESPAÑOL</a></p>
      </div>
      <button className="mobile-menu__close" type="button" onClick={onClose}>×&nbsp; CLOSE</button>
    </div>
  );
}

function AboutPanelCopyTools({
  panelId,
  canUndo,
  status,
  onEdit,
  onUndo,
  backgroundEnabled = false,
  backgroundUploading = false,
  canUndoBackground = false,
  backgroundStatus = "",
  onReplaceBackground,
  onUndoBackground,
  canUndoBackgroundFeature = false,
  onUndoBackgroundFeature,
}) {
  const backgroundInput = useRef(null);

  return (
    <div className={`about-panel-copy-tools about-panel-copy-tools--${panelId}`} aria-label={`第 ${panelId} 屏文字编辑工具`}>
      {backgroundEnabled && (
        <input
          ref={backgroundInput}
          className="sr-only"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif"
          onChange={(event) => onReplaceBackground(event, panelId)}
        />
      )}
      <div>
        <button className="about-panel-copy-tools__edit" type="button" onClick={() => onEdit(panelId)}>编辑文字</button>
        <button className="about-panel-copy-tools__undo" type="button" onClick={() => onUndo(panelId)} disabled={!canUndo}>↶ 撤销最近文字修改</button>
        {backgroundEnabled && (
          <>
            <button className="about-panel-copy-tools__background" type="button" onClick={() => backgroundInput.current?.click()} disabled={backgroundUploading}>
              {backgroundUploading ? "正在上传…" : "更换背景图"}
            </button>
            <button className="about-panel-copy-tools__background-undo" type="button" onClick={() => onUndoBackground(panelId)} disabled={!canUndoBackground || backgroundUploading}>
              ↶ 撤销最近背景图修改
            </button>
            {onUndoBackgroundFeature && (
              <button className="about-panel-copy-tools__background-feature-undo" type="button" onClick={onUndoBackgroundFeature} disabled={!canUndoBackgroundFeature || backgroundUploading}>
                ↶ 撤销本次新增五屏背景图功能
              </button>
            )}
          </>
        )}
      </div>
      {status && <span role="status">{status}</span>}
      {backgroundStatus && <span role="status">{backgroundStatus}</span>}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article id={`project-${index + 1}`} className={`project-slide project-slide--${index + 1}`} style={{ "--project-image": `url(${project.image})` }}>
      <div className="project-slide__wash" />
      <a className="project-card" href={`https://www.icebergdoc.org/impact-in-action/${project.slug}`} target="_blank" rel="noreferrer">
        <div className="project-card__image">
          <img src={project.image} alt={project.name} />
          <span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
        </div>
        <div className="project-card__title">
          <h3>{project.name}</h3>
          <img src="/assets/icons/arrow.svg" alt="" />
        </div>
        <div className="project-card__details">
          <p>{project.field}<br />{project.place}<br />{project.year}</p>
          <p>{project.description}</p>
        </div>
      </a>
    </article>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(event) {
    event.preventDefault();
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Thank you — this local preview has saved nothing yet.");
  }

  return (
    <form className="newsletter" onSubmit={submit}>
      <h3>STAY TUNED</h3>
      <p>Don’t miss a step in the journey of discovery with Iceberg. Join us as we uncover the hidden forces shaping a sustainable future and stay updated on every new initiative, story, and insight.</p>
      <label className="sr-only" htmlFor="email">Your email</label>
      <div className="newsletter__field">
        <input id="email" type="email" placeholder="Your email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button type="submit" aria-label="Subscribe"><img src="/assets/icons/arrow.svg" alt="" /></button>
      </div>
      <label className="newsletter__consent">
        <input type="checkbox" required />
        <span>I agree to receive communications and updates from Iceberg. I confirm that I have reviewed and accepted our Privacy Policy.</span>
      </label>
      {message && <p className="newsletter__message" role="status">{message}</p>}
      <img className="eu-mark" src="/assets/images/eu.svg" alt="Creative Europe MEDIA" />
    </form>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaEditorOpen, setMediaEditorOpen] = useState(false);
  const [aboutMediaEditorOpen, setAboutMediaEditorOpen] = useState(false);
  const [heroSrc, setHeroSrc] = useState("/assets/video/intro.mp4");
  const [heroMedia, setHeroMedia] = useState(initialHeroMedia);
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploading, setUploading] = useState(false);
  const [canUndoHeroVideo, setCanUndoHeroVideo] = useState(false);
  const [statementCopy, setStatementCopy] = useState(statementContent);
  const [statementDraft, setStatementDraft] = useState(statementContent.lines);
  const [statementEditorOpen, setStatementEditorOpen] = useState(false);
  const [statementSaving, setStatementSaving] = useState(false);
  const [canUndoStatement, setCanUndoStatement] = useState(false);
  const [statementStatus, setStatementStatus] = useState("");
  const [statementEditorFeature, setStatementEditorFeature] = useState(statementEditorFeatureContent);
  const [canUndoStatementEditorFeature, setCanUndoStatementEditorFeature] = useState(false);
  const [statementPanelRemoval, setStatementPanelRemoval] = useState(statementPanelRemovalContent);
  const [canUndoStatementPanelRemoval, setCanUndoStatementPanelRemoval] = useState(false);
  const [statementPanelRemovalStatus, setStatementPanelRemovalStatus] = useState("");
  const [statementFollowupWhitePanelThree, setStatementFollowupWhitePanelThree] = useState(statementFollowupWhitePanelThreeContent);
  const [canUndoStatementFollowupWhitePanelThree, setCanUndoStatementFollowupWhitePanelThree] = useState(false);
  const [statementFollowupWhitePanelThreeStatus, setStatementFollowupWhitePanelThreeStatus] = useState("");
  const [statementFollowupBlankPanelFour, setStatementFollowupBlankPanelFour] = useState(statementFollowupBlankPanelFourContent);
  const [canUndoStatementFollowupBlankPanelFour, setCanUndoStatementFollowupBlankPanelFour] = useState(false);
  const [statementFollowupBlankPanelFourStatus, setStatementFollowupBlankPanelFourStatus] = useState("");
  const [statementFollowupBlankPanelFourAppearance, setStatementFollowupBlankPanelFourAppearance] = useState(statementFollowupBlankPanelFourAppearanceContent);
  const [canUndoStatementFollowupBlankPanelFourAppearance, setCanUndoStatementFollowupBlankPanelFourAppearance] = useState(false);
  const [statementFollowupBlankPanelFourAppearanceStatus, setStatementFollowupBlankPanelFourAppearanceStatus] = useState("");
  const [statementFollowupScrollFlyLayout, setStatementFollowupScrollFlyLayout] = useState(statementFollowupScrollFlyLayoutContent);
  const [canUndoStatementFollowupScrollFlyLayout, setCanUndoStatementFollowupScrollFlyLayout] = useState(false);
  const [statementFollowupScrollFlyLayoutStatus, setStatementFollowupScrollFlyLayoutStatus] = useState("");
  const [statementFollowupScrollFlyContent, setStatementFollowupScrollFlyContent] = useState(statementFollowupScrollFlyContentData);
  const [statementFollowupScrollFlyDraft, setStatementFollowupScrollFlyDraft] = useState(statementFollowupScrollFlyContentData);
  const [statementFollowupScrollFlyEditorOpen, setStatementFollowupScrollFlyEditorOpen] = useState(false);
  const [statementFollowupScrollFlySaving, setStatementFollowupScrollFlySaving] = useState(false);
  const [canUndoStatementFollowupScrollFlyContent, setCanUndoStatementFollowupScrollFlyContent] = useState(false);
  const [statementFollowupScrollFlyContentStatus, setStatementFollowupScrollFlyContentStatus] = useState("");
  const [statementFollowupScrollFlyHeadingFormat, setStatementFollowupScrollFlyHeadingFormat] = useState(statementFollowupScrollFlyHeadingFormatContent);
  const [canUndoStatementFollowupScrollFlyHeadingFormat, setCanUndoStatementFollowupScrollFlyHeadingFormat] = useState(false);
  const [statementFollowupScrollFlyHeadingFormatStatus, setStatementFollowupScrollFlyHeadingFormatStatus] = useState("");
  const [statementFollowupCinematicLayout, setStatementFollowupCinematicLayout] = useState(statementFollowupCinematicLayoutContent);
  const [canUndoStatementFollowupCinematicLayout, setCanUndoStatementFollowupCinematicLayout] = useState(false);
  const [statementFollowupCinematicLayoutStatus, setStatementFollowupCinematicLayoutStatus] = useState("");
  const [statementFollowupCinematicContent, setStatementFollowupCinematicContent] = useState(statementFollowupCinematicContentData);
  const [statementFollowupCinematicDraft, setStatementFollowupCinematicDraft] = useState(null);
  const [statementFollowupCinematicEditorTarget, setStatementFollowupCinematicEditorTarget] = useState("");
  const [statementFollowupCinematicContentSaving, setStatementFollowupCinematicContentSaving] = useState(false);
  const [canUndoStatementFollowupCinematicContent, setCanUndoStatementFollowupCinematicContent] = useState(false);
  const [statementFollowupCinematicContentStatus, setStatementFollowupCinematicContentStatus] = useState("");
  const [statementFollowupCinematicImages, setStatementFollowupCinematicImages] = useState(statementFollowupCinematicImagesContent);
  const [statementFollowupCinematicImageUploading, setStatementFollowupCinematicImageUploading] = useState({ "01": false, "02": false, "03": false, "04": false });
  const [canUndoStatementFollowupCinematicImage, setCanUndoStatementFollowupCinematicImage] = useState({ "01": false, "02": false, "03": false, "04": false });
  const [statementFollowupCinematicImageStatus, setStatementFollowupCinematicImageStatus] = useState({ "01": "", "02": "", "03": "", "04": "" });
  const [statementSecondFollowupBlankPanel, setStatementSecondFollowupBlankPanel] = useState(statementSecondFollowupBlankPanelContent);
  const [canUndoStatementSecondFollowupBlankPanel, setCanUndoStatementSecondFollowupBlankPanel] = useState(false);
  const [statementSecondFollowupBlankPanelStatus, setStatementSecondFollowupBlankPanelStatus] = useState("");
  const [statementSecondFollowupBlankAppearance, setStatementSecondFollowupBlankAppearance] = useState(statementSecondFollowupBlankAppearanceContent);
  const [canUndoStatementSecondFollowupBlankAppearance, setCanUndoStatementSecondFollowupBlankAppearance] = useState(false);
  const [statementSecondFollowupBlankAppearanceStatus, setStatementSecondFollowupBlankAppearanceStatus] = useState("");
  const [statementSecondFollowupBlurLayout, setStatementSecondFollowupBlurLayout] = useState(statementSecondFollowupBlurLayoutContent);
  const [canUndoStatementSecondFollowupBlurLayout, setCanUndoStatementSecondFollowupBlurLayout] = useState(false);
  const [statementSecondFollowupBlurLayoutStatus, setStatementSecondFollowupBlurLayoutStatus] = useState("");
  const [statementSecondFollowupBlurRemoval, setStatementSecondFollowupBlurRemoval] = useState(statementSecondFollowupBlurRemovalContent);
  const [canUndoStatementSecondFollowupBlurRemoval, setCanUndoStatementSecondFollowupBlurRemoval] = useState(false);
  const [statementSecondFollowupBlurRemovalStatus, setStatementSecondFollowupBlurRemovalStatus] = useState("");
  const [statementSecondFollowupBlurContent, setStatementSecondFollowupBlurContent] = useState(statementSecondFollowupBlurContentData);
  const [statementSecondFollowupBlurDraft, setStatementSecondFollowupBlurDraft] = useState(null);
  const [statementSecondFollowupBlurEditorId, setStatementSecondFollowupBlurEditorId] = useState("");
  const [statementSecondFollowupBlurContentSaving, setStatementSecondFollowupBlurContentSaving] = useState(false);
  const [canUndoStatementSecondFollowupBlurContent, setCanUndoStatementSecondFollowupBlurContent] = useState(false);
  const [statementSecondFollowupBlurContentStatus, setStatementSecondFollowupBlurContentStatus] = useState("");
  const [statementSecondFollowupBlurVideos, setStatementSecondFollowupBlurVideos] = useState(statementSecondFollowupBlurVideosContent);
  const [statementSecondFollowupBlurVideoUploading, setStatementSecondFollowupBlurVideoUploading] = useState({ "01": false, "02": false, "03": false, "04": false });
  const [canUndoStatementSecondFollowupBlurVideo, setCanUndoStatementSecondFollowupBlurVideo] = useState({ "01": false, "02": false, "03": false, "04": false });
  const [statementSecondFollowupBlurVideoStatus, setStatementSecondFollowupBlurVideoStatus] = useState({ "01": "", "02": "", "03": "", "04": "" });
  const [statementFollowupBlankPanel, setStatementFollowupBlankPanel] = useState(statementFollowupBlankPanelContent);
  const [canUndoStatementFollowupBlankPanel, setCanUndoStatementFollowupBlankPanel] = useState(false);
  const [statementFollowupBlankPanelStatus, setStatementFollowupBlankPanelStatus] = useState("");
  const [statementFollowupBlankRemoval, setStatementFollowupBlankRemoval] = useState(statementFollowupBlankRemovalContent);
  const [canUndoStatementFollowupBlankRemoval, setCanUndoStatementFollowupBlankRemoval] = useState(false);
  const [statementFollowupBlankRemovalStatus, setStatementFollowupBlankRemovalStatus] = useState("");
  const [statementFollowupBlankImage, setStatementFollowupBlankImage] = useState(statementFollowupBlankImageContent);
  const [statementFollowupBlankImageUploading, setStatementFollowupBlankImageUploading] = useState(false);
  const [canUndoStatementFollowupBlankImage, setCanUndoStatementFollowupBlankImage] = useState(false);
  const [statementFollowupBlankImageStatus, setStatementFollowupBlankImageStatus] = useState("");
  const [aboutOneImage, setAboutOneImage] = useState(aboutOneImageContent);
  const [aboutImageStatus, setAboutImageStatus] = useState("");
  const [aboutImageUploading, setAboutImageUploading] = useState(false);
  const [canUndoAboutImage, setCanUndoAboutImage] = useState(false);
  const [aboutOneVideoContent, setAboutOneVideoContent] = useState(aboutOneVideoContentData);
  const [aboutOneVideoUploading, setAboutOneVideoUploading] = useState(false);
  const [aboutOneVideoStatus, setAboutOneVideoStatus] = useState("");
  const [aboutOnePosition, setAboutOnePosition] = useState(aboutOnePositionContent);
  const [canUndoAboutOnePosition, setCanUndoAboutOnePosition] = useState(false);
  const [aboutOnePositionStatus, setAboutOnePositionStatus] = useState("");
  const [aboutOneEffect, setAboutOneEffect] = useState(aboutOneEffectContent);
  const [canUndoAboutEffect, setCanUndoAboutEffect] = useState(false);
  const [aboutEffectStatus, setAboutEffectStatus] = useState("");
  const [aboutOneCopy, setAboutOneCopy] = useState(aboutOneCopyContent);
  const [canUndoAboutOneCopy, setCanUndoAboutOneCopy] = useState(false);
  const [aboutOneCopyStatus, setAboutOneCopyStatus] = useState("");
  const [extraAboutGroups, setExtraAboutGroups] = useState(aboutExtraGroupsContent);
  const [canUndoExtraAboutGroups, setCanUndoExtraAboutGroups] = useState(false);
  const [extraAboutStatus, setExtraAboutStatus] = useState("");
  const [aboutPanelSelectionRemoval, setAboutPanelSelectionRemoval] = useState(aboutPanelSelectionRemovalContent);
  const [canUndoAboutPanelSelectionRemoval, setCanUndoAboutPanelSelectionRemoval] = useState(false);
  const [aboutPanelSelectionRemovalStatus, setAboutPanelSelectionRemovalStatus] = useState("");
  const [selectedSevenPageRemoval, setSelectedSevenPageRemoval] = useState(selectedSevenPageRemovalContent);
  const [canUndoSelectedSevenPageRemoval, setCanUndoSelectedSevenPageRemoval] = useState(false);
  const [selectedSevenPageRemovalStatus, setSelectedSevenPageRemovalStatus] = useState("");
  const [impactIntroPanels, setImpactIntroPanels] = useState(impactIntroPanelsContent);
  const [canUndoImpactIntroPanels, setCanUndoImpactIntroPanels] = useState(false);
  const [impactIntroPanelsStatus, setImpactIntroPanelsStatus] = useState("");
  const [mediaCardBodyCopy, setMediaCardBodyCopy] = useState(mediaCardBodyCopyContent);
  const [canUndoMediaCardBodyCopy, setCanUndoMediaCardBodyCopy] = useState(false);
  const [mediaCardBodyCopyStatus, setMediaCardBodyCopyStatus] = useState("");
  const [mediaCardActions, setMediaCardActions] = useState(mediaCardActionsContent);
  const [canUndoMediaCardActions, setCanUndoMediaCardActions] = useState(false);
  const [mediaCardActionsStatus, setMediaCardActionsStatus] = useState("");
  const [mediaCardPodcastImage, setMediaCardPodcastImage] = useState(mediaCardPodcastImageContent);
  const [canUndoMediaCardPodcastImage, setCanUndoMediaCardPodcastImage] = useState(false);
  const [mediaCardPodcastImageStatus, setMediaCardPodcastImageStatus] = useState("");
  const [mediaCardCrowdfundingImage, setMediaCardCrowdfundingImage] = useState(mediaCardCrowdfundingImageContent);
  const [canUndoMediaCardCrowdfundingImage, setCanUndoMediaCardCrowdfundingImage] = useState(false);
  const [mediaCardCrowdfundingImageStatus, setMediaCardCrowdfundingImageStatus] = useState("");
  const [impactMediaCopy, setImpactMediaCopy] = useState(impactMediaCopyContentData);
  const [impactMediaCopyDraft, setImpactMediaCopyDraft] = useState(null);
  const [impactMediaCopyEditorTarget, setImpactMediaCopyEditorTarget] = useState("");
  const [impactMediaCopySaving, setImpactMediaCopySaving] = useState(false);
  const [canUndoImpactMediaCopy, setCanUndoImpactMediaCopy] = useState(false);
  const [impactMediaCopyStatus, setImpactMediaCopyStatus] = useState("");
  const [impactMediaCopyEditorFeature, setImpactMediaCopyEditorFeature] = useState(impactMediaCopyEditorFeatureContent);
  const [canUndoImpactMediaCopyEditorFeature, setCanUndoImpactMediaCopyEditorFeature] = useState(false);
  const [impactMediaCopyEditorFeatureStatus, setImpactMediaCopyEditorFeatureStatus] = useState("");
  const [aboutDiscoverLinks, setAboutDiscoverLinks] = useState(aboutDiscoverLinksContent);
  const [canUndoAboutDiscoverLinks, setCanUndoAboutDiscoverLinks] = useState(false);
  const [aboutDiscoverLinksStatus, setAboutDiscoverLinksStatus] = useState("");
  const [aboutPanelCopy, setAboutPanelCopy] = useState(aboutPanelCopyContent);
  const [aboutPanelCopyEditorId, setAboutPanelCopyEditorId] = useState("");
  const [aboutPanelCopyDraft, setAboutPanelCopyDraft] = useState("");
  const [aboutPanelCopySaving, setAboutPanelCopySaving] = useState(false);
  const [canUndoAboutPanelCopy, setCanUndoAboutPanelCopy] = useState(() => Object.fromEntries(editableAboutPanelIds.map((panelId) => [panelId, false])));
  const [aboutPanelCopyStatus, setAboutPanelCopyStatus] = useState(() => Object.fromEntries(editableAboutPanelIds.map((panelId) => [panelId, ""])));
  const [aboutPanelBackgroundFeature, setAboutPanelBackgroundFeature] = useState(aboutPanelBackgroundFeatureContent);
  const [canUndoAboutPanelBackgroundFeature, setCanUndoAboutPanelBackgroundFeature] = useState(false);
  const [aboutPanelBackgrounds, setAboutPanelBackgrounds] = useState(aboutPanelBackgroundsContent);
  const [aboutPanelBackgroundUploading, setAboutPanelBackgroundUploading] = useState(() => Object.fromEntries(editableAboutPanelBackgroundIds.map((panelId) => [panelId, false])));
  const [canUndoAboutPanelBackground, setCanUndoAboutPanelBackground] = useState(() => Object.fromEntries(editableAboutPanelBackgroundIds.map((panelId) => [panelId, false])));
  const [aboutPanelBackgroundStatus, setAboutPanelBackgroundStatus] = useState(() => Object.fromEntries(editableAboutPanelBackgroundIds.map((panelId) => [panelId, ""])));
  const [timelineFollowupBlank01, setTimelineFollowupBlank01] = useState(timelineFollowupBlank01Content);
  const [timelineFollowupBlank02, setTimelineFollowupBlank02] = useState(timelineFollowupBlank02Content);
  const [timelineFollowupBlank03, setTimelineFollowupBlank03] = useState(timelineFollowupBlank03Content);
  const [timelineFollowupBlank04, setTimelineFollowupBlank04] = useState(timelineFollowupBlank04Content);
  const [timelineFollowupBlank05, setTimelineFollowupBlank05] = useState(timelineFollowupBlank05Content);
  const [timelineFollowupBlank06, setTimelineFollowupBlank06] = useState(timelineFollowupBlank06Content);
  const [timelineFollowupBlank07, setTimelineFollowupBlank07] = useState(timelineFollowupBlank07Content);
  const [timelineFollowupBlank08, setTimelineFollowupBlank08] = useState(timelineFollowupBlank08Content);
  const [canUndoTimelineFollowupBlank, setCanUndoTimelineFollowupBlank] = useState({ "01": false, "02": false, "03": false, "04": false, "05": false, "06": false, "07": false, "08": false });
  const [timelineFollowupBlankStatus, setTimelineFollowupBlankStatus] = useState({ "01": "", "02": "", "03": "", "04": "", "05": "", "06": "", "07": "", "08": "" });
  const [timelineBlankOneLayout, setTimelineBlankOneLayout] = useState(timelineBlankOneLayoutContent);
  const [canUndoTimelineBlankOneLayout, setCanUndoTimelineBlankOneLayout] = useState(false);
  const [timelineBlankOneLayoutStatus, setTimelineBlankOneLayoutStatus] = useState("");
  const [timelineBlankOneCopy, setTimelineBlankOneCopy] = useState(timelineBlankOneCopyContent);
  const [timelineBlankOneCopyDraft, setTimelineBlankOneCopyDraft] = useState(timelineBlankOneCopyContent);
  const [timelineBlankOneCopyEditorOpen, setTimelineBlankOneCopyEditorOpen] = useState(false);
  const [timelineBlankOneCopySaving, setTimelineBlankOneCopySaving] = useState(false);
  const [canUndoTimelineBlankOneCopy, setCanUndoTimelineBlankOneCopy] = useState(false);
  const [timelineBlankOneCopyStatus, setTimelineBlankOneCopyStatus] = useState("");
  const [timelineBlankOneExtraRow, setTimelineBlankOneExtraRow] = useState(timelineBlankOneExtraRowContent);
  const [timelineBlankOneExtraRowDraft, setTimelineBlankOneExtraRowDraft] = useState(timelineBlankOneExtraRowContent);
  const [timelineBlankOneExtraRowEditorOpen, setTimelineBlankOneExtraRowEditorOpen] = useState(false);
  const [timelineBlankOneExtraRowSaving, setTimelineBlankOneExtraRowSaving] = useState(false);
  const [canUndoTimelineBlankOneExtraRow, setCanUndoTimelineBlankOneExtraRow] = useState(false);
  const [canUndoTimelineBlankOneExtraCopy, setCanUndoTimelineBlankOneExtraCopy] = useState(false);
  const [timelineBlankOneExtraRowStatus, setTimelineBlankOneExtraRowStatus] = useState("");
  const [timelineBlankOnePosition, setTimelineBlankOnePosition] = useState(timelineBlankOnePositionContent);
  const [canUndoTimelineBlankOnePosition, setCanUndoTimelineBlankOnePosition] = useState(false);
  const [timelineBlankOnePositionStatus, setTimelineBlankOnePositionStatus] = useState("");
  const [timelineBlankOneMark, setTimelineBlankOneMark] = useState(timelineBlankOneMarkContent);
  const [canUndoTimelineBlankOneMark, setCanUndoTimelineBlankOneMark] = useState(false);
  const [timelineBlankOneMarkStatus, setTimelineBlankOneMarkStatus] = useState("");
  const [timelineBlankOneRemoval, setTimelineBlankOneRemoval] = useState(timelineBlankOneRemovalContent);
  const [canUndoTimelineBlankOneRemoval, setCanUndoTimelineBlankOneRemoval] = useState(false);
  const [timelineBlankOneRemovalStatus, setTimelineBlankOneRemovalStatus] = useState("");
  const [timelineBlankOneBackground, setTimelineBlankOneBackground] = useState(timelineBlankOneBackgroundContent);
  const [timelineBlankOneDetailTop, setTimelineBlankOneDetailTop] = useState(timelineBlankOneDetailTopContent);
  const [timelineBlankOneDetailBottom, setTimelineBlankOneDetailBottom] = useState(timelineBlankOneDetailBottomContent);
  const [timelineBlankOneAssetUploading, setTimelineBlankOneAssetUploading] = useState({ background: false, top: false, bottom: false });
  const [canUndoTimelineBlankOneAsset, setCanUndoTimelineBlankOneAsset] = useState({ background: false, top: false, bottom: false });
  const [timelineBlankOneAssetStatus, setTimelineBlankOneAssetStatus] = useState({ background: "", top: "", bottom: "" });
  const [timelineBlankTwoLayout, setTimelineBlankTwoLayout] = useState(timelineBlankTwoLayoutContent);
  const [canUndoTimelineBlankTwoLayout, setCanUndoTimelineBlankTwoLayout] = useState(false);
  const [timelineBlankTwoLayoutStatus, setTimelineBlankTwoLayoutStatus] = useState("");
  const [timelineBlankTwoCopy, setTimelineBlankTwoCopy] = useState(timelineBlankTwoCopyContent);
  const [timelineBlankTwoCopyDraft, setTimelineBlankTwoCopyDraft] = useState(timelineBlankTwoCopyContent);
  const [timelineBlankTwoCopyEditorOpen, setTimelineBlankTwoCopyEditorOpen] = useState(false);
  const [timelineBlankTwoCopySaving, setTimelineBlankTwoCopySaving] = useState(false);
  const [canUndoTimelineBlankTwoCopy, setCanUndoTimelineBlankTwoCopy] = useState(false);
  const [timelineBlankTwoCopyStatus, setTimelineBlankTwoCopyStatus] = useState("");
  const [timelineBlankTwoImage, setTimelineBlankTwoImage] = useState(timelineBlankTwoImageContent);
  const [timelineBlankTwoBackground, setTimelineBlankTwoBackground] = useState(timelineBlankTwoBackgroundContent);
  const [timelineBlankTwoAssetUploading, setTimelineBlankTwoAssetUploading] = useState({ image: false, background: false });
  const [canUndoTimelineBlankTwoAsset, setCanUndoTimelineBlankTwoAsset] = useState({ image: false, background: false });
  const [timelineBlankTwoAssetStatus, setTimelineBlankTwoAssetStatus] = useState({ image: "", background: "" });
  const [timelineBlankThreeLayout, setTimelineBlankThreeLayout] = useState(timelineBlankThreeLayoutContent);
  const [canUndoTimelineBlankThreeLayout, setCanUndoTimelineBlankThreeLayout] = useState(false);
  const [timelineBlankThreeLayoutStatus, setTimelineBlankThreeLayoutStatus] = useState("");
  const [timelineBlankThreeCopy, setTimelineBlankThreeCopy] = useState(timelineBlankThreeCopyContent);
  const [timelineBlankThreeCopyDraft, setTimelineBlankThreeCopyDraft] = useState(timelineBlankThreeCopyContent);
  const [timelineBlankThreeCopyEditorOpen, setTimelineBlankThreeCopyEditorOpen] = useState(false);
  const [timelineBlankThreeCopySaving, setTimelineBlankThreeCopySaving] = useState(false);
  const [canUndoTimelineBlankThreeCopy, setCanUndoTimelineBlankThreeCopy] = useState(false);
  const [timelineBlankThreeCopyStatus, setTimelineBlankThreeCopyStatus] = useState("");
  const [timelineBlankThreeImage, setTimelineBlankThreeImage] = useState(timelineBlankThreeImageContent);
  const [timelineBlankThreeImageUploading, setTimelineBlankThreeImageUploading] = useState(false);
  const [canUndoTimelineBlankThreeImage, setCanUndoTimelineBlankThreeImage] = useState(false);
  const [timelineBlankThreeImageStatus, setTimelineBlankThreeImageStatus] = useState("");
  const [timelineBlankFourLayout, setTimelineBlankFourLayout] = useState(timelineBlankFourLayoutContent);
  const [canUndoTimelineBlankFourLayout, setCanUndoTimelineBlankFourLayout] = useState(false);
  const [timelineBlankFourLayoutStatus, setTimelineBlankFourLayoutStatus] = useState("");
  const [timelineBlankFourCopy, setTimelineBlankFourCopy] = useState(timelineBlankFourCopyContent);
  const [timelineBlankFourCopyDraft, setTimelineBlankFourCopyDraft] = useState(timelineBlankFourCopyContent);
  const [timelineBlankFourCopyEditorOpen, setTimelineBlankFourCopyEditorOpen] = useState(false);
  const [timelineBlankFourCopySaving, setTimelineBlankFourCopySaving] = useState(false);
  const [canUndoTimelineBlankFourCopy, setCanUndoTimelineBlankFourCopy] = useState(false);
  const [timelineBlankFourCopyStatus, setTimelineBlankFourCopyStatus] = useState("");
  const [timelineBlankFourImage, setTimelineBlankFourImage] = useState(timelineBlankFourImageContent);
  const [timelineBlankFourImageUploading, setTimelineBlankFourImageUploading] = useState(false);
  const [canUndoTimelineBlankFourImage, setCanUndoTimelineBlankFourImage] = useState(false);
  const [timelineBlankFourImageStatus, setTimelineBlankFourImageStatus] = useState("");
  const [timelineBlankFourWordFit, setTimelineBlankFourWordFit] = useState(timelineBlankFourWordFitContent);
  const [canUndoTimelineBlankFourWordFit, setCanUndoTimelineBlankFourWordFit] = useState(false);
  const [timelineBlankFourWordFitStatus, setTimelineBlankFourWordFitStatus] = useState("");
  const [timelineBlankEightLayout, setTimelineBlankEightLayout] = useState(timelineBlankEightLayoutContent);
  const [canUndoTimelineBlankEightLayout, setCanUndoTimelineBlankEightLayout] = useState(false);
  const [timelineBlankEightLayoutStatus, setTimelineBlankEightLayoutStatus] = useState("");
  const [timelineBlankEightCopy, setTimelineBlankEightCopy] = useState(timelineBlankEightCopyContent);
  const [timelineBlankEightCopyDraft, setTimelineBlankEightCopyDraft] = useState(timelineBlankEightCopyContent);
  const [timelineBlankEightCopyEditorOpen, setTimelineBlankEightCopyEditorOpen] = useState(false);
  const [timelineBlankEightCopySaving, setTimelineBlankEightCopySaving] = useState(false);
  const [canUndoTimelineBlankEightCopy, setCanUndoTimelineBlankEightCopy] = useState(false);
  const [timelineBlankEightCopyStatus, setTimelineBlankEightCopyStatus] = useState("");
  const [timelineBlankEightImage, setTimelineBlankEightImage] = useState(timelineBlankEightImageContent);
  const [timelineBlankEightImageUploading, setTimelineBlankEightImageUploading] = useState(false);
  const [canUndoTimelineBlankEightImage, setCanUndoTimelineBlankEightImage] = useState(false);
  const [timelineBlankEightImageStatus, setTimelineBlankEightImageStatus] = useState("");
  const [timelineBlankEightTitleFit, setTimelineBlankEightTitleFit] = useState(timelineBlankEightTitleFitContent);
  const [canUndoTimelineBlankEightTitleFit, setCanUndoTimelineBlankEightTitleFit] = useState(false);
  const [timelineBlankEightTitleFitStatus, setTimelineBlankEightTitleFitStatus] = useState("");
  const [timelineBlankFiveBackground, setTimelineBlankFiveBackground] = useState(timelineBlankFiveBackgroundContent);
  const [timelineBlankFiveBackgroundUploading, setTimelineBlankFiveBackgroundUploading] = useState(false);
  const [canUndoTimelineBlankFiveBackground, setCanUndoTimelineBlankFiveBackground] = useState(false);
  const [timelineBlankFiveBackgroundStatus, setTimelineBlankFiveBackgroundStatus] = useState("");
  const [timelineBlankSevenLayout, setTimelineBlankSevenLayout] = useState(timelineBlankSevenLayoutContent);
  const [canUndoTimelineBlankSevenLayout, setCanUndoTimelineBlankSevenLayout] = useState(false);
  const [timelineBlankSevenLayoutStatus, setTimelineBlankSevenLayoutStatus] = useState("");
  const [timelineGalleryFollowupBlankPanel, setTimelineGalleryFollowupBlankPanel] = useState(timelineGalleryFollowupBlankPanelContent);
  const [canUndoTimelineGalleryFollowupBlankPanel, setCanUndoTimelineGalleryFollowupBlankPanel] = useState(false);
  const [timelineGalleryFollowupBlankPanelStatus, setTimelineGalleryFollowupBlankPanelStatus] = useState("");
  const [timelineGalleryPricingLayout, setTimelineGalleryPricingLayout] = useState(timelineGalleryFollowupPricingLayoutContent);
  const [canUndoTimelineGalleryPricingLayout, setCanUndoTimelineGalleryPricingLayout] = useState(false);
  const [timelineGalleryPricingLayoutStatus, setTimelineGalleryPricingLayoutStatus] = useState("");
  const [timelineGalleryPricingContent, setTimelineGalleryPricingContent] = useState(timelineGalleryFollowupPricingContentData);
  const [timelineGalleryPricingDraft, setTimelineGalleryPricingDraft] = useState(null);
  const [timelineGalleryPricingEditorOpen, setTimelineGalleryPricingEditorOpen] = useState(false);
  const [timelineGalleryPricingSaving, setTimelineGalleryPricingSaving] = useState(false);
  const [canUndoTimelineGalleryPricingContent, setCanUndoTimelineGalleryPricingContent] = useState(false);
  const [timelineGalleryPricingContentStatus, setTimelineGalleryPricingContentStatus] = useState("");
  const [timelineBlankSixLayout, setTimelineBlankSixLayout] = useState(timelineBlankSixLayoutContent);
  const [canUndoTimelineBlankSixLayout, setCanUndoTimelineBlankSixLayout] = useState(false);
  const [timelineBlankSixLayoutStatus, setTimelineBlankSixLayoutStatus] = useState("");
  const [timelineBlankSixContent, setTimelineBlankSixContent] = useState(timelineBlankSixContentData);
  const [timelineBlankSixDraft, setTimelineBlankSixDraft] = useState(null);
  const [timelineBlankSixEditorTarget, setTimelineBlankSixEditorTarget] = useState("");
  const [timelineBlankSixContentSaving, setTimelineBlankSixContentSaving] = useState(false);
  const [canUndoTimelineBlankSixContent, setCanUndoTimelineBlankSixContent] = useState(false);
  const [timelineBlankSixContentStatus, setTimelineBlankSixContentStatus] = useState("");
  const [timelineBlankSixImages, setTimelineBlankSixImages] = useState(timelineBlankSixImagesContent);
  const [timelineBlankSixImageUploading, setTimelineBlankSixImageUploading] = useState(() => Object.fromEntries(timelineBlankSixContentData.items.map((item) => [item.id, false])));
  const [canUndoTimelineBlankSixImage, setCanUndoTimelineBlankSixImage] = useState(() => Object.fromEntries(timelineBlankSixContentData.items.map((item) => [item.id, false])));
  const [timelineBlankSixImageStatus, setTimelineBlankSixImageStatus] = useState(() => Object.fromEntries(timelineBlankSixContentData.items.map((item) => [item.id, ""])));
  const [timelineBlankSixPosition, setTimelineBlankSixPosition] = useState(timelineBlankSixPositionContent);
  const [canUndoTimelineBlankSixPosition, setCanUndoTimelineBlankSixPosition] = useState(false);
  const [timelineBlankSixPositionStatus, setTimelineBlankSixPositionStatus] = useState("");
  const [aboutBlankPanel, setAboutBlankPanel] = useState(aboutBlankPanelContent);
  const [canUndoAboutBlankPanel, setCanUndoAboutBlankPanel] = useState(false);
  const [aboutBlankPanelStatus, setAboutBlankPanelStatus] = useState("");
  const [canUndoAboutBlankPanelRemoval, setCanUndoAboutBlankPanelRemoval] = useState(false);
  const [aboutBlankPanelRemovalStatus, setAboutBlankPanelRemovalStatus] = useState("");
  const [aboutBlankPanelAppearance, setAboutBlankPanelAppearance] = useState(aboutBlankPanelAppearanceContent);
  const [canUndoAboutBlankPanelAppearance, setCanUndoAboutBlankPanelAppearance] = useState(false);
  const [aboutBlankPanelAppearanceStatus, setAboutBlankPanelAppearanceStatus] = useState("");
  const [aboutBlankControls, setAboutBlankControls] = useState(aboutBlankControlsContent);
  const [canUndoAboutBlankControls, setCanUndoAboutBlankControls] = useState(false);
  const [aboutBlankControlsStatus, setAboutBlankControlsStatus] = useState("");
  const [aboutBlankImageFeature, setAboutBlankImageFeature] = useState(aboutBlankImageFeatureContent);
  const [canUndoAboutBlankImageFeature, setCanUndoAboutBlankImageFeature] = useState(false);
  const [aboutBlankImageFeatureStatus, setAboutBlankImageFeatureStatus] = useState("");
  const [aboutBlankImageContent, setAboutBlankImageContent] = useState(aboutBlankImageContentData);
  const [aboutBlankImageUploading, setAboutBlankImageUploading] = useState(false);
  const [canUndoAboutBlankImage, setCanUndoAboutBlankImage] = useState(false);
  const [aboutBlankImageStatus, setAboutBlankImageStatus] = useState("");
  const [aboutLowerBlankPanel, setAboutLowerBlankPanel] = useState(aboutLowerBlankPanelContent);
  const [canUndoAboutLowerBlankPanel, setCanUndoAboutLowerBlankPanel] = useState(false);
  const [aboutLowerBlankPanelStatus, setAboutLowerBlankPanelStatus] = useState("");
  const [aboutLowerBlankPosition, setAboutLowerBlankPosition] = useState(aboutLowerBlankPositionContent);
  const [canUndoAboutLowerBlankPosition, setCanUndoAboutLowerBlankPosition] = useState(false);
  const [aboutLowerBlankPositionStatus, setAboutLowerBlankPositionStatus] = useState("");
  const [aboutLowerNextBlankPanel, setAboutLowerNextBlankPanel] = useState(aboutLowerNextBlankPanelContent);
  const [canUndoAboutLowerNextBlankPanel, setCanUndoAboutLowerNextBlankPanel] = useState(false);
  const [aboutLowerNextBlankPanelStatus, setAboutLowerNextBlankPanelStatus] = useState("");
  const [aboutLowerNextBlankLayout, setAboutLowerNextBlankLayout] = useState(aboutLowerNextBlankLayoutContent);
  const [canUndoAboutLowerNextBlankLayout, setCanUndoAboutLowerNextBlankLayout] = useState(false);
  const [aboutLowerNextBlankLayoutStatus, setAboutLowerNextBlankLayoutStatus] = useState("");
  const [aboutLowerNextBlankCopy, setAboutLowerNextBlankCopy] = useState(aboutLowerNextBlankCopyContent);
  const [aboutLowerNextBlankCopyDraft, setAboutLowerNextBlankCopyDraft] = useState(aboutLowerNextBlankCopyContent);
  const [aboutLowerNextBlankCopyEditorOpen, setAboutLowerNextBlankCopyEditorOpen] = useState(false);
  const [aboutLowerNextBlankCopySaving, setAboutLowerNextBlankCopySaving] = useState(false);
  const [canUndoAboutLowerNextBlankCopy, setCanUndoAboutLowerNextBlankCopy] = useState(false);
  const [aboutLowerNextBlankCopyStatus, setAboutLowerNextBlankCopyStatus] = useState("");
  const [aboutLowerNextBlankBackground, setAboutLowerNextBlankBackground] = useState(aboutLowerNextBlankBackgroundContent);
  const [aboutLowerNextBlankLine, setAboutLowerNextBlankLine] = useState(aboutLowerNextBlankLineContent);
  const [aboutLowerNextBlankMark, setAboutLowerNextBlankMark] = useState(aboutLowerNextBlankMarkContent);
  const [aboutLowerNextBlankAssetUploading, setAboutLowerNextBlankAssetUploading] = useState({ background: false, line: false, mark: false });
  const [canUndoAboutLowerNextBlankAsset, setCanUndoAboutLowerNextBlankAsset] = useState({ background: false, line: false, mark: false });
  const [aboutLowerNextBlankAssetStatus, setAboutLowerNextBlankAssetStatus] = useState({ background: "", line: "", mark: "" });
  const [timelineVideoBlankPanel, setTimelineVideoBlankPanel] = useState(timelineVideoBlankPanelContent);
  const [canUndoTimelineVideoBlankPanel, setCanUndoTimelineVideoBlankPanel] = useState(false);
  const [timelineVideoBlankPanelStatus, setTimelineVideoBlankPanelStatus] = useState("");
  const [timelineVideoBlankContent, setTimelineVideoBlankContent] = useState(timelineVideoBlankContentData);
  const [timelineVideoBlankUploading, setTimelineVideoBlankUploading] = useState(false);
  const [canUndoTimelineVideoBlank, setCanUndoTimelineVideoBlank] = useState(false);
  const [timelineVideoBlankStatus, setTimelineVideoBlankStatus] = useState("");
  const [aboutLowerBlankLayout, setAboutLowerBlankLayout] = useState(aboutLowerBlankLayoutContent);
  const [canUndoAboutLowerBlankLayout, setCanUndoAboutLowerBlankLayout] = useState(false);
  const [aboutLowerBlankLayoutStatus, setAboutLowerBlankLayoutStatus] = useState("");
  const [aboutLowerBlankEffect, setAboutLowerBlankEffect] = useState(aboutLowerBlankEffectContent);
  const [canUndoAboutLowerBlankEffect, setCanUndoAboutLowerBlankEffect] = useState(false);
  const [aboutLowerBlankEffectStatus, setAboutLowerBlankEffectStatus] = useState("");
  const [aboutLowerBlankCopy, setAboutLowerBlankCopy] = useState(aboutLowerBlankCopyContent);
  const [aboutLowerBlankCopyDraft, setAboutLowerBlankCopyDraft] = useState(aboutLowerBlankCopyContent);
  const [aboutLowerBlankCopyEditorOpen, setAboutLowerBlankCopyEditorOpen] = useState(false);
  const [aboutLowerBlankCopySaving, setAboutLowerBlankCopySaving] = useState(false);
  const [canUndoAboutLowerBlankCopy, setCanUndoAboutLowerBlankCopy] = useState(false);
  const [aboutLowerBlankCopyStatus, setAboutLowerBlankCopyStatus] = useState("");
  const [aboutLowerBlankBackground, setAboutLowerBlankBackground] = useState(aboutLowerBlankBackgroundContent);
  const [aboutLowerBlankBackgroundUploading, setAboutLowerBlankBackgroundUploading] = useState(false);
  const [canUndoAboutLowerBlankBackground, setCanUndoAboutLowerBlankBackground] = useState(false);
  const [aboutLowerBlankBackgroundStatus, setAboutLowerBlankBackgroundStatus] = useState("");
  const [aboutLowerBlankCardImage, setAboutLowerBlankCardImage] = useState(aboutLowerBlankCardImageContent);
  const [aboutLowerBlankCardUploading, setAboutLowerBlankCardUploading] = useState(false);
  const [canUndoAboutLowerBlankCardImage, setCanUndoAboutLowerBlankCardImage] = useState(false);
  const [aboutLowerBlankCardStatus, setAboutLowerBlankCardStatus] = useState("");
  const [aboutBlankVideoFeature, setAboutBlankVideoFeature] = useState(aboutBlankVideoFeatureContent);
  const [canUndoAboutBlankVideoFeature, setCanUndoAboutBlankVideoFeature] = useState(false);
  const [aboutBlankVideoFeatureStatus, setAboutBlankVideoFeatureStatus] = useState("");
  const [aboutBlankVideoContent, setAboutBlankVideoContent] = useState(aboutBlankVideoContentData);
  const [aboutBlankVideoUploading, setAboutBlankVideoUploading] = useState(false);
  const [canUndoAboutBlankVideo, setCanUndoAboutBlankVideo] = useState(false);
  const [aboutBlankVideoStatus, setAboutBlankVideoStatus] = useState("");
  const [aboutTwoVideoFeature, setAboutTwoVideoFeature] = useState(aboutTwoVideoFeatureContent);
  const [canUndoAboutTwoVideoFeature, setCanUndoAboutTwoVideoFeature] = useState(false);
  const [aboutTwoVideoFeatureStatus, setAboutTwoVideoFeatureStatus] = useState("");
  const [aboutTwoVideoContent, setAboutTwoVideoContent] = useState(aboutTwoVideoContentData);
  const [aboutTwoVideoUploading, setAboutTwoVideoUploading] = useState(false);
  const [canUndoAboutTwoVideo, setCanUndoAboutTwoVideo] = useState(false);
  const [aboutTwoVideoStatus, setAboutTwoVideoStatus] = useState("");
  const [footerInvitation, setFooterInvitation] = useState(footerInvitationContent);
  const [canUndoFooterInvitation, setCanUndoFooterInvitation] = useState(false);
  const [footerInvitationStatus, setFooterInvitationStatus] = useState("");
  const [footerSecondary, setFooterSecondary] = useState(footerSecondaryContent);
  const [canUndoFooterSecondary, setCanUndoFooterSecondary] = useState(false);
  const [footerSecondaryStatus, setFooterSecondaryStatus] = useState("");
  const [footerVideoPanel, setFooterVideoPanel] = useState(footerVideoPanelContent);
  const [canUndoFooterVideoPanel, setCanUndoFooterVideoPanel] = useState(false);
  const [footerVideoPanelStatus, setFooterVideoPanelStatus] = useState("");
  const [footerVideoContent, setFooterVideoContent] = useState(footerVideoContentData);
  const [footerVideoUploading, setFooterVideoUploading] = useState(false);
  const [canUndoFooterVideo, setCanUndoFooterVideo] = useState(false);
  const [footerVideoStatus, setFooterVideoStatus] = useState("");
  const [footerVideoPosition, setFooterVideoPosition] = useState(footerVideoPositionContent);
  const [canUndoFooterVideoPosition, setCanUndoFooterVideoPosition] = useState(false);
  const [footerVideoPositionStatus, setFooterVideoPositionStatus] = useState("");
  const [footerWordmark, setFooterWordmark] = useState(footerWordmarkContent);
  const [canUndoFooterWordmark, setCanUndoFooterWordmark] = useState(false);
  const [footerWordmarkStatus, setFooterWordmarkStatus] = useState("");
  const heroVideo = useRef(null);
  const heroUploadInput = useRef(null);
  const aboutImageUploadInput = useRef(null);
  const aboutOneVideo = useRef(null);
  const aboutOneVideoUploadInput = useRef(null);
  const aboutBlankImageUploadInput = useRef(null);
  const aboutLowerBlankBackgroundInput = useRef(null);
  const aboutLowerBlankCardImageInput = useRef(null);
  const aboutLowerNextBlankBackgroundInput = useRef(null);
  const aboutLowerNextBlankLineInput = useRef(null);
  const aboutLowerNextBlankMarkInput = useRef(null);
  const timelineVideoBlankVideo = useRef(null);
  const timelineVideoBlankUploadInput = useRef(null);
  const timelineBlankOneBackgroundInput = useRef(null);
  const timelineBlankOneDetailTopInput = useRef(null);
  const timelineBlankOneDetailBottomInput = useRef(null);
  const timelineBlankTwoImageInput = useRef(null);
  const timelineBlankTwoBackgroundInput = useRef(null);
  const timelineBlankThreeImageInput = useRef(null);
  const timelineBlankFourImageInput = useRef(null);
  const timelineBlankEightImageInput = useRef(null);
  const timelineBlankFiveBackgroundInput = useRef(null);
  const timelineBlankSixImageInputs = useRef({});
  const statementFollowupBlankImageInput = useRef(null);
  const aboutBlankVideo = useRef(null);
  const aboutBlankVideoUploadInput = useRef(null);
  const aboutTwoVideo = useRef(null);
  const aboutTwoVideoUploadInput = useRef(null);
  const footerVideo = useRef(null);
  const footerVideoUploadInput = useRef(null);
  const statementSecondFollowupBlurVideoInputs = useRef({});
  const statementFollowupCinematicImageInputs = useRef({});
  const editorEnabled = false;

  useEffect(() => {
    setAboutPanelSelectionRemoval(aboutPanelSelectionRemovalContent);
  }, [aboutPanelSelectionRemovalContent]);

  useEffect(() => {
    setImpactIntroPanels(impactIntroPanelsContent);
    setMediaCardBodyCopy(mediaCardBodyCopyContent);
    setMediaCardActions(mediaCardActionsContent);
    setMediaCardPodcastImage(mediaCardPodcastImageContent);
    setMediaCardCrowdfundingImage(mediaCardCrowdfundingImageContent);
    setImpactMediaCopy(impactMediaCopyContentData);
    setImpactMediaCopyEditorFeature(impactMediaCopyEditorFeatureContent);
  }, [impactIntroPanelsContent, mediaCardBodyCopyContent, mediaCardActionsContent, mediaCardPodcastImageContent, mediaCardCrowdfundingImageContent, impactMediaCopyContentData, impactMediaCopyEditorFeatureContent]);

  useEffect(() => {
    setStatementFollowupBlankPanelFourAppearance(statementFollowupBlankPanelFourAppearanceContent);
    setStatementFollowupScrollFlyLayout(statementFollowupScrollFlyLayoutContent);
    setStatementFollowupScrollFlyContent(statementFollowupScrollFlyContentData);
    setStatementFollowupScrollFlyHeadingFormat(statementFollowupScrollFlyHeadingFormatContent);
  }, [statementFollowupBlankPanelFourAppearanceContent, statementFollowupScrollFlyLayoutContent, statementFollowupScrollFlyContentData, statementFollowupScrollFlyHeadingFormatContent]);

  useEffect(() => {
    setTimelineGalleryPricingLayout(timelineGalleryFollowupPricingLayoutContent);
    setTimelineGalleryPricingContent(timelineGalleryFollowupPricingContentData);
  }, [timelineGalleryFollowupPricingLayoutContent, timelineGalleryFollowupPricingContentData]);

  useEffect(() => {
    heroVideo.current?.load();
    heroVideo.current?.play().catch(() => {});
  }, [heroSrc]);

  useEffect(() => {
    footerVideo.current?.load();
    footerVideo.current?.play().catch(() => {});
  }, [footerVideoContent.src]);

  useEffect(() => {
    aboutBlankVideo.current?.load();
    aboutBlankVideo.current?.play().catch(() => {});
  }, [aboutBlankVideoContent.src]);

  useEffect(() => {
    aboutTwoVideo.current?.load();
    aboutTwoVideo.current?.play().catch(() => {});
  }, [aboutTwoVideoContent.src]);

  useEffect(() => {
    aboutOneVideo.current?.load();
    aboutOneVideo.current?.play().catch(() => {});
  }, [aboutOneVideoContent.src]);

  useEffect(() => {
    timelineVideoBlankVideo.current?.load();
    timelineVideoBlankVideo.current?.play().catch(() => {});
  }, [timelineVideoBlankContent.src]);

  useEffect(() => {
    if (!editorEnabled) return undefined;
    const controller = new AbortController();
    fetch(`/assets/video/intro.meta.json?v=${Date.now()}`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((metadata) => {
        if (metadata) setHeroMedia(metadata);
      })
      .catch(() => {});
    fetch("/__jurneos/hero-media/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoHeroVideo(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatement(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-editor-feature/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementEditorFeature(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-panel-removal/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementPanelRemoval(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-white-panel-03/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupWhitePanelThree(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-blank-panel-04/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupBlankPanelFour(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-blank-panel-04-appearance/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupBlankPanelFourAppearance(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-scroll-fly-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupScrollFlyLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-scroll-fly-content/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupScrollFlyContent(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-scroll-fly-heading-format/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupScrollFlyHeadingFormat(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-cinematic-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupCinematicLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-cinematic-content/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupCinematicContent(Boolean(payload?.canUndo)))
      .catch(() => {});
    ["01", "02", "03", "04"].forEach((cardId) => {
      fetch(`/__jurneos/statement-followup-cinematic-image/undo?card=${cardId}`, { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((payload) => setCanUndoStatementFollowupCinematicImage((current) => ({ ...current, [cardId]: Boolean(payload?.canUndo) })))
        .catch(() => {});
    });
    fetch("/__jurneos/statement-second-followup-blank-panel/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementSecondFollowupBlankPanel(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-second-followup-blank-appearance/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementSecondFollowupBlankAppearance(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-second-followup-blur-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementSecondFollowupBlurLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-second-followup-blur-removal/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementSecondFollowupBlurRemoval(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-second-followup-blur-content/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementSecondFollowupBlurContent(Boolean(payload?.canUndo)))
      .catch(() => {});
    ["01", "02", "03", "04"].forEach((cardId) => {
      fetch(`/__jurneos/statement-second-followup-blur-video/undo?card=${cardId}`, { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((payload) => setCanUndoStatementSecondFollowupBlurVideo((current) => ({ ...current, [cardId]: Boolean(payload?.canUndo) })))
        .catch(() => {});
    });
    fetch("/__jurneos/statement-followup-blank-panel/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupBlankPanel(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-blank-removal/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupBlankRemoval(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/statement-followup-blank-image/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoStatementFollowupBlankImage(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-one-image/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutImage(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-one-effect/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutEffect(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-one-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutOneCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-one-position/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutOnePosition(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-extra-groups/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoExtraAboutGroups(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-panel-selection-removal/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutPanelSelectionRemoval(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/impact-intro-panels/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoImpactIntroPanels(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/media-card-body-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoMediaCardBodyCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/media-card-actions/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoMediaCardActions(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/media-card-podcast-image/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoMediaCardPodcastImage(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/media-card-crowdfunding-image/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoMediaCardCrowdfundingImage(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/impact-media-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoImpactMediaCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/impact-media-copy-editor-feature/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoImpactMediaCopyEditorFeature(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-gallery-followup-blank-panel/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineGalleryFollowupBlankPanel(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-gallery-followup-pricing-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineGalleryPricingLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-gallery-followup-pricing-content/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineGalleryPricingContent(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/selected-seven-page-removal/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoSelectedSevenPageRemoval(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-video-blank-panel/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineVideoBlankPanel(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-video-blank/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineVideoBlank(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-discover-links/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutDiscoverLinks(Boolean(payload?.canUndo)))
      .catch(() => {});
    editableAboutPanelIds.forEach((panelId) => {
      fetch(`/__jurneos/about-panel-copy/undo?panel=${panelId}`, { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((payload) => setCanUndoAboutPanelCopy((current) => ({ ...current, [panelId]: Boolean(payload?.canUndo) })))
        .catch(() => {});
    });
    fetch("/__jurneos/about-panel-background-feature/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutPanelBackgroundFeature(Boolean(payload?.canUndo)))
      .catch(() => {});
    editableAboutPanelBackgroundIds.forEach((panelId) => {
      fetch(`/__jurneos/about-panel-background/undo?panel=${panelId}`, { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((payload) => setCanUndoAboutPanelBackground((current) => ({ ...current, [panelId]: Boolean(payload?.canUndo) })))
        .catch(() => {});
    });
    ["01", "02", "03", "04", "05", "06", "07", "08"].forEach((panelId) => {
      fetch(`/__jurneos/timeline-followup-blank/undo?panel=${panelId}`, { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((payload) => setCanUndoTimelineFollowupBlank((current) => ({ ...current, [panelId]: Boolean(payload?.canUndo) })))
        .catch(() => {});
    });
    fetch("/__jurneos/timeline-blank-five-background/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankFiveBackground(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-seven-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankSevenLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-six-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankSixLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-six-content/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankSixContent(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-six-position/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankSixPosition(Boolean(payload?.canUndo)))
      .catch(() => {});
    timelineBlankSixContentData.items.forEach((item) => {
      fetch(`/__jurneos/timeline-blank-six-image/undo?card=${item.id}`, { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((payload) => setCanUndoTimelineBlankSixImage((current) => ({ ...current, [item.id]: Boolean(payload?.canUndo) })))
        .catch(() => {});
    });
    fetch("/__jurneos/timeline-blank-four-word-fit/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankFourWordFit(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-one-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankOneLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-one-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankOneCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-one-extra-row/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankOneExtraRow(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-one-extra-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankOneExtraCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-one-position/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankOnePosition(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-one-mark/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankOneMark(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-one-removal/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankOneRemoval(Boolean(payload?.canUndo)))
      .catch(() => {});
    ["background", "top", "bottom"].forEach((asset) => {
      fetch(`/__jurneos/timeline-blank-one-${asset}/undo`, { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((payload) => setCanUndoTimelineBlankOneAsset((current) => ({ ...current, [asset]: Boolean(payload?.canUndo) })))
        .catch(() => {});
    });
    fetch("/__jurneos/timeline-blank-two-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankTwoLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-two-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankTwoCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    ["image", "background"].forEach((asset) => {
      fetch(`/__jurneos/timeline-blank-two-${asset}/undo`, { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((payload) => setCanUndoTimelineBlankTwoAsset((current) => ({ ...current, [asset]: Boolean(payload?.canUndo) })))
        .catch(() => {});
    });
    fetch("/__jurneos/timeline-blank-three-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankThreeLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-three-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankThreeCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-three-image/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankThreeImage(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-four-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankFourLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-four-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankFourCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-four-image/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankFourImage(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-eight-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankEightLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-eight-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankEightCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-eight-image/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankEightImage(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/timeline-blank-eight-title-fit/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoTimelineBlankEightTitleFit(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-blank-panel/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutBlankPanel(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/remove-first-blank-panel/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutBlankPanelRemoval(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-blank-panel-appearance/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutBlankPanelAppearance(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-blank-controls/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutBlankControls(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-blank-image-feature/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutBlankImageFeature(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-blank-image/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutBlankImage(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-lower-blank-panel/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerBlankPanel(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-lower-blank-position/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerBlankPosition(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-lower-next-blank-panel/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerNextBlankPanel(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-lower-next-blank-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerNextBlankLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-lower-next-blank-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerNextBlankCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    ["background", "line", "mark"].forEach((asset) => {
      fetch(`/__jurneos/about-lower-next-blank-${asset}/undo`, { signal: controller.signal })
        .then((response) => response.ok ? response.json() : null)
        .then((payload) => setCanUndoAboutLowerNextBlankAsset((current) => ({ ...current, [asset]: Boolean(payload?.canUndo) })))
        .catch(() => {});
    });
    fetch("/__jurneos/about-lower-blank-layout/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerBlankLayout(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-lower-blank-effect/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerBlankEffect(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-lower-blank-copy/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerBlankCopy(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-lower-blank-background/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerBlankBackground(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-lower-blank-card-image/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutLowerBlankCardImage(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-blank-video-feature/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutBlankVideoFeature(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-blank-video/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutBlankVideo(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-two-video-feature/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutTwoVideoFeature(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/about-two-video/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoAboutTwoVideo(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/footer-secondary/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoFooterSecondary(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/footer-invitation/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoFooterInvitation(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/footer-video-panel/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoFooterVideoPanel(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/footer-video/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoFooterVideo(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/footer-video-position/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoFooterVideoPosition(Boolean(payload?.canUndo)))
      .catch(() => {});
    fetch("/__jurneos/footer-wordmark/undo", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => setCanUndoFooterWordmark(Boolean(payload?.canUndo)))
      .catch(() => {});
    return () => controller.abort();
  }, [editorEnabled]);

  useEffect(() => {
    setFooterInvitation(footerInvitationContent);
  }, [footerInvitationContent]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || statementEditorOpen || mediaEditorOpen || aboutMediaEditorOpen || aboutLowerBlankCopyEditorOpen || aboutLowerNextBlankCopyEditorOpen || timelineBlankOneCopyEditorOpen || timelineBlankOneExtraRowEditorOpen || timelineBlankTwoCopyEditorOpen || timelineBlankThreeCopyEditorOpen || timelineBlankFourCopyEditorOpen || timelineBlankEightCopyEditorOpen || timelineGalleryPricingEditorOpen || statementFollowupScrollFlyEditorOpen || Boolean(impactMediaCopyEditorTarget) || Boolean(timelineBlankSixEditorTarget) || Boolean(aboutPanelCopyEditorId) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, statementEditorOpen, mediaEditorOpen, aboutMediaEditorOpen, aboutLowerBlankCopyEditorOpen, aboutLowerNextBlankCopyEditorOpen, timelineBlankOneCopyEditorOpen, timelineBlankOneExtraRowEditorOpen, timelineBlankTwoCopyEditorOpen, timelineBlankThreeCopyEditorOpen, timelineBlankFourCopyEditorOpen, timelineBlankEightCopyEditorOpen, timelineGalleryPricingEditorOpen, statementFollowupScrollFlyEditorOpen, impactMediaCopyEditorTarget, timelineBlankSixEditorTarget, aboutPanelCopyEditorId]);

  useEffect(() => {
    if (!statementEditorOpen && !mediaEditorOpen && !aboutMediaEditorOpen && !aboutLowerBlankCopyEditorOpen && !aboutLowerNextBlankCopyEditorOpen && !timelineBlankOneCopyEditorOpen && !timelineBlankOneExtraRowEditorOpen && !timelineBlankTwoCopyEditorOpen && !timelineBlankThreeCopyEditorOpen && !timelineBlankFourCopyEditorOpen && !timelineBlankEightCopyEditorOpen && !timelineGalleryPricingEditorOpen && !statementFollowupScrollFlyEditorOpen && !impactMediaCopyEditorTarget && !timelineBlankSixEditorTarget && !aboutPanelCopyEditorId) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMediaEditorOpen(false);
        setAboutMediaEditorOpen(false);
        setAboutLowerBlankCopyEditorOpen(false);
        setAboutLowerNextBlankCopyEditorOpen(false);
        setTimelineBlankOneCopyEditorOpen(false);
        setTimelineBlankOneExtraRowEditorOpen(false);
        setTimelineBlankTwoCopyEditorOpen(false);
        setTimelineBlankThreeCopyEditorOpen(false);
        setTimelineBlankFourCopyEditorOpen(false);
        setTimelineBlankEightCopyEditorOpen(false);
        setTimelineGalleryPricingEditorOpen(false);
        setStatementFollowupScrollFlyEditorOpen(false);
        setImpactMediaCopyEditorTarget("");
        setImpactMediaCopyDraft(null);
        setTimelineBlankSixEditorTarget("");
        setStatementEditorOpen(false);
        setAboutPanelCopyEditorId("");
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [statementEditorOpen, mediaEditorOpen, aboutMediaEditorOpen, aboutLowerBlankCopyEditorOpen, aboutLowerNextBlankCopyEditorOpen, timelineBlankOneCopyEditorOpen, timelineBlankOneExtraRowEditorOpen, timelineBlankTwoCopyEditorOpen, timelineBlankThreeCopyEditorOpen, timelineBlankFourCopyEditorOpen, timelineBlankEightCopyEditorOpen, timelineGalleryPricingEditorOpen, statementFollowupScrollFlyEditorOpen, impactMediaCopyEditorTarget, timelineBlankSixEditorTarget, aboutPanelCopyEditorId]);

  async function replaceHeroVideo(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (file.type !== "video/mp4" && !file.name.toLowerCase().endsWith(".mp4")) {
      setUploadStatus("请选择 MP4 格式的视频。");
      return;
    }

    if (file.size > 200 * 1024 * 1024) {
      setUploadStatus("视频不能超过 200 MB。");
      return;
    }

    setUploading(true);
    setUploadStatus("正在检查并替换视频…");

    try {
      const details = await inspectVideo(file);
      const response = await fetch("/__jurneos/hero-media", {
        method: "PUT",
        headers: {
          "Content-Type": "video/mp4",
          "X-File-Name": encodeURIComponent(file.name),
          "X-Video-Width": String(details.width),
          "X-Video-Height": String(details.height),
          "X-Video-Ratio": details.ratio,
          "X-Video-Duration": String(details.duration),
        },
        body: file,
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.message || "替换失败，请重试。");
      }

      setHeroMedia({
        kind: "MP4 视频",
        codec: "浏览器兼容编码",
        width: details.width,
        height: details.height,
        ratio: details.ratio,
        duration: details.duration,
        fps: null,
        size: file.size,
      });
      setHeroSrc(`/assets/video/intro.mp4?v=${Date.now()}`);
      setCanUndoHeroVideo(true);
      setUploadStatus("替换成功，首页背景已经更新。刷新页面后仍会保留。");
    } catch (error) {
      setUploadStatus(error.message || "替换失败，请重试。");
    } finally {
      setUploading(false);
    }
  }

  async function undoHeroVideoReplacement() {
    setUploading(true);
    setUploadStatus("正在撤销上一次背景视频替换…");
    try {
      const response = await fetch("/__jurneos/hero-media/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的背景视频修改。");

      const metadataResponse = await fetch(`/assets/video/intro.meta.json?v=${Date.now()}`);
      if (metadataResponse.ok) setHeroMedia(await metadataResponse.json());
      setHeroSrc(`/assets/video/intro.mp4?v=${Date.now()}`);
      setCanUndoHeroVideo(false);
      setUploadStatus("已撤销，背景视频已恢复为替换前的版本。");
    } catch (error) {
      setUploadStatus(error.message || "撤销失败，请重试。");
    } finally {
      setUploading(false);
    }
  }

  async function undoStatementChange() {
    setStatementStatus("正在撤销本次文字修改…");
    try {
      const response = await fetch("/__jurneos/statement/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setStatementCopy(payload.content);
      setStatementDraft(payload.content.lines);
      setCanUndoStatement(false);
      setStatementStatus("已撤销，本段文字已恢复为修改前的版本。");
    } catch (error) {
      setStatementStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openStatementEditor() {
    setStatementDraft(statementCopy.lines);
    setStatementStatus("");
    setStatementEditorOpen(true);
  }

  async function saveStatementCopy(event) {
    event.preventDefault();
    const lines = statementDraft.map((line) => String(line || "").trim());
    if (lines.length !== 5 || lines.some((line) => !line)) {
      setStatementStatus("五行文字都不能为空。");
      return;
    }

    setStatementSaving(true);
    setStatementStatus("正在保存五行文字…");
    try {
      const response = await fetch("/__jurneos/statement", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: statementCopy.language, lines }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");
      setStatementCopy(payload.content);
      setStatementDraft(payload.content.lines);
      setCanUndoStatement(true);
      setStatementEditorOpen(false);
      setStatementStatus("五行文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setStatementStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setStatementSaving(false);
    }
  }

  async function undoStatementEditorFeature() {
    setStatementStatus("正在撤销本次新增文字编辑功能…");
    try {
      const response = await fetch("/__jurneos/statement-editor-feature/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字编辑功能修改。");
      setStatementEditorFeature(payload.content);
      setCanUndoStatementEditorFeature(false);
      setStatementEditorOpen(false);
      setStatementStatus("已撤销，本次新增的文字编辑入口已经移除。");
    } catch (error) {
      setStatementStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementPanelRemoval() {
    setStatementPanelRemovalStatus("正在恢复刚才删除的大字屏…");
    try {
      const response = await fetch("/__jurneos/statement-panel-removal/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的整屏删除操作。");
      setStatementPanelRemoval(payload.content);
      setCanUndoStatementPanelRemoval(false);
      setStatementPanelRemovalStatus("已撤销，大字屏已经恢复，原文字和编辑记录保持不变。");
    } catch (error) {
      setStatementPanelRemovalStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceAboutImage(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const supportedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    if (!supportedTypes.includes(file.type)) {
      setAboutImageStatus("请选择 JPG、PNG、WebP 或 AVIF 格式的图片。");
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      setAboutImageStatus("图片不能超过 25 MB。");
      return;
    }

    setAboutImageUploading(true);
    setAboutImageStatus("正在检查并替换图片…");

    try {
      const details = await inspectImage(file);
      const response = await fetch("/__jurneos/about-one-image", {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "替换失败，请重试。");

      setAboutOneImage(payload.content);
      setCanUndoAboutImage(true);
      setAboutImageStatus("替换成功，这一屏的背景图片已经更新。刷新页面后仍会保留。");
    } catch (error) {
      setAboutImageStatus(error.message || "替换失败，请重试。");
    } finally {
      setAboutImageUploading(false);
    }
  }

  async function undoAboutImageReplacement() {
    setAboutImageUploading(true);
    setAboutImageStatus("正在撤销本次图片替换…");
    try {
      const response = await fetch("/__jurneos/about-one-image/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片修改。");

      setAboutOneImage(payload.content);
      setCanUndoAboutImage(false);
      setAboutImageStatus("已撤销，这一屏已恢复为替换前的图片。");
    } catch (error) {
      setAboutImageStatus(error.message || "撤销失败，请重试。");
    } finally {
      setAboutImageUploading(false);
    }
  }

  async function replaceAboutOneVideo(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const lowerName = file.name.toLowerCase();
    const isMov = lowerName.endsWith(".mov") || file.type === "video/quicktime" || file.type === "video/x-quicktime";
    const isMp4 = lowerName.endsWith(".mp4") || file.type === "video/mp4";
    if (!isMp4 && !isMov) {
      setAboutOneVideoStatus("请选择 MP4 或 MOV 格式的视频。");
      return;
    }

    if (file.size > 200 * 1024 * 1024) {
      setAboutOneVideoStatus("视频不能超过 200 MB。");
      return;
    }

    setAboutOneVideoUploading(true);
    setAboutOneVideoStatus("正在检查并更换背景视频…");
    try {
      const details = await inspectVideo(file);
      const response = await fetch("/__jurneos/about-one-video", {
        method: "PUT",
        headers: {
          "Content-Type": isMov ? "video/quicktime" : "video/mp4",
          "X-File-Name": encodeURIComponent(file.name),
          "X-Video-Width": String(details.width),
          "X-Video-Height": String(details.height),
          "X-Video-Ratio": details.ratio,
          "X-Video-Duration": String(details.duration),
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "背景视频更换失败，请重试。");

      setAboutOneVideoContent(payload.content);
      setAboutOneVideoStatus("更换成功，视频已铺满第 01 屏；刷新页面后仍会保留。");
    } catch (error) {
      setAboutOneVideoStatus(error.message || "背景视频更换失败，请重试。");
    } finally {
      setAboutOneVideoUploading(false);
    }
  }

  async function undoAboutFrostedGlass() {
    setAboutEffectStatus("正在撤销本次毛玻璃效果…");
    try {
      const response = await fetch("/__jurneos/about-one-effect/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的毛玻璃修改。");

      setAboutOneEffect(payload.content);
      setCanUndoAboutEffect(false);
      setAboutEffectStatus("已撤销，第 01 屏背景已恢复清晰。");
    } catch (error) {
      setAboutEffectStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutOneCopyRemoval() {
    setAboutOneCopyStatus("正在撤销本次删除文字…");
    try {
      const response = await fetch("/__jurneos/about-one-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字删除操作。");

      setAboutOneCopy(payload.content);
      setCanUndoAboutOneCopy(false);
      setAboutOneCopyStatus("已撤销，第 01 屏文字已经恢复。");
    } catch (error) {
      setAboutOneCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutOnePositionChange() {
    setAboutOnePositionStatus("正在撤销本次下移位置…");
    try {
      const response = await fetch("/__jurneos/about-one-position/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的位置修改。");

      setAboutOnePosition(payload.content);
      setCanUndoAboutOnePosition(false);
      setAboutOnePositionStatus("已撤销，第 01 屏恢复到原来的位置。");
    } catch (error) {
      setAboutOnePositionStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutLowerBlankPositionChange() {
    setAboutLowerBlankPositionStatus("正在撤销本次上移一屏…");
    try {
      const response = await fetch("/__jurneos/about-lower-blank-position/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的位置修改。");

      setAboutLowerBlankPosition(payload.content);
      setCanUndoAboutLowerBlankPosition(false);
      setAboutLowerBlankPositionStatus("已撤销，本屏恢复到原来位置。");
    } catch (error) {
      setAboutLowerBlankPositionStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoExtraAboutGroups() {
    setExtraAboutStatus("正在撤销新增的三组内容…");
    try {
      const response = await fetch("/__jurneos/about-extra-groups/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的新增内容。");

      setExtraAboutGroups(payload.content);
      setCanUndoExtraAboutGroups(false);
      setExtraAboutStatus("已撤销，新增的三组内容已移除。");
    } catch (error) {
      setExtraAboutStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutPanelSelectionRemoval() {
    setAboutPanelSelectionRemovalStatus("正在恢复刚才删除的第 08、09 屏…");
    try {
      const response = await fetch("/__jurneos/about-panel-selection-removal/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的多屏删除操作。");
      setAboutPanelSelectionRemoval(payload.content);
      setCanUndoAboutPanelSelectionRemoval(false);
      setAboutPanelSelectionRemovalStatus("已撤销，第 08、09 屏已经恢复；此前删除的第 02 至 07 屏保持不变。");
    } catch (error) {
      setAboutPanelSelectionRemovalStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoSelectedSevenPageRemoval() {
    setSelectedSevenPageRemovalStatus("正在恢复电影海报页和 6 张项目页…");
    try {
      const response = await fetch("/__jurneos/selected-seven-page-removal/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的七页删除操作。");
      setSelectedSevenPageRemoval(payload.content);
      setCanUndoSelectedSevenPageRemoval(false);
      setSelectedSevenPageRemovalStatus("已撤销，电影海报页和 6 张项目页已恢复。");
    } catch (error) {
      setSelectedSevenPageRemovalStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoImpactIntroPanelsRemoval() {
    setImpactIntroPanelsStatus("正在恢复刚才删除的两张英文内容屏…");
    try {
      const response = await fetch("/__jurneos/impact-intro-panels/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的两屏删除操作。");
      setImpactIntroPanels(payload.content);
      setCanUndoImpactIntroPanels(false);
      setImpactIntroPanelsStatus("已撤销，两张英文内容屏已经恢复。");
    } catch (error) {
      setImpactIntroPanelsStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoMediaCardBodyCopyRemoval() {
    setMediaCardBodyCopyStatus("正在恢复刚才删除的两段说明文字…");
    try {
      const response = await fetch("/__jurneos/media-card-body-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的两段文字删除操作。");
      setMediaCardBodyCopy(payload.content);
      setCanUndoMediaCardBodyCopy(false);
      setMediaCardBodyCopyStatus("已撤销，两段说明文字已经恢复。");
    } catch (error) {
      setMediaCardBodyCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoMediaCardActionsRemoval() {
    setMediaCardActionsStatus("正在恢复刚才删除的两个按钮…");
    try {
      const response = await fetch("/__jurneos/media-card-actions/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的按钮删除操作。");
      setMediaCardActions(payload.content);
      setCanUndoMediaCardActions(false);
      setMediaCardActionsStatus("已撤销，Coming soon 和 VIEW MORE 已恢复。");
    } catch (error) {
      setMediaCardActionsStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoMediaCardPodcastImageInsertion() {
    setMediaCardPodcastImageStatus("正在撤销本次图片插入…");
    try {
      const response = await fetch("/__jurneos/media-card-podcast-image/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片插入操作。");
      setMediaCardPodcastImage(payload.content);
      setCanUndoMediaCardPodcastImage(false);
      setMediaCardPodcastImageStatus("已撤销，MACO 卡片恢复为插图前的空白区。");
    } catch (error) {
      setMediaCardPodcastImageStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoMediaCardCrowdfundingImageInsertion() {
    setMediaCardCrowdfundingImageStatus("正在撤销右侧卡片的本次图片插入…");
    try {
      const response = await fetch("/__jurneos/media-card-crowdfunding-image/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的右侧图片插入操作。");
      setMediaCardCrowdfundingImage(payload.content);
      setCanUndoMediaCardCrowdfundingImage(false);
      setMediaCardCrowdfundingImageStatus("已撤销，ARTHUR 卡片恢复为插图前的空白区。");
    } catch (error) {
      setMediaCardCrowdfundingImageStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openImpactMediaCopyEditor(target) {
    setImpactMediaCopyDraft(JSON.parse(JSON.stringify(impactMediaCopy)));
    setImpactMediaCopyStatus("");
    setImpactMediaCopyEditorTarget(target);
  }

  async function saveImpactMediaCopy(event) {
    event.preventDefault();
    if (!impactMediaCopyDraft) return;
    setImpactMediaCopySaving(true);
    setImpactMediaCopyStatus("正在保存所选区域文字…");
    try {
      const response = await fetch("/__jurneos/impact-media-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(impactMediaCopyDraft),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "无法保存所选区域文字。");
      setImpactMediaCopy(payload.content);
      setCanUndoImpactMediaCopy(true);
      setImpactMediaCopyEditorTarget("");
      setImpactMediaCopyDraft(null);
      setImpactMediaCopyStatus("文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setImpactMediaCopyStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setImpactMediaCopySaving(false);
    }
  }

  async function undoImpactMediaCopyChange() {
    setImpactMediaCopyStatus("正在撤销最近一次所选区域文字修改…");
    try {
      const response = await fetch("/__jurneos/impact-media-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setImpactMediaCopy(payload.content);
      setCanUndoImpactMediaCopy(false);
      setImpactMediaCopyStatus("已撤销，所选区域文字恢复为上一版。");
    } catch (error) {
      setImpactMediaCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoImpactMediaCopyEditorFeature() {
    setImpactMediaCopyEditorFeatureStatus("正在撤销本次新增文字编辑功能…");
    try {
      const response = await fetch("/__jurneos/impact-media-copy-editor-feature/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字编辑功能新增操作。");
      setImpactMediaCopyEditorFeature(payload.content);
      setCanUndoImpactMediaCopyEditorFeature(false);
      setImpactMediaCopyEditorTarget("");
      setImpactMediaCopyDraft(null);
      setImpactMediaCopyEditorFeatureStatus("已撤销，所选区域文字编辑入口已经移除。");
    } catch (error) {
      setImpactMediaCopyEditorFeatureStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutDiscoverLinksRemoval() {
    setAboutDiscoverLinksStatus("正在恢复刚才删除的按钮…");
    try {
      const response = await fetch("/__jurneos/about-discover-links/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的按钮删除操作。");

      setAboutDiscoverLinks(payload.content);
      setCanUndoAboutDiscoverLinks(false);
      setAboutDiscoverLinksStatus("已撤销，4 个按钮已经恢复。");
    } catch (error) {
      setAboutDiscoverLinksStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openAboutPanelCopyEditor(panelId) {
    setAboutPanelCopyDraft(aboutPanelCopy[panelId] || "");
    setAboutPanelCopyStatus((current) => ({ ...current, [panelId]: "" }));
    setAboutPanelCopyEditorId(panelId);
  }

  async function saveAboutPanelCopy(event) {
    event.preventDefault();
    const panelId = aboutPanelCopyEditorId;
    const text = aboutPanelCopyDraft.trim();
    if (!panelId || !text) {
      setAboutPanelCopyStatus((current) => ({ ...current, [panelId]: "文字内容不能为空。" }));
      return;
    }

    setAboutPanelCopySaving(true);
    setAboutPanelCopyStatus((current) => ({ ...current, [panelId]: "正在保存文字…" }));
    try {
      const response = await fetch("/__jurneos/about-panel-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ panel: panelId, text }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");

      setAboutPanelCopy(payload.content);
      setCanUndoAboutPanelCopy((current) => ({ ...current, [panelId]: true }));
      setAboutPanelCopyStatus((current) => ({ ...current, [panelId]: `第 ${panelId} 屏文字已保存，刷新页面后仍会保留。` }));
      setAboutPanelCopyEditorId("");
    } catch (error) {
      setAboutPanelCopyStatus((current) => ({ ...current, [panelId]: error.message || "文字保存失败，请重试。" }));
    } finally {
      setAboutPanelCopySaving(false);
    }
  }

  async function undoAboutPanelCopyChange(panelId) {
    setAboutPanelCopyStatus((current) => ({ ...current, [panelId]: "正在撤销最近一次文字修改…" }));
    try {
      const response = await fetch(`/__jurneos/about-panel-copy/undo?panel=${panelId}`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");

      setAboutPanelCopy(payload.content);
      setCanUndoAboutPanelCopy((current) => ({ ...current, [panelId]: false }));
      setAboutPanelCopyStatus((current) => ({ ...current, [panelId]: `已撤销，第 ${panelId} 屏文字已恢复。` }));
    } catch (error) {
      setAboutPanelCopyStatus((current) => ({ ...current, [panelId]: error.message || "撤销失败，请重试。" }));
    }
  }

  async function replaceAboutPanelBackground(event, panelId) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || !editableAboutPanelBackgroundIds.includes(panelId)) return;
    if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(file.type)) {
      setAboutPanelBackgroundStatus((current) => ({ ...current, [panelId]: "只支持 JPG、PNG、WebP 或 AVIF 图片。" }));
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setAboutPanelBackgroundStatus((current) => ({ ...current, [panelId]: "图片不能超过 25 MB。" }));
      return;
    }

    setAboutPanelBackgroundUploading((current) => ({ ...current, [panelId]: true }));
    setAboutPanelBackgroundStatus((current) => ({ ...current, [panelId]: `正在更换第 ${panelId} 屏背景图…` }));
    try {
      const metadata = await inspectImage(file);
      const response = await fetch(`/__jurneos/about-panel-background?panel=${panelId}`, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(metadata.width),
          "X-Image-Height": String(metadata.height),
          "X-Image-Ratio": metadata.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "背景图保存失败，请重试。");

      setAboutPanelBackgrounds(payload.content);
      setCanUndoAboutPanelBackground((current) => ({ ...current, [panelId]: true }));
      setAboutPanelBackgroundStatus((current) => ({ ...current, [panelId]: `第 ${panelId} 屏背景图已更换，刷新页面后仍会保留。` }));
    } catch (error) {
      setAboutPanelBackgroundStatus((current) => ({ ...current, [panelId]: error.message || "背景图保存失败，请重试。" }));
    } finally {
      setAboutPanelBackgroundUploading((current) => ({ ...current, [panelId]: false }));
    }
  }

  async function undoAboutPanelBackgroundChange(panelId) {
    setAboutPanelBackgroundStatus((current) => ({ ...current, [panelId]: `正在撤销第 ${panelId} 屏最近一次背景图修改…` }));
    try {
      const response = await fetch(`/__jurneos/about-panel-background/undo?panel=${panelId}`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的背景图修改。");

      setAboutPanelBackgrounds(payload.content);
      setCanUndoAboutPanelBackground((current) => ({ ...current, [panelId]: false }));
      setAboutPanelBackgroundStatus((current) => ({ ...current, [panelId]: `已撤销，第 ${panelId} 屏背景图已恢复。` }));
    } catch (error) {
      setAboutPanelBackgroundStatus((current) => ({ ...current, [panelId]: error.message || "撤销失败，请重试。" }));
    }
  }

  async function undoAboutPanelBackgroundFeature() {
    try {
      const response = await fetch("/__jurneos/about-panel-background-feature/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的五屏背景图功能修改。");
      setAboutPanelBackgroundFeature(payload.content);
      setCanUndoAboutPanelBackgroundFeature(false);
    } catch (error) {
      setAboutPanelBackgroundStatus((current) => ({ ...current, "02": error.message || "撤销失败，请重试。" }));
    }
  }

  async function undoFooterSecondaryRemoval() {
    setFooterSecondaryStatus("正在恢复刚才删除的页脚内容…");
    try {
      const response = await fetch("/__jurneos/footer-secondary/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的页脚删除操作。");

      setFooterSecondary(payload.content);
      setCanUndoFooterSecondary(false);
      setFooterSecondaryStatus("已撤销，页脚内容已经恢复。");
    } catch (error) {
      setFooterSecondaryStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoFooterInvitationRemoval() {
    setFooterInvitationStatus("正在恢复刚才删除的英文联系屏…");
    try {
      const response = await fetch("/__jurneos/footer-invitation/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的英文联系屏删除操作。");

      setFooterInvitation(payload.content);
      setCanUndoFooterInvitation(false);
      setFooterInvitationStatus("已撤销，英文联系屏已经恢复。");
    } catch (error) {
      setFooterInvitationStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutBlankPanelInsertion() {
    setAboutBlankPanelStatus("正在撤销本次插入的空白屏…");
    try {
      const response = await fetch("/__jurneos/about-blank-panel/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的空白屏插入操作。");

      setAboutBlankPanel(payload.content);
      setCanUndoAboutBlankPanel(false);
      setAboutBlankPanelStatus("已撤销，空白屏已经移除。");
    } catch (error) {
      setAboutBlankPanelStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutBlankPanelRemoval() {
    setAboutBlankPanelRemovalStatus("正在恢复刚才删除的上一屏…");
    try {
      const response = await fetch("/__jurneos/remove-first-blank-panel/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的上一屏删除操作。");

      setAboutBlankPanel(payload.content);
      setCanUndoAboutBlankPanelRemoval(false);
      setAboutBlankPanelRemovalStatus("已撤销，上一屏已经恢复。");
    } catch (error) {
      setAboutBlankPanelRemovalStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutBlankPanelAppearance() {
    setAboutBlankPanelAppearanceStatus("正在撤销本次白色背景修改…");
    try {
      const response = await fetch("/__jurneos/about-blank-panel-appearance/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的背景颜色修改。");

      setAboutBlankPanelAppearance(payload.content);
      setCanUndoAboutBlankPanelAppearance(false);
      setAboutBlankPanelAppearanceStatus("已撤销，空白屏恢复为黑色背景。");
    } catch (error) {
      setAboutBlankPanelAppearanceStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutBlankControlsRemoval() {
    setAboutBlankControlsStatus("正在撤销本次删除按钮…");
    try {
      const response = await fetch("/__jurneos/about-blank-controls/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的按钮删除操作。");

      setAboutBlankControls(payload.content);
      setCanUndoAboutBlankControls(false);
      setAboutBlankControlsStatus("已撤销，空白屏的 5 个按钮已经恢复。");
    } catch (error) {
      setAboutBlankControlsStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceAboutBlankImage(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const supportedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    if (!supportedTypes.includes(file.type)) {
      setAboutBlankImageStatus("请选择 JPG、PNG、WebP 或 AVIF 格式的图片。");
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      setAboutBlankImageStatus("图片不能超过 25 MB。");
      return;
    }

    setAboutBlankImageUploading(true);
    setAboutBlankImageStatus("正在检查并上传背景图片…");
    try {
      const details = await inspectImage(file);
      const response = await fetch("/__jurneos/about-blank-image", {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "背景图片上传失败，请重试。");

      setAboutBlankImageContent(payload.content);
      setCanUndoAboutBlankImage(true);
      setAboutBlankImageStatus("上传成功，背景图片已经铺满这一屏。刷新页面后仍会保留。");
    } catch (error) {
      setAboutBlankImageStatus(error.message || "背景图片上传失败，请重试。");
    } finally {
      setAboutBlankImageUploading(false);
    }
  }

  async function undoAboutBlankImageReplacement() {
    setAboutBlankImageUploading(true);
    setAboutBlankImageStatus("正在撤销最近一次背景图片修改…");
    try {
      const response = await fetch("/__jurneos/about-blank-image/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的背景图片修改。");

      setAboutBlankImageContent(payload.content);
      setCanUndoAboutBlankImage(false);
      setAboutBlankImageStatus(payload.content.src ? "已撤销，恢复为上一张背景图片。" : "已撤销，这一屏恢复为空白背景。");
    } catch (error) {
      setAboutBlankImageStatus(error.message || "撤销失败，请重试。");
    } finally {
      setAboutBlankImageUploading(false);
    }
  }

  async function undoAboutBlankImageFeature() {
    setAboutBlankImageFeatureStatus("正在撤销本次新增的背景图片功能…");
    try {
      const response = await fetch("/__jurneos/about-blank-image-feature/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的背景图片功能修改。");

      setAboutBlankImageFeature(payload.content);
      setCanUndoAboutBlankImageFeature(false);
      setAboutBlankImageFeatureStatus("已撤销，背景图片上传功能已经移除。");
    } catch (error) {
      setAboutBlankImageFeatureStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutLowerBlankPanelInsertion() {
    setAboutLowerBlankPanelStatus("正在撤销本次插入的空白页…");
    try {
      const response = await fetch("/__jurneos/about-lower-blank-panel/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的空白页插入操作。");

      setAboutLowerBlankPanel(payload.content);
      setCanUndoAboutLowerBlankPanel(false);
      setAboutLowerBlankPanelStatus("已撤销，下方空白页已经移除。");
    } catch (error) {
      setAboutLowerBlankPanelStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutLowerNextBlankPanelInsertion() {
    setAboutLowerNextBlankPanelStatus("正在撤销本次插入的空白屏…");
    try {
      const response = await fetch("/__jurneos/about-lower-next-blank-panel/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的空白屏插入操作。");

      setAboutLowerNextBlankPanel(payload.content);
      setCanUndoAboutLowerNextBlankPanel(false);
      setAboutLowerNextBlankPanelStatus("已撤销，新增加的下方空白屏已经移除。");
    } catch (error) {
      setAboutLowerNextBlankPanelStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineVideoBlankPanelInsertion() {
    setTimelineVideoBlankPanelStatus("正在撤销本次新增视频空白页…");
    try {
      const response = await fetch("/__jurneos/timeline-video-blank-panel/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的视频空白页插入操作。");
      setTimelineVideoBlankPanel(payload.content);
      setCanUndoTimelineVideoBlankPanel(false);
      setTimelineVideoBlankPanelStatus("已撤销，时间轴下方的视频空白页已移除。");
    } catch (error) {
      setTimelineVideoBlankPanelStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceTimelineVideoBlank(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const hasVideoMime = file.type.startsWith("video/");
    const hasVideoExtension = /\.[a-z0-9]{2,10}$/i.test(file.name);
    if (!hasVideoMime && !hasVideoExtension) {
      setTimelineVideoBlankStatus("请选择视频文件。");
      return;
    }
    if (file.size > 200 * 1024 * 1024) {
      setTimelineVideoBlankStatus("视频不能超过 200 MB。");
      return;
    }

    setTimelineVideoBlankUploading(true);
    setTimelineVideoBlankStatus("正在上传视频…");
    try {
      const response = await fetch("/__jurneos/timeline-video-blank", {
        method: "PUT",
        headers: {
          "Content-Type": file.type || "application/octet-stream",
          "X-File-Name": encodeURIComponent(file.name),
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "视频上传失败，请重试。");
      setTimelineVideoBlankContent(payload.content);
      setCanUndoTimelineVideoBlank(true);
      setTimelineVideoBlankStatus("视频已上传并保留；实际播放能力取决于浏览器对该格式与编码的支持。");
    } catch (error) {
      setTimelineVideoBlankStatus(error.message || "视频上传失败，请重试。");
    } finally {
      setTimelineVideoBlankUploading(false);
    }
  }

  async function undoTimelineVideoBlankReplacement() {
    setTimelineVideoBlankUploading(true);
    setTimelineVideoBlankStatus("正在撤销最近一次视频修改…");
    try {
      const response = await fetch("/__jurneos/timeline-video-blank/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的视频修改。");
      setTimelineVideoBlankContent(payload.content);
      setCanUndoTimelineVideoBlank(false);
      setTimelineVideoBlankStatus(payload.content.src ? "已撤销，恢复为上一个视频。" : "已撤销，这一页恢复为黑色空白页。");
    } catch (error) {
      setTimelineVideoBlankStatus(error.message || "撤销失败，请重试。");
    } finally {
      setTimelineVideoBlankUploading(false);
    }
  }

  async function undoTimelineFollowupBlankInsertion(panelId) {
    setTimelineFollowupBlankStatus((current) => ({ ...current, [panelId]: `正在撤销第 ${panelId} 张空白屏…` }));
    try {
      const response = await fetch(`/__jurneos/timeline-followup-blank/undo?panel=${panelId}`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || `没有可撤销的第 ${panelId} 张空白屏插入操作。`);

      if (panelId === "01") setTimelineFollowupBlank01(payload.content);
      if (panelId === "02") setTimelineFollowupBlank02(payload.content);
      if (panelId === "03") setTimelineFollowupBlank03(payload.content);
      if (panelId === "04") setTimelineFollowupBlank04(payload.content);
      if (panelId === "05") setTimelineFollowupBlank05(payload.content);
      if (panelId === "06") setTimelineFollowupBlank06(payload.content);
      if (panelId === "07") setTimelineFollowupBlank07(payload.content);
      if (panelId === "08") setTimelineFollowupBlank08(payload.content);
      setCanUndoTimelineFollowupBlank((current) => ({ ...current, [panelId]: false }));
      setTimelineFollowupBlankStatus((current) => ({
        ...current,
        [panelId]: payload.content.visible
          ? `已撤销，第 ${panelId} 张屏已经恢复。`
          : `已撤销，第 ${panelId} 张空白屏已经独立移除。`,
      }));
    } catch (error) {
      setTimelineFollowupBlankStatus((current) => ({ ...current, [panelId]: error.message || "撤销失败，请重试。" }));
    }
  }

  async function undoStatementFollowupBlankPanelInsertion() {
    setStatementFollowupBlankPanelStatus("正在撤销本次新增空白屏…");
    try {
      const response = await fetch("/__jurneos/statement-followup-blank-panel/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的空白屏新增操作。");
      setStatementFollowupBlankPanel(payload.content);
      setCanUndoStatementFollowupBlankPanel(false);
      setStatementFollowupBlankPanelStatus("已撤销，THE PROJECT 下方的空白屏已经移除。");
    } catch (error) {
      setStatementFollowupBlankPanelStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementFollowupBlankRemovalChange() {
    setStatementFollowupBlankRemovalStatus("正在恢复已删除的整屏图片页…");
    try {
      const response = await fetch("/__jurneos/statement-followup-blank-removal/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片页删除操作。");
      setStatementFollowupBlankRemoval(payload.content);
      setCanUndoStatementFollowupBlankRemoval(false);
      setStatementFollowupBlankRemovalStatus("已撤销，整屏图片页已经恢复，原图片保持不变。");
    } catch (error) {
      setStatementFollowupBlankRemovalStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementSecondFollowupBlankPanelInsertion() {
    setStatementSecondFollowupBlankPanelStatus("正在撤销本次新增空白屏…");
    try {
      const response = await fetch("/__jurneos/statement-second-followup-blank-panel/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的空白屏新增操作。");
      setStatementSecondFollowupBlankPanel(payload.content);
      setCanUndoStatementSecondFollowupBlankPanel(false);
      setStatementSecondFollowupBlankPanelStatus("已撤销，新空白屏已经独立移除。");
    } catch (error) {
      setStatementSecondFollowupBlankPanelStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementFollowupWhitePanelThreeInsertion() {
    setStatementFollowupWhitePanelThreeStatus("正在撤销本次新增白屏…");
    try {
      const response = await fetch("/__jurneos/statement-followup-white-panel-03/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的新白屏新增操作。");
      setStatementFollowupWhitePanelThree(payload.content);
      setCanUndoStatementFollowupWhitePanelThree(false);
      setStatementFollowupWhitePanelThreeStatus("已撤销，新白屏已经独立移除。");
    } catch (error) {
      setStatementFollowupWhitePanelThreeStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementFollowupBlankPanelFourInsertion() {
    setStatementFollowupBlankPanelFourStatus("正在撤销本次新增空白屏…");
    try {
      const response = await fetch("/__jurneos/statement-followup-blank-panel-04/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的新空白屏新增操作。");
      setStatementFollowupBlankPanelFour(payload.content);
      setCanUndoStatementFollowupBlankPanelFour(false);
      setStatementFollowupBlankPanelFourStatus("已撤销，新空白屏已经独立移除。");
    } catch (error) {
      setStatementFollowupBlankPanelFourStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementFollowupBlankPanelFourAppearanceChange() {
    setStatementFollowupBlankPanelFourAppearanceStatus("正在撤销本次白色背景修改…");
    try {
      const response = await fetch("/__jurneos/statement-followup-blank-panel-04-appearance/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的背景修改。");
      setStatementFollowupBlankPanelFourAppearance(payload.content);
      setCanUndoStatementFollowupBlankPanelFourAppearance(false);
      setStatementFollowupBlankPanelFourAppearanceStatus("已撤销，本屏恢复为黑色背景。");
    } catch (error) {
      setStatementFollowupBlankPanelFourAppearanceStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openStatementFollowupScrollFlyEditor() {
    setStatementFollowupScrollFlyDraft({ ...statementFollowupScrollFlyContent });
    setStatementFollowupScrollFlyContentStatus("");
    setStatementFollowupScrollFlyEditorOpen(true);
  }

  async function saveStatementFollowupScrollFlyContent(event) {
    event.preventDefault();
    setStatementFollowupScrollFlySaving(true);
    setStatementFollowupScrollFlyContentStatus("正在保存本屏全部文字…");
    try {
      const response = await fetch("/__jurneos/statement-followup-scroll-fly-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(statementFollowupScrollFlyDraft),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "无法保存本屏文字。");
      setStatementFollowupScrollFlyContent(payload.content);
      setCanUndoStatementFollowupScrollFlyContent(true);
      setStatementFollowupScrollFlyEditorOpen(false);
      setStatementFollowupScrollFlyContentStatus("本屏全部文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setStatementFollowupScrollFlyContentStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setStatementFollowupScrollFlySaving(false);
    }
  }

  async function undoStatementFollowupScrollFlyContentChange() {
    setStatementFollowupScrollFlyContentStatus("正在撤销最近一次本屏文字修改…");
    try {
      const response = await fetch("/__jurneos/statement-followup-scroll-fly-content/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的本屏文字修改。");
      setStatementFollowupScrollFlyContent(payload.content);
      setStatementFollowupScrollFlyDraft(payload.content);
      setCanUndoStatementFollowupScrollFlyContent(false);
      setStatementFollowupScrollFlyContentStatus("已撤销，本屏文字恢复为上一版。");
    } catch (error) {
      setStatementFollowupScrollFlyContentStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementFollowupScrollFlyHeadingFormatChange() {
    setStatementFollowupScrollFlyHeadingFormatStatus("正在撤销本次两行文字排版…");
    try {
      const response = await fetch("/__jurneos/statement-followup-scroll-fly-heading-format/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的两行文字排版。");
      setStatementFollowupScrollFlyHeadingFormat(payload.format);
      setStatementFollowupScrollFlyContent(payload.content);
      setStatementFollowupScrollFlyDraft(payload.content);
      setCanUndoStatementFollowupScrollFlyHeadingFormat(false);
      setStatementFollowupScrollFlyHeadingFormatStatus("已撤销，主标题恢复为上一版文字与自动换行。");
    } catch (error) {
      setStatementFollowupScrollFlyHeadingFormatStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementFollowupScrollFlyLayoutChange() {
    setStatementFollowupScrollFlyLayoutStatus("正在撤销滚动飞入组件…");
    try {
      const response = await fetch("/__jurneos/statement-followup-scroll-fly-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的滚动飞入组件修改。");
      setStatementFollowupScrollFlyLayout(payload.content);
      setCanUndoStatementFollowupScrollFlyLayout(false);
      setStatementFollowupScrollFlyEditorOpen(false);
      setStatementFollowupScrollFlyLayoutStatus("已撤销，本屏恢复为纯白空白页。");
    } catch (error) {
      setStatementFollowupScrollFlyLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementFollowupCinematicLayoutChange() {
    setStatementFollowupCinematicLayoutStatus("正在撤销电影列表排版…");
    try {
      const response = await fetch("/__jurneos/statement-followup-cinematic-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的电影列表排版修改。");
      setStatementFollowupCinematicLayout(payload.content);
      setCanUndoStatementFollowupCinematicLayout(false);
      setStatementFollowupCinematicLayoutStatus("已撤销，本屏恢复为纯白空白页。");
    } catch (error) {
      setStatementFollowupCinematicLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openStatementFollowupCinematicHeaderEditor() {
    setStatementFollowupCinematicDraft({
      heading: statementFollowupCinematicContent.heading,
      subtitle: statementFollowupCinematicContent.subtitle,
    });
    setStatementFollowupCinematicContentStatus("");
    setStatementFollowupCinematicEditorTarget("header");
  }

  function openStatementFollowupCinematicItemEditor(cardId) {
    const item = statementFollowupCinematicContent.items.find((entry) => entry.key === cardId);
    if (!item) return;
    setStatementFollowupCinematicDraft({ ...item });
    setStatementFollowupCinematicContentStatus("");
    setStatementFollowupCinematicEditorTarget(cardId);
  }

  async function saveStatementFollowupCinematicContent(event) {
    event.preventDefault();
    if (!statementFollowupCinematicDraft || !statementFollowupCinematicEditorTarget) return;
    setStatementFollowupCinematicContentSaving(true);
    setStatementFollowupCinematicContentStatus("正在保存文字…");
    try {
      const content = statementFollowupCinematicEditorTarget === "header"
        ? { ...statementFollowupCinematicContent, ...statementFollowupCinematicDraft }
        : {
            ...statementFollowupCinematicContent,
            items: statementFollowupCinematicContent.items.map((item) => item.key === statementFollowupCinematicEditorTarget
              ? { ...item, ...statementFollowupCinematicDraft }
              : item),
          };
      const response = await fetch("/__jurneos/statement-followup-cinematic-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");
      setStatementFollowupCinematicContent(payload.content);
      setCanUndoStatementFollowupCinematicContent(true);
      setStatementFollowupCinematicContentStatus("文字已保存，刷新页面后仍会保留。");
      setStatementFollowupCinematicEditorTarget("");
      setStatementFollowupCinematicDraft(null);
    } catch (error) {
      setStatementFollowupCinematicContentStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setStatementFollowupCinematicContentSaving(false);
    }
  }

  async function undoStatementFollowupCinematicContentChange() {
    setStatementFollowupCinematicContentStatus("正在撤销最近一次文字修改…");
    try {
      const response = await fetch("/__jurneos/statement-followup-cinematic-content/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setStatementFollowupCinematicContent(payload.content);
      setCanUndoStatementFollowupCinematicContent(false);
      setStatementFollowupCinematicContentStatus("已撤销，电影列表文字恢复为上一版。");
    } catch (error) {
      setStatementFollowupCinematicContentStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceStatementFollowupCinematicImage(event, cardId) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(file.type)) {
      setStatementFollowupCinematicImageStatus((current) => ({ ...current, [cardId]: "请选择 JPG、PNG、WebP 或 AVIF 图片。" }));
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setStatementFollowupCinematicImageStatus((current) => ({ ...current, [cardId]: "图片不能超过 25 MB。" }));
      return;
    }

    setStatementFollowupCinematicImageUploading((current) => ({ ...current, [cardId]: true }));
    setStatementFollowupCinematicImageStatus((current) => ({ ...current, [cardId]: "正在替换当前图片…" }));
    try {
      const details = await inspectImage(file);
      const response = await fetch(`/__jurneos/statement-followup-cinematic-image?card=${cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "图片上传失败，请重试。");
      setStatementFollowupCinematicImages(payload.content);
      setCanUndoStatementFollowupCinematicImage((current) => ({ ...current, [cardId]: true }));
      setStatementFollowupCinematicImageStatus((current) => ({ ...current, [cardId]: "图片已更换，刷新后仍会保留。" }));
    } catch (error) {
      setStatementFollowupCinematicImageStatus((current) => ({ ...current, [cardId]: error.message || "图片上传失败，请重试。" }));
    } finally {
      setStatementFollowupCinematicImageUploading((current) => ({ ...current, [cardId]: false }));
    }
  }

  async function undoStatementFollowupCinematicImageChange(cardId) {
    setStatementFollowupCinematicImageUploading((current) => ({ ...current, [cardId]: true }));
    setStatementFollowupCinematicImageStatus((current) => ({ ...current, [cardId]: "正在撤销当前图片修改…" }));
    try {
      const response = await fetch(`/__jurneos/statement-followup-cinematic-image/undo?card=${cardId}`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的当前图片修改。");
      setStatementFollowupCinematicImages(payload.content);
      setCanUndoStatementFollowupCinematicImage((current) => ({ ...current, [cardId]: false }));
      setStatementFollowupCinematicImageStatus((current) => ({ ...current, [cardId]: "已撤销，当前卡片恢复为上一张图片。" }));
    } catch (error) {
      setStatementFollowupCinematicImageStatus((current) => ({ ...current, [cardId]: error.message || "撤销失败，请重试。" }));
    } finally {
      setStatementFollowupCinematicImageUploading((current) => ({ ...current, [cardId]: false }));
    }
  }

  async function undoStatementSecondFollowupBlankAppearanceChange() {
    setStatementSecondFollowupBlankAppearanceStatus("正在撤销本次白色背景…");
    try {
      const response = await fetch("/__jurneos/statement-second-followup-blank-appearance/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的背景修改。");
      setStatementSecondFollowupBlankAppearance(payload.content);
      setCanUndoStatementSecondFollowupBlankAppearance(false);
      setStatementSecondFollowupBlankAppearanceStatus("已撤销，本屏背景恢复为黑色。");
    } catch (error) {
      setStatementSecondFollowupBlankAppearanceStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementSecondFollowupBlurLayoutChange() {
    setStatementSecondFollowupBlurLayoutStatus("正在撤销本次视频卡片排版…");
    try {
      const response = await fetch("/__jurneos/statement-second-followup-blur-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的视频卡片排版修改。");
      setStatementSecondFollowupBlurLayout(payload.content);
      setCanUndoStatementSecondFollowupBlurLayout(false);
      setStatementSecondFollowupBlurLayoutStatus("已撤销，本屏恢复为纯白空白页。");
    } catch (error) {
      setStatementSecondFollowupBlurLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoStatementSecondFollowupBlurRemovalChange() {
    setStatementSecondFollowupBlurRemovalStatus("正在恢复已删除的视频卡片页…");
    try {
      const response = await fetch("/__jurneos/statement-second-followup-blur-removal/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的视频卡片页删除操作。");
      setStatementSecondFollowupBlurRemoval(payload.content);
      setCanUndoStatementSecondFollowupBlurRemoval(false);
      setStatementSecondFollowupBlurRemovalStatus("已撤销，四视频卡片页已经恢复，原有视频和文字保持不变。");
    } catch (error) {
      setStatementSecondFollowupBlurRemovalStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openStatementSecondFollowupBlurEditor(cardId) {
    const card = statementSecondFollowupBlurContent.cards.find((item) => item.id === cardId);
    if (!card) return;
    setStatementSecondFollowupBlurDraft({ ...card });
    setStatementSecondFollowupBlurContentStatus("");
    setStatementSecondFollowupBlurEditorId(cardId);
  }

  async function saveStatementSecondFollowupBlurContent(event) {
    event.preventDefault();
    if (!statementSecondFollowupBlurDraft || !statementSecondFollowupBlurEditorId) return;
    setStatementSecondFollowupBlurContentSaving(true);
    setStatementSecondFollowupBlurContentStatus("正在保存当前卡片文字…");
    try {
      const content = {
        cards: statementSecondFollowupBlurContent.cards.map((card) => card.id === statementSecondFollowupBlurEditorId
          ? { ...card, ...statementSecondFollowupBlurDraft }
          : card),
      };
      const response = await fetch("/__jurneos/statement-second-followup-blur-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "卡片文字保存失败，请重试。");
      setStatementSecondFollowupBlurContent(payload.content);
      setCanUndoStatementSecondFollowupBlurContent(true);
      setStatementSecondFollowupBlurContentStatus(`第 ${statementSecondFollowupBlurEditorId} 张卡片文字已保存，刷新后仍会保留。`);
      setStatementSecondFollowupBlurEditorId("");
      setStatementSecondFollowupBlurDraft(null);
    } catch (error) {
      setStatementSecondFollowupBlurContentStatus(error.message || "卡片文字保存失败，请重试。");
    } finally {
      setStatementSecondFollowupBlurContentSaving(false);
    }
  }

  async function undoStatementSecondFollowupBlurContentChange() {
    setStatementSecondFollowupBlurContentStatus("正在撤销最近一次卡片文字修改…");
    try {
      const response = await fetch("/__jurneos/statement-second-followup-blur-content/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的卡片文字修改。");
      setStatementSecondFollowupBlurContent(payload.content);
      setCanUndoStatementSecondFollowupBlurContent(false);
      setStatementSecondFollowupBlurContentStatus("已撤销，四张卡片文字恢复为上一版。");
    } catch (error) {
      setStatementSecondFollowupBlurContentStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceStatementSecondFollowupBlurVideo(event, cardId) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    const allowedTypes = ["video/mp4", "video/quicktime", "video/x-quicktime", "video/webm", "video/ogg"];
    if (!allowedTypes.includes(file.type)) {
      setStatementSecondFollowupBlurVideoStatus((current) => ({ ...current, [cardId]: "请选择 MP4、MOV、WebM 或 OGV 视频。" }));
      return;
    }
    if (file.size > 200 * 1024 * 1024) {
      setStatementSecondFollowupBlurVideoStatus((current) => ({ ...current, [cardId]: "视频不能超过 200 MB。" }));
      return;
    }

    setStatementSecondFollowupBlurVideoUploading((current) => ({ ...current, [cardId]: true }));
    setStatementSecondFollowupBlurVideoStatus((current) => ({ ...current, [cardId]: "正在替换当前卡片视频…" }));
    try {
      const details = await inspectVideo(file);
      const response = await fetch(`/__jurneos/statement-second-followup-blur-video?card=${cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Video-Width": String(details.width),
          "X-Video-Height": String(details.height),
          "X-Video-Ratio": details.ratio,
          "X-Video-Duration": String(details.duration),
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "卡片视频上传失败，请重试。");
      setStatementSecondFollowupBlurVideos(payload.content);
      setCanUndoStatementSecondFollowupBlurVideo((current) => ({ ...current, [cardId]: true }));
      setStatementSecondFollowupBlurVideoStatus((current) => ({ ...current, [cardId]: "视频已更换，刷新页面后仍会保留。" }));
    } catch (error) {
      setStatementSecondFollowupBlurVideoStatus((current) => ({ ...current, [cardId]: error.message || "卡片视频上传失败，请重试。" }));
    } finally {
      setStatementSecondFollowupBlurVideoUploading((current) => ({ ...current, [cardId]: false }));
    }
  }

  async function undoStatementSecondFollowupBlurVideoChange(cardId) {
    setStatementSecondFollowupBlurVideoUploading((current) => ({ ...current, [cardId]: true }));
    setStatementSecondFollowupBlurVideoStatus((current) => ({ ...current, [cardId]: "正在撤销当前卡片最近一次视频修改…" }));
    try {
      const response = await fetch(`/__jurneos/statement-second-followup-blur-video/undo?card=${cardId}`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的当前卡片视频修改。");
      setStatementSecondFollowupBlurVideos(payload.content);
      setCanUndoStatementSecondFollowupBlurVideo((current) => ({ ...current, [cardId]: false }));
      setStatementSecondFollowupBlurVideoStatus((current) => ({ ...current, [cardId]: "已撤销，当前卡片恢复为上一个视频。" }));
    } catch (error) {
      setStatementSecondFollowupBlurVideoStatus((current) => ({ ...current, [cardId]: error.message || "撤销失败，请重试。" }));
    } finally {
      setStatementSecondFollowupBlurVideoUploading((current) => ({ ...current, [cardId]: false }));
    }
  }

  async function replaceStatementFollowupBlankImage(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(file.type)) {
      setStatementFollowupBlankImageStatus("请选择 JPG、PNG、WebP 或 AVIF 格式的图片。");
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setStatementFollowupBlankImageStatus("图片不能超过 25 MB。");
      return;
    }

    setStatementFollowupBlankImageUploading(true);
    setStatementFollowupBlankImageStatus("正在上传整屏图片…");
    try {
      const details = await inspectImage(file);
      const response = await fetch("/__jurneos/statement-followup-blank-image", {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "图片上传失败，请重试。");
      setStatementFollowupBlankImage(payload.content);
      setCanUndoStatementFollowupBlankImage(true);
      setStatementFollowupBlankImageStatus("图片已铺满本屏，刷新页面后仍会保留。");
    } catch (error) {
      setStatementFollowupBlankImageStatus(error.message || "图片上传失败，请重试。");
    } finally {
      setStatementFollowupBlankImageUploading(false);
    }
  }

  async function undoStatementFollowupBlankImageChange() {
    setStatementFollowupBlankImageUploading(true);
    setStatementFollowupBlankImageStatus("正在撤销最近一次图片修改…");
    try {
      const response = await fetch("/__jurneos/statement-followup-blank-image/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片修改。");
      setStatementFollowupBlankImage(payload.content);
      setCanUndoStatementFollowupBlankImage(false);
      setStatementFollowupBlankImageStatus(payload.content.src ? "已撤销，恢复为上一张图片。" : "已撤销，本屏恢复为黑色空白页。");
    } catch (error) {
      setStatementFollowupBlankImageStatus(error.message || "撤销失败，请重试。");
    } finally {
      setStatementFollowupBlankImageUploading(false);
    }
  }

  async function replaceTimelineBlankFiveBackground(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(file.type)) {
      setTimelineBlankFiveBackgroundStatus("请选择 JPG、PNG、WebP 或 AVIF 格式的图片。");
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setTimelineBlankFiveBackgroundStatus("背景图片不能超过 25 MB。");
      return;
    }

    setTimelineBlankFiveBackgroundUploading(true);
    setTimelineBlankFiveBackgroundStatus("正在更换本页背景图片…");
    try {
      const details = await inspectImage(file);
      const response = await fetch("/__jurneos/timeline-blank-five-background", {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "背景图片上传失败，请重试。");
      setTimelineBlankFiveBackground(payload.content);
      setCanUndoTimelineBlankFiveBackground(true);
      setTimelineBlankFiveBackgroundStatus("本页背景图片已更换，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankFiveBackgroundStatus(error.message || "背景图片上传失败，请重试。");
    } finally {
      setTimelineBlankFiveBackgroundUploading(false);
    }
  }

  async function undoTimelineBlankFiveBackgroundChange() {
    setTimelineBlankFiveBackgroundUploading(true);
    setTimelineBlankFiveBackgroundStatus("正在撤销最近一次背景图片修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-five-background/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的背景图片修改。");
      setTimelineBlankFiveBackground(payload.content);
      setCanUndoTimelineBlankFiveBackground(false);
      setTimelineBlankFiveBackgroundStatus("已撤销，本页背景恢复为上一版。");
    } catch (error) {
      setTimelineBlankFiveBackgroundStatus(error.message || "撤销失败，请重试。");
    } finally {
      setTimelineBlankFiveBackgroundUploading(false);
    }
  }

  async function undoTimelineBlankSevenLayoutChange() {
    setTimelineBlankSevenLayoutStatus("正在撤销本次文件夹排版…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-seven-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文件夹排版修改。");
      setTimelineBlankSevenLayout(payload.content);
      setCanUndoTimelineBlankSevenLayout(false);
      setTimelineBlankSevenLayoutStatus("已撤销，本页恢复为黑色空白屏。");
    } catch (error) {
      setTimelineBlankSevenLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineGalleryFollowupBlankPanelInsertion() {
    setTimelineGalleryFollowupBlankPanelStatus("正在撤销本次新增空白屏…");
    try {
      const response = await fetch("/__jurneos/timeline-gallery-followup-blank-panel/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的新空白屏新增操作。");
      setTimelineGalleryFollowupBlankPanel(payload.content);
      setCanUndoTimelineGalleryFollowupBlankPanel(false);
      setTimelineGalleryFollowupBlankPanelStatus("已撤销，拍摄设备页下方的空白屏已经移除。");
    } catch (error) {
      setTimelineGalleryFollowupBlankPanelStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openTimelineGalleryPricingEditor() {
    setTimelineGalleryPricingDraft(JSON.parse(JSON.stringify(timelineGalleryPricingContent)));
    setTimelineGalleryPricingContentStatus("");
    setTimelineGalleryPricingEditorOpen(true);
  }

  function updateTimelineGalleryPricingTier(tierIndex, field, value) {
    setTimelineGalleryPricingDraft((current) => ({
      ...current,
      tiers: current.tiers.map((tier, index) => index === tierIndex ? { ...tier, [field]: value } : tier),
    }));
  }

  function updateTimelineGalleryPricingFeature(tierIndex, featureIndex, field, value) {
    setTimelineGalleryPricingDraft((current) => ({
      ...current,
      tiers: current.tiers.map((tier, index) => index === tierIndex ? {
        ...tier,
        features: tier.features.map((feature, itemIndex) => itemIndex === featureIndex ? { ...feature, [field]: value } : feature),
      } : tier),
    }));
  }

  async function saveTimelineGalleryPricingContent(event) {
    event.preventDefault();
    if (!timelineGalleryPricingDraft) return;
    setTimelineGalleryPricingSaving(true);
    setTimelineGalleryPricingContentStatus("正在保存全部卡片文字…");
    try {
      const response = await fetch("/__jurneos/timeline-gallery-followup-pricing-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(timelineGalleryPricingDraft),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "卡片文字保存失败，请重试。");
      setTimelineGalleryPricingContent(payload.content);
      setCanUndoTimelineGalleryPricingContent(true);
      setTimelineGalleryPricingContentStatus("全部卡片文字已保存，刷新页面后仍会保留。");
      setTimelineGalleryPricingEditorOpen(false);
    } catch (error) {
      setTimelineGalleryPricingContentStatus(error.message || "卡片文字保存失败，请重试。");
    } finally {
      setTimelineGalleryPricingSaving(false);
    }
  }

  async function undoTimelineGalleryPricingContentChange() {
    setTimelineGalleryPricingContentStatus("正在撤销最近一次卡片文字修改…");
    try {
      const response = await fetch("/__jurneos/timeline-gallery-followup-pricing-content/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的卡片文字修改。");
      setTimelineGalleryPricingContent(payload.content);
      setCanUndoTimelineGalleryPricingContent(false);
      setTimelineGalleryPricingContentStatus("已撤销，卡片文字恢复为上一版。");
    } catch (error) {
      setTimelineGalleryPricingContentStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineGalleryPricingLayoutChange() {
    setTimelineGalleryPricingLayoutStatus("正在撤销本次定价卡片排版…");
    try {
      const response = await fetch("/__jurneos/timeline-gallery-followup-pricing-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的定价卡片排版修改。");
      setTimelineGalleryPricingLayout(payload.content);
      setCanUndoTimelineGalleryPricingLayout(false);
      setTimelineGalleryPricingLayoutStatus("已撤销，本页恢复为黑色空白屏。");
    } catch (error) {
      setTimelineGalleryPricingLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openTimelineBlankSixEditor(target) {
    if (target === "header") {
      setTimelineBlankSixDraft({ ...timelineBlankSixContent.header });
    } else {
      const item = timelineBlankSixContent.items.find((entry) => entry.id === target);
      if (!item) return;
      setTimelineBlankSixDraft({ ...item });
    }
    setTimelineBlankSixContentStatus("");
    setTimelineBlankSixEditorTarget(target);
  }

  async function commitTimelineBlankSixContent(content, successMessage) {
    setTimelineBlankSixContentSaving(true);
    setTimelineBlankSixContentStatus("正在保存卡片内容…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-six-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "卡片内容保存失败，请重试。");
      setTimelineBlankSixContent(payload.content);
      setCanUndoTimelineBlankSixContent(true);
      setTimelineBlankSixContentStatus(successMessage);
      setTimelineBlankSixEditorTarget("");
    } catch (error) {
      setTimelineBlankSixContentStatus(error.message || "卡片内容保存失败，请重试。");
    } finally {
      setTimelineBlankSixContentSaving(false);
    }
  }

  async function saveTimelineBlankSixEditor(event) {
    event.preventDefault();
    if (!timelineBlankSixDraft) return;
    if (timelineBlankSixEditorTarget === "header") {
      await commitTimelineBlankSixContent({
        ...timelineBlankSixContent,
        header: { ...timelineBlankSixDraft, visible: true },
      }, "页眉文字已保存，刷新页面后仍会保留。");
      return;
    }
    const nextItems = timelineBlankSixContent.items.map((item) => item.id === timelineBlankSixEditorTarget
      ? { ...item, ...timelineBlankSixDraft, titleVisible: true, descriptionVisible: true, logoVisible: true }
      : item);
    await commitTimelineBlankSixContent({ ...timelineBlankSixContent, items: nextItems }, "当前卡片的文字与标志已保存。");
  }

  function deleteTimelineBlankSixHeader() {
    commitTimelineBlankSixContent({
      ...timelineBlankSixContent,
      header: { ...timelineBlankSixContent.header, visible: false },
    }, "页眉文字已隐藏，可用撤销恢复。");
  }

  function deleteTimelineBlankSixCardText(cardId) {
    const items = timelineBlankSixContent.items.map((item) => item.id === cardId
      ? { ...item, titleVisible: false, descriptionVisible: false }
      : item);
    commitTimelineBlankSixContent({ ...timelineBlankSixContent, items }, "当前卡片文字已隐藏，可用撤销恢复。");
  }

  function deleteTimelineBlankSixCardLogo(cardId) {
    const items = timelineBlankSixContent.items.map((item) => item.id === cardId
      ? { ...item, logoVisible: false }
      : item);
    commitTimelineBlankSixContent({ ...timelineBlankSixContent, items }, "当前卡片标志已隐藏，可用撤销恢复。");
  }

  async function undoTimelineBlankSixContentChange() {
    setTimelineBlankSixContentStatus("正在撤销最近一次文字或标志修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-six-content/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字或标志修改。");
      setTimelineBlankSixContent(payload.content);
      setCanUndoTimelineBlankSixContent(false);
      setTimelineBlankSixContentStatus("已撤销，文字与标志恢复为上一版。");
    } catch (error) {
      setTimelineBlankSixContentStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineBlankSixLayoutChange() {
    setTimelineBlankSixLayoutStatus("正在撤销本次卡片排版…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-six-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的卡片排版修改。");
      setTimelineBlankSixLayout(payload.content);
      setCanUndoTimelineBlankSixLayout(false);
      setTimelineBlankSixLayoutStatus("已撤销，本页恢复为空白屏。");
    } catch (error) {
      setTimelineBlankSixLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineBlankSixPositionChange() {
    setTimelineBlankSixPositionStatus("正在撤销本次上移一屏…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-six-position/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的位置调整。");
      setTimelineBlankSixPosition(payload.content);
      setCanUndoTimelineBlankSixPosition(false);
      setTimelineBlankSixPositionStatus("已撤销，七卡展开页已恢复到人物背景页下方。");
    } catch (error) {
      setTimelineBlankSixPositionStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceTimelineBlankSixImage(event, cardId) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(file.type)) {
      setTimelineBlankSixImageStatus((current) => ({ ...current, [cardId]: "请选择 JPG、PNG、WebP 或 AVIF 图片。" }));
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setTimelineBlankSixImageStatus((current) => ({ ...current, [cardId]: "图片不能超过 25 MB。" }));
      return;
    }
    setTimelineBlankSixImageUploading((current) => ({ ...current, [cardId]: true }));
    setTimelineBlankSixImageStatus((current) => ({ ...current, [cardId]: "正在更换当前卡片图片…" }));
    try {
      const details = await inspectImage(file);
      const response = await fetch(`/__jurneos/timeline-blank-six-image?card=${cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "卡片图片上传失败，请重试。");
      setTimelineBlankSixImages(payload.content);
      setCanUndoTimelineBlankSixImage((current) => ({ ...current, [cardId]: true }));
      setTimelineBlankSixImageStatus((current) => ({ ...current, [cardId]: "图片已更换；折叠与展开共用这一张图片。" }));
    } catch (error) {
      setTimelineBlankSixImageStatus((current) => ({ ...current, [cardId]: error.message || "卡片图片上传失败，请重试。" }));
    } finally {
      setTimelineBlankSixImageUploading((current) => ({ ...current, [cardId]: false }));
    }
  }

  async function undoTimelineBlankSixImageChange(cardId) {
    setTimelineBlankSixImageUploading((current) => ({ ...current, [cardId]: true }));
    setTimelineBlankSixImageStatus((current) => ({ ...current, [cardId]: "正在撤销当前卡片图片修改…" }));
    try {
      const response = await fetch(`/__jurneos/timeline-blank-six-image/undo?card=${cardId}`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的卡片图片修改。");
      setTimelineBlankSixImages(payload.content);
      setCanUndoTimelineBlankSixImage((current) => ({ ...current, [cardId]: false }));
      setTimelineBlankSixImageStatus((current) => ({ ...current, [cardId]: "已撤销，当前卡片图片恢复为上一版。" }));
    } catch (error) {
      setTimelineBlankSixImageStatus((current) => ({ ...current, [cardId]: error.message || "撤销失败，请重试。" }));
    } finally {
      setTimelineBlankSixImageUploading((current) => ({ ...current, [cardId]: false }));
    }
  }

  function openTimelineBlankOneCopyEditor() {
    setTimelineBlankOneCopyDraft(timelineBlankOneCopy);
    setTimelineBlankOneCopyEditorOpen(true);
  }

  async function saveTimelineBlankOneCopy(event) {
    event.preventDefault();
    const nextCopy = {
      title: timelineBlankOneCopyDraft.title.trim(),
      subtitle: timelineBlankOneCopyDraft.subtitle.trim(),
      principles: timelineBlankOneCopyDraft.principles.trim(),
      principlesZh: timelineBlankOneCopyDraft.principlesZh.trim(),
      values: timelineBlankOneCopyDraft.values.map((item) => ({ title: item.title.trim(), body: item.body.trim() })),
      footer: timelineBlankOneCopyDraft.footer.trim(),
    };
    if (!nextCopy.title || !nextCopy.subtitle || !nextCopy.principles || !nextCopy.principlesZh || !nextCopy.footer || nextCopy.values.length !== 4 || nextCopy.values.some((item) => !item.title || !item.body)) {
      setTimelineBlankOneCopyStatus("标题、价值主张、四组说明和底部英文均不能为空。");
      return;
    }

    setTimelineBlankOneCopySaving(true);
    setTimelineBlankOneCopyStatus("正在保存本页全部文字…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-one-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextCopy),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");
      setTimelineBlankOneCopy(payload.content);
      setTimelineBlankOneCopyDraft(payload.content);
      setCanUndoTimelineBlankOneCopy(true);
      setTimelineBlankOneCopyEditorOpen(false);
      setTimelineBlankOneCopyStatus("本页全部文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankOneCopyStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setTimelineBlankOneCopySaving(false);
    }
  }

  async function undoTimelineBlankOneCopyChange() {
    setTimelineBlankOneCopyStatus("正在撤销最近一次文字修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-one-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setTimelineBlankOneCopy(payload.content);
      setTimelineBlankOneCopyDraft(payload.content);
      setCanUndoTimelineBlankOneCopy(false);
      setTimelineBlankOneCopyStatus("已撤销，本页文字恢复为修改前的版本。");
    } catch (error) {
      setTimelineBlankOneCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openTimelineBlankOneExtraRowEditor() {
    setTimelineBlankOneExtraRowDraft(timelineBlankOneExtraRow);
    setTimelineBlankOneExtraRowEditorOpen(true);
  }

  async function saveTimelineBlankOneExtraRow(event) {
    event.preventDefault();
    const nextCopy = {
      title: timelineBlankOneExtraRowDraft.title.trim(),
      body: timelineBlankOneExtraRowDraft.body.trim(),
    };
    if (!nextCopy.title || !nextCopy.body) {
      setTimelineBlankOneExtraRowStatus("复制行的标题和说明均不能为空。");
      return;
    }

    setTimelineBlankOneExtraRowSaving(true);
    setTimelineBlankOneExtraRowStatus("正在保存复制行文字…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-one-extra-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextCopy),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "复制行文字保存失败，请重试。");
      setTimelineBlankOneExtraRow(payload.content);
      setTimelineBlankOneExtraRowDraft(payload.content);
      setCanUndoTimelineBlankOneExtraCopy(true);
      setTimelineBlankOneExtraRowEditorOpen(false);
      setTimelineBlankOneExtraRowStatus("复制行文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankOneExtraRowStatus(error.message || "复制行文字保存失败，请重试。");
    } finally {
      setTimelineBlankOneExtraRowSaving(false);
    }
  }

  async function undoTimelineBlankOneExtraCopyChange() {
    setTimelineBlankOneExtraRowStatus("正在撤销最近一次复制行文字修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-one-extra-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的复制行文字修改。");
      setTimelineBlankOneExtraRow(payload.content);
      setTimelineBlankOneExtraRowDraft(payload.content);
      setCanUndoTimelineBlankOneExtraCopy(false);
      setTimelineBlankOneExtraRowStatus("已撤销，复制行文字恢复为修改前的版本。");
    } catch (error) {
      setTimelineBlankOneExtraRowStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineBlankOneExtraRowInsertion() {
    setTimelineBlankOneExtraRowStatus("正在撤销本次复制行…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-one-extra-row/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的复制行操作。");
      setTimelineBlankOneExtraRow(payload.content);
      setTimelineBlankOneExtraRowDraft(payload.content);
      setCanUndoTimelineBlankOneExtraRow(false);
      setTimelineBlankOneExtraRowEditorOpen(false);
      setTimelineBlankOneExtraRowStatus("已撤销，本次复制的文字行已经移除。");
    } catch (error) {
      setTimelineBlankOneExtraRowStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineBlankOnePositionChange() {
    setTimelineBlankOnePositionStatus("正在撤销本次下移一屏…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-one-position/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的位置调整。");
      setTimelineBlankOnePosition(payload.content);
      setCanUndoTimelineBlankOnePosition(false);
      setTimelineBlankOnePositionStatus("已撤销，Aman 屏恢复到电影海报屏之前。");
    } catch (error) {
      setTimelineBlankOnePositionStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineBlankOneMarkRemoval() {
    setTimelineBlankOneMarkStatus("正在撤销本次 AMAN 标志删除…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-one-mark/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的 AMAN 标志删除操作。");
      setTimelineBlankOneMark(payload.content);
      setCanUndoTimelineBlankOneMark(false);
      setTimelineBlankOneMarkStatus("已撤销，AMAN 标志已恢复。");
    } catch (error) {
      setTimelineBlankOneMarkStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineBlankOneRemoval() {
    setTimelineBlankOneRemovalStatus("正在撤销本次页面删除…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-one-removal/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的 Aman 页面删除操作。");
      setTimelineBlankOneRemoval(payload.content);
      setCanUndoTimelineBlankOneRemoval(false);
      setTimelineBlankOneRemovalStatus("已撤销，Aman 页面已恢复。");
    } catch (error) {
      setTimelineBlankOneRemovalStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceTimelineBlankOneAsset(event, target) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const supportedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    const labels = { background: "左侧背景", top: "上方内容图片", bottom: "下方内容图片" };
    if (!supportedTypes.includes(file.type)) {
      setTimelineBlankOneAssetStatus((current) => ({ ...current, [target]: "请选择 JPG、PNG、WebP 或 AVIF 格式的图片。" }));
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setTimelineBlankOneAssetStatus((current) => ({ ...current, [target]: "图片不能超过 25 MB。" }));
      return;
    }

    setTimelineBlankOneAssetUploading((current) => ({ ...current, [target]: true }));
    setTimelineBlankOneAssetStatus((current) => ({ ...current, [target]: `正在上传${labels[target]}…` }));
    try {
      const details = await inspectImage(file);
      const response = await fetch(`/__jurneos/timeline-blank-one-${target}`, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "图片上传失败，请重试。");
      if (target === "background") setTimelineBlankOneBackground(payload.content);
      if (target === "top") setTimelineBlankOneDetailTop(payload.content);
      if (target === "bottom") setTimelineBlankOneDetailBottom(payload.content);
      setCanUndoTimelineBlankOneAsset((current) => ({ ...current, [target]: true }));
      setTimelineBlankOneAssetStatus((current) => ({ ...current, [target]: `${labels[target]}已更换，刷新页面后仍会保留。` }));
    } catch (error) {
      setTimelineBlankOneAssetStatus((current) => ({ ...current, [target]: error.message || "图片上传失败，请重试。" }));
    } finally {
      setTimelineBlankOneAssetUploading((current) => ({ ...current, [target]: false }));
    }
  }

  async function undoTimelineBlankOneAssetChange(target) {
    const labels = { background: "左侧背景", top: "上方内容图片", bottom: "下方内容图片" };
    setTimelineBlankOneAssetUploading((current) => ({ ...current, [target]: true }));
    setTimelineBlankOneAssetStatus((current) => ({ ...current, [target]: `正在撤销最近一次${labels[target]}修改…` }));
    try {
      const response = await fetch(`/__jurneos/timeline-blank-one-${target}/undo`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片修改。");
      if (target === "background") setTimelineBlankOneBackground(payload.content);
      if (target === "top") setTimelineBlankOneDetailTop(payload.content);
      if (target === "bottom") setTimelineBlankOneDetailBottom(payload.content);
      setCanUndoTimelineBlankOneAsset((current) => ({ ...current, [target]: false }));
      setTimelineBlankOneAssetStatus((current) => ({ ...current, [target]: `已撤销，${labels[target]}恢复为上一张图片。` }));
    } catch (error) {
      setTimelineBlankOneAssetStatus((current) => ({ ...current, [target]: error.message || "撤销失败，请重试。" }));
    } finally {
      setTimelineBlankOneAssetUploading((current) => ({ ...current, [target]: false }));
    }
  }

  async function undoTimelineBlankOneLayoutChange() {
    setTimelineBlankOneLayoutStatus("正在撤销本次页面排版…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-one-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的页面排版修改。");
      setTimelineBlankOneLayout(payload.content);
      setCanUndoTimelineBlankOneLayout(false);
      setTimelineBlankOneLayoutStatus("已撤销，第一张独立屏恢复为黑色空白屏。");
    } catch (error) {
      setTimelineBlankOneLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openTimelineBlankTwoCopyEditor() {
    setTimelineBlankTwoCopyDraft(timelineBlankTwoCopy);
    setTimelineBlankTwoCopyEditorOpen(true);
  }

  async function saveTimelineBlankTwoCopy(event) {
    event.preventDefault();
    const nextCopy = {
      title: timelineBlankTwoCopyDraft.title.trim(),
      tagline: timelineBlankTwoCopyDraft.tagline.trim(),
      credit: timelineBlankTwoCopyDraft.credit.trim(),
      studioName: timelineBlankTwoCopyDraft.studioName.trim(),
      studioSuffix: timelineBlankTwoCopyDraft.studioSuffix.trim(),
    };
    if (Object.values(nextCopy).some((value) => !value)) {
      setTimelineBlankTwoCopyStatus("标题、影片类型、导演署名和品牌文字均不能为空。");
      return;
    }

    setTimelineBlankTwoCopySaving(true);
    setTimelineBlankTwoCopyStatus("正在保存本页全部文字…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-two-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextCopy),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");
      setTimelineBlankTwoCopy(payload.content);
      setTimelineBlankTwoCopyDraft(payload.content);
      setCanUndoTimelineBlankTwoCopy(true);
      setTimelineBlankTwoCopyEditorOpen(false);
      setTimelineBlankTwoCopyStatus("本页全部文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankTwoCopyStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setTimelineBlankTwoCopySaving(false);
    }
  }

  async function undoTimelineBlankTwoCopyChange() {
    setTimelineBlankTwoCopyStatus("正在撤销最近一次文字修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-two-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setTimelineBlankTwoCopy(payload.content);
      setTimelineBlankTwoCopyDraft(payload.content);
      setCanUndoTimelineBlankTwoCopy(false);
      setTimelineBlankTwoCopyStatus("已撤销，本页文字恢复为修改前的版本。");
    } catch (error) {
      setTimelineBlankTwoCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceTimelineBlankTwoAsset(event, target) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const supportedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    const labels = { image: "黑白主图", background: "整页背景" };
    if (!supportedTypes.includes(file.type)) {
      setTimelineBlankTwoAssetStatus((current) => ({ ...current, [target]: "请选择 JPG、PNG、WebP 或 AVIF 格式的图片。" }));
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setTimelineBlankTwoAssetStatus((current) => ({ ...current, [target]: "图片不能超过 25 MB。" }));
      return;
    }

    setTimelineBlankTwoAssetUploading((current) => ({ ...current, [target]: true }));
    setTimelineBlankTwoAssetStatus((current) => ({ ...current, [target]: `正在上传${labels[target]}…` }));
    try {
      const details = await inspectImage(file);
      const response = await fetch(`/__jurneos/timeline-blank-two-${target}`, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "图片上传失败，请重试。");
      if (target === "image") setTimelineBlankTwoImage(payload.content);
      if (target === "background") setTimelineBlankTwoBackground(payload.content);
      setCanUndoTimelineBlankTwoAsset((current) => ({ ...current, [target]: true }));
      setTimelineBlankTwoAssetStatus((current) => ({ ...current, [target]: `${labels[target]}已更换，刷新页面后仍会保留。` }));
    } catch (error) {
      setTimelineBlankTwoAssetStatus((current) => ({ ...current, [target]: error.message || "图片上传失败，请重试。" }));
    } finally {
      setTimelineBlankTwoAssetUploading((current) => ({ ...current, [target]: false }));
    }
  }

  async function undoTimelineBlankTwoAssetChange(target) {
    const labels = { image: "黑白主图", background: "整页背景" };
    setTimelineBlankTwoAssetUploading((current) => ({ ...current, [target]: true }));
    setTimelineBlankTwoAssetStatus((current) => ({ ...current, [target]: `正在撤销最近一次${labels[target]}修改…` }));
    try {
      const response = await fetch(`/__jurneos/timeline-blank-two-${target}/undo`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片修改。");
      if (target === "image") setTimelineBlankTwoImage(payload.content);
      if (target === "background") setTimelineBlankTwoBackground(payload.content);
      setCanUndoTimelineBlankTwoAsset((current) => ({ ...current, [target]: false }));
      setTimelineBlankTwoAssetStatus((current) => ({ ...current, [target]: `已撤销，${labels[target]}恢复为上一张图片。` }));
    } catch (error) {
      setTimelineBlankTwoAssetStatus((current) => ({ ...current, [target]: error.message || "撤销失败，请重试。" }));
    } finally {
      setTimelineBlankTwoAssetUploading((current) => ({ ...current, [target]: false }));
    }
  }

  async function undoTimelineBlankTwoLayoutChange() {
    setTimelineBlankTwoLayoutStatus("正在撤销本次页面排版…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-two-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的页面排版修改。");
      setTimelineBlankTwoLayout(payload.content);
      setCanUndoTimelineBlankTwoLayout(false);
      setTimelineBlankTwoLayoutStatus("已撤销，第二张独立屏恢复为黑色空白屏。");
    } catch (error) {
      setTimelineBlankTwoLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openTimelineBlankThreeCopyEditor() {
    setTimelineBlankThreeCopyDraft(timelineBlankThreeCopy);
    setTimelineBlankThreeCopyEditorOpen(true);
  }

  async function saveTimelineBlankThreeCopy(event) {
    event.preventDefault();
    const nextCopy = {
      title: timelineBlankThreeCopyDraft.title.trim(),
      category: timelineBlankThreeCopyDraft.category.trim(),
      lines: timelineBlankThreeCopyDraft.lines.map((line) => line.trim()),
    };
    if (!nextCopy.title || !nextCopy.category || nextCopy.lines.length !== 3 || nextCopy.lines.some((line) => !line)) {
      setTimelineBlankThreeCopyStatus("主标题、分类标签和三行正文均不能为空。");
      return;
    }

    setTimelineBlankThreeCopySaving(true);
    setTimelineBlankThreeCopyStatus("正在保存本页全部文字…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-three-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextCopy),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");
      setTimelineBlankThreeCopy(payload.content);
      setTimelineBlankThreeCopyDraft(payload.content);
      setCanUndoTimelineBlankThreeCopy(true);
      setTimelineBlankThreeCopyEditorOpen(false);
      setTimelineBlankThreeCopyStatus("本页全部文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankThreeCopyStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setTimelineBlankThreeCopySaving(false);
    }
  }

  async function undoTimelineBlankThreeCopyChange() {
    setTimelineBlankThreeCopyStatus("正在撤销最近一次文字修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-three-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setTimelineBlankThreeCopy(payload.content);
      setTimelineBlankThreeCopyDraft(payload.content);
      setCanUndoTimelineBlankThreeCopy(false);
      setTimelineBlankThreeCopyStatus("已撤销，本页文字恢复为修改前的版本。");
    } catch (error) {
      setTimelineBlankThreeCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceTimelineBlankThreeImage(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const supportedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    if (!supportedTypes.includes(file.type)) {
      setTimelineBlankThreeImageStatus("请选择 JPG、PNG、WebP 或 AVIF 格式的图片。");
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setTimelineBlankThreeImageStatus("图片不能超过 25 MB。");
      return;
    }

    setTimelineBlankThreeImageUploading(true);
    setTimelineBlankThreeImageStatus("正在上传右侧图片…");
    try {
      const details = await inspectImage(file);
      const response = await fetch("/__jurneos/timeline-blank-three-image", {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "图片上传失败，请重试。");
      setTimelineBlankThreeImage(payload.content);
      setCanUndoTimelineBlankThreeImage(true);
      setTimelineBlankThreeImageStatus("右侧图片已更换，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankThreeImageStatus(error.message || "图片上传失败，请重试。");
    } finally {
      setTimelineBlankThreeImageUploading(false);
    }
  }

  async function undoTimelineBlankThreeImageChange() {
    setTimelineBlankThreeImageUploading(true);
    setTimelineBlankThreeImageStatus("正在撤销最近一次右侧图片修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-three-image/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片修改。");
      setTimelineBlankThreeImage(payload.content);
      setCanUndoTimelineBlankThreeImage(false);
      setTimelineBlankThreeImageStatus("已撤销，右侧图片恢复为上一张。");
    } catch (error) {
      setTimelineBlankThreeImageStatus(error.message || "撤销失败，请重试。");
    } finally {
      setTimelineBlankThreeImageUploading(false);
    }
  }

  async function undoTimelineBlankThreeLayoutChange() {
    setTimelineBlankThreeLayoutStatus("正在撤销本次页面排版…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-three-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的页面排版修改。");
      setTimelineBlankThreeLayout(payload.content);
      setCanUndoTimelineBlankThreeLayout(false);
      setTimelineBlankThreeLayoutStatus("已撤销，本页恢复为黑色空白屏。");
    } catch (error) {
      setTimelineBlankThreeLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openTimelineBlankFourCopyEditor() {
    setTimelineBlankFourCopyDraft(timelineBlankFourCopy);
    setTimelineBlankFourCopyEditorOpen(true);
  }

  async function saveTimelineBlankFourCopy(event) {
    event.preventDefault();
    const nextCopy = Object.fromEntries(
      Object.entries(timelineBlankFourCopyDraft).map(([key, value]) => [key, String(value || "").trim()]),
    );
    if (Object.values(nextCopy).some((value) => !value)) {
      setTimelineBlankFourCopyStatus("顶部文字、编号、年份和主标题均不能为空。");
      return;
    }

    setTimelineBlankFourCopySaving(true);
    setTimelineBlankFourCopyStatus("正在保存本页全部文字…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-four-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextCopy),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");
      setTimelineBlankFourCopy(payload.content);
      setTimelineBlankFourCopyDraft(payload.content);
      setCanUndoTimelineBlankFourCopy(true);
      setTimelineBlankFourCopyEditorOpen(false);
      setTimelineBlankFourCopyStatus("本页全部文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankFourCopyStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setTimelineBlankFourCopySaving(false);
    }
  }

  async function undoTimelineBlankFourCopyChange() {
    setTimelineBlankFourCopyStatus("正在撤销最近一次文字修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-four-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setTimelineBlankFourCopy(payload.content);
      setTimelineBlankFourCopyDraft(payload.content);
      setCanUndoTimelineBlankFourCopy(false);
      setTimelineBlankFourCopyStatus("已撤销，本页文字恢复为修改前的版本。");
    } catch (error) {
      setTimelineBlankFourCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceTimelineBlankFourImage(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const supportedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    if (!supportedTypes.includes(file.type)) {
      setTimelineBlankFourImageStatus("请选择 JPG、PNG、WebP 或 AVIF 格式的图片。");
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setTimelineBlankFourImageStatus("图片不能超过 25 MB。");
      return;
    }

    setTimelineBlankFourImageUploading(true);
    setTimelineBlankFourImageStatus("正在上传建筑图片…");
    try {
      const details = await inspectImage(file);
      const response = await fetch("/__jurneos/timeline-blank-four-image", {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "图片上传失败，请重试。");
      setTimelineBlankFourImage(payload.content);
      setCanUndoTimelineBlankFourImage(true);
      setTimelineBlankFourImageStatus("建筑图片已更换，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankFourImageStatus(error.message || "图片上传失败，请重试。");
    } finally {
      setTimelineBlankFourImageUploading(false);
    }
  }

  async function undoTimelineBlankFourImageChange() {
    setTimelineBlankFourImageUploading(true);
    setTimelineBlankFourImageStatus("正在撤销最近一次建筑图片修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-four-image/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片修改。");
      setTimelineBlankFourImage(payload.content);
      setCanUndoTimelineBlankFourImage(false);
      setTimelineBlankFourImageStatus("已撤销，建筑图片恢复为上一张。");
    } catch (error) {
      setTimelineBlankFourImageStatus(error.message || "撤销失败，请重试。");
    } finally {
      setTimelineBlankFourImageUploading(false);
    }
  }

  async function undoTimelineBlankFourLayoutChange() {
    setTimelineBlankFourLayoutStatus("正在撤销本次页面排版…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-four-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的页面排版修改。");
      setTimelineBlankFourLayout(payload.content);
      setCanUndoTimelineBlankFourLayout(false);
      setTimelineBlankFourLayoutStatus("已撤销，本页恢复为纯白色空白屏。");
    } catch (error) {
      setTimelineBlankFourLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineBlankFourWordFitChange() {
    setTimelineBlankFourWordFitStatus("正在撤销本次完整标题显示…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-four-word-fit/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的标题显示修改。");
      setTimelineBlankFourWordFit(payload.content);
      setCanUndoTimelineBlankFourWordFit(false);
      setTimelineBlankFourWordFitStatus("已撤销，超大标题恢复为修改前的宽度。");
    } catch (error) {
      setTimelineBlankFourWordFitStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openTimelineBlankEightCopyEditor() {
    setTimelineBlankEightCopyDraft(timelineBlankEightCopy);
    setTimelineBlankEightCopyEditorOpen(true);
  }

  async function saveTimelineBlankEightCopy(event) {
    event.preventDefault();
    const nextCopy = Object.fromEntries(
      Object.entries(timelineBlankEightCopyDraft).map(([key, value]) => [key, String(value || "").trim()]),
    );
    if (Object.values(nextCopy).some((value) => !value)) {
      setTimelineBlankEightCopyStatus("主标题、右上短句和说明文字均不能为空。");
      return;
    }

    setTimelineBlankEightCopySaving(true);
    setTimelineBlankEightCopyStatus("正在保存本页全部文字…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-eight-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextCopy),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");
      setTimelineBlankEightCopy(payload.content);
      setTimelineBlankEightCopyDraft(payload.content);
      setCanUndoTimelineBlankEightCopy(true);
      setTimelineBlankEightCopyEditorOpen(false);
      setTimelineBlankEightCopyStatus("本页全部文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankEightCopyStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setTimelineBlankEightCopySaving(false);
    }
  }

  async function undoTimelineBlankEightCopyChange() {
    setTimelineBlankEightCopyStatus("正在撤销最近一次文字修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-eight-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setTimelineBlankEightCopy(payload.content);
      setTimelineBlankEightCopyDraft(payload.content);
      setCanUndoTimelineBlankEightCopy(false);
      setTimelineBlankEightCopyStatus("已撤销，本页文字恢复为修改前的版本。");
    } catch (error) {
      setTimelineBlankEightCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceTimelineBlankEightImage(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(file.type)) {
      setTimelineBlankEightImageStatus("请选择 JPG、PNG、WebP 或 AVIF 格式的图片。");
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setTimelineBlankEightImageStatus("图片不能超过 25 MB。");
      return;
    }

    setTimelineBlankEightImageUploading(true);
    setTimelineBlankEightImageStatus("正在上传右侧图片…");
    try {
      const details = await inspectImage(file);
      const response = await fetch("/__jurneos/timeline-blank-eight-image", {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "图片上传失败，请重试。");
      setTimelineBlankEightImage(payload.content);
      setCanUndoTimelineBlankEightImage(true);
      setTimelineBlankEightImageStatus("右侧图片已更换，刷新页面后仍会保留。");
    } catch (error) {
      setTimelineBlankEightImageStatus(error.message || "图片上传失败，请重试。");
    } finally {
      setTimelineBlankEightImageUploading(false);
    }
  }

  async function undoTimelineBlankEightImageChange() {
    setTimelineBlankEightImageUploading(true);
    setTimelineBlankEightImageStatus("正在撤销最近一次右侧图片修改…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-eight-image/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片修改。");
      setTimelineBlankEightImage(payload.content);
      setCanUndoTimelineBlankEightImage(false);
      setTimelineBlankEightImageStatus("已撤销，右侧图片恢复为上一张。");
    } catch (error) {
      setTimelineBlankEightImageStatus(error.message || "撤销失败，请重试。");
    } finally {
      setTimelineBlankEightImageUploading(false);
    }
  }

  async function undoTimelineBlankEightLayoutChange() {
    setTimelineBlankEightLayoutStatus("正在撤销本次页面排版…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-eight-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的页面排版修改。");
      setTimelineBlankEightLayout(payload.content);
      setCanUndoTimelineBlankEightLayout(false);
      setTimelineBlankEightLayoutStatus("已撤销，本页恢复为纯白色空白屏。");
    } catch (error) {
      setTimelineBlankEightLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoTimelineBlankEightTitleFitChange() {
    setTimelineBlankEightTitleFitStatus("正在撤销本次完整标题显示…");
    try {
      const response = await fetch("/__jurneos/timeline-blank-eight-title-fit/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的标题显示修改。");
      setTimelineBlankEightTitleFit(payload.content);
      setCanUndoTimelineBlankEightTitleFit(false);
      setTimelineBlankEightTitleFitStatus("已撤销，超大标题恢复为修改前的宽度。");
    } catch (error) {
      setTimelineBlankEightTitleFitStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openAboutLowerNextBlankCopyEditor() {
    setAboutLowerNextBlankCopyDraft(aboutLowerNextBlankCopy);
    setAboutLowerNextBlankCopyEditorOpen(true);
  }

  async function saveAboutLowerNextBlankCopy(event) {
    event.preventDefault();
    const nextCopy = {
      title: aboutLowerNextBlankCopyDraft.title.trim(),
      subtitle: aboutLowerNextBlankCopyDraft.subtitle.trim(),
      milestones: aboutLowerNextBlankCopyDraft.milestones.map((milestone) => ({
        title: milestone.title.trim(),
        body: milestone.body.trim(),
      })),
    };
    if (!nextCopy.title || !nextCopy.subtitle || nextCopy.milestones.length !== 7 || nextCopy.milestones.some((milestone) => !milestone.title || !milestone.body)) {
      setAboutLowerNextBlankCopyStatus("标题、副标题及 7 组时间节点均不能为空。");
      return;
    }

    setAboutLowerNextBlankCopySaving(true);
    setAboutLowerNextBlankCopyStatus("正在保存时间轴文字…");
    try {
      const response = await fetch("/__jurneos/about-lower-next-blank-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextCopy),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");
      setAboutLowerNextBlankCopy(payload.content);
      setAboutLowerNextBlankCopyDraft(payload.content);
      setCanUndoAboutLowerNextBlankCopy(true);
      setAboutLowerNextBlankCopyEditorOpen(false);
      setAboutLowerNextBlankCopyStatus("全部文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setAboutLowerNextBlankCopyStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setAboutLowerNextBlankCopySaving(false);
    }
  }

  async function undoAboutLowerNextBlankCopyChange() {
    setAboutLowerNextBlankCopyStatus("正在撤销最近一次时间轴文字修改…");
    try {
      const response = await fetch("/__jurneos/about-lower-next-blank-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setAboutLowerNextBlankCopy(payload.content);
      setAboutLowerNextBlankCopyDraft(payload.content);
      setCanUndoAboutLowerNextBlankCopy(false);
      setAboutLowerNextBlankCopyStatus("已撤销，时间轴文字恢复为修改前的版本。");
    } catch (error) {
      setAboutLowerNextBlankCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceAboutLowerNextBlankAsset(event, target) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const supportedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    const labels = { background: "整页背景", line: "时间轴标志", mark: "标题标志" };
    if (!supportedTypes.includes(file.type)) {
      setAboutLowerNextBlankAssetStatus((current) => ({ ...current, [target]: "请选择 JPG、PNG、WebP 或 AVIF 格式的图片。" }));
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setAboutLowerNextBlankAssetStatus((current) => ({ ...current, [target]: "图片不能超过 25 MB。" }));
      return;
    }

    setAboutLowerNextBlankAssetUploading((current) => ({ ...current, [target]: true }));
    setAboutLowerNextBlankAssetStatus((current) => ({ ...current, [target]: `正在上传${labels[target]}…` }));
    try {
      const details = await inspectImage(file);
      const response = await fetch(`/__jurneos/about-lower-next-blank-${target}`, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "图片上传失败，请重试。");
      if (target === "background") setAboutLowerNextBlankBackground(payload.content);
      if (target === "line") setAboutLowerNextBlankLine(payload.content);
      if (target === "mark") setAboutLowerNextBlankMark(payload.content);
      setCanUndoAboutLowerNextBlankAsset((current) => ({ ...current, [target]: true }));
      setAboutLowerNextBlankAssetStatus((current) => ({ ...current, [target]: `${labels[target]}已更换，刷新页面后仍会保留。` }));
    } catch (error) {
      setAboutLowerNextBlankAssetStatus((current) => ({ ...current, [target]: error.message || "图片上传失败，请重试。" }));
    } finally {
      setAboutLowerNextBlankAssetUploading((current) => ({ ...current, [target]: false }));
    }
  }

  async function undoAboutLowerNextBlankAssetChange(target) {
    const labels = { background: "整页背景", line: "时间轴标志", mark: "标题标志" };
    setAboutLowerNextBlankAssetUploading((current) => ({ ...current, [target]: true }));
    setAboutLowerNextBlankAssetStatus((current) => ({ ...current, [target]: `正在撤销最近一次${labels[target]}修改…` }));
    try {
      const response = await fetch(`/__jurneos/about-lower-next-blank-${target}/undo`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片修改。");
      if (target === "background") setAboutLowerNextBlankBackground(payload.content);
      if (target === "line") setAboutLowerNextBlankLine(payload.content);
      if (target === "mark") setAboutLowerNextBlankMark(payload.content);
      setCanUndoAboutLowerNextBlankAsset((current) => ({ ...current, [target]: false }));
      setAboutLowerNextBlankAssetStatus((current) => ({ ...current, [target]: `已撤销，${labels[target]}恢复为上一张图片。` }));
    } catch (error) {
      setAboutLowerNextBlankAssetStatus((current) => ({ ...current, [target]: error.message || "撤销失败，请重试。" }));
    } finally {
      setAboutLowerNextBlankAssetUploading((current) => ({ ...current, [target]: false }));
    }
  }

  async function undoAboutLowerNextBlankLayoutChange() {
    setAboutLowerNextBlankLayoutStatus("正在撤销本次时间轴排版…");
    try {
      const response = await fetch("/__jurneos/about-lower-next-blank-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的时间轴排版修改。");
      setAboutLowerNextBlankLayout(payload.content);
      setCanUndoAboutLowerNextBlankLayout(false);
      setAboutLowerNextBlankLayoutStatus("已撤销，这一屏恢复为黑色空白屏。");
    } catch (error) {
      setAboutLowerNextBlankLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  function openAboutLowerBlankCopyEditor() {
    setAboutLowerBlankCopyDraft(aboutLowerBlankCopy);
    setAboutLowerBlankCopyEditorOpen(true);
  }

  async function saveAboutLowerBlankCopy(event) {
    event.preventDefault();
    const nextCopy = {
      title: aboutLowerBlankCopyDraft.title.trim(),
      body: aboutLowerBlankCopyDraft.body.trim(),
      verticalWord: aboutLowerBlankCopyDraft.verticalWord.trim(),
    };
    if (!nextCopy.title || !nextCopy.body || !nextCopy.verticalWord) {
      setAboutLowerBlankCopyStatus("标题、正文和竖排英文都不能为空。");
      return;
    }

    setAboutLowerBlankCopySaving(true);
    setAboutLowerBlankCopyStatus("正在保存文字…");
    try {
      const response = await fetch("/__jurneos/about-lower-blank-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextCopy),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "文字保存失败，请重试。");
      setAboutLowerBlankCopy(payload.content);
      setAboutLowerBlankCopyDraft(payload.content);
      setCanUndoAboutLowerBlankCopy(true);
      setAboutLowerBlankCopyEditorOpen(false);
      setAboutLowerBlankCopyStatus("文字已保存，刷新页面后仍会保留。");
    } catch (error) {
      setAboutLowerBlankCopyStatus(error.message || "文字保存失败，请重试。");
    } finally {
      setAboutLowerBlankCopySaving(false);
    }
  }

  async function undoAboutLowerBlankCopyChange() {
    setAboutLowerBlankCopyStatus("正在撤销最近一次文字修改…");
    try {
      const response = await fetch("/__jurneos/about-lower-blank-copy/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的文字修改。");
      setAboutLowerBlankCopy(payload.content);
      setAboutLowerBlankCopyDraft(payload.content);
      setCanUndoAboutLowerBlankCopy(false);
      setAboutLowerBlankCopyStatus("已撤销，文字恢复为修改前的版本。");
    } catch (error) {
      setAboutLowerBlankCopyStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceAboutLowerBlankImage(event, target) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const supportedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    const isBackground = target === "background";
    const setStatus = isBackground ? setAboutLowerBlankBackgroundStatus : setAboutLowerBlankCardStatus;
    const setUploading = isBackground ? setAboutLowerBlankBackgroundUploading : setAboutLowerBlankCardUploading;
    const endpoint = isBackground ? "about-lower-blank-background" : "about-lower-blank-card-image";

    if (!supportedTypes.includes(file.type)) {
      setStatus("请选择 JPG、PNG、WebP 或 AVIF 格式的图片。");
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setStatus("图片不能超过 25 MB。");
      return;
    }

    setUploading(true);
    setStatus(isBackground ? "正在上传整页背景…" : "正在上传卡片图片…");
    try {
      const details = await inspectImage(file);
      const response = await fetch(`/__jurneos/${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "X-File-Name": encodeURIComponent(file.name),
          "X-Image-Width": String(details.width),
          "X-Image-Height": String(details.height),
          "X-Image-Ratio": details.ratio,
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "图片上传失败，请重试。");
      if (isBackground) {
        setAboutLowerBlankBackground(payload.content);
        setCanUndoAboutLowerBlankBackground(true);
      } else {
        setAboutLowerBlankCardImage(payload.content);
        setCanUndoAboutLowerBlankCardImage(true);
      }
      setStatus(isBackground ? "整页背景已更换，刷新后仍会保留。" : "卡片图片已更换，刷新后仍会保留。");
    } catch (error) {
      setStatus(error.message || "图片上传失败，请重试。");
    } finally {
      setUploading(false);
    }
  }

  async function undoAboutLowerBlankImageChange(target) {
    const isBackground = target === "background";
    const endpoint = isBackground ? "about-lower-blank-background" : "about-lower-blank-card-image";
    const setStatus = isBackground ? setAboutLowerBlankBackgroundStatus : setAboutLowerBlankCardStatus;
    const setUploading = isBackground ? setAboutLowerBlankBackgroundUploading : setAboutLowerBlankCardUploading;
    setUploading(true);
    setStatus(isBackground ? "正在撤销最近一次整页背景修改…" : "正在撤销最近一次卡片图片修改…");
    try {
      const response = await fetch(`/__jurneos/${endpoint}/undo`, { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的图片修改。");
      if (isBackground) {
        setAboutLowerBlankBackground(payload.content);
        setCanUndoAboutLowerBlankBackground(false);
      } else {
        setAboutLowerBlankCardImage(payload.content);
        setCanUndoAboutLowerBlankCardImage(false);
      }
      setStatus(isBackground ? "已撤销，整页背景恢复为上一张图片。" : "已撤销，卡片图片恢复为上一张图片。");
    } catch (error) {
      setStatus(error.message || "撤销失败，请重试。");
    } finally {
      setUploading(false);
    }
  }

  async function undoAboutLowerBlankLayoutChange() {
    setAboutLowerBlankLayoutStatus("正在撤销本次页面排版…");
    try {
      const response = await fetch("/__jurneos/about-lower-blank-layout/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的页面排版修改。");
      setAboutLowerBlankLayout(payload.content);
      setCanUndoAboutLowerBlankLayout(false);
      setAboutLowerBlankLayoutStatus("已撤销，这一屏恢复为之前的黑色空白页。");
    } catch (error) {
      setAboutLowerBlankLayoutStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoAboutLowerBlankEffectChange() {
    setAboutLowerBlankEffectStatus("正在撤销本次毛玻璃效果…");
    try {
      const response = await fetch("/__jurneos/about-lower-blank-effect/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的毛玻璃修改。");
      setAboutLowerBlankEffect(payload.content);
      setCanUndoAboutLowerBlankEffect(false);
      setAboutLowerBlankEffectStatus("已撤销，整页背景恢复清晰。");
    } catch (error) {
      setAboutLowerBlankEffectStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceAboutBlankVideo(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (file.type !== "video/mp4" && !file.name.toLowerCase().endsWith(".mp4")) {
      setAboutBlankVideoStatus("请选择 MP4 格式的视频。");
      return;
    }

    if (file.size > 200 * 1024 * 1024) {
      setAboutBlankVideoStatus("视频不能超过 200 MB。");
      return;
    }

    setAboutBlankVideoUploading(true);
    setAboutBlankVideoStatus("正在检查并上传视频…");
    try {
      const details = await inspectVideo(file);
      const response = await fetch("/__jurneos/about-blank-video", {
        method: "PUT",
        headers: {
          "Content-Type": "video/mp4",
          "X-File-Name": encodeURIComponent(file.name),
          "X-Video-Width": String(details.width),
          "X-Video-Height": String(details.height),
          "X-Video-Ratio": details.ratio,
          "X-Video-Duration": String(details.duration),
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "视频上传失败，请重试。");

      setAboutBlankVideoContent(payload.content);
      setCanUndoAboutBlankVideo(true);
      setAboutBlankVideoStatus("上传成功，视频已经铺满这一屏。刷新页面后仍会保留。");
    } catch (error) {
      setAboutBlankVideoStatus(error.message || "视频上传失败，请重试。");
    } finally {
      setAboutBlankVideoUploading(false);
    }
  }

  async function undoAboutBlankVideoReplacement() {
    setAboutBlankVideoUploading(true);
    setAboutBlankVideoStatus("正在撤销本次视频修改…");
    try {
      const response = await fetch("/__jurneos/about-blank-video/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的视频修改。");

      setAboutBlankVideoContent(payload.content);
      setCanUndoAboutBlankVideo(false);
      setAboutBlankVideoStatus(payload.content.src ? "已撤销，恢复为上一个视频。" : "已撤销，这一屏恢复为空白。");
    } catch (error) {
      setAboutBlankVideoStatus(error.message || "撤销失败，请重试。");
    } finally {
      setAboutBlankVideoUploading(false);
    }
  }

  async function undoAboutBlankVideoFeature() {
    setAboutBlankVideoFeatureStatus("正在撤销本次增加的视频功能…");
    try {
      const response = await fetch("/__jurneos/about-blank-video-feature/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的视频功能修改。");

      setAboutBlankVideoFeature(payload.content);
      setCanUndoAboutBlankVideoFeature(false);
      setAboutBlankVideoFeatureStatus("已撤销，这一屏恢复为原来的空白屏。");
    } catch (error) {
      setAboutBlankVideoFeatureStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceAboutTwoVideo(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (file.type !== "video/mp4" && !file.name.toLowerCase().endsWith(".mp4")) {
      setAboutTwoVideoStatus("请选择 MP4 格式的视频。");
      return;
    }

    if (file.size > 200 * 1024 * 1024) {
      setAboutTwoVideoStatus("视频不能超过 200 MB。");
      return;
    }

    setAboutTwoVideoUploading(true);
    setAboutTwoVideoStatus("正在检查并上传背景视频…");
    try {
      const details = await inspectVideo(file);
      const response = await fetch("/__jurneos/about-two-video", {
        method: "PUT",
        headers: {
          "Content-Type": "video/mp4",
          "X-File-Name": encodeURIComponent(file.name),
          "X-Video-Width": String(details.width),
          "X-Video-Height": String(details.height),
          "X-Video-Ratio": details.ratio,
          "X-Video-Duration": String(details.duration),
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "背景视频上传失败，请重试。");

      setAboutTwoVideoContent(payload.content);
      setCanUndoAboutTwoVideo(true);
      setAboutTwoVideoStatus("上传成功，视频已铺满第 02 屏；原有文字会保留在上方。");
    } catch (error) {
      setAboutTwoVideoStatus(error.message || "背景视频上传失败，请重试。");
    } finally {
      setAboutTwoVideoUploading(false);
    }
  }

  async function undoAboutTwoVideoReplacement() {
    setAboutTwoVideoUploading(true);
    setAboutTwoVideoStatus("正在撤销本次背景视频修改…");
    try {
      const response = await fetch("/__jurneos/about-two-video/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的背景视频修改。");

      setAboutTwoVideoContent(payload.content);
      setCanUndoAboutTwoVideo(false);
      setAboutTwoVideoStatus(payload.content.src ? "已撤销，恢复为上一个背景视频。" : "已撤销，第 02 屏恢复为原有山景。");
    } catch (error) {
      setAboutTwoVideoStatus(error.message || "撤销失败，请重试。");
    } finally {
      setAboutTwoVideoUploading(false);
    }
  }

  async function undoAboutTwoVideoFeature() {
    setAboutTwoVideoFeatureStatus("正在撤销本次增加的视频功能…");
    try {
      const response = await fetch("/__jurneos/about-two-video-feature/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的视频功能修改。");

      setAboutTwoVideoFeature(payload.content);
      setCanUndoAboutTwoVideoFeature(false);
      setAboutTwoVideoFeatureStatus("已撤销，第 02 屏恢复为原来的图片背景。");
    } catch (error) {
      setAboutTwoVideoFeatureStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function replaceFooterVideo(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (file.type !== "video/mp4" && !file.name.toLowerCase().endsWith(".mp4")) {
      setFooterVideoStatus("请选择 MP4 格式的视频。");
      return;
    }

    if (file.size > 200 * 1024 * 1024) {
      setFooterVideoStatus("视频不能超过 200 MB。");
      return;
    }

    setFooterVideoUploading(true);
    setFooterVideoStatus("正在检查并插入视频…");
    try {
      const details = await inspectVideo(file);
      const response = await fetch("/__jurneos/footer-video", {
        method: "PUT",
        headers: {
          "Content-Type": "video/mp4",
          "X-File-Name": encodeURIComponent(file.name),
          "X-Video-Width": String(details.width),
          "X-Video-Height": String(details.height),
          "X-Video-Ratio": details.ratio,
          "X-Video-Duration": String(details.duration),
        },
        body: file,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "视频插入失败，请重试。");

      setFooterVideoContent(payload.content);
      setCanUndoFooterVideo(true);
      setFooterVideoStatus("插入成功，视频已经铺满底部屏幕。刷新页面后仍会保留。");
    } catch (error) {
      setFooterVideoStatus(error.message || "视频插入失败，请重试。");
    } finally {
      setFooterVideoUploading(false);
    }
  }

  async function undoFooterVideoReplacement() {
    setFooterVideoUploading(true);
    setFooterVideoStatus("正在撤销本次视频修改…");
    try {
      const response = await fetch("/__jurneos/footer-video/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的视频修改。");

      setFooterVideoContent(payload.content);
      setCanUndoFooterVideo(false);
      setFooterVideoStatus(payload.content.src ? "已撤销，恢复为上一个视频。" : "已撤销，底部屏幕恢复为空白。 ");
    } catch (error) {
      setFooterVideoStatus(error.message || "撤销失败，请重试。");
    } finally {
      setFooterVideoUploading(false);
    }
  }

  async function undoFooterVideoPanelInsertion() {
    setFooterVideoPanelStatus("正在撤销本次新增屏幕…");
    try {
      const response = await fetch("/__jurneos/footer-video-panel/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的底部屏幕新增操作。");

      setFooterVideoPanel(payload.content);
      setCanUndoFooterVideoPanel(false);
      setFooterVideoPanelStatus("已撤销，底部视频屏已经移除。");
    } catch (error) {
      setFooterVideoPanelStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoFooterVideoPositionChange() {
    setFooterVideoPositionStatus("正在撤销本次上移一屏…");
    try {
      const response = await fetch("/__jurneos/footer-video-position/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的位置修改。");

      setFooterVideoPosition(payload.content);
      setCanUndoFooterVideoPosition(false);
      setFooterVideoPositionStatus("已撤销，视频屏恢复到页脚之后。");
    } catch (error) {
      setFooterVideoPositionStatus(error.message || "撤销失败，请重试。");
    }
  }

  async function undoFooterWordmarkChange() {
    setFooterWordmarkStatus("正在撤销本次底部英文修改…");
    try {
      const response = await fetch("/__jurneos/footer-wordmark/undo", { method: "POST" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "没有可撤销的底部英文修改。");

      setFooterWordmark(payload.content);
      setCanUndoFooterWordmark(false);
      setFooterWordmarkStatus("已撤销，底部英文恢复为 ICEBERG。");
    } catch (error) {
      setFooterWordmarkStatus(error.message || "撤销失败，请重试。");
    }
  }

  const removedAboutPanelIds = new Set(aboutPanelSelectionRemoval.removedPanelIds);

  const footerVideoPanelElement = footerVideoPanel.visible ? (
    <section className={`footer-video-panel${footerVideoContent.src ? " footer-video-panel--has-video" : ""}`} id="footer-video-panel" aria-label="底部视频空白屏">
      {footerVideoContent.src && (
        <video ref={footerVideo} className="footer-video-panel__video" src={footerVideoContent.src} autoPlay muted loop playsInline />
      )}
      {editorEnabled && (
        <>
          <input ref={footerVideoUploadInput} className="sr-only" type="file" accept="video/mp4,.mp4" onChange={replaceFooterVideo} />
          <div className="footer-video-panel__controls">
            <button type="button" onClick={() => footerVideoUploadInput.current?.click()} disabled={footerVideoUploading}>
              {footerVideoUploading ? "正在插入…" : footerVideoContent.src ? "更换视频" : "＋ 插入视频"}
            </button>
            <button type="button" onClick={undoFooterVideoReplacement} disabled={!canUndoFooterVideo || footerVideoUploading}>
              ↶ 撤销本次视频修改
            </button>
            <button type="button" onClick={undoFooterVideoPositionChange} disabled={!canUndoFooterVideoPosition || footerVideoUploading}>
              ↶ 撤销本次上移一屏
            </button>
            <button type="button" onClick={undoFooterVideoPanelInsertion} disabled={!canUndoFooterVideoPanel || footerVideoUploading}>
              ↶ 撤销本次新增屏幕
            </button>
          </div>
          {footerVideoStatus && <span className="footer-video-panel__status" role="status">{footerVideoStatus}</span>}
          {footerVideoPositionStatus && <span className="footer-video-panel__position-status" role="status">{footerVideoPositionStatus}</span>}
          {footerVideoPanelStatus && <span className="footer-video-panel__panel-status" role="status">{footerVideoPanelStatus}</span>}
        </>
      )}
    </section>
  ) : null;

  const aboutOnePanelElement = (
    <article
      id="about-panel-01"
      className={`about-panel about-panel--1${aboutOneEffect.frostedGlass ? " about-panel--frosted" : ""}`}
      style={{
        "--about-image": `url("${aboutOneImage.src}")`,
        "--about-blur": `${aboutOneEffect.blurPx}px`,
        "--about-overlay-opacity": aboutOneEffect.overlayOpacity,
      }}
    >
      {aboutOneVideoContent.src && (
        <video ref={aboutOneVideo} className="about-one__video" src={aboutOneVideoContent.src} autoPlay muted loop playsInline />
      )}
      {aboutOneCopy.visible && <div className="about-panel__copy"><span>01.</span><p>Iceberg is a transmedia documentary that uncovers humanity’s hidden capacity to tackle the climate crisis.</p></div>}
      {editorEnabled && (
        <>
          <input ref={aboutOneVideoUploadInput} className="sr-only" type="file" accept="video/mp4,video/quicktime,video/x-quicktime,.mp4,.mov" onChange={replaceAboutOneVideo} />
          <button className="about-one__video-upload" type="button" onClick={() => aboutOneVideoUploadInput.current?.click()} disabled={aboutOneVideoUploading}>
            {aboutOneVideoUploading ? "正在上传…" : "更换背景视频（MP4 / MOV）"}
          </button>
          <button className="about-one__position-undo" type="button" onClick={undoAboutOnePositionChange} disabled={!canUndoAboutOnePosition}>
            ↶ 撤销本次下移位置
          </button>
          {aboutOneVideoStatus && <span className="about-one__video-status" role="status">{aboutOneVideoStatus}</span>}
          {aboutOnePositionStatus && <span className="about-one__position-status" role="status">{aboutOnePositionStatus}</span>}
        </>
      )}
    </article>
  );

  const aboutLowerBlankPanelElement = aboutLowerBlankPanel.visible ? (
    <article
      className={`about-panel about-panel--lower-blank${aboutLowerBlankLayout.enabled ? " about-panel--lower-designed" : ""}`}
      id="about-lower-blank-panel"
      aria-label={aboutLowerBlankLayout.enabled ? "安缦旅行介绍" : "新增空白页"}
      style={{ "--about-lower-background": `url("${aboutLowerBlankBackground.src}")` }}
    >
      {aboutLowerBlankLayout.enabled && (
        <div
          className={`about-lower-layout${aboutLowerBlankEffect.enabled ? " about-lower-layout--frosted" : ""}`}
          style={{
            "--about-lower-blur": `${aboutLowerBlankEffect.blur}px`,
            "--about-lower-glass-opacity": aboutLowerBlankEffect.overlay,
          }}
        >
          <div className="about-lower-layout__card">
            <img className="about-lower-layout__image" src={aboutLowerBlankCardImage.src} alt="安缦度假空间" />
            <div className="about-lower-layout__copy" lang="zh-CN">
              <h2>{aboutLowerBlankCopy.title}</h2>
              <p>{aboutLowerBlankCopy.body}</p>
            </div>
          </div>
          <p className="about-lower-layout__word" aria-hidden="true">{aboutLowerBlankCopy.verticalWord}</p>
        </div>
      )}
      {editorEnabled && (
        <>
          {aboutLowerBlankLayout.enabled && (
            <div className="about-lower-editor" aria-label="本页本地编辑工具">
              <div className="about-lower-editor__primary">
                <button type="button" onClick={openAboutLowerBlankCopyEditor}>编辑文字</button>
                <input
                  ref={aboutLowerBlankCardImageInput}
                  className="sr-only"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif"
                  onChange={(event) => replaceAboutLowerBlankImage(event, "card")}
                />
                <button type="button" onClick={() => aboutLowerBlankCardImageInput.current?.click()} disabled={aboutLowerBlankCardUploading}>
                  {aboutLowerBlankCardUploading ? "正在上传…" : "更换内容图片"}
                </button>
                <input
                  ref={aboutLowerBlankBackgroundInput}
                  className="sr-only"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif"
                  onChange={(event) => replaceAboutLowerBlankImage(event, "background")}
                />
                <button type="button" onClick={() => aboutLowerBlankBackgroundInput.current?.click()} disabled={aboutLowerBlankBackgroundUploading}>
                  {aboutLowerBlankBackgroundUploading ? "正在上传…" : "更换整页背景"}
                </button>
              </div>
              <div className="about-lower-editor__history">
                <button type="button" onClick={undoAboutLowerBlankCopyChange} disabled={!canUndoAboutLowerBlankCopy || aboutLowerBlankCopySaving}>↶ 撤销最近文字修改</button>
                <button type="button" onClick={() => undoAboutLowerBlankImageChange("card")} disabled={!canUndoAboutLowerBlankCardImage || aboutLowerBlankCardUploading}>↶ 撤销最近内容图片修改</button>
                <button type="button" onClick={() => undoAboutLowerBlankImageChange("background")} disabled={!canUndoAboutLowerBlankBackground || aboutLowerBlankBackgroundUploading}>↶ 撤销最近背景修改</button>
                <button type="button" onClick={undoAboutLowerBlankEffectChange} disabled={!canUndoAboutLowerBlankEffect}>↶ 撤销本次毛玻璃</button>
                <button type="button" onClick={undoAboutBlankPanelRemoval} disabled={!canUndoAboutBlankPanelRemoval}>↶ 撤销本次删除上一屏</button>
                <button type="button" onClick={undoAboutLowerBlankPositionChange} disabled={!canUndoAboutLowerBlankPosition}>↶ 撤销本次上移一屏</button>
                <button type="button" onClick={undoAboutLowerBlankLayoutChange} disabled={!canUndoAboutLowerBlankLayout}>↶ 撤销本次页面排版</button>
              </div>
            </div>
          )}
          <button className="about-lower-blank__undo" type="button" onClick={undoAboutLowerBlankPanelInsertion} disabled={!canUndoAboutLowerBlankPanel}>↶ 撤销本次插入空白页</button>
          {aboutLowerBlankPanelStatus && <span className="about-lower-blank__status" role="status">{aboutLowerBlankPanelStatus}</span>}
          {aboutLowerBlankLayoutStatus && <span className="about-lower-editor__status about-lower-editor__status--layout" role="status">{aboutLowerBlankLayoutStatus}</span>}
          {aboutLowerBlankCopyStatus && <span className="about-lower-editor__status about-lower-editor__status--copy" role="status">{aboutLowerBlankCopyStatus}</span>}
          {aboutLowerBlankCardStatus && <span className="about-lower-editor__status about-lower-editor__status--card" role="status">{aboutLowerBlankCardStatus}</span>}
          {aboutLowerBlankBackgroundStatus && <span className="about-lower-editor__status about-lower-editor__status--background" role="status">{aboutLowerBlankBackgroundStatus}</span>}
          {aboutLowerBlankEffectStatus && <span className="about-lower-editor__status about-lower-editor__status--effect" role="status">{aboutLowerBlankEffectStatus}</span>}
          {aboutBlankPanelRemovalStatus && <span className="about-lower-editor__status about-lower-editor__status--blank-removal" role="status">{aboutBlankPanelRemovalStatus}</span>}
          {aboutLowerBlankPositionStatus && <span className="about-lower-editor__status about-lower-editor__status--position" role="status">{aboutLowerBlankPositionStatus}</span>}
        </>
      )}
    </article>
  ) : null;

  const timelineBlankSixPanelElement = timelineFollowupBlank06.visible ? (
    <article
      className={`about-panel about-panel--timeline-followup-blank-06${timelineBlankSixLayout.enabled ? " about-panel--timeline-blank-six-designed" : ""}`}
      id="about-timeline-blank-06"
      aria-label={timelineBlankSixLayout.enabled ? "可编辑的云南旅程展开卡片" : "第六张独立空白页"}
      data-annotation-target="timeline-blank-06"
    >
      {timelineBlankSixLayout.enabled && (
        <div className="timeline-blank-six-layout">
          <header className={`timeline-blank-six-layout__header${timelineBlankSixContent.header.visible ? "" : " is-hidden"}`}>
            {timelineBlankSixContent.header.visible && (
              <>
                <p>{timelineBlankSixContent.header.eyebrow}</p>
                <h2>{timelineBlankSixContent.header.title}</h2>
                <span>{timelineBlankSixContent.header.intro}</span>
              </>
            )}
          </header>
          <ExpandingCards
            aria-label="云南旅程展开卡片"
            items={timelineBlankSixContent.items.map((item) => ({
              ...item,
              imgSrc: timelineBlankSixImages[item.id]?.src || "/assets/images/about-1.avif",
            }))}
            renderControls={editorEnabled ? (item) => (
              <div className="timeline-blank-six-card-tools" aria-label={`${item.title || "当前卡片"}编辑工具`} onClick={(event) => event.stopPropagation()}>
                <button type="button" onClick={() => openTimelineBlankSixEditor(item.id)}>编辑文字与标志</button>
                <button type="button" onClick={() => deleteTimelineBlankSixCardText(item.id)}>删除文字</button>
                <button type="button" onClick={() => deleteTimelineBlankSixCardLogo(item.id)}>删除标志</button>
                <button type="button" onClick={() => timelineBlankSixImageInputs.current[item.id]?.click()} disabled={timelineBlankSixImageUploading[item.id]}>{timelineBlankSixImageUploading[item.id] ? "上传中…" : "更换图片"}</button>
                <button type="button" onClick={() => undoTimelineBlankSixImageChange(item.id)} disabled={!canUndoTimelineBlankSixImage[item.id] || timelineBlankSixImageUploading[item.id]}>↶ 撤销图片</button>
                {timelineBlankSixImageStatus[item.id] && <span role="status">{timelineBlankSixImageStatus[item.id]}</span>}
              </div>
            ) : undefined}
          />
          {editorEnabled && timelineBlankSixContent.items.map((item) => (
            <input
              className="sr-only"
              key={`timeline-blank-six-upload-${item.id}`}
              ref={(node) => { timelineBlankSixImageInputs.current[item.id] = node; }}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif"
              onChange={(event) => replaceTimelineBlankSixImage(event, item.id)}
            />
          ))}
          {editorEnabled && (
            <div className="timeline-blank-six-page-tools" aria-label="本页编辑工具">
              <button type="button" onClick={() => openTimelineBlankSixEditor("header")}>编辑页眉文字</button>
              <button type="button" onClick={deleteTimelineBlankSixHeader}>删除页眉文字</button>
              <button type="button" onClick={undoTimelineBlankSixContentChange} disabled={!canUndoTimelineBlankSixContent || timelineBlankSixContentSaving}>↶ 撤销最近文字/标志修改</button>
              <button type="button" onClick={undoTimelineBlankSixLayoutChange} disabled={!canUndoTimelineBlankSixLayout}>↶ 撤销本次卡片排版</button>
              <button type="button" onClick={undoTimelineBlankSixPositionChange} disabled={!canUndoTimelineBlankSixPosition}>↶ 撤销本次上移一屏</button>
              {!timelineFollowupBlank04.visible && <button type="button" onClick={() => undoTimelineFollowupBlankInsertion("04")} disabled={!canUndoTimelineFollowupBlank["04"]}>↶ 撤销本次删除 ARTHUR 页面</button>}
              <button type="button" onClick={() => undoTimelineFollowupBlankInsertion("06")} disabled={!canUndoTimelineFollowupBlank["06"]}>↶ 撤销本次新增空白页</button>
            </div>
          )}
          {editorEnabled && timelineBlankSixContentStatus && <span className="timeline-blank-six-status" role="status">{timelineBlankSixContentStatus}</span>}
          {editorEnabled && timelineBlankSixLayoutStatus && <span className="timeline-blank-six-status timeline-blank-six-status--layout" role="status">{timelineBlankSixLayoutStatus}</span>}
          {editorEnabled && timelineFollowupBlankStatus["06"] && <span className="timeline-blank-six-status timeline-blank-six-status--insertion" role="status">{timelineFollowupBlankStatus["06"]}</span>}
          {editorEnabled && timelineBlankSixPositionStatus && <span className="timeline-blank-six-status timeline-blank-six-status--position" role="status">{timelineBlankSixPositionStatus}</span>}
          {editorEnabled && !timelineFollowupBlank04.visible && timelineFollowupBlankStatus["04"] && <span className="timeline-blank-six-status timeline-blank-six-status--removed-four" role="status">{timelineFollowupBlankStatus["04"]}</span>}
        </div>
      )}
      {editorEnabled && !timelineBlankSixLayout.enabled && (
        <>
          <button className="timeline-followup-blank-06__undo" type="button" onClick={() => undoTimelineFollowupBlankInsertion("06")} disabled={!canUndoTimelineFollowupBlank["06"]}>↶ 撤销本次新增空白页</button>
          <button className="timeline-blank-six-position__undo" type="button" onClick={undoTimelineBlankSixPositionChange} disabled={!canUndoTimelineBlankSixPosition}>↶ 撤销本次上移一屏</button>
          {!timelineFollowupBlank04.visible && <button className="timeline-blank-four-removal__undo" type="button" onClick={() => undoTimelineFollowupBlankInsertion("04")} disabled={!canUndoTimelineFollowupBlank["04"]}>↶ 撤销本次删除 ARTHUR 页面</button>}
          {timelineFollowupBlankStatus["06"] && <span className="timeline-followup-blank-06__status" role="status">{timelineFollowupBlankStatus["06"]}</span>}
          {timelineBlankSixPositionStatus && <span className="timeline-blank-six-status timeline-blank-six-status--blank-position" role="status">{timelineBlankSixPositionStatus}</span>}
          {!timelineFollowupBlank04.visible && timelineFollowupBlankStatus["04"] && <span className="timeline-blank-four-removal__status" role="status">{timelineFollowupBlankStatus["04"]}</span>}
        </>
      )}
    </article>
  ) : null;

  const timelineBlankOnePanelElement = timelineFollowupBlank01.visible && !timelineBlankOneRemoval.removed ? (
    <article
      className={`about-panel about-panel--timeline-followup-blank-01${timelineBlankOneLayout.enabled ? " about-panel--timeline-blank-one-designed" : ""}`}
      id="about-timeline-blank-01"
      aria-label={timelineBlankOneLayout.enabled ? "Aman 品牌核心价值" : "时间轴下方第一张独立空白屏"}
      data-annotation-target="timeline-blank-01"
      style={{ "--timeline-blank-one-background": `url("${timelineBlankOneBackground.src}")` }}
    >
      {timelineBlankOneLayout.enabled && (
        <div className="timeline-blank-one-layout">
          <aside className="timeline-blank-one-layout__visual" aria-label="Aman 山林背景">
            {timelineBlankOneMark.visible && <img className="timeline-blank-one-layout__mark" src="/assets/images/timeline-blank-01-aman-mark.png" alt="AMAN" />}
          </aside>
          <section className="timeline-blank-one-layout__content" lang="zh-CN">
            <header className="timeline-blank-one-layout__heading">
              <h2>{timelineBlankOneCopy.title}</h2>
              <p>{timelineBlankOneCopy.subtitle}</p>
            </header>
            <div className="timeline-blank-one-layout__principles">
              <p>{timelineBlankOneCopy.principles}</p>
              <p>{timelineBlankOneCopy.principlesZh}</p>
            </div>
            <div className="timeline-blank-one-layout__values">
              {timelineBlankOneCopy.values.map((item, index) => (
                <div className="timeline-blank-one-value" key={`${item.title}-${index}`}>
                  <h3>{item.title}</h3>
                  <span aria-hidden="true">|</span>
                  <p>{item.body}</p>
                </div>
              ))}
              {timelineBlankOneExtraRow.visible && (
                <div className="timeline-blank-one-value timeline-blank-one-value--extra" data-annotation-target="timeline-blank-one-extra-row">
                  <h3>{timelineBlankOneExtraRow.title}</h3>
                  <span aria-hidden="true">|</span>
                  <p>{timelineBlankOneExtraRow.body}</p>
                </div>
              )}
            </div>
            <p className="timeline-blank-one-layout__footer" lang="en">{timelineBlankOneCopy.footer}</p>
            <div className="timeline-blank-one-layout__details" aria-label="Aman 空间细节图片">
              <img src={timelineBlankOneDetailTop.src} alt="Aman 山景休憩空间" />
              <img src={timelineBlankOneDetailBottom.src} alt="Aman 私密庭院" />
            </div>
          </section>
        </div>
      )}
      {editorEnabled && (
        <>
          {timelineBlankOneLayout.enabled && (
            <div className="timeline-blank-one-editor" aria-label="本页本地编辑工具">
              <div className="timeline-blank-one-editor__primary">
                <button type="button" onClick={openTimelineBlankOneCopyEditor}>编辑全部文字</button>
                {timelineBlankOneExtraRow.visible && <button type="button" onClick={openTimelineBlankOneExtraRowEditor}>编辑复制行</button>}
                <input ref={timelineBlankOneBackgroundInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={(event) => replaceTimelineBlankOneAsset(event, "background")} />
                <button type="button" onClick={() => timelineBlankOneBackgroundInput.current?.click()} disabled={timelineBlankOneAssetUploading.background}>{timelineBlankOneAssetUploading.background ? "正在上传…" : "更换左侧背景"}</button>
                <input ref={timelineBlankOneDetailTopInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={(event) => replaceTimelineBlankOneAsset(event, "top")} />
                <button type="button" onClick={() => timelineBlankOneDetailTopInput.current?.click()} disabled={timelineBlankOneAssetUploading.top}>{timelineBlankOneAssetUploading.top ? "正在上传…" : "更换上方图片"}</button>
                <input ref={timelineBlankOneDetailBottomInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={(event) => replaceTimelineBlankOneAsset(event, "bottom")} />
                <button type="button" onClick={() => timelineBlankOneDetailBottomInput.current?.click()} disabled={timelineBlankOneAssetUploading.bottom}>{timelineBlankOneAssetUploading.bottom ? "正在上传…" : "更换下方图片"}</button>
              </div>
              <div className="timeline-blank-one-editor__history">
                <button type="button" onClick={undoTimelineBlankOneCopyChange} disabled={!canUndoTimelineBlankOneCopy || timelineBlankOneCopySaving}>↶ 撤销最近文字修改</button>
                {timelineBlankOneExtraRow.visible && <button type="button" onClick={undoTimelineBlankOneExtraCopyChange} disabled={!canUndoTimelineBlankOneExtraCopy || timelineBlankOneExtraRowSaving}>↶ 撤销复制行文字修改</button>}
                {timelineBlankOneExtraRow.visible && <button type="button" onClick={undoTimelineBlankOneExtraRowInsertion} disabled={!canUndoTimelineBlankOneExtraRow || timelineBlankOneExtraRowSaving}>↶ 撤销本次复制行</button>}
                <button type="button" onClick={() => undoTimelineBlankOneAssetChange("background")} disabled={!canUndoTimelineBlankOneAsset.background || timelineBlankOneAssetUploading.background}>↶ 撤销最近背景修改</button>
                <button type="button" onClick={() => undoTimelineBlankOneAssetChange("top")} disabled={!canUndoTimelineBlankOneAsset.top || timelineBlankOneAssetUploading.top}>↶ 撤销最近上图修改</button>
                <button type="button" onClick={() => undoTimelineBlankOneAssetChange("bottom")} disabled={!canUndoTimelineBlankOneAsset.bottom || timelineBlankOneAssetUploading.bottom}>↶ 撤销最近下图修改</button>
                <button type="button" onClick={undoTimelineBlankOneLayoutChange} disabled={!canUndoTimelineBlankOneLayout}>↶ 撤销本次页面排版</button>
                <button type="button" onClick={undoTimelineBlankOnePositionChange} disabled={!canUndoTimelineBlankOnePosition}>↶ 撤销本次下移一屏</button>
                <button type="button" onClick={undoTimelineBlankOneMarkRemoval} disabled={!canUndoTimelineBlankOneMark}>↶ 撤销本次删除 AMAN 标志</button>
              </div>
            </div>
          )}
          <button
            className="timeline-followup-blank-01__undo"
            type="button"
            onClick={() => undoTimelineFollowupBlankInsertion("01")}
            disabled={!canUndoTimelineFollowupBlank["01"]}
          >
            ↶ 撤销本次增加第一屏
          </button>
          {timelineFollowupBlankStatus["01"] && (
            <span className="timeline-followup-blank-01__status" role="status">{timelineFollowupBlankStatus["01"]}</span>
          )}
          {timelineBlankOneLayoutStatus && <span className="timeline-blank-one-editor__status timeline-blank-one-editor__status--layout" role="status">{timelineBlankOneLayoutStatus}</span>}
          {timelineBlankOneCopyStatus && <span className="timeline-blank-one-editor__status timeline-blank-one-editor__status--copy" role="status">{timelineBlankOneCopyStatus}</span>}
          {timelineBlankOneExtraRowStatus && <span className="timeline-blank-one-editor__status timeline-blank-one-editor__status--extra-row" role="status">{timelineBlankOneExtraRowStatus}</span>}
          {timelineBlankOnePositionStatus && <span className="timeline-blank-one-editor__status timeline-blank-one-editor__status--position" role="status">{timelineBlankOnePositionStatus}</span>}
          {timelineBlankOneMarkStatus && <span className="timeline-blank-one-editor__status timeline-blank-one-editor__status--mark" role="status">{timelineBlankOneMarkStatus}</span>}
          {timelineBlankOneAssetStatus.background && <span className="timeline-blank-one-editor__status timeline-blank-one-editor__status--background" role="status">{timelineBlankOneAssetStatus.background}</span>}
          {timelineBlankOneAssetStatus.top && <span className="timeline-blank-one-editor__status timeline-blank-one-editor__status--top" role="status">{timelineBlankOneAssetStatus.top}</span>}
          {timelineBlankOneAssetStatus.bottom && <span className="timeline-blank-one-editor__status timeline-blank-one-editor__status--bottom" role="status">{timelineBlankOneAssetStatus.bottom}</span>}
        </>
      )}
    </article>
  ) : null;

  return (
    <div className="site" id="top">
      <header className="topbar">
        <a className="topbar__logo" href="#top"><Logo text="JURNEOS" /></a>
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </header>

      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <button className="menu-trigger" type="button" onClick={() => setMenuOpen(true)} aria-expanded={menuOpen}>MENU</button>

      <main>
        <section className={`hero${editorEnabled ? " hero--editable" : ""}`} aria-label="Iceberg introduction">
          <video ref={heroVideo} className="hero__video" src={heroSrc} autoPlay muted loop playsInline />
          <h1>JURNEOS</h1>
          {editorEnabled && (
            <>
              <button className="hero__edit-surface" type="button" onClick={() => setMediaEditorOpen(true)} aria-label="打开首页背景素材管理" />
              <span className="hero__edit-hint">点击背景管理素材</span>
            </>
          )}
        </section>

        {statementPanelRemoval.visible ? (
          <section className="statement" id="the-project">
            <img src="/assets/images/texture-sentence.avif" alt="" />
            <p className={`statement__copy${statementCopy.language === "zh-CN" ? " statement__copy--cn" : ""}`} lang={statementCopy.language}>
              {statementCopy.lines.map((line) => <span key={line}>{line}</span>)}
            </p>
            {editorEnabled && (
              <>
                <div className="statement__tools" aria-label="本段文字本地编辑工具">
                  {statementEditorFeature.enabled && <button className="statement__edit" type="button" onClick={openStatementEditor}>编辑文字</button>}
                  <button className="statement__undo" type="button" onClick={undoStatementChange} disabled={!canUndoStatement}>↶ 撤销最近文字修改</button>
                  {statementEditorFeature.enabled && <button className="statement__feature-undo" type="button" onClick={undoStatementEditorFeature} disabled={!canUndoStatementEditorFeature}>↶ 撤销本次新增文字编辑</button>}
                </div>
                {statementStatus && <div className="statement__status" role="status">{statementStatus}</div>}
              </>
            )}
          </section>
        ) : <span className="removed-section-anchor" id="the-project" aria-hidden="true" />}

        {statementFollowupBlankPanelFour.visible && (
          <section
            className={`statement-followup-blank-four${statementFollowupScrollFlyLayout.enabled ? " statement-followup-blank-four--scroll-fly" : ""}`}
            id="statement-followup-blank-panel-04"
            aria-label={statementFollowupScrollFlyLayout.enabled ? "可编辑的滚动飞入旅程主视觉" : "THE PROJECT 文字屏下方新增独立空白屏"}
            data-annotation-target="statement-followup-blank-panel-04"
            style={{ "--statement-followup-blank-four-background": statementFollowupBlankPanelFourAppearance.background }}
          >
            {statementFollowupScrollFlyLayout.enabled && (
              <ScrollFlyIn
                imageUrl="https://cdn.21st.dev/assets/mirror/f8/f807350ced7c5e2b79dd250c7de73eebcd402442c40f562e3003c95752a75b5c.webp"
                imageAlt="Top view of a private jet flying across the screen"
              >
                <div className="statement-followup-scroll-fly__copy">
                  <p>{statementFollowupScrollFlyContent.eyebrow}</p>
                  <h2 className={statementFollowupScrollFlyHeadingFormat.enabled ? "statement-followup-scroll-fly__heading--two-lines" : undefined}>{statementFollowupScrollFlyContent.heading}</h2>
                </div>
              </ScrollFlyIn>
            )}
            {editorEnabled && (
              <>
                {(statementFollowupScrollFlyLayout.enabled || !statementPanelRemoval.visible) && (
                  <div className="statement-followup-scroll-fly__tools" aria-label="滚动飞入页面本地编辑工具">
                    {statementFollowupScrollFlyLayout.enabled && <button type="button" onClick={openStatementFollowupScrollFlyEditor}>编辑全部文字</button>}
                    {statementFollowupScrollFlyLayout.enabled && <button type="button" onClick={undoStatementFollowupScrollFlyContentChange} disabled={!canUndoStatementFollowupScrollFlyContent}>↶ 撤销最近文字修改</button>}
                    {statementFollowupScrollFlyLayout.enabled && <button type="button" onClick={undoStatementFollowupScrollFlyHeadingFormatChange} disabled={!canUndoStatementFollowupScrollFlyHeadingFormat}>↶ 撤销本次两行排版</button>}
                    {statementFollowupScrollFlyLayout.enabled && <button type="button" onClick={undoStatementFollowupScrollFlyLayoutChange} disabled={!canUndoStatementFollowupScrollFlyLayout}>↶ 撤销本次滚动飞入排版</button>}
                    {!statementPanelRemoval.visible && <button type="button" onClick={undoStatementPanelRemoval} disabled={!canUndoStatementPanelRemoval}>↶ 撤销本次删除此屏</button>}
                  </div>
                )}
                <button className="statement-followup-blank-four__appearance-undo" type="button" onClick={undoStatementFollowupBlankPanelFourAppearanceChange} disabled={!canUndoStatementFollowupBlankPanelFourAppearance}>↶ 撤销本次白色背景</button>
                <button className="statement-followup-blank-four__undo" type="button" onClick={undoStatementFollowupBlankPanelFourInsertion} disabled={!canUndoStatementFollowupBlankPanelFour}>↶ 撤销本次新增空白屏</button>
                {statementFollowupBlankPanelFourStatus && <span className="statement-followup-blank-four__status" role="status">{statementFollowupBlankPanelFourStatus}</span>}
                {statementFollowupBlankPanelFourAppearanceStatus && <span className="statement-followup-blank-four__appearance-status" role="status">{statementFollowupBlankPanelFourAppearanceStatus}</span>}
                {statementFollowupScrollFlyLayoutStatus && <span className="statement-followup-scroll-fly__status statement-followup-scroll-fly__status--layout" role="status">{statementFollowupScrollFlyLayoutStatus}</span>}
                {statementFollowupScrollFlyContentStatus && <span className="statement-followup-scroll-fly__status statement-followup-scroll-fly__status--copy" role="status">{statementFollowupScrollFlyContentStatus}</span>}
                {statementFollowupScrollFlyHeadingFormatStatus && <span className="statement-followup-scroll-fly__status statement-followup-scroll-fly__status--heading-format" role="status">{statementFollowupScrollFlyHeadingFormatStatus}</span>}
                {statementPanelRemovalStatus && <span className="statement-followup-scroll-fly__status statement-followup-scroll-fly__status--statement-removal" role="status">{statementPanelRemovalStatus}</span>}
              </>
            )}
          </section>
        )}

        {aboutLowerBlankPosition.placement === "before-cinematic" && aboutLowerBlankPanelElement}

        {statementFollowupWhitePanelThree.visible && (
          <section
            className={`statement-followup-white-three${statementFollowupCinematicLayout.enabled ? " statement-followup-white-three--cinematic" : ""}`}
            id="statement-followup-white-panel-03"
            aria-label="THE PROJECT 文字屏下方电影感目的地列表"
            data-annotation-target="statement-followup-white-panel-03"
          >
            {statementFollowupCinematicLayout.enabled && (
              <>
                <CinematicList
                  heading={statementFollowupCinematicContent.heading}
                  subtitle={statementFollowupCinematicContent.subtitle}
                  items={statementFollowupCinematicContent.items}
                  images={statementFollowupCinematicImages}
                  editorEnabled={editorEnabled}
                  imageUploading={statementFollowupCinematicImageUploading}
                  canUndoImages={canUndoStatementFollowupCinematicImage}
                  imageStatuses={statementFollowupCinematicImageStatus}
                  onEditHeader={openStatementFollowupCinematicHeaderEditor}
                  onEditItem={openStatementFollowupCinematicItemEditor}
                  onReplaceImage={(cardId) => statementFollowupCinematicImageInputs.current[cardId]?.click()}
                  onUndoImage={undoStatementFollowupCinematicImageChange}
                />
                {editorEnabled && statementFollowupCinematicContent.items.map((item) => (
                  <input
                    className="sr-only"
                    key={item.key}
                    ref={(node) => { statementFollowupCinematicImageInputs.current[item.key] = node; }}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/avif"
                    onChange={(event) => replaceStatementFollowupCinematicImage(event, item.key)}
                    aria-label={`更换 ${item.title} 图片`}
                  />
                ))}
              </>
            )}
            {editorEnabled && (
              <>
                <div className="statement-followup-white-three__tools" aria-label="电影列表页面本地编辑工具">
                  <button type="button" onClick={undoStatementFollowupBlankRemovalChange} disabled={!canUndoStatementFollowupBlankRemoval}>↶ 撤销本次删除图片页</button>
                  <button type="button" onClick={undoStatementFollowupCinematicContentChange} disabled={!canUndoStatementFollowupCinematicContent}>↶ 撤销最近文字修改</button>
                  <button type="button" onClick={undoStatementFollowupCinematicLayoutChange} disabled={!canUndoStatementFollowupCinematicLayout}>↶ 撤销本次电影列表排版</button>
                  <button type="button" onClick={undoStatementFollowupWhitePanelThreeInsertion} disabled={!canUndoStatementFollowupWhitePanelThree}>↶ 撤销本次新增白屏</button>
                </div>
                {(statementFollowupBlankRemovalStatus || statementFollowupWhitePanelThreeStatus || statementFollowupCinematicLayoutStatus || statementFollowupCinematicContentStatus) && (
                  <span className="statement-followup-white-three__status" role="status">
                    {statementFollowupBlankRemovalStatus || statementFollowupCinematicContentStatus || statementFollowupCinematicLayoutStatus || statementFollowupWhitePanelThreeStatus}
                  </span>
                )}
              </>
            )}
          </section>
        )}

        {statementSecondFollowupBlankPanel.visible && !statementSecondFollowupBlurRemoval.removed && (
          <section
            className={`statement-second-followup-blank${statementSecondFollowupBlurLayout.enabled ? " statement-second-followup-blank--blur-cards" : ""}`}
            id="statement-followup-blank-panel-02"
            aria-label="THE PROJECT 文字屏下方新增独立空白屏"
            data-annotation-target="statement-followup-blank-panel-02"
            style={{ "--statement-second-followup-blank-background": statementSecondFollowupBlankAppearance.background }}
          >
            {statementSecondFollowupBlurLayout.enabled && (
              <div className="statement-second-followup-blur-layout">
                <div className="statement-second-followup-blur-grid" aria-label="Blur Vignette 视频卡片">
                  {statementSecondFollowupBlurContent.cards.map((card) => {
                    const video = statementSecondFollowupBlurVideos[card.id];
                    return (
                      <BlurVignette
                        className="statement-second-followup-blur-card"
                        key={card.id}
                        radius="24px"
                        inset="10px"
                        transitionLength="100px"
                        blur="15px"
                      >
                        <video
                          key={video?.src || card.id}
                          className="statement-second-followup-blur-card__video"
                          src={video?.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-hidden="true"
                        />
                        <BlurVignetteArticle />
                        <div className="statement-second-followup-blur-card__shade" aria-hidden="true" />
                        <div className="statement-second-followup-blur-card__copy">
                          <p>{card.eyebrow}</p>
                          <h2>{card.title}</h2>
                          <span>{card.description}</span>
                        </div>
                        {editorEnabled && (
                          <div className="statement-second-followup-blur-card__tools" aria-label={`${card.title} 卡片编辑工具`}>
                            <button type="button" onClick={() => openStatementSecondFollowupBlurEditor(card.id)}>编辑文字</button>
                            <button type="button" onClick={() => statementSecondFollowupBlurVideoInputs.current[card.id]?.click()} disabled={statementSecondFollowupBlurVideoUploading[card.id]}>
                              {statementSecondFollowupBlurVideoUploading[card.id] ? "上传中…" : "更换视频"}
                            </button>
                            <button type="button" onClick={() => undoStatementSecondFollowupBlurVideoChange(card.id)} disabled={!canUndoStatementSecondFollowupBlurVideo[card.id] || statementSecondFollowupBlurVideoUploading[card.id]}>↶ 撤销视频</button>
                          </div>
                        )}
                        {editorEnabled && statementSecondFollowupBlurVideoStatus[card.id] && (
                          <span className="statement-second-followup-blur-card__status" role="status">{statementSecondFollowupBlurVideoStatus[card.id]}</span>
                        )}
                      </BlurVignette>
                    );
                  })}
                </div>
                {statementSecondFollowupBlurContent.cards.map((card) => (
                  <input
                    className="sr-only"
                    key={`statement-second-followup-blur-video-${card.id}`}
                    ref={(node) => { statementSecondFollowupBlurVideoInputs.current[card.id] = node; }}
                    type="file"
                    accept="video/mp4,video/quicktime,video/x-quicktime,video/webm,video/ogg,.mp4,.mov,.m4v,.webm,.ogv,.ogg"
                    onChange={(event) => replaceStatementSecondFollowupBlurVideo(event, card.id)}
                  />
                ))}
              </div>
            )}
            {editorEnabled && (
              <>
                <div className="statement-second-followup-blank__tools" aria-label="本页编辑工具">
                  {statementSecondFollowupBlurLayout.enabled && (
                    <>
                      <button type="button" onClick={undoStatementSecondFollowupBlurContentChange} disabled={!canUndoStatementSecondFollowupBlurContent || statementSecondFollowupBlurContentSaving}>
                        ↶ 撤销最近卡片文字修改
                      </button>
                      <button type="button" onClick={undoStatementSecondFollowupBlurLayoutChange} disabled={!canUndoStatementSecondFollowupBlurLayout}>
                        ↶ 撤销本次视频卡片排版
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={undoStatementSecondFollowupBlankAppearanceChange}
                    disabled={!canUndoStatementSecondFollowupBlankAppearance}
                  >
                    ↶ 撤销本次白色背景
                  </button>
                  <button
                    type="button"
                    onClick={undoStatementSecondFollowupBlankPanelInsertion}
                    disabled={!canUndoStatementSecondFollowupBlankPanel}
                  >
                    ↶ 撤销本次新增空白屏
                  </button>
                </div>
                {statementSecondFollowupBlankAppearanceStatus && (
                  <span className="statement-second-followup-blank__status" role="status">{statementSecondFollowupBlankAppearanceStatus}</span>
                )}
                {statementSecondFollowupBlurContentStatus && (
                  <span className="statement-second-followup-blank__status statement-second-followup-blank__status--copy" role="status">{statementSecondFollowupBlurContentStatus}</span>
                )}
                {statementSecondFollowupBlurLayoutStatus && (
                  <span className="statement-second-followup-blank__status statement-second-followup-blank__status--layout" role="status">{statementSecondFollowupBlurLayoutStatus}</span>
                )}
                {statementSecondFollowupBlankPanelStatus && (
                  <span className="statement-second-followup-blank__status statement-second-followup-blank__status--panel" role="status">{statementSecondFollowupBlankPanelStatus}</span>
                )}
              </>
            )}
          </section>
        )}

        {statementFollowupBlankPanel.visible && !statementFollowupBlankRemoval.removed && (
          <section
            className={`statement-followup-blank${statementFollowupBlankImage.src ? " has-background-image" : ""}`}
            id="statement-followup-blank-panel"
            aria-label="THE PROJECT 下方独立图片空白屏"
            data-annotation-target="statement-followup-blank-panel"
            style={statementFollowupBlankImage.src ? { "--statement-followup-blank-image": `url("${statementFollowupBlankImage.src}")` } : undefined}
          >
            {editorEnabled && (
              <>
                <div className="statement-followup-blank__tools" aria-label="本页图片编辑工具">
                  {statementSecondFollowupBlurRemoval.removed && (
                    <button type="button" onClick={undoStatementSecondFollowupBlurRemovalChange} disabled={!canUndoStatementSecondFollowupBlurRemoval || statementFollowupBlankImageUploading}>↶ 撤销本次删除视频卡片页</button>
                  )}
                  <input ref={statementFollowupBlankImageInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={replaceStatementFollowupBlankImage} />
                  <button className="statement-followup-blank__upload" type="button" onClick={() => statementFollowupBlankImageInput.current?.click()} disabled={statementFollowupBlankImageUploading}>
                    {statementFollowupBlankImageUploading ? "正在上传…" : statementFollowupBlankImage.src ? "更换整屏图片" : "＋ 上传整屏图片"}
                  </button>
                  <button type="button" onClick={undoStatementFollowupBlankImageChange} disabled={!canUndoStatementFollowupBlankImage || statementFollowupBlankImageUploading}>↶ 撤销最近图片修改</button>
                  <button type="button" onClick={undoStatementFollowupBlankPanelInsertion} disabled={!canUndoStatementFollowupBlankPanel || statementFollowupBlankImageUploading}>↶ 撤销本次新增空白屏</button>
                </div>
                {statementFollowupBlankImageStatus && <span className="statement-followup-blank__status" role="status">{statementFollowupBlankImageStatus}</span>}
                {statementSecondFollowupBlurRemovalStatus && <span className="statement-followup-blank__status statement-followup-blank__status--removal" role="status">{statementSecondFollowupBlurRemovalStatus}</span>}
                {statementFollowupBlankPanelStatus && <span className="statement-followup-blank__status statement-followup-blank__status--panel" role="status">{statementFollowupBlankPanelStatus}</span>}
              </>
            )}
          </section>
        )}

        <section className="about" aria-label="The project">
          {aboutOnePosition.placement === "original" && aboutOnePanelElement}
          {aboutBlankPanel.visible && (
            <article
              className="about-panel about-panel--blank"
              id="about-blank-panel"
              aria-label="空白内容屏"
              style={{
                "--about-blank-background": aboutBlankPanelAppearance.background,
                "--about-blank-image": aboutBlankImageFeature.enabled && aboutBlankImageContent.src
                  ? `url("${aboutBlankImageContent.src}")`
                  : "none",
              }}
            >
              {aboutBlankVideoFeature.enabled && aboutBlankVideoContent.src && (
                <video ref={aboutBlankVideo} className="about-blank__video" src={aboutBlankVideoContent.src} autoPlay muted loop playsInline />
              )}
              {editorEnabled && (
                <>
                  {aboutBlankImageFeature.enabled && (
                    <>
                      <input
                        ref={aboutBlankImageUploadInput}
                        className="sr-only"
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif"
                        onChange={replaceAboutBlankImage}
                      />
                      <button
                        className="about-blank__image-upload"
                        type="button"
                        title="支持 JPG、PNG、WebP、AVIF，最大 25 MB"
                        onClick={() => aboutBlankImageUploadInput.current?.click()}
                        disabled={aboutBlankImageUploading}
                      >
                        {aboutBlankImageUploading ? "正在上传…" : aboutBlankImageContent.src ? "更换背景图片" : "＋ 上传背景图片"}
                      </button>
                      <button className="about-blank__image-undo" type="button" onClick={undoAboutBlankImageReplacement} disabled={!canUndoAboutBlankImage || aboutBlankImageUploading}>
                        ↶ 撤销最近一次图片修改
                      </button>
                      <button className="about-blank__image-feature-undo" type="button" onClick={undoAboutBlankImageFeature} disabled={!canUndoAboutBlankImageFeature || aboutBlankImageUploading}>
                        ↶ 撤销本次新增图片功能
                      </button>
                    </>
                  )}
                  {aboutBlankImageStatus && <span className="about-blank__image-status" role="status">{aboutBlankImageStatus}</span>}
                  {aboutBlankImageFeatureStatus && <span className="about-blank__image-feature-status" role="status">{aboutBlankImageFeatureStatus}</span>}
                  {aboutBlankControls.visible ? (
                    <>
                      <button className="about-blank__undo" type="button" onClick={undoAboutBlankPanelInsertion} disabled={!canUndoAboutBlankPanel}>
                        ↶ 撤销本次插入空白屏
                      </button>
                      <button className="about-blank__appearance-undo" type="button" onClick={undoAboutBlankPanelAppearance} disabled={!canUndoAboutBlankPanelAppearance}>
                        ↶ 撤销本次白色背景
                      </button>
                      {aboutBlankVideoFeature.enabled && (
                        <>
                          <input ref={aboutBlankVideoUploadInput} className="sr-only" type="file" accept="video/mp4,.mp4" onChange={replaceAboutBlankVideo} />
                          <button className="about-blank__video-upload" type="button" onClick={() => aboutBlankVideoUploadInput.current?.click()} disabled={aboutBlankVideoUploading}>
                            {aboutBlankVideoUploading ? "正在上传…" : aboutBlankVideoContent.src ? "更换视频" : "＋ 上传视频"}
                          </button>
                          <button className="about-blank__video-undo" type="button" onClick={undoAboutBlankVideoReplacement} disabled={!canUndoAboutBlankVideo || aboutBlankVideoUploading}>
                            ↶ 撤销本次视频修改
                          </button>
                          <button className="about-blank__video-feature-undo" type="button" onClick={undoAboutBlankVideoFeature} disabled={!canUndoAboutBlankVideoFeature || aboutBlankVideoUploading}>
                            ↶ 撤销本次增加视频功能
                          </button>
                        </>
                      )}
                      {aboutBlankPanelStatus && <span className="about-blank__status" role="status">{aboutBlankPanelStatus}</span>}
                      {aboutBlankPanelAppearanceStatus && <span className="about-blank__appearance-status" role="status">{aboutBlankPanelAppearanceStatus}</span>}
                      {aboutBlankVideoStatus && <span className="about-blank__video-status" role="status">{aboutBlankVideoStatus}</span>}
                      {aboutBlankVideoFeatureStatus && <span className="about-blank__video-feature-status" role="status">{aboutBlankVideoFeatureStatus}</span>}
                    </>
                  ) : (
                    <button className="about-blank__controls-restore" type="button" onClick={undoAboutBlankControlsRemoval} disabled={!canUndoAboutBlankControls}>
                      ↶ 撤销本次删除按钮
                    </button>
                  )}
                  {aboutBlankControlsStatus && <span className="about-blank__controls-status" role="status">{aboutBlankControlsStatus}</span>}
                </>
              )}
            </article>
          )}
          {aboutLowerBlankPosition.placement === "inside-about" && aboutLowerBlankPanelElement}
          {aboutLowerNextBlankPanel.visible && (
            <article
              className={`about-panel about-panel--lower-next-blank${aboutLowerNextBlankLayout.enabled ? " about-panel--timeline" : ""}`}
              id="about-lower-next-blank-panel"
              aria-label={aboutLowerNextBlankLayout.enabled ? "湖泊生态治理时间轴" : "新增下方空白屏"}
              style={{ "--timeline-background": `url("${aboutLowerNextBlankBackground.src}")` }}
            >
              {aboutLowerNextBlankLayout.enabled && (
                <div className="timeline-panel">
                  <div className="timeline-panel__glass" aria-hidden="true" />
                  <header className="timeline-panel__heading">
                    <img src={aboutLowerNextBlankMark.src} alt="" />
                    <div>
                      <h2>{aboutLowerNextBlankCopy.title}</h2>
                      <p>{aboutLowerNextBlankCopy.subtitle}</p>
                    </div>
                    <img src={aboutLowerNextBlankMark.src} alt="" />
                  </header>
                  <img className="timeline-panel__line" src={aboutLowerNextBlankLine.src} alt="" />
                  <div className="timeline-panel__milestones">
                    {aboutLowerNextBlankCopy.milestones.map((milestone, index) => (
                      <section className={`timeline-milestone timeline-milestone--${index + 1}`} key={`${milestone.title}-${index}`}>
                        <h3>{milestone.title}</h3>
                        <p>{milestone.body}</p>
                      </section>
                    ))}
                  </div>
                </div>
              )}
              {editorEnabled && (
                <>
                  {aboutLowerNextBlankLayout.enabled && (
                    <div className="timeline-editor" aria-label="本页本地编辑工具">
                      <div className="timeline-editor__primary">
                        <button type="button" onClick={openAboutLowerNextBlankCopyEditor}>编辑全部文字</button>
                        <input ref={aboutLowerNextBlankBackgroundInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={(event) => replaceAboutLowerNextBlankAsset(event, "background")} />
                        <button type="button" onClick={() => aboutLowerNextBlankBackgroundInput.current?.click()} disabled={aboutLowerNextBlankAssetUploading.background}>{aboutLowerNextBlankAssetUploading.background ? "正在上传…" : "更换整页背景"}</button>
                        <input ref={aboutLowerNextBlankLineInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={(event) => replaceAboutLowerNextBlankAsset(event, "line")} />
                        <button type="button" onClick={() => aboutLowerNextBlankLineInput.current?.click()} disabled={aboutLowerNextBlankAssetUploading.line}>{aboutLowerNextBlankAssetUploading.line ? "正在上传…" : "更换时间轴图片"}</button>
                        <input ref={aboutLowerNextBlankMarkInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={(event) => replaceAboutLowerNextBlankAsset(event, "mark")} />
                        <button type="button" onClick={() => aboutLowerNextBlankMarkInput.current?.click()} disabled={aboutLowerNextBlankAssetUploading.mark}>{aboutLowerNextBlankAssetUploading.mark ? "正在上传…" : "更换标题标志"}</button>
                      </div>
                      <div className="timeline-editor__history">
                        <button type="button" onClick={undoAboutLowerNextBlankCopyChange} disabled={!canUndoAboutLowerNextBlankCopy || aboutLowerNextBlankCopySaving}>↶ 撤销最近文字修改</button>
                        <button type="button" onClick={() => undoAboutLowerNextBlankAssetChange("background")} disabled={!canUndoAboutLowerNextBlankAsset.background || aboutLowerNextBlankAssetUploading.background}>↶ 撤销最近背景修改</button>
                        <button type="button" onClick={() => undoAboutLowerNextBlankAssetChange("line")} disabled={!canUndoAboutLowerNextBlankAsset.line || aboutLowerNextBlankAssetUploading.line}>↶ 撤销最近时间轴图片</button>
                        <button type="button" onClick={() => undoAboutLowerNextBlankAssetChange("mark")} disabled={!canUndoAboutLowerNextBlankAsset.mark || aboutLowerNextBlankAssetUploading.mark}>↶ 撤销最近标题标志</button>
                        <button type="button" onClick={undoAboutLowerNextBlankLayoutChange} disabled={!canUndoAboutLowerNextBlankLayout}>↶ 撤销本次时间轴排版</button>
                      </div>
                    </div>
                  )}
                  <button
                    className="about-lower-next-blank__undo"
                    type="button"
                    onClick={undoAboutLowerNextBlankPanelInsertion}
                    disabled={!canUndoAboutLowerNextBlankPanel}
                  >
                    ↶ 撤销本次插入空白屏
                  </button>
                  {aboutLowerNextBlankPanelStatus && (
                    <span className="about-lower-next-blank__status" role="status">{aboutLowerNextBlankPanelStatus}</span>
                  )}
                  {aboutLowerNextBlankLayoutStatus && <span className="timeline-editor__status timeline-editor__status--layout" role="status">{aboutLowerNextBlankLayoutStatus}</span>}
                  {aboutLowerNextBlankCopyStatus && <span className="timeline-editor__status timeline-editor__status--copy" role="status">{aboutLowerNextBlankCopyStatus}</span>}
                  {aboutLowerNextBlankAssetStatus.background && <span className="timeline-editor__status timeline-editor__status--background" role="status">{aboutLowerNextBlankAssetStatus.background}</span>}
                  {aboutLowerNextBlankAssetStatus.line && <span className="timeline-editor__status timeline-editor__status--line" role="status">{aboutLowerNextBlankAssetStatus.line}</span>}
                  {aboutLowerNextBlankAssetStatus.mark && <span className="timeline-editor__status timeline-editor__status--mark" role="status">{aboutLowerNextBlankAssetStatus.mark}</span>}
                </>
              )}
            </article>
          )}
          {timelineVideoBlankPanel.visible && (
            <article
              className={`about-panel about-panel--timeline-video-blank${timelineVideoBlankContent.src ? " has-video" : ""}`}
              id="about-timeline-video-blank-panel"
              aria-label="时间轴下方独立视频空白页"
              data-annotation-target="timeline-video-blank-panel"
            >
              {timelineVideoBlankContent.src && (
                <video ref={timelineVideoBlankVideo} className="timeline-video-blank__video" src={timelineVideoBlankContent.src} autoPlay muted loop playsInline />
              )}
              {editorEnabled && (
                <>
                  <div className="timeline-video-blank__tools" aria-label="本页视频工具">
                    <input
                      ref={timelineVideoBlankUploadInput}
                      className="sr-only"
                      type="file"
                      accept="video/*,.mkv,.avi,.flv,.wmv,.m4v,.3gp,.ts,.mts,.m2ts"
                      onChange={replaceTimelineVideoBlank}
                    />
                    <button className="timeline-video-blank__upload" type="button" onClick={() => timelineVideoBlankUploadInput.current?.click()} disabled={timelineVideoBlankUploading}>
                      {timelineVideoBlankUploading ? "正在上传…" : timelineVideoBlankContent.src ? "更换视频（所有格式）" : "＋ 上传视频（所有格式）"}
                    </button>
                    <button type="button" onClick={undoTimelineVideoBlankReplacement} disabled={!canUndoTimelineVideoBlank || timelineVideoBlankUploading}>↶ 撤销最近视频修改</button>
                    <button type="button" onClick={undoTimelineVideoBlankPanelInsertion} disabled={!canUndoTimelineVideoBlankPanel || timelineVideoBlankUploading}>↶ 撤销本次新增空白页</button>
                  </div>
                  {timelineVideoBlankStatus && <span className="timeline-video-blank__status" role="status">{timelineVideoBlankStatus}</span>}
                  {timelineVideoBlankPanelStatus && <span className="timeline-video-blank__status timeline-video-blank__status--panel" role="status">{timelineVideoBlankPanelStatus}</span>}
                </>
              )}
            </article>
          )}
          {timelineBlankOnePosition.placement === "before-02" && timelineBlankOnePanelElement}
          {timelineFollowupBlank02.visible && !selectedSevenPageRemoval.timelineBlankTwoRemoved && (
            <article
              className={`about-panel about-panel--timeline-followup-blank-02${timelineBlankTwoLayout.enabled ? " about-panel--timeline-blank-two-designed" : ""}`}
              id="about-timeline-blank-02"
              aria-label={timelineBlankTwoLayout.enabled ? "Abyss of Deceptions 电影海报" : "时间轴下方第二张独立空白屏"}
              data-annotation-target="timeline-blank-02"
              style={timelineBlankTwoBackground.src ? { "--timeline-blank-two-background": `url("${timelineBlankTwoBackground.src}")` } : undefined}
            >
              {timelineBlankTwoLayout.enabled && (
                <div className="timeline-blank-two-layout">
                  <div className="timeline-blank-two-poster">
                    <h2>{timelineBlankTwoCopy.title}</h2>
                    <figure className="timeline-blank-two-layout__image">
                      <img src={timelineBlankTwoImage.src} alt="黑白电影人物特写" />
                    </figure>
                    <footer className="timeline-blank-two-layout__credits">
                      <div className="timeline-blank-two-layout__left-credit">
                        <p>{timelineBlankTwoCopy.tagline}</p>
                        <p>{timelineBlankTwoCopy.credit}</p>
                      </div>
                      <div className="timeline-blank-two-layout__studio">
                        <img src="/assets/images/timeline-blank-02-neon-mark.png" alt="" />
                        <p><strong>{timelineBlankTwoCopy.studioName}</strong> <span>{timelineBlankTwoCopy.studioSuffix}</span></p>
                      </div>
                    </footer>
                  </div>
                </div>
              )}
              {editorEnabled && (
                <>
                  {timelineBlankTwoLayout.enabled ? (
                    <div className="timeline-blank-two-editor" aria-label="本页本地编辑工具">
                      <div className="timeline-blank-two-editor__primary">
                        <button type="button" onClick={openTimelineBlankTwoCopyEditor}>编辑全部文字</button>
                        <input ref={timelineBlankTwoImageInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={(event) => replaceTimelineBlankTwoAsset(event, "image")} />
                        <button type="button" onClick={() => timelineBlankTwoImageInput.current?.click()} disabled={timelineBlankTwoAssetUploading.image}>{timelineBlankTwoAssetUploading.image ? "正在上传…" : "更换黑白主图"}</button>
                        <input ref={timelineBlankTwoBackgroundInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={(event) => replaceTimelineBlankTwoAsset(event, "background")} />
                        <button type="button" onClick={() => timelineBlankTwoBackgroundInput.current?.click()} disabled={timelineBlankTwoAssetUploading.background}>{timelineBlankTwoAssetUploading.background ? "正在上传…" : "更换整页背景"}</button>
                      </div>
                      <div className="timeline-blank-two-editor__history">
                        <button type="button" onClick={undoTimelineBlankTwoCopyChange} disabled={!canUndoTimelineBlankTwoCopy || timelineBlankTwoCopySaving}>↶ 撤销最近文字修改</button>
                        <button type="button" onClick={() => undoTimelineBlankTwoAssetChange("image")} disabled={!canUndoTimelineBlankTwoAsset.image || timelineBlankTwoAssetUploading.image}>↶ 撤销最近主图修改</button>
                        <button type="button" onClick={() => undoTimelineBlankTwoAssetChange("background")} disabled={!canUndoTimelineBlankTwoAsset.background || timelineBlankTwoAssetUploading.background}>↶ 撤销最近背景修改</button>
                        <button type="button" onClick={undoTimelineBlankTwoLayoutChange} disabled={!canUndoTimelineBlankTwoLayout}>↶ 撤销本次页面排版</button>
                        <button type="button" onClick={() => undoTimelineFollowupBlankInsertion("02")} disabled={!canUndoTimelineFollowupBlank["02"]}>↶ 撤销本次增加第二屏</button>
                      </div>
                    </div>
                  ) : (
                    <button className="timeline-followup-blank-02__undo" type="button" onClick={() => undoTimelineFollowupBlankInsertion("02")} disabled={!canUndoTimelineFollowupBlank["02"]}>↶ 撤销本次增加第二屏</button>
                  )}
                  {timelineFollowupBlankStatus["02"] && (
                    <span className="timeline-followup-blank-02__status" role="status">{timelineFollowupBlankStatus["02"]}</span>
                  )}
                  {timelineBlankTwoLayoutStatus && <span className="timeline-blank-two-editor__status timeline-blank-two-editor__status--layout" role="status">{timelineBlankTwoLayoutStatus}</span>}
                  {timelineBlankTwoCopyStatus && <span className="timeline-blank-two-editor__status timeline-blank-two-editor__status--copy" role="status">{timelineBlankTwoCopyStatus}</span>}
                  {timelineBlankTwoAssetStatus.image && <span className="timeline-blank-two-editor__status timeline-blank-two-editor__status--image" role="status">{timelineBlankTwoAssetStatus.image}</span>}
                  {timelineBlankTwoAssetStatus.background && <span className="timeline-blank-two-editor__status timeline-blank-two-editor__status--background" role="status">{timelineBlankTwoAssetStatus.background}</span>}
                </>
              )}
            </article>
          )}
          {timelineBlankOnePosition.placement === "after-02" && timelineBlankOnePanelElement}
          {timelineFollowupBlank03.visible && (
            <article
              className={`about-panel about-panel--timeline-followup-blank-03${timelineBlankThreeLayout.enabled ? " about-panel--timeline-blank-three-designed" : ""}`}
              id="about-timeline-blank-03"
              aria-label={timelineBlankThreeLayout.enabled ? "Market 环境主题双栏介绍" : "第二张电影海报下方新增独立空白页"}
              data-annotation-target="timeline-blank-03"
            >
              {timelineBlankThreeLayout.enabled && (
                <div className="timeline-blank-three-layout">
                  <section className="timeline-blank-three-layout__copy" lang="en">
                    <div className="timeline-blank-three-layout__copy-inner">
                      <header className="timeline-blank-three-layout__heading">
                        <h2>{timelineBlankThreeCopy.title}</h2>
                        <p>{timelineBlankThreeCopy.category}</p>
                      </header>
                      <div className="timeline-blank-three-layout__lines">
                        {timelineBlankThreeCopy.lines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}
                      </div>
                    </div>
                  </section>
                  <figure className="timeline-blank-three-layout__image">
                    <img src={timelineBlankThreeImage.src} alt="手持 Call for Entries 海报的街头人物" />
                  </figure>
                </div>
              )}
              {editorEnabled && (
                <>
                  {timelineBlankThreeLayout.enabled ? (
                    <div className="timeline-blank-three-editor" aria-label="本页本地编辑工具">
                      <div className="timeline-blank-three-editor__primary">
                        <button type="button" onClick={openTimelineBlankThreeCopyEditor}>编辑全部文字</button>
                        <input ref={timelineBlankThreeImageInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={replaceTimelineBlankThreeImage} />
                        <button type="button" onClick={() => timelineBlankThreeImageInput.current?.click()} disabled={timelineBlankThreeImageUploading}>{timelineBlankThreeImageUploading ? "正在上传…" : "更换右侧图片"}</button>
                      </div>
                      <div className="timeline-blank-three-editor__history">
                        <button type="button" onClick={undoTimelineBlankThreeCopyChange} disabled={!canUndoTimelineBlankThreeCopy || timelineBlankThreeCopySaving}>↶ 撤销最近文字修改</button>
                        <button type="button" onClick={undoTimelineBlankThreeImageChange} disabled={!canUndoTimelineBlankThreeImage || timelineBlankThreeImageUploading}>↶ 撤销最近图片修改</button>
                        <button type="button" onClick={undoTimelineBlankThreeLayoutChange} disabled={!canUndoTimelineBlankThreeLayout}>↶ 撤销本次页面排版</button>
                        {timelineBlankOneRemoval.removed && <button type="button" onClick={undoTimelineBlankOneRemoval} disabled={!canUndoTimelineBlankOneRemoval}>↶ 撤销本次删除 Aman 页面</button>}
                        {(selectedSevenPageRemoval.timelineBlankTwoRemoved || selectedSevenPageRemoval.projectCardsRemoved) && <button type="button" onClick={undoSelectedSevenPageRemoval} disabled={!canUndoSelectedSevenPageRemoval}>↶ 撤销本次删除选中七页</button>}
                        <button type="button" onClick={() => undoTimelineFollowupBlankInsertion("03")} disabled={!canUndoTimelineFollowupBlank["03"]}>↶ 撤销本次新增空白页</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {timelineBlankOneRemoval.removed && (
                        <button className="timeline-blank-one-removal__undo" type="button" onClick={undoTimelineBlankOneRemoval} disabled={!canUndoTimelineBlankOneRemoval}>↶ 撤销本次删除 Aman 页面</button>
                      )}
                      {(selectedSevenPageRemoval.timelineBlankTwoRemoved || selectedSevenPageRemoval.projectCardsRemoved) && (
                        <button className="selected-seven-page-removal__undo" type="button" onClick={undoSelectedSevenPageRemoval} disabled={!canUndoSelectedSevenPageRemoval}>↶ 撤销本次删除选中七页</button>
                      )}
                      <button className="timeline-followup-blank-03__undo" type="button" onClick={() => undoTimelineFollowupBlankInsertion("03")} disabled={!canUndoTimelineFollowupBlank["03"]}>↶ 撤销本次新增空白页</button>
                    </>
                  )}
                  {timelineFollowupBlankStatus["03"] && (
                    <span className="timeline-followup-blank-03__status" role="status">{timelineFollowupBlankStatus["03"]}</span>
                  )}
                  {timelineBlankOneRemovalStatus && (
                    <span className="timeline-blank-one-removal__status" role="status">{timelineBlankOneRemovalStatus}</span>
                  )}
                  {timelineBlankThreeLayoutStatus && <span className="timeline-blank-three-editor__status timeline-blank-three-editor__status--layout" role="status">{timelineBlankThreeLayoutStatus}</span>}
                  {timelineBlankThreeCopyStatus && <span className="timeline-blank-three-editor__status timeline-blank-three-editor__status--copy" role="status">{timelineBlankThreeCopyStatus}</span>}
                  {timelineBlankThreeImageStatus && <span className="timeline-blank-three-editor__status timeline-blank-three-editor__status--image" role="status">{timelineBlankThreeImageStatus}</span>}
                  {selectedSevenPageRemovalStatus && <span className={`timeline-blank-three-editor__status${timelineBlankThreeLayout.enabled ? " timeline-blank-three-editor__status--selected-pages" : " selected-seven-page-removal__status"}`} role="status">{selectedSevenPageRemovalStatus}</span>}
                </>
              )}
            </article>
          )}
          {timelineFollowupBlank08.visible && (
            <article
              className={`about-panel about-panel--timeline-followup-blank-08${timelineBlankEightLayout.enabled ? " about-panel--timeline-blank-eight-designed" : ""}`}
              id="about-timeline-blank-08"
              aria-label={timelineBlankEightLayout.enabled ? "ELIN 深色编辑人物页面" : "ARTHUR 人物页上方新增独立空白屏"}
              data-annotation-target="timeline-blank-08"
            >
              {timelineBlankEightLayout.enabled && (
                <div className="timeline-blank-eight-layout" lang="en">
                  <h2
                    className="timeline-blank-eight-layout__title"
                    style={{
                      "--timeline-blank-eight-title-scale": timelineBlankEightTitleFit.enabled
                        ? String(Math.min(0.93, 2.8 / Math.max(Array.from(timelineBlankEightCopy.title).length, 1)))
                        : "0.93",
                    }}
                  >
                    {timelineBlankEightCopy.title}
                  </h2>
                  <div className="timeline-blank-eight-layout__copy">
                    <h3>{timelineBlankEightCopy.copyTitle}</h3>
                    <p>{timelineBlankEightCopy.body}</p>
                  </div>
                  <figure className="timeline-blank-eight-layout__portrait">
                    <figcaption>{timelineBlankEightCopy.topCaption}</figcaption>
                    <img src={timelineBlankEightImage.src} alt="城市庭院中的侧身人物" />
                  </figure>
                </div>
              )}
              {editorEnabled && (
                <>
                  {timelineBlankEightLayout.enabled ? (
                    <div className="timeline-blank-eight-editor" aria-label="本页本地编辑工具">
                      <div className="timeline-blank-eight-editor__primary">
                        <button type="button" onClick={openTimelineBlankEightCopyEditor}>编辑全部文字</button>
                        <input ref={timelineBlankEightImageInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={replaceTimelineBlankEightImage} />
                        <button type="button" onClick={() => timelineBlankEightImageInput.current?.click()} disabled={timelineBlankEightImageUploading}>{timelineBlankEightImageUploading ? "正在上传…" : "更换右侧图片"}</button>
                      </div>
                      <div className="timeline-blank-eight-editor__history">
                        <button type="button" onClick={undoTimelineBlankEightCopyChange} disabled={!canUndoTimelineBlankEightCopy || timelineBlankEightCopySaving}>↶ 撤销最近文字修改</button>
                        <button type="button" onClick={undoTimelineBlankEightImageChange} disabled={!canUndoTimelineBlankEightImage || timelineBlankEightImageUploading}>↶ 撤销最近图片修改</button>
                        <button type="button" onClick={undoTimelineBlankEightTitleFitChange} disabled={!canUndoTimelineBlankEightTitleFit}>↶ 撤销本次完整标题显示</button>
                        <button type="button" onClick={undoTimelineBlankEightLayoutChange} disabled={!canUndoTimelineBlankEightLayout}>↶ 撤销本次页面排版</button>
                        <button type="button" onClick={() => undoTimelineFollowupBlankInsertion("08")} disabled={!canUndoTimelineFollowupBlank["08"]}>↶ 撤销本次新增空白屏</button>
                      </div>
                    </div>
                  ) : (
                    <button className="timeline-followup-blank-08__undo" type="button" onClick={() => undoTimelineFollowupBlankInsertion("08")} disabled={!canUndoTimelineFollowupBlank["08"]}>↶ 撤销本次新增空白屏</button>
                  )}
                  {timelineFollowupBlankStatus["08"] && <span className="timeline-followup-blank-08__status" role="status">{timelineFollowupBlankStatus["08"]}</span>}
                  {timelineBlankEightLayoutStatus && <span className="timeline-blank-eight-editor__status timeline-blank-eight-editor__status--layout" role="status">{timelineBlankEightLayoutStatus}</span>}
                  {timelineBlankEightCopyStatus && <span className="timeline-blank-eight-editor__status timeline-blank-eight-editor__status--copy" role="status">{timelineBlankEightCopyStatus}</span>}
                  {timelineBlankEightImageStatus && <span className="timeline-blank-eight-editor__status timeline-blank-eight-editor__status--image" role="status">{timelineBlankEightImageStatus}</span>}
                  {timelineBlankEightTitleFitStatus && <span className="timeline-blank-eight-editor__status timeline-blank-eight-editor__status--title-fit" role="status">{timelineBlankEightTitleFitStatus}</span>}
                </>
              )}
            </article>
          )}
          {timelineFollowupBlank04.visible && (
            <article
              className={`about-panel about-panel--timeline-followup-blank-04${timelineBlankFourLayout.enabled ? " about-panel--timeline-blank-four-designed" : ""}`}
              id="about-timeline-blank-04"
              aria-label={timelineBlankFourLayout.enabled ? "House NEST 建筑主题纯白编辑页面" : "黑色空白页下方新增独立白色页面"}
              data-annotation-target="timeline-blank-04"
            >
              {timelineBlankFourLayout.enabled && (
                <div className="timeline-blank-four-layout" lang="en">
                  <div className="timeline-blank-four-layout__topline">
                    <p className="timeline-blank-four-layout__brand">{timelineBlankFourCopy.brand}</p>
                    <p className="timeline-blank-four-layout__intro">{timelineBlankFourCopy.intro}</p>
                    <p className="timeline-blank-four-layout__menu">{timelineBlankFourCopy.menu}</p>
                  </div>
                  <div className="timeline-blank-four-layout__meta">
                    <p>{timelineBlankFourCopy.index}</p>
                    <p>{timelineBlankFourCopy.copyright}</p>
                  </div>
                  <div className="timeline-blank-four-layout__bottom">
                    <figure className="timeline-blank-four-layout__image">
                      <img src={timelineBlankFourImage.src} alt="现代住宅与绿植景观" />
                    </figure>
                    <h2
                      className="timeline-blank-four-layout__word"
                      style={{
                        "--timeline-blank-four-word-scale": timelineBlankFourWordFit.enabled
                          ? String(Math.min(0.78, 2.8 / Math.max(Array.from(timelineBlankFourCopy.word).length, 1)))
                          : "0.78",
                      }}
                    >
                      {timelineBlankFourCopy.word}
                    </h2>
                  </div>
                </div>
              )}
              {editorEnabled && (
                <>
                  {timelineBlankFourLayout.enabled ? (
                    <div className="timeline-blank-four-editor" aria-label="本页本地编辑工具">
                      <div className="timeline-blank-four-editor__primary">
                        <button type="button" onClick={openTimelineBlankFourCopyEditor}>编辑全部文字</button>
                        <input ref={timelineBlankFourImageInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={replaceTimelineBlankFourImage} />
                        <button type="button" onClick={() => timelineBlankFourImageInput.current?.click()} disabled={timelineBlankFourImageUploading}>{timelineBlankFourImageUploading ? "正在上传…" : "更换建筑图片"}</button>
                      </div>
                      <div className="timeline-blank-four-editor__history">
                        <button type="button" onClick={undoTimelineBlankFourCopyChange} disabled={!canUndoTimelineBlankFourCopy || timelineBlankFourCopySaving}>↶ 撤销最近文字修改</button>
                        <button type="button" onClick={undoTimelineBlankFourImageChange} disabled={!canUndoTimelineBlankFourImage || timelineBlankFourImageUploading}>↶ 撤销最近图片修改</button>
                        <button type="button" onClick={undoTimelineBlankFourWordFitChange} disabled={!canUndoTimelineBlankFourWordFit}>↶ 撤销本次完整标题显示</button>
                        <button type="button" onClick={undoTimelineBlankFourLayoutChange} disabled={!canUndoTimelineBlankFourLayout}>↶ 撤销本次页面排版</button>
                        <button type="button" onClick={() => undoTimelineFollowupBlankInsertion("04")} disabled={!canUndoTimelineFollowupBlank["04"]}>↶ 撤销本次新增白页</button>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="timeline-followup-blank-04__undo"
                      type="button"
                      onClick={() => undoTimelineFollowupBlankInsertion("04")}
                      disabled={!canUndoTimelineFollowupBlank["04"]}
                    >
                      ↶ 撤销本次新增白页
                    </button>
                  )}
                  {timelineFollowupBlankStatus["04"] && (
                    <span className="timeline-followup-blank-04__status" role="status">{timelineFollowupBlankStatus["04"]}</span>
                  )}
                  {timelineBlankFourLayoutStatus && <span className="timeline-blank-four-editor__status timeline-blank-four-editor__status--layout" role="status">{timelineBlankFourLayoutStatus}</span>}
                  {timelineBlankFourCopyStatus && <span className="timeline-blank-four-editor__status timeline-blank-four-editor__status--copy" role="status">{timelineBlankFourCopyStatus}</span>}
                  {timelineBlankFourImageStatus && <span className="timeline-blank-four-editor__status timeline-blank-four-editor__status--image" role="status">{timelineBlankFourImageStatus}</span>}
                  {timelineBlankFourWordFitStatus && <span className="timeline-blank-four-editor__status timeline-blank-four-editor__status--word-fit" role="status">{timelineBlankFourWordFitStatus}</span>}
                </>
              )}
            </article>
          )}
          {timelineBlankSixPosition.placement === "before-05" && timelineBlankSixPanelElement}
          {timelineFollowupBlank05.visible && (
            <article
              className={`about-panel about-panel--timeline-followup-blank-05${timelineBlankFiveBackground.src ? " has-background-image" : ""}`}
              id="about-timeline-blank-05"
              aria-label="House NEST 页面下方新增独立空白页"
              data-annotation-target="timeline-blank-05"
              style={timelineBlankFiveBackground.src ? { "--timeline-blank-five-background": `url("${timelineBlankFiveBackground.src}")` } : undefined}
            >
              {editorEnabled && (
                <>
                  <div className="timeline-blank-five-editor" aria-label="本页背景图片编辑工具">
                    <input ref={timelineBlankFiveBackgroundInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={replaceTimelineBlankFiveBackground} />
                    <button className="timeline-blank-five-editor__replace" type="button" onClick={() => timelineBlankFiveBackgroundInput.current?.click()} disabled={timelineBlankFiveBackgroundUploading}>
                      {timelineBlankFiveBackgroundUploading ? "正在上传…" : "更换背景图片"}
                    </button>
                    <button type="button" onClick={undoTimelineBlankFiveBackgroundChange} disabled={!canUndoTimelineBlankFiveBackground || timelineBlankFiveBackgroundUploading}>↶ 撤销最近背景修改</button>
                    <button type="button" onClick={() => undoTimelineFollowupBlankInsertion("05")} disabled={!canUndoTimelineFollowupBlank["05"]}>↶ 撤销本次新增空白页</button>
                  </div>
                  {timelineFollowupBlankStatus["05"] && <span className="timeline-followup-blank-05__status" role="status">{timelineFollowupBlankStatus["05"]}</span>}
                  {timelineBlankFiveBackgroundStatus && <span className="timeline-blank-five-background__status" role="status">{timelineBlankFiveBackgroundStatus}</span>}
                </>
              )}
            </article>
          )}
          {timelineBlankSixPosition.placement === "after-05" && timelineBlankSixPanelElement}
          {timelineFollowupBlank07.visible && (
            <article
              className={`about-panel about-panel--timeline-followup-blank-07${timelineBlankSevenLayout.enabled ? " about-panel--timeline-blank-seven-designed" : ""}`}
              id="about-timeline-blank-07"
              aria-label={timelineBlankSevenLayout.enabled ? "拍摄设备互动文件夹画廊" : "展开卡片页下方新增独立空白页"}
              data-annotation-target="timeline-blank-07"
            >
              {timelineBlankSevenLayout.enabled && (
                <InteractiveFolderGallery
                  photos={timelineBlankSevenGalleryPhotos}
                  folderName="拍摄设备"
                  dragHintText="向下拖动任意图片以收起"
                />
              )}
              {editorEnabled && (
                <>
                  <div className="timeline-blank-seven-editor" aria-label="拍摄设备文件夹页面编辑工具">
                    {timelineBlankSevenLayout.enabled && <button type="button" onClick={undoTimelineBlankSevenLayoutChange} disabled={!canUndoTimelineBlankSevenLayout}>↶ 撤销本次文件夹排版</button>}
                    <button type="button" onClick={undoAboutPanelSelectionRemoval} disabled={!canUndoAboutPanelSelectionRemoval}>↶ 撤销本次删除第 08、09 屏</button>
                    <button type="button" onClick={() => undoTimelineFollowupBlankInsertion("07")} disabled={!canUndoTimelineFollowupBlank["07"]}>↶ 撤销本次新增空白页</button>
                  </div>
                  {aboutPanelSelectionRemovalStatus && <span className="about-panel-selection-removal__status about-panel-selection-removal__status--near-gallery" role="status">{aboutPanelSelectionRemovalStatus}</span>}
                  {timelineFollowupBlankStatus["07"] && <span className="timeline-followup-blank-07__status" role="status">{timelineFollowupBlankStatus["07"]}</span>}
                  {timelineBlankSevenLayoutStatus && <span className="timeline-blank-seven-layout__status" role="status">{timelineBlankSevenLayoutStatus}</span>}
                  {!timelineFollowupBlank05.visible && (
                    <button className="timeline-blank-five-removal__undo" type="button" onClick={() => undoTimelineFollowupBlankInsertion("05")} disabled={!canUndoTimelineFollowupBlank["05"]}>↶ 撤销本次删除此屏</button>
                  )}
                  {!timelineFollowupBlank05.visible && timelineFollowupBlankStatus["05"] && (
                    <span className="timeline-blank-five-removal__status" role="status">{timelineFollowupBlankStatus["05"]}</span>
                  )}
                </>
              )}
            </article>
          )}
          {timelineGalleryFollowupBlankPanel.visible && (
            <article
              className={`about-panel timeline-gallery-followup-blank${timelineGalleryPricingLayout.enabled ? " timeline-gallery-followup-blank--pricing" : ""}`}
              id="about-timeline-gallery-followup-blank-panel"
              aria-label={timelineGalleryPricingLayout.enabled ? "可编辑的双栏定价卡片" : "拍摄设备页下方新增独立空白屏"}
              data-annotation-target="timeline-gallery-followup-blank-panel"
            >
              {timelineGalleryPricingLayout.enabled && <PricingCards tiers={timelineGalleryPricingContent.tiers} />}
              {editorEnabled && (
                <>
                  {timelineGalleryPricingLayout.enabled && (
                    <div className="timeline-gallery-pricing-editor" aria-label="定价卡片页面编辑工具">
                      <button type="button" onClick={openTimelineGalleryPricingEditor}>编辑全部文字</button>
                      <button type="button" onClick={undoTimelineGalleryPricingContentChange} disabled={!canUndoTimelineGalleryPricingContent}>↶ 撤销最近文字修改</button>
                      <button type="button" onClick={undoTimelineGalleryPricingLayoutChange} disabled={!canUndoTimelineGalleryPricingLayout}>↶ 撤销本次定价卡片排版</button>
                    </div>
                  )}
                  <button className="timeline-gallery-followup-blank__undo" type="button" onClick={undoTimelineGalleryFollowupBlankPanelInsertion} disabled={!canUndoTimelineGalleryFollowupBlankPanel}>↶ 撤销本次新增空白屏</button>
                  {timelineGalleryFollowupBlankPanelStatus && <span className="timeline-gallery-followup-blank__status" role="status">{timelineGalleryFollowupBlankPanelStatus}</span>}
                  {timelineGalleryPricingContentStatus && <span className="timeline-gallery-pricing-content__status" role="status">{timelineGalleryPricingContentStatus}</span>}
                  {timelineGalleryPricingLayoutStatus && <span className="timeline-gallery-pricing-layout__status" role="status">{timelineGalleryPricingLayoutStatus}</span>}
                </>
              )}
            </article>
          )}
          {!removedAboutPanelIds.has("02") && (
          <article className="about-panel about-panel--2" id="about-panel-02" style={{ "--about-panel-background": `url("${aboutPanelBackgrounds["02"].src}")` }}>
            {aboutTwoVideoFeature.enabled && aboutTwoVideoContent.src && (
              <video ref={aboutTwoVideo} className="about-two__video" src={aboutTwoVideoContent.src} autoPlay muted loop playsInline />
            )}
            <div className="about-panel__copy"><span>02.</span><p>{aboutPanelCopy["02"]}</p></div>
            {editorEnabled && (
              <>
                <AboutPanelCopyTools panelId="02" canUndo={canUndoAboutPanelCopy["02"]} status={aboutPanelCopyStatus["02"]} onEdit={openAboutPanelCopyEditor} onUndo={undoAboutPanelCopyChange} backgroundEnabled={aboutPanelBackgroundFeature.enabled} backgroundUploading={aboutPanelBackgroundUploading["02"]} canUndoBackground={canUndoAboutPanelBackground["02"]} backgroundStatus={aboutPanelBackgroundStatus["02"]} onReplaceBackground={replaceAboutPanelBackground} onUndoBackground={undoAboutPanelBackgroundChange} canUndoBackgroundFeature={canUndoAboutPanelBackgroundFeature} onUndoBackgroundFeature={undoAboutPanelBackgroundFeature} />
                {aboutTwoVideoFeature.enabled && (
                  <>
                    <input ref={aboutTwoVideoUploadInput} className="sr-only" type="file" accept="video/mp4,.mp4" onChange={replaceAboutTwoVideo} />
                    <button className="about-two__video-upload" type="button" onClick={() => aboutTwoVideoUploadInput.current?.click()} disabled={aboutTwoVideoUploading}>
                      {aboutTwoVideoUploading ? "正在上传…" : aboutTwoVideoContent.src ? "更换背景视频" : "＋ 上传背景视频"}
                    </button>
                    <button className="about-two__video-undo" type="button" onClick={undoAboutTwoVideoReplacement} disabled={!canUndoAboutTwoVideo || aboutTwoVideoUploading}>
                      ↶ 撤销本次视频修改
                    </button>
                    <button className="about-two__video-feature-undo" type="button" onClick={undoAboutTwoVideoFeature} disabled={!canUndoAboutTwoVideoFeature || aboutTwoVideoUploading}>
                      ↶ 撤销本次增加视频功能
                    </button>
                  </>
                )}
                {aboutTwoVideoStatus && <span className="about-two__video-status" role="status">{aboutTwoVideoStatus}</span>}
                {aboutTwoVideoFeatureStatus && <span className="about-two__video-feature-status" role="status">{aboutTwoVideoFeatureStatus}</span>}
              </>
            )}
          </article>
          )}
          {!removedAboutPanelIds.has("03") && (
          <article className="about-panel about-panel--3" id="about-panel-03" style={{ "--about-panel-background": `url("${aboutPanelBackgrounds["03"].src}")` }}>
            <div className="about-panel__copy"><span>03.</span><p>{aboutPanelCopy["03"]}</p></div>
            {aboutDiscoverLinks.visible && <RoundLink href="#impact">Discover the project</RoundLink>}
            {editorEnabled && (
              <>
                <AboutPanelCopyTools panelId="03" canUndo={canUndoAboutPanelCopy["03"]} status={aboutPanelCopyStatus["03"]} onEdit={openAboutPanelCopyEditor} onUndo={undoAboutPanelCopyChange} backgroundEnabled={aboutPanelBackgroundFeature.enabled} backgroundUploading={aboutPanelBackgroundUploading["03"]} canUndoBackground={canUndoAboutPanelBackground["03"]} backgroundStatus={aboutPanelBackgroundStatus["03"]} onReplaceBackground={replaceAboutPanelBackground} onUndoBackground={undoAboutPanelBackgroundChange} />
                <button className="about-extra__undo" type="button" onClick={undoExtraAboutGroups} disabled={!canUndoExtraAboutGroups || !extraAboutGroups.enabled}>
                  ↶ 撤销本次增加三组
                </button>
                {extraAboutStatus && <span className="about-extra__status" role="status">{extraAboutStatus}</span>}
                <button className="about-links__undo" type="button" onClick={undoAboutDiscoverLinksRemoval} disabled={!canUndoAboutDiscoverLinks}>
                  ↶ 撤销本次删除按钮
                </button>
                {aboutDiscoverLinksStatus && <span className="about-links__status" role="status">{aboutDiscoverLinksStatus}</span>}
              </>
            )}
          </article>
          )}
          {extraAboutGroups.enabled && Array.from({ length: extraAboutGroups.groups }).flatMap((_, groupIndex) => (
            extraAboutTemplates.map((template, itemIndex) => {
              const panelNumber = 4 + groupIndex * extraAboutGroups.itemsPerGroup + itemIndex;
              const panelId = String(panelNumber).padStart(2, "0");
              if (removedAboutPanelIds.has(panelId)) return null;
              return (
                <article
                  className={`about-panel about-panel--${template.variant} about-panel--extra`}
                  id={`about-panel-${panelId}`}
                  key={`about-extra-${panelNumber}`}
                  style={panelNumber <= 6 ? { "--about-panel-background": `url("${aboutPanelBackgrounds[panelId].src}")` } : undefined}
                >
                  <div className="about-panel__copy">
                    <span>{panelId}.</span>
                    <p>{aboutPanelCopy[panelId]}</p>
                  </div>
                  {template.link && aboutDiscoverLinks.visible && <RoundLink href="#impact">Discover the project</RoundLink>}
                  {editorEnabled && <AboutPanelCopyTools panelId={panelId} canUndo={canUndoAboutPanelCopy[panelId]} status={aboutPanelCopyStatus[panelId]} onEdit={openAboutPanelCopyEditor} onUndo={undoAboutPanelCopyChange} backgroundEnabled={panelNumber <= 6 && aboutPanelBackgroundFeature.enabled} backgroundUploading={aboutPanelBackgroundUploading[panelId]} canUndoBackground={canUndoAboutPanelBackground[panelId]} backgroundStatus={aboutPanelBackgroundStatus[panelId]} onReplaceBackground={replaceAboutPanelBackground} onUndoBackground={undoAboutPanelBackgroundChange} />}
                </article>
              );
            })
          ))}
        </section>

        {impactIntroPanels.visible && (
          <>
            <section className="impact-statement" id="impact">
              <p>Around the world, thousands of initiatives are quietly revolutionizing our predatory system, though—like an iceberg—they often remain hidden beneath the surface.</p>
            </section>

            <section className="projects-intro">
              <div className="projects-intro__image" />
              <div className="projects-intro__copy">
                <p>Projects across the globe that challenge the status quo and reimagine what’s possible. From regenerative economy to sustainable technology and community-driven solutions, these initiatives reveal the power of collective action in building a resilient, sustainable future.</p>
                <RoundLink href="https://www.icebergdoc.org/impact-in-action" light external>All initiatives</RoundLink>
              </div>
            </section>
          </>
        )}

        {!selectedSevenPageRemoval.projectCardsRemoved && (
          <section className="projects" aria-label="Impact initiatives">
            {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
          </section>
        )}

        <section className="podcast-intro" id={impactIntroPanels.visible ? undefined : "impact"}>
          {editorEnabled && !impactIntroPanels.visible && (
            <button className="impact-intro-panels__undo" type="button" onClick={undoImpactIntroPanelsRemoval} disabled={!canUndoImpactIntroPanels}>
              ↶ 撤销本次删除这两屏
            </button>
          )}
          {editorEnabled && impactMediaCopyEditorFeature.enabled && (
            <div className="podcast-intro__copy-tools" aria-label="ECHOES OF CHANGE 文字编辑工具">
              <button type="button" onClick={() => openImpactMediaCopyEditor("impact")}>编辑文字</button>
              <button type="button" onClick={undoImpactMediaCopyChange} disabled={!canUndoImpactMediaCopy}>↶ 撤销最近文字修改</button>
              <button type="button" onClick={undoImpactMediaCopyEditorFeature} disabled={!canUndoImpactMediaCopyEditorFeature}>↶ 撤销本次新增文字编辑</button>
            </div>
          )}
          {impactIntroPanelsStatus && <span className="impact-intro-panels__status" role="status">{impactIntroPanelsStatus}</span>}
          {impactMediaCopyStatus && <span className="impact-media-copy__status impact-media-copy__status--intro" role="status">{impactMediaCopyStatus}</span>}
          {impactMediaCopyEditorFeatureStatus && <span className="impact-media-copy__status impact-media-copy__status--feature" role="status">{impactMediaCopyEditorFeatureStatus}</span>}
          <h2>{impactMediaCopy.impact.heading}</h2>
          <div className="podcast-intro__copy">
            <p>{impactMediaCopy.impact.body}</p>
          </div>
          <div className="podcast-intro__image" />
        </section>

        <section className={`media-grid${mediaCardBodyCopy.visible ? "" : " media-grid--body-copy-hidden"}${mediaCardActions.visible ? "" : " media-grid--actions-hidden"}`}>
          {editorEnabled && (!mediaCardBodyCopy.visible || !mediaCardActions.visible) && (
            <div className="media-grid__history-tools" aria-label="媒体卡片本地撤销工具">
              {!mediaCardBodyCopy.visible && <button className="media-card-body-copy__undo" type="button" onClick={undoMediaCardBodyCopyRemoval} disabled={!canUndoMediaCardBodyCopy}>↶ 撤销本次删除文字</button>}
              {!mediaCardActions.visible && <button className="media-card-actions__undo" type="button" onClick={undoMediaCardActionsRemoval} disabled={!canUndoMediaCardActions}>↶ 撤销本次删除两个按钮</button>}
            </div>
          )}
          {mediaCardBodyCopyStatus && <span className="media-card-body-copy__status" role="status">{mediaCardBodyCopyStatus}</span>}
          {mediaCardActionsStatus && <span className="media-card-actions__status" role="status">{mediaCardActionsStatus}</span>}
          <article className="media-card media-card--podcast">
            {editorEnabled && (impactMediaCopyEditorFeature.enabled || mediaCardPodcastImage.visible) && (
              <div className="media-card__copy-tools" aria-label="THE PODCAST 文字编辑工具">
                {impactMediaCopyEditorFeature.enabled && <button type="button" onClick={() => openImpactMediaCopyEditor("podcast")}>编辑文字</button>}
                {impactMediaCopyEditorFeature.enabled && <button type="button" onClick={undoImpactMediaCopyChange} disabled={!canUndoImpactMediaCopy}>↶ 撤销文字</button>}
                {mediaCardPodcastImage.visible && <button type="button" onClick={undoMediaCardPodcastImageInsertion} disabled={!canUndoMediaCardPodcastImage}>↶ 撤销本次插入图片</button>}
              </div>
            )}
            <h2><span>{impactMediaCopy.podcast.prefix}</span> {impactMediaCopy.podcast.title}</h2>
            {mediaCardPodcastImage.visible && <img className="media-card__center-image" src={mediaCardPodcastImage.src} alt={mediaCardPodcastImage.alt} />}
            {mediaCardPodcastImageStatus && <span className="media-card-podcast-image__status" role="status">{mediaCardPodcastImageStatus}</span>}
            {mediaCardActions.visible && <p className="media-card__status">{impactMediaCopy.podcast.status}</p>}
            {mediaCardBodyCopy.visible ? <p>{impactMediaCopy.podcast.body}</p> : <span className="media-card__removed-copy-spacer" aria-hidden="true" />}
          </article>
          <article className="media-card media-card--crowdfunding">
            {editorEnabled && (impactMediaCopyEditorFeature.enabled || mediaCardCrowdfundingImage.visible) && (
              <div className="media-card__copy-tools" aria-label="THE CROWDFUNDING 文字编辑工具">
                {impactMediaCopyEditorFeature.enabled && <button type="button" onClick={() => openImpactMediaCopyEditor("crowdfunding")}>编辑文字</button>}
                {impactMediaCopyEditorFeature.enabled && <button type="button" onClick={undoImpactMediaCopyChange} disabled={!canUndoImpactMediaCopy}>↶ 撤销文字</button>}
                {mediaCardCrowdfundingImage.visible && <button type="button" onClick={undoMediaCardCrowdfundingImageInsertion} disabled={!canUndoMediaCardCrowdfundingImage}>↶ 撤销本次插入图片</button>}
              </div>
            )}
            <h2><span>{impactMediaCopy.crowdfunding.prefix}</span> {impactMediaCopy.crowdfunding.title}</h2>
            {mediaCardCrowdfundingImage.visible && <img className="media-card__center-image" src={mediaCardCrowdfundingImage.src} alt={mediaCardCrowdfundingImage.alt} />}
            {mediaCardCrowdfundingImageStatus && <span className="media-card-podcast-image__status" role="status">{mediaCardCrowdfundingImageStatus}</span>}
            {mediaCardActions.visible && <RoundLink href="https://www.verkami.com/locale/en/projects/40111-iceberg-proyecto-transmedia" light external>{impactMediaCopy.crowdfunding.link}</RoundLink>}
            {mediaCardBodyCopy.visible ? <p>{impactMediaCopy.crowdfunding.body}</p> : <span className="media-card__removed-copy-spacer" aria-hidden="true" />}
          </article>
        </section>
      </main>

      {editorEnabled && statementFollowupScrollFlyEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setStatementFollowupScrollFlyEditorOpen(false);
        }}>
          <form className="media-editor__dialog statement-followup-scroll-fly-editor" role="dialog" aria-modal="true" aria-labelledby="statement-followup-scroll-fly-editor-title" onSubmit={saveStatementFollowupScrollFlyContent}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="statement-followup-scroll-fly-editor-title">编辑本屏全部文字</h2>
              </div>
              <button type="button" onClick={() => setStatementFollowupScrollFlyEditorOpen(false)} aria-label="关闭滚动飞入页面文字编辑">×</button>
            </header>
            <div className="statement-followup-scroll-fly-editor__fields">
              <label><span>顶部短句</span><input value={statementFollowupScrollFlyDraft.eyebrow} onChange={(event) => setStatementFollowupScrollFlyDraft((current) => ({ ...current, eyebrow: event.target.value }))} maxLength={100} autoFocus /></label>
              <label><span>主标题</span><textarea value={statementFollowupScrollFlyDraft.heading} onChange={(event) => setStatementFollowupScrollFlyDraft((current) => ({ ...current, heading: event.target.value }))} rows={5} maxLength={260} /></label>
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setStatementFollowupScrollFlyEditorOpen(false)}>取消</button>
              <button type="submit" disabled={statementFollowupScrollFlySaving}>{statementFollowupScrollFlySaving ? "正在保存…" : "保存全部文字"}</button>
            </div>
            <p className="media-editor__tip">顶部短句和主标题会一起保存，刷新页面后仍会保留；滚动飞入排版、白色背景与新增屏幕的撤销相互独立。</p>
          </form>
        </div>
      )}

      {editorEnabled && impactMediaCopyEditorTarget && impactMediaCopyDraft && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            setImpactMediaCopyEditorTarget("");
            setImpactMediaCopyDraft(null);
          }
        }}>
          <form className="media-editor__dialog impact-media-copy-editor" role="dialog" aria-modal="true" aria-labelledby="impact-media-copy-editor-title" onSubmit={saveImpactMediaCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="impact-media-copy-editor-title">{impactMediaCopyEditorTarget === "impact" ? "编辑 ECHOES OF CHANGE 区域" : impactMediaCopyEditorTarget === "podcast" ? "编辑 THE PODCAST 卡片" : "编辑 THE CROWDFUNDING 卡片"}</h2>
              </div>
              <button type="button" onClick={() => {
                setImpactMediaCopyEditorTarget("");
                setImpactMediaCopyDraft(null);
              }} aria-label="关闭所选区域文字编辑">×</button>
            </header>
            <div className="impact-media-copy-editor__fields">
              {impactMediaCopyEditorTarget === "impact" ? (
                <>
                  <label><span>大标题</span><input value={impactMediaCopyDraft.impact.heading} onChange={(event) => setImpactMediaCopyDraft((current) => ({ ...current, impact: { ...current.impact, heading: event.target.value } }))} maxLength={80} autoFocus /></label>
                  <label><span>说明正文</span><textarea value={impactMediaCopyDraft.impact.body} onChange={(event) => setImpactMediaCopyDraft((current) => ({ ...current, impact: { ...current.impact, body: event.target.value } }))} rows={8} maxLength={900} /></label>
                </>
              ) : (
                <>
                  <label><span>标题前缀</span><input value={impactMediaCopyDraft[impactMediaCopyEditorTarget].prefix} onChange={(event) => setImpactMediaCopyDraft((current) => ({ ...current, [impactMediaCopyEditorTarget]: { ...current[impactMediaCopyEditorTarget], prefix: event.target.value } }))} maxLength={30} autoFocus /></label>
                  <label><span>主标题</span><input value={impactMediaCopyDraft[impactMediaCopyEditorTarget].title} onChange={(event) => setImpactMediaCopyDraft((current) => ({ ...current, [impactMediaCopyEditorTarget]: { ...current[impactMediaCopyEditorTarget], title: event.target.value } }))} maxLength={80} /></label>
                  <label><span>{impactMediaCopyEditorTarget === "podcast" ? "状态文字" : "按钮文字"}</span><input value={impactMediaCopyDraft[impactMediaCopyEditorTarget][impactMediaCopyEditorTarget === "podcast" ? "status" : "link"]} onChange={(event) => {
                    const field = impactMediaCopyEditorTarget === "podcast" ? "status" : "link";
                    setImpactMediaCopyDraft((current) => ({ ...current, [impactMediaCopyEditorTarget]: { ...current[impactMediaCopyEditorTarget], [field]: event.target.value } }));
                  }} maxLength={60} /></label>
                  {mediaCardBodyCopy.visible && <label><span>底部说明</span><textarea value={impactMediaCopyDraft[impactMediaCopyEditorTarget].body} onChange={(event) => setImpactMediaCopyDraft((current) => ({ ...current, [impactMediaCopyEditorTarget]: { ...current[impactMediaCopyEditorTarget], body: event.target.value } }))} rows={6} maxLength={500} /></label>}
                </>
              )}
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => {
                setImpactMediaCopyEditorTarget("");
                setImpactMediaCopyDraft(null);
              }}>取消</button>
              <button type="submit" disabled={impactMediaCopySaving}>{impactMediaCopySaving ? "正在保存…" : "保存文字"}</button>
            </div>
            <p className="media-editor__tip">保存后刷新仍会保留；两段已删除的底部说明保持隐藏，除非使用它们自己的撤销按钮恢复。</p>
          </form>
        </div>
      )}

      {editorEnabled && statementFollowupCinematicEditorTarget && statementFollowupCinematicDraft && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            setStatementFollowupCinematicEditorTarget("");
            setStatementFollowupCinematicDraft(null);
          }
        }}>
          <form className="media-editor__dialog statement-followup-cinematic-editor" role="dialog" aria-modal="true" aria-labelledby="statement-followup-cinematic-editor-title" onSubmit={saveStatementFollowupCinematicContent}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具 · {statementFollowupCinematicEditorTarget === "header" ? "页眉" : `第 ${statementFollowupCinematicEditorTarget} 行`}</p>
                <h2 id="statement-followup-cinematic-editor-title">编辑电影列表文字</h2>
              </div>
              <button type="button" onClick={() => {
                setStatementFollowupCinematicEditorTarget("");
                setStatementFollowupCinematicDraft(null);
              }} aria-label="关闭电影列表文字编辑">×</button>
            </header>
            {statementFollowupCinematicEditorTarget === "header" ? (
              <>
                <label>
                  <span>主标题</span>
                  <input value={statementFollowupCinematicDraft.heading} onChange={(event) => setStatementFollowupCinematicDraft((current) => ({ ...current, heading: event.target.value }))} maxLength={80} />
                </label>
                <label>
                  <span>右侧说明</span>
                  <input value={statementFollowupCinematicDraft.subtitle} onChange={(event) => setStatementFollowupCinematicDraft((current) => ({ ...current, subtitle: event.target.value }))} maxLength={80} />
                </label>
              </>
            ) : (
              <>
                <label>
                  <span>序号</span>
                  <input value={statementFollowupCinematicDraft.id} onChange={(event) => setStatementFollowupCinematicDraft((current) => ({ ...current, id: event.target.value }))} maxLength={20} />
                </label>
                <label>
                  <span>标题</span>
                  <input value={statementFollowupCinematicDraft.title} onChange={(event) => setStatementFollowupCinematicDraft((current) => ({ ...current, title: event.target.value }))} maxLength={80} />
                </label>
                <label>
                  <span>地点</span>
                  <input value={statementFollowupCinematicDraft.location} onChange={(event) => setStatementFollowupCinematicDraft((current) => ({ ...current, location: event.target.value }))} maxLength={80} />
                </label>
                <label>
                  <span>图片说明（无障碍文字）</span>
                  <input value={statementFollowupCinematicDraft.alt} onChange={(event) => setStatementFollowupCinematicDraft((current) => ({ ...current, alt: event.target.value }))} maxLength={120} />
                </label>
              </>
            )}
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => {
                setStatementFollowupCinematicEditorTarget("");
                setStatementFollowupCinematicDraft(null);
              }}>取消</button>
              <button type="submit" disabled={statementFollowupCinematicContentSaving}>{statementFollowupCinematicContentSaving ? "正在保存…" : "保存文字"}</button>
            </div>
            <p className="media-editor__tip">页眉和四行文字都可反复修改；页面上的撤销按钮只恢复最近一次文字修改。</p>
          </form>
        </div>
      )}

      {editorEnabled && statementSecondFollowupBlurEditorId && statementSecondFollowupBlurDraft && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            setStatementSecondFollowupBlurEditorId("");
            setStatementSecondFollowupBlurDraft(null);
          }
        }}>
          <form className="media-editor__dialog statement-second-followup-blur-editor" role="dialog" aria-modal="true" aria-labelledby="statement-second-followup-blur-editor-title" onSubmit={saveStatementSecondFollowupBlurContent}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具 · 第 {statementSecondFollowupBlurEditorId} 张</p>
                <h2 id="statement-second-followup-blur-editor-title">编辑视频卡片文字</h2>
              </div>
              <button type="button" onClick={() => {
                setStatementSecondFollowupBlurEditorId("");
                setStatementSecondFollowupBlurDraft(null);
              }} aria-label="关闭视频卡片文字编辑">×</button>
            </header>
            <label>
              <span>小标题</span>
              <input value={statementSecondFollowupBlurDraft.eyebrow} onChange={(event) => setStatementSecondFollowupBlurDraft((current) => ({ ...current, eyebrow: event.target.value }))} maxLength={60} />
            </label>
            <label>
              <span>主标题</span>
              <input value={statementSecondFollowupBlurDraft.title} onChange={(event) => setStatementSecondFollowupBlurDraft((current) => ({ ...current, title: event.target.value }))} maxLength={80} />
            </label>
            <label>
              <span>说明文字</span>
              <textarea value={statementSecondFollowupBlurDraft.description} onChange={(event) => setStatementSecondFollowupBlurDraft((current) => ({ ...current, description: event.target.value }))} rows={4} maxLength={220} />
            </label>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => {
                setStatementSecondFollowupBlurEditorId("");
                setStatementSecondFollowupBlurDraft(null);
              }}>取消</button>
              <button type="submit" disabled={statementSecondFollowupBlurContentSaving}>{statementSecondFollowupBlurContentSaving ? "正在保存…" : "保存当前卡片文字"}</button>
            </div>
            <p className="media-editor__tip">四张卡片分别保存，可以反复修改；页面上的撤销按钮只恢复最近一次卡片文字修改。</p>
          </form>
        </div>
      )}

      {editorEnabled && statementEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setStatementEditorOpen(false);
        }}>
          <form className="media-editor__dialog statement-copy-editor" role="dialog" aria-modal="true" aria-labelledby="statement-copy-editor-title" onSubmit={saveStatementCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="statement-copy-editor-title">编辑五行中文文字</h2>
              </div>
              <button type="button" onClick={() => setStatementEditorOpen(false)} aria-label="关闭五行文字编辑">×</button>
            </header>
            <div className="statement-copy-editor__fields">
              {statementDraft.map((line, index) => (
                <label key={`statement-editor-line-${index}`}>
                  <span>第 {index + 1} 行</span>
                  <input value={line} onChange={(event) => setStatementDraft((current) => current.map((item, itemIndex) => itemIndex === index ? event.target.value : item))} maxLength={80} />
                </label>
              ))}
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setStatementEditorOpen(false)}>取消</button>
              <button type="submit" disabled={statementSaving}>{statementSaving ? "正在保存…" : "保存五行文字"}</button>
            </div>
            <p className="media-editor__tip">保存后刷新页面仍会保留；撤销只恢复这五行文字，不影响背景和其他页面。</p>
          </form>
        </div>
      )}

      {editorEnabled && mediaEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setMediaEditorOpen(false);
        }}>
          <section className="media-editor__dialog" role="dialog" aria-modal="true" aria-labelledby="media-editor-title">
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="media-editor-title">首页背景素材</h2>
              </div>
              <button type="button" onClick={() => setMediaEditorOpen(false)} aria-label="关闭素材管理">×</button>
            </header>

            <p className="media-editor__intro">当前共 1 个背景素材。点击下面的视频卡片，即可从电脑选择新的 MP4 文件进行替换。</p>

            <button className="media-editor__card" type="button" onClick={() => heroUploadInput.current?.click()} disabled={uploading}>
              <video src={heroSrc} muted loop autoPlay playsInline aria-hidden="true" />
              <span className="media-editor__index">01</span>
              <span className="media-editor__info">
                <strong>首页背景视频</strong>
                <span>{heroMedia.kind} · {heroMedia.codec}</span>
                <span>{heroMedia.width} × {heroMedia.height} · {heroMedia.ratio}</span>
                <span>{heroMedia.duration.toFixed(2)} 秒{heroMedia.fps ? ` · ${heroMedia.fps} FPS` : ""} · {formatFileSize(heroMedia.size)}</span>
                <b>{uploading ? "正在替换…" : "点击上传替换"}</b>
              </span>
            </button>

            <input ref={heroUploadInput} className="sr-only" type="file" accept="video/mp4,.mp4" onChange={replaceHeroVideo} />
            <button className="media-editor__undo" type="button" onClick={undoHeroVideoReplacement} disabled={!canUndoHeroVideo || uploading}>
              ↶ 撤销本次视频替换
            </button>
            <p className="media-editor__tip">建议上传 16:9 横屏 MP4，推荐尺寸 2560 × 1440，文件不超过 200 MB。此编辑入口只在本地预览中显示，未来网站访客看不到。</p>
            {uploadStatus && <p className="media-editor__status" role="status">{uploadStatus}</p>}
          </section>
        </div>
      )}

      {editorEnabled && aboutMediaEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setAboutMediaEditorOpen(false);
        }}>
          <section className="media-editor__dialog" role="dialog" aria-modal="true" aria-labelledby="about-media-editor-title">
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="about-media-editor-title">第 01 屏背景图片</h2>
              </div>
              <button type="button" onClick={() => setAboutMediaEditorOpen(false)} aria-label="关闭图片管理">×</button>
            </header>

            <p className="media-editor__intro">这里显示的是完整原图信息。点击图片卡片，就可以从电脑选择新图片进行替换。</p>

            <button className="media-editor__card" type="button" onClick={() => aboutImageUploadInput.current?.click()} disabled={aboutImageUploading}>
              <img src={aboutOneImage.src} alt="当前第 01 屏背景完整预览" />
              <span className="media-editor__index">01</span>
              <span className="media-editor__info">
                <strong>第 01 屏背景图片</strong>
                <span>{aboutOneImage.kind} · {aboutOneImage.originalName}</span>
                <span>完整尺寸：{aboutOneImage.width} × {aboutOneImage.height} 像素</span>
                <span>图片比例：{aboutOneImage.ratio}（约 {(aboutOneImage.width / aboutOneImage.height).toFixed(2)}:1）</span>
                <span>文件大小：{formatFileSize(aboutOneImage.size)}</span>
                <b>{aboutImageUploading ? "正在替换…" : "点击选择并替换图片"}</b>
              </span>
            </button>

            <input ref={aboutImageUploadInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/avif,.jpg,.jpeg,.png,.webp,.avif" onChange={replaceAboutImage} />
            <button className="media-editor__undo" type="button" onClick={undoAboutImageReplacement} disabled={!canUndoAboutImage || aboutImageUploading}>
              ↶ 撤销本次图片替换
            </button>
            <p className="media-editor__tip">当前原图为 1536 × 882 像素，比例 256:147。建议新图使用相同比例；页面会自动铺满，超出部分会从两侧或上下居中裁切。支持 JPG、PNG、WebP、AVIF，最大 25 MB。</p>
            {aboutImageStatus && <p className="media-editor__status" role="status">{aboutImageStatus}</p>}
          </section>
        </div>
      )}

      {editorEnabled && aboutLowerBlankCopyEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setAboutLowerBlankCopyEditorOpen(false);
        }}>
          <form className="media-editor__dialog about-lower-copy-editor" role="dialog" aria-modal="true" aria-labelledby="about-lower-copy-editor-title" onSubmit={saveAboutLowerBlankCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="about-lower-copy-editor-title">编辑安缦介绍文字</h2>
              </div>
              <button type="button" onClick={() => setAboutLowerBlankCopyEditorOpen(false)} aria-label="关闭文字编辑">×</button>
            </header>
            <label>
              <span>标题</span>
              <input value={aboutLowerBlankCopyDraft.title} onChange={(event) => setAboutLowerBlankCopyDraft((current) => ({ ...current, title: event.target.value }))} maxLength={80} />
            </label>
            <label>
              <span>正文</span>
              <textarea value={aboutLowerBlankCopyDraft.body} onChange={(event) => setAboutLowerBlankCopyDraft((current) => ({ ...current, body: event.target.value }))} rows={7} maxLength={500} />
            </label>
            <label>
              <span>右侧竖排英文</span>
              <input value={aboutLowerBlankCopyDraft.verticalWord} onChange={(event) => setAboutLowerBlankCopyDraft((current) => ({ ...current, verticalWord: event.target.value }))} maxLength={20} />
            </label>
            <div className="about-lower-copy-editor__actions">
              <button type="button" onClick={() => setAboutLowerBlankCopyEditorOpen(false)}>取消</button>
              <button type="submit" disabled={aboutLowerBlankCopySaving}>{aboutLowerBlankCopySaving ? "正在保存…" : "保存文字"}</button>
            </div>
            <p className="media-editor__tip">保存后会写入本地项目并在刷新后保留；“撤销最近文字修改”只恢复文字，不影响图片和排版。</p>
          </form>
        </div>
      )}

      {editorEnabled && aboutLowerNextBlankCopyEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setAboutLowerNextBlankCopyEditorOpen(false);
        }}>
          <form className="media-editor__dialog timeline-copy-editor" role="dialog" aria-modal="true" aria-labelledby="timeline-copy-editor-title" onSubmit={saveAboutLowerNextBlankCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="timeline-copy-editor-title">编辑时间轴全部文字</h2>
              </div>
              <button type="button" onClick={() => setAboutLowerNextBlankCopyEditorOpen(false)} aria-label="关闭时间轴文字编辑">×</button>
            </header>
            <div className="timeline-copy-editor__fields">
              <label>
                <span>主标题</span>
                <input value={aboutLowerNextBlankCopyDraft.title} onChange={(event) => setAboutLowerNextBlankCopyDraft((current) => ({ ...current, title: event.target.value }))} maxLength={100} />
              </label>
              <label>
                <span>英文副标题</span>
                <input value={aboutLowerNextBlankCopyDraft.subtitle} onChange={(event) => setAboutLowerNextBlankCopyDraft((current) => ({ ...current, subtitle: event.target.value }))} maxLength={100} />
              </label>
              <div className="timeline-copy-editor__milestones">
                {aboutLowerNextBlankCopyDraft.milestones.map((milestone, index) => (
                  <fieldset key={`timeline-editor-${index}`}>
                    <legend>节点 {String(index + 1).padStart(2, "0")}</legend>
                    <label>
                      <span>节点标题</span>
                      <input
                        value={milestone.title}
                        onChange={(event) => setAboutLowerNextBlankCopyDraft((current) => ({
                          ...current,
                          milestones: current.milestones.map((item, itemIndex) => itemIndex === index ? { ...item, title: event.target.value } : item),
                        }))}
                        maxLength={80}
                      />
                    </label>
                    <label>
                      <span>节点说明</span>
                      <textarea
                        value={milestone.body}
                        onChange={(event) => setAboutLowerNextBlankCopyDraft((current) => ({
                          ...current,
                          milestones: current.milestones.map((item, itemIndex) => itemIndex === index ? { ...item, body: event.target.value } : item),
                        }))}
                        rows={2}
                        maxLength={220}
                      />
                    </label>
                  </fieldset>
                ))}
              </div>
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setAboutLowerNextBlankCopyEditorOpen(false)}>取消</button>
              <button type="submit" disabled={aboutLowerNextBlankCopySaving}>{aboutLowerNextBlankCopySaving ? "正在保存…" : "保存全部文字"}</button>
            </div>
            <p className="media-editor__tip">保存后会写入本地项目并在刷新后保留；文字、背景、时间轴标志和标题标志的撤销互不影响。</p>
          </form>
        </div>
      )}

      {editorEnabled && timelineBlankOneCopyEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setTimelineBlankOneCopyEditorOpen(false);
        }}>
          <form className="media-editor__dialog timeline-blank-one-copy-editor" role="dialog" aria-modal="true" aria-labelledby="timeline-blank-one-copy-editor-title" onSubmit={saveTimelineBlankOneCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="timeline-blank-one-copy-editor-title">编辑 Aman 核心价值全部文字</h2>
              </div>
              <button type="button" onClick={() => setTimelineBlankOneCopyEditorOpen(false)} aria-label="关闭 Aman 文字编辑">×</button>
            </header>
            <div className="timeline-blank-one-copy-editor__fields">
              <label><span>英文主标题</span><input value={timelineBlankOneCopyDraft.title} onChange={(event) => setTimelineBlankOneCopyDraft((current) => ({ ...current, title: event.target.value }))} maxLength={100} /></label>
              <label><span>中文副标题</span><input value={timelineBlankOneCopyDraft.subtitle} onChange={(event) => setTimelineBlankOneCopyDraft((current) => ({ ...current, subtitle: event.target.value }))} maxLength={100} /></label>
              <label><span>英文价值关键词</span><input value={timelineBlankOneCopyDraft.principles} onChange={(event) => setTimelineBlankOneCopyDraft((current) => ({ ...current, principles: event.target.value }))} maxLength={160} /></label>
              <label><span>中文价值关键词</span><input value={timelineBlankOneCopyDraft.principlesZh} onChange={(event) => setTimelineBlankOneCopyDraft((current) => ({ ...current, principlesZh: event.target.value }))} maxLength={160} /></label>
              <div className="timeline-blank-one-copy-editor__values">
                {timelineBlankOneCopyDraft.values.map((item, index) => (
                  <fieldset key={`aman-value-editor-${index}`}>
                    <legend>价值主张 {String(index + 1).padStart(2, "0")}</legend>
                    <label>
                      <span>标题</span>
                      <input value={item.title} onChange={(event) => setTimelineBlankOneCopyDraft((current) => ({ ...current, values: current.values.map((value, valueIndex) => valueIndex === index ? { ...value, title: event.target.value } : value) }))} maxLength={50} />
                    </label>
                    <label>
                      <span>说明</span>
                      <input value={item.body} onChange={(event) => setTimelineBlankOneCopyDraft((current) => ({ ...current, values: current.values.map((value, valueIndex) => valueIndex === index ? { ...value, body: event.target.value } : value) }))} maxLength={220} />
                    </label>
                  </fieldset>
                ))}
              </div>
              <label><span>底部英文说明</span><textarea value={timelineBlankOneCopyDraft.footer} onChange={(event) => setTimelineBlankOneCopyDraft((current) => ({ ...current, footer: event.target.value }))} rows={3} maxLength={500} /></label>
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setTimelineBlankOneCopyEditorOpen(false)}>取消</button>
              <button type="submit" disabled={timelineBlankOneCopySaving}>{timelineBlankOneCopySaving ? "正在保存…" : "保存全部文字"}</button>
            </div>
            <p className="media-editor__tip">保存后刷新页面仍会保留；文字、左侧背景和两张内容图片的修改及撤销互不影响。</p>
          </form>
        </div>
      )}

      {editorEnabled && timelineBlankOneExtraRowEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setTimelineBlankOneExtraRowEditorOpen(false);
        }}>
          <form className="media-editor__dialog timeline-blank-one-extra-row-editor" role="dialog" aria-modal="true" aria-labelledby="timeline-blank-one-extra-row-editor-title" onSubmit={saveTimelineBlankOneExtraRow}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="timeline-blank-one-extra-row-editor-title">编辑复制行文字</h2>
              </div>
              <button type="button" onClick={() => setTimelineBlankOneExtraRowEditorOpen(false)} aria-label="关闭复制行文字编辑">×</button>
            </header>
            <div className="timeline-blank-one-extra-row-editor__fields">
              <label><span>标题</span><input value={timelineBlankOneExtraRowDraft.title} onChange={(event) => setTimelineBlankOneExtraRowDraft((current) => ({ ...current, title: event.target.value }))} maxLength={50} /></label>
              <label><span>说明</span><input value={timelineBlankOneExtraRowDraft.body} onChange={(event) => setTimelineBlankOneExtraRowDraft((current) => ({ ...current, body: event.target.value }))} maxLength={220} /></label>
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setTimelineBlankOneExtraRowEditorOpen(false)}>取消</button>
              <button type="submit" disabled={timelineBlankOneExtraRowSaving}>{timelineBlankOneExtraRowSaving ? "正在保存…" : "保存复制行"}</button>
            </div>
            <p className="media-editor__tip">这里仅修改新复制的一行；不会改变原来的“人文温度”文字。</p>
          </form>
        </div>
      )}

      {editorEnabled && timelineBlankTwoCopyEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setTimelineBlankTwoCopyEditorOpen(false);
        }}>
          <form className="media-editor__dialog timeline-blank-two-copy-editor" role="dialog" aria-modal="true" aria-labelledby="timeline-blank-two-copy-editor-title" onSubmit={saveTimelineBlankTwoCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="timeline-blank-two-copy-editor-title">编辑电影海报全部文字</h2>
              </div>
              <button type="button" onClick={() => setTimelineBlankTwoCopyEditorOpen(false)} aria-label="关闭电影海报文字编辑">×</button>
            </header>
            <div className="timeline-blank-two-copy-editor__fields">
              <label><span>海报主标题</span><input value={timelineBlankTwoCopyDraft.title} onChange={(event) => setTimelineBlankTwoCopyDraft((current) => ({ ...current, title: event.target.value }))} maxLength={80} /></label>
              <label><span>影片类型</span><input value={timelineBlankTwoCopyDraft.tagline} onChange={(event) => setTimelineBlankTwoCopyDraft((current) => ({ ...current, tagline: event.target.value }))} maxLength={100} /></label>
              <label><span>导演署名</span><input value={timelineBlankTwoCopyDraft.credit} onChange={(event) => setTimelineBlankTwoCopyDraft((current) => ({ ...current, credit: event.target.value }))} maxLength={100} /></label>
              <label><span>品牌名称</span><input value={timelineBlankTwoCopyDraft.studioName} onChange={(event) => setTimelineBlankTwoCopyDraft((current) => ({ ...current, studioName: event.target.value }))} maxLength={80} /></label>
              <label><span>品牌后缀</span><input value={timelineBlankTwoCopyDraft.studioSuffix} onChange={(event) => setTimelineBlankTwoCopyDraft((current) => ({ ...current, studioSuffix: event.target.value }))} maxLength={40} /></label>
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setTimelineBlankTwoCopyEditorOpen(false)}>取消</button>
              <button type="submit" disabled={timelineBlankTwoCopySaving}>{timelineBlankTwoCopySaving ? "正在保存…" : "保存全部文字"}</button>
            </div>
            <p className="media-editor__tip">保存后刷新页面仍会保留；文字、黑白主图和整页背景的修改与撤销互不影响。</p>
          </form>
        </div>
      )}

      {editorEnabled && timelineBlankThreeCopyEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setTimelineBlankThreeCopyEditorOpen(false);
        }}>
          <form className="media-editor__dialog timeline-blank-three-copy-editor" role="dialog" aria-modal="true" aria-labelledby="timeline-blank-three-copy-editor-title" onSubmit={saveTimelineBlankThreeCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="timeline-blank-three-copy-editor-title">编辑 Market 页面全部文字</h2>
              </div>
              <button type="button" onClick={() => setTimelineBlankThreeCopyEditorOpen(false)} aria-label="关闭 Market 页面文字编辑">×</button>
            </header>
            <div className="timeline-blank-three-copy-editor__fields">
              <label><span>主标题</span><input value={timelineBlankThreeCopyDraft.title} onChange={(event) => setTimelineBlankThreeCopyDraft((current) => ({ ...current, title: event.target.value }))} maxLength={80} /></label>
              <label><span>分类标签</span><input value={timelineBlankThreeCopyDraft.category} onChange={(event) => setTimelineBlankThreeCopyDraft((current) => ({ ...current, category: event.target.value }))} maxLength={80} /></label>
              {timelineBlankThreeCopyDraft.lines.map((line, index) => (
                <label key={`market-copy-line-${index}`}>
                  <span>正文第 {index + 1} 行</span>
                  <input value={line} onChange={(event) => setTimelineBlankThreeCopyDraft((current) => ({ ...current, lines: current.lines.map((item, itemIndex) => itemIndex === index ? event.target.value : item) }))} maxLength={180} />
                </label>
              ))}
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setTimelineBlankThreeCopyEditorOpen(false)}>取消</button>
              <button type="submit" disabled={timelineBlankThreeCopySaving}>{timelineBlankThreeCopySaving ? "正在保存…" : "保存全部文字"}</button>
            </div>
            <p className="media-editor__tip">保存后刷新页面仍会保留；文字、右侧图片和页面排版的修改及撤销互不影响。</p>
          </form>
        </div>
      )}

      {editorEnabled && timelineBlankFourCopyEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setTimelineBlankFourCopyEditorOpen(false);
        }}>
          <form className="media-editor__dialog timeline-blank-four-copy-editor" role="dialog" aria-modal="true" aria-labelledby="timeline-blank-four-copy-editor-title" onSubmit={saveTimelineBlankFourCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="timeline-blank-four-copy-editor-title">编辑 House / NEST 页面全部文字</h2>
              </div>
              <button type="button" onClick={() => setTimelineBlankFourCopyEditorOpen(false)} aria-label="关闭 House NEST 页面文字编辑">×</button>
            </header>
            <div className="timeline-blank-four-copy-editor__fields">
              <label><span>左上品牌</span><input value={timelineBlankFourCopyDraft.brand} onChange={(event) => setTimelineBlankFourCopyDraft((current) => ({ ...current, brand: event.target.value }))} maxLength={80} /></label>
              <label className="timeline-blank-four-copy-editor__intro"><span>顶部介绍</span><textarea value={timelineBlankFourCopyDraft.intro} onChange={(event) => setTimelineBlankFourCopyDraft((current) => ({ ...current, intro: event.target.value }))} maxLength={360} rows={4} /></label>
              <label><span>右上菜单</span><input value={timelineBlankFourCopyDraft.menu} onChange={(event) => setTimelineBlankFourCopyDraft((current) => ({ ...current, menu: event.target.value }))} maxLength={80} /></label>
              <label><span>左侧编号</span><input value={timelineBlankFourCopyDraft.index} onChange={(event) => setTimelineBlankFourCopyDraft((current) => ({ ...current, index: event.target.value }))} maxLength={40} /></label>
              <label><span>右侧年份</span><input value={timelineBlankFourCopyDraft.copyright} onChange={(event) => setTimelineBlankFourCopyDraft((current) => ({ ...current, copyright: event.target.value }))} maxLength={40} /></label>
              <label><span>超大主标题</span><input value={timelineBlankFourCopyDraft.word} onChange={(event) => setTimelineBlankFourCopyDraft((current) => ({ ...current, word: event.target.value }))} maxLength={18} /></label>
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setTimelineBlankFourCopyEditorOpen(false)}>取消</button>
              <button type="submit" disabled={timelineBlankFourCopySaving}>{timelineBlankFourCopySaving ? "正在保存…" : "保存全部文字"}</button>
            </div>
            <p className="media-editor__tip">保存后刷新页面仍会保留；文字、建筑图片和页面排版的修改及撤销互不影响。</p>
          </form>
        </div>
      )}

      {editorEnabled && timelineBlankEightCopyEditorOpen && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setTimelineBlankEightCopyEditorOpen(false);
        }}>
          <form className="media-editor__dialog timeline-blank-eight-copy-editor" role="dialog" aria-modal="true" aria-labelledby="timeline-blank-eight-copy-editor-title" onSubmit={saveTimelineBlankEightCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="timeline-blank-eight-copy-editor-title">编辑 ELIN 页面全部文字</h2>
              </div>
              <button type="button" onClick={() => setTimelineBlankEightCopyEditorOpen(false)} aria-label="关闭 ELIN 页面文字编辑">×</button>
            </header>
            <div className="timeline-blank-eight-copy-editor__fields">
              <label><span>超大主标题</span><input value={timelineBlankEightCopyDraft.title} onChange={(event) => setTimelineBlankEightCopyDraft((current) => ({ ...current, title: event.target.value }))} maxLength={18} /></label>
              <label><span>图片上方短句</span><input value={timelineBlankEightCopyDraft.topCaption} onChange={(event) => setTimelineBlankEightCopyDraft((current) => ({ ...current, topCaption: event.target.value }))} maxLength={100} /></label>
              <label><span>说明标题</span><input value={timelineBlankEightCopyDraft.copyTitle} onChange={(event) => setTimelineBlankEightCopyDraft((current) => ({ ...current, copyTitle: event.target.value }))} maxLength={100} /></label>
              <label className="timeline-blank-eight-copy-editor__body"><span>说明正文</span><textarea value={timelineBlankEightCopyDraft.body} onChange={(event) => setTimelineBlankEightCopyDraft((current) => ({ ...current, body: event.target.value }))} maxLength={600} rows={8} /></label>
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setTimelineBlankEightCopyEditorOpen(false)}>取消</button>
              <button type="submit" disabled={timelineBlankEightCopySaving}>{timelineBlankEightCopySaving ? "正在保存…" : "保存全部文字"}</button>
            </div>
            <p className="media-editor__tip">保存后刷新页面仍会保留；文字、右侧图片、页面排版和原始插入的修改及撤销互不影响。</p>
          </form>
        </div>
      )}

      {editorEnabled && timelineGalleryPricingEditorOpen && timelineGalleryPricingDraft && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setTimelineGalleryPricingEditorOpen(false);
        }}>
          <form className="media-editor__dialog timeline-gallery-pricing-copy-editor" role="dialog" aria-modal="true" aria-labelledby="timeline-gallery-pricing-copy-editor-title" onSubmit={saveTimelineGalleryPricingContent}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="timeline-gallery-pricing-copy-editor-title">编辑定价卡片全部文字</h2>
              </div>
              <button type="button" onClick={() => setTimelineGalleryPricingEditorOpen(false)} aria-label="关闭定价卡片文字编辑">×</button>
            </header>
            <div className="timeline-gallery-pricing-copy-editor__tiers">
              {timelineGalleryPricingDraft.tiers.map((tier, tierIndex) => (
                <fieldset className="timeline-gallery-pricing-copy-editor__tier" key={tier.id}>
                  <legend>第 {tierIndex + 1} 张卡片</legend>
                  <div className="timeline-gallery-pricing-copy-editor__primary-fields">
                    <label><span>卡片名称</span><input value={tier.name} onChange={(event) => updateTimelineGalleryPricingTier(tierIndex, "name", event.target.value)} maxLength={60} /></label>
                    <label><span>货币符号</span><input value={tier.currency} onChange={(event) => updateTimelineGalleryPricingTier(tierIndex, "currency", event.target.value)} maxLength={8} /></label>
                    <label><span>价格</span><input value={tier.price} onChange={(event) => updateTimelineGalleryPricingTier(tierIndex, "price", event.target.value)} maxLength={20} /></label>
                    <label><span>周期文字</span><input value={tier.interval} onChange={(event) => updateTimelineGalleryPricingTier(tierIndex, "interval", event.target.value)} maxLength={40} /></label>
                    <label className="timeline-gallery-pricing-copy-editor__description"><span>说明文字</span><textarea value={tier.description} onChange={(event) => updateTimelineGalleryPricingTier(tierIndex, "description", event.target.value)} rows={3} maxLength={220} /></label>
                  </div>
                  <div className="timeline-gallery-pricing-copy-editor__features">
                    {tier.features.map((feature, featureIndex) => (
                      <label key={feature.id}>
                        <span>功能 {featureIndex + 1}</span>
                        <input value={feature.name} onChange={(event) => updateTimelineGalleryPricingFeature(tierIndex, featureIndex, "name", event.target.value)} maxLength={100} />
                        <span className="timeline-gallery-pricing-copy-editor__included"><input type="checkbox" checked={feature.included} onChange={(event) => updateTimelineGalleryPricingFeature(tierIndex, featureIndex, "included", event.target.checked)} />包含</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setTimelineGalleryPricingEditorOpen(false)}>取消</button>
              <button type="submit" disabled={timelineGalleryPricingSaving}>{timelineGalleryPricingSaving ? "正在保存…" : "保存全部文字"}</button>
            </div>
            <p className="media-editor__tip">两张卡片的名称、货币符号、价格、周期、说明和全部功能文字都会本地保存；卡片底部不显示 CTA 按钮。</p>
          </form>
        </div>
      )}

      {editorEnabled && timelineBlankSixEditorTarget && timelineBlankSixDraft && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setTimelineBlankSixEditorTarget("");
        }}>
          <form className="media-editor__dialog timeline-blank-six-editor" role="dialog" aria-modal="true" aria-labelledby="timeline-blank-six-editor-title" onSubmit={saveTimelineBlankSixEditor}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="timeline-blank-six-editor-title">{timelineBlankSixEditorTarget === "header" ? "编辑页眉全部文字" : "编辑当前卡片文字与标志"}</h2>
              </div>
              <button type="button" onClick={() => setTimelineBlankSixEditorTarget("")} aria-label="关闭展开卡片编辑">×</button>
            </header>
            <div className="timeline-blank-six-editor__fields">
              {timelineBlankSixEditorTarget === "header" ? (
                <>
                  <label><span>眉题</span><input value={timelineBlankSixDraft.eyebrow} onChange={(event) => setTimelineBlankSixDraft((current) => ({ ...current, eyebrow: event.target.value }))} maxLength={80} /></label>
                  <label><span>主标题</span><input value={timelineBlankSixDraft.title} onChange={(event) => setTimelineBlankSixDraft((current) => ({ ...current, title: event.target.value }))} maxLength={100} /></label>
                  <label><span>简介</span><textarea value={timelineBlankSixDraft.intro} onChange={(event) => setTimelineBlankSixDraft((current) => ({ ...current, intro: event.target.value }))} rows={3} maxLength={240} /></label>
                </>
              ) : (
                <>
                  <label><span>卡片标题</span><input value={timelineBlankSixDraft.title} onChange={(event) => setTimelineBlankSixDraft((current) => ({ ...current, title: event.target.value }))} maxLength={60} /></label>
                  <label><span>卡片说明</span><textarea value={timelineBlankSixDraft.description} onChange={(event) => setTimelineBlankSixDraft((current) => ({ ...current, description: event.target.value }))} rows={5} maxLength={320} /></label>
                  <label><span>标志图形</span><select value={timelineBlankSixDraft.icon} onChange={(event) => setTimelineBlankSixDraft((current) => ({ ...current, icon: event.target.value }))}>{expandingCardIconNames.map((name) => <option key={name} value={name}>{name}</option>)}</select></label>
                </>
              )}
            </div>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setTimelineBlankSixEditorTarget("")}>取消</button>
              <button type="submit" disabled={timelineBlankSixContentSaving}>{timelineBlankSixContentSaving ? "正在保存…" : "保存修改"}</button>
            </div>
            <p className="media-editor__tip">折叠缩略图与展开状态共用同一张图片；文字、标志和各卡片图片均独立保存。</p>
          </form>
        </div>
      )}

      {editorEnabled && aboutPanelCopyEditorId && (
        <div className="media-editor" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setAboutPanelCopyEditorId("");
        }}>
          <form className="media-editor__dialog about-panel-copy-editor" role="dialog" aria-modal="true" aria-labelledby="about-panel-copy-editor-title" onSubmit={saveAboutPanelCopy}>
            <header className="media-editor__header">
              <div>
                <p>本地编辑工具</p>
                <h2 id="about-panel-copy-editor-title">编辑第 {aboutPanelCopyEditorId} 屏文字</h2>
              </div>
              <button type="button" onClick={() => setAboutPanelCopyEditorId("")} aria-label="关闭文字编辑">×</button>
            </header>
            <label className="about-panel-copy-editor__field">
              <span>正文内容</span>
              <textarea value={aboutPanelCopyDraft} onChange={(event) => setAboutPanelCopyDraft(event.target.value)} rows={9} maxLength={700} autoFocus />
            </label>
            <div className="timeline-copy-editor__actions">
              <button type="button" onClick={() => setAboutPanelCopyEditorId("")}>取消</button>
              <button type="submit" disabled={aboutPanelCopySaving}>{aboutPanelCopySaving ? "正在保存…" : "保存文字"}</button>
            </div>
            <p className="media-editor__tip">每一屏的文字和撤销记录互相独立；保存后刷新页面仍会保留。</p>
          </form>
        </div>
      )}

      {aboutOnePosition.placement === "third-from-last" && aboutOnePanelElement}
      {footerVideoPosition.placement === "before-footer" && footerVideoPanelElement}
      <footer className={`footer${footerSecondary.visible ? "" : " footer--minimal"}${footerInvitation.visible ? "" : " footer--without-invitation"}`} id="join">
        <img className="footer__texture" src="/assets/images/texture-footer.avif" alt="" />
        {editorEnabled && (
          <>
            <button className="footer__content-undo" type="button" onClick={undoFooterSecondaryRemoval} disabled={!canUndoFooterSecondary}>
              ↶ 撤销本次删除页脚内容
            </button>
            {footerSecondaryStatus && <span className="footer__content-status" role="status">{footerSecondaryStatus}</span>}
          </>
        )}
        {editorEnabled && !footerInvitation.visible && (
          <button className="footer__invitation-undo" type="button" onClick={undoFooterInvitationRemoval} disabled={!canUndoFooterInvitation}>
            ↶ 撤销本次删除此屏
          </button>
        )}
        {footerInvitationStatus && <span className="footer__invitation-status" role="status">{footerInvitationStatus}</span>}
        {footerInvitation.visible && (
          <section className="footer__invitation">
            <p>We’d love to hear from you. Whether you’re interested in learning more about Iceberg, collaborating on an initiative, or sharing your insights, reach out! Together, we can amplify the impact and bring these hidden forces of change to the surface.</p>
            <a href="mailto:contact@icebergdoc.org">Contact us</a>
          </section>
        )}
        {footerSecondary.visible && (
          <>
            <section className="footer__details">
              <div className="footer__social">
                <p>FOLLOW US</p>
                <a href="https://open.spotify.com" target="_blank" rel="noreferrer">Spotify – Iceberg Podcast</a>
                <a href="https://www.verkami.com/locale/en/projects/40111-iceberg-proyecto-transmedia" target="_blank" rel="noreferrer">Verkami</a>
                <a href="https://www.instagram.com/icebergdoc/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://vimeo.com" target="_blank" rel="noreferrer">Vimeo</a>
              </div>
              <Newsletter />
            </section>
            <section className="footer__legal">
              <p>ALHENA PRODUCTION.<br />©ALL RIGHTS RESERVED 2026</p>
              <p>DESIGNED BY PLASTIC.DESIGN</p>
              <p><a href="#top">ENGLISH</a> / <a href="https://www.icebergdoc.org/es">ESPAÑOL</a></p>
            </section>
          </>
        )}
        <Logo footer text={footerWordmark.text} />
        {editorEnabled && (
          <>
            <button className="footer__wordmark-undo" type="button" onClick={undoFooterWordmarkChange} disabled={!canUndoFooterWordmark}>
              ↶ 撤销本次底部英文修改
            </button>
            {footerWordmarkStatus && <span className="footer__wordmark-status" role="status">{footerWordmarkStatus}</span>}
          </>
        )}
      </footer>
      {footerVideoPosition.placement !== "before-footer" && footerVideoPanelElement}
    </div>
  );
}
