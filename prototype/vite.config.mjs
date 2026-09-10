import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { access, copyFile, mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const heroVideoPath = path.join(projectRoot, "public", "assets", "video", "intro.mp4");
const heroVideoTempPath = path.join(projectRoot, "public", "assets", "video", ".intro-upload.mp4");
const heroMetadataPath = path.join(projectRoot, "public", "assets", "video", "intro.meta.json");
const heroMetadataTempPath = path.join(projectRoot, "public", "assets", "video", ".intro-meta-upload.json");
const heroVideoBackupPath = path.join(projectRoot, "public", "assets", "video", ".intro-previous.mp4");
const heroMetadataBackupPath = path.join(projectRoot, "public", "assets", "video", ".intro-meta-previous.json");
const maxHeroVideoSize = 200 * 1024 * 1024;
const statementPath = path.join(projectRoot, "src", "content", "statement.json");
const statementTempPath = path.join(projectRoot, "src", "content", ".statement-restore.json");
const statementBackupPath = path.join(projectRoot, ".local-history", "statement.previous.json");
const statementEditorFeaturePath = path.join(projectRoot, "src", "content", "statement-editor-feature.json");
const statementEditorFeatureTempPath = path.join(projectRoot, "src", "content", ".statement-editor-feature-restore.json");
const statementEditorFeatureBackupPath = path.join(projectRoot, ".local-history", "statement-editor-feature.previous.json");
const statementPanelRemovalPath = path.join(projectRoot, "src", "content", "statement-panel-removal.json");
const statementPanelRemovalTempPath = path.join(projectRoot, "src", "content", ".statement-panel-removal-restore.json");
const statementPanelRemovalBackupPath = path.join(projectRoot, ".local-history", "statement-panel-removal.previous.json");
const statementFollowupWhitePanelThreePath = path.join(projectRoot, "src", "content", "statement-followup-white-panel-03.json");
const statementFollowupWhitePanelThreeTempPath = path.join(projectRoot, "src", "content", ".statement-followup-white-panel-03-restore.json");
const statementFollowupWhitePanelThreeBackupPath = path.join(projectRoot, ".local-history", "statement-followup-white-panel-03.previous.json");
const statementFollowupBlankPanelFourPath = path.join(projectRoot, "src", "content", "statement-followup-blank-panel-04.json");
const statementFollowupBlankPanelFourTempPath = path.join(projectRoot, "src", "content", ".statement-followup-blank-panel-04-restore.json");
const statementFollowupBlankPanelFourBackupPath = path.join(projectRoot, ".local-history", "statement-followup-blank-panel-04.previous.json");
const statementFollowupBlankPanelFourAppearancePath = path.join(projectRoot, "src", "content", "statement-followup-blank-panel-04-appearance.json");
const statementFollowupBlankPanelFourAppearanceTempPath = path.join(projectRoot, "src", "content", ".statement-followup-blank-panel-04-appearance-restore.json");
const statementFollowupBlankPanelFourAppearanceBackupPath = path.join(projectRoot, ".local-history", "statement-followup-blank-panel-04-appearance.previous.json");
const statementFollowupScrollFlyLayoutPath = path.join(projectRoot, "src", "content", "statement-followup-scroll-fly-layout.json");
const statementFollowupScrollFlyLayoutTempPath = path.join(projectRoot, "src", "content", ".statement-followup-scroll-fly-layout-restore.json");
const statementFollowupScrollFlyLayoutBackupPath = path.join(projectRoot, ".local-history", "statement-followup-scroll-fly-layout.previous.json");
const statementFollowupScrollFlyContentPath = path.join(projectRoot, "src", "content", "statement-followup-scroll-fly-content.json");
const statementFollowupScrollFlyContentTempPath = path.join(projectRoot, "src", "content", ".statement-followup-scroll-fly-content-restore.json");
const statementFollowupScrollFlyContentBackupPath = path.join(projectRoot, ".local-history", "statement-followup-scroll-fly-content.previous.json");
const statementFollowupScrollFlyHeadingFormatPath = path.join(projectRoot, "src", "content", "statement-followup-scroll-fly-heading-format.json");
const statementFollowupScrollFlyHeadingFormatTempPath = path.join(projectRoot, "src", "content", ".statement-followup-scroll-fly-heading-format-restore.json");
const statementFollowupScrollFlyHeadingFormatBackupPath = path.join(projectRoot, ".local-history", "statement-followup-scroll-fly-heading-format.previous.json");
const maxStatementFollowupScrollFlyContentSize = 16 * 1024;
const statementFollowupCinematicLayoutPath = path.join(projectRoot, "src", "content", "statement-followup-cinematic-layout.json");
const statementFollowupCinematicLayoutTempPath = path.join(projectRoot, "src", "content", ".statement-followup-cinematic-layout-restore.json");
const statementFollowupCinematicLayoutBackupPath = path.join(projectRoot, ".local-history", "statement-followup-cinematic-layout.previous.json");
const statementFollowupCinematicContentPath = path.join(projectRoot, "src", "content", "statement-followup-cinematic-content.json");
const statementFollowupCinematicContentTempPath = path.join(projectRoot, "src", "content", ".statement-followup-cinematic-content-restore.json");
const statementFollowupCinematicContentBackupPath = path.join(projectRoot, ".local-history", "statement-followup-cinematic-content.previous.json");
const statementFollowupCinematicImagesPath = path.join(projectRoot, "src", "content", "statement-followup-cinematic-images.json");
const statementFollowupCinematicImagesTempPath = path.join(projectRoot, "src", "content", ".statement-followup-cinematic-images-upload.json");
const statementFollowupCinematicImageDirectory = path.join(projectRoot, "public", "assets", "images");
const statementFollowupCinematicCardIds = new Set(["01", "02", "03", "04"]);
const statementFollowupCinematicImageBackupPath = (cardId) => path.join(projectRoot, ".local-history", `statement-followup-cinematic-image-${cardId}.previous.json`);
const maxStatementFollowupCinematicContentSize = 32 * 1024;
const maxStatementFollowupCinematicImageSize = 25 * 1024 * 1024;
const statementSecondFollowupBlankPanelPath = path.join(projectRoot, "src", "content", "statement-second-followup-blank-panel.json");
const statementSecondFollowupBlankPanelTempPath = path.join(projectRoot, "src", "content", ".statement-second-followup-blank-panel-restore.json");
const statementSecondFollowupBlankPanelBackupPath = path.join(projectRoot, ".local-history", "statement-second-followup-blank-panel.previous.json");
const statementSecondFollowupBlankAppearancePath = path.join(projectRoot, "src", "content", "statement-second-followup-blank-appearance.json");
const statementSecondFollowupBlankAppearanceTempPath = path.join(projectRoot, "src", "content", ".statement-second-followup-blank-appearance-restore.json");
const statementSecondFollowupBlankAppearanceBackupPath = path.join(projectRoot, ".local-history", "statement-second-followup-blank-appearance.previous.json");
const statementSecondFollowupBlurLayoutPath = path.join(projectRoot, "src", "content", "statement-second-followup-blur-layout.json");
const statementSecondFollowupBlurLayoutTempPath = path.join(projectRoot, "src", "content", ".statement-second-followup-blur-layout-restore.json");
const statementSecondFollowupBlurLayoutBackupPath = path.join(projectRoot, ".local-history", "statement-second-followup-blur-layout.previous.json");
const statementSecondFollowupBlurRemovalPath = path.join(projectRoot, "src", "content", "statement-second-followup-blur-removal.json");
const statementSecondFollowupBlurRemovalTempPath = path.join(projectRoot, "src", "content", ".statement-second-followup-blur-removal-restore.json");
const statementSecondFollowupBlurRemovalBackupPath = path.join(projectRoot, ".local-history", "statement-second-followup-blur-removal.previous.json");
const statementSecondFollowupBlurContentPath = path.join(projectRoot, "src", "content", "statement-second-followup-blur-content.json");
const statementSecondFollowupBlurContentTempPath = path.join(projectRoot, "src", "content", ".statement-second-followup-blur-content-restore.json");
const statementSecondFollowupBlurContentBackupPath = path.join(projectRoot, ".local-history", "statement-second-followup-blur-content.previous.json");
const statementSecondFollowupBlurVideosPath = path.join(projectRoot, "src", "content", "statement-second-followup-blur-videos.json");
const statementSecondFollowupBlurVideosTempPath = path.join(projectRoot, "src", "content", ".statement-second-followup-blur-videos-upload.json");
const statementSecondFollowupBlurVideoDirectory = path.join(projectRoot, "public", "assets", "video");
const statementSecondFollowupBlurCardIds = new Set(["01", "02", "03", "04"]);
const statementSecondFollowupBlurVideoBackupPath = (cardId) => path.join(projectRoot, ".local-history", `statement-second-followup-blur-video-${cardId}.previous.json`);
const maxStatementSecondFollowupBlurContentSize = 32 * 1024;
const maxStatementSecondFollowupBlurVideoSize = 200 * 1024 * 1024;
const statementFollowupBlankPanelPath = path.join(projectRoot, "src", "content", "statement-followup-blank-panel.json");
const statementFollowupBlankPanelTempPath = path.join(projectRoot, "src", "content", ".statement-followup-blank-panel-restore.json");
const statementFollowupBlankPanelBackupPath = path.join(projectRoot, ".local-history", "statement-followup-blank-panel.previous.json");
const statementFollowupBlankRemovalPath = path.join(projectRoot, "src", "content", "statement-followup-blank-removal.json");
const statementFollowupBlankRemovalTempPath = path.join(projectRoot, "src", "content", ".statement-followup-blank-removal-restore.json");
const statementFollowupBlankRemovalBackupPath = path.join(projectRoot, ".local-history", "statement-followup-blank-removal.previous.json");
const statementFollowupBlankImagePath = path.join(projectRoot, "src", "content", "statement-followup-blank-image.json");
const statementFollowupBlankImageTempPath = path.join(projectRoot, "src", "content", ".statement-followup-blank-image-upload.json");
const statementFollowupBlankImageBackupPath = path.join(projectRoot, ".local-history", "statement-followup-blank-image.previous.json");
const maxStatementSize = 16 * 1024;
const aboutOneMetadataPath = path.join(projectRoot, "src", "content", "about-one-image.json");
const aboutOneMetadataTempPath = path.join(projectRoot, "src", "content", ".about-one-image-upload.json");
const aboutOneBackupPath = path.join(projectRoot, ".local-history", "about-one-image.previous.json");
const aboutOneImageDirectory = path.join(projectRoot, "public", "assets", "images");
const maxAboutImageSize = 25 * 1024 * 1024;
const aboutOneVideoContentPath = path.join(projectRoot, "src", "content", "about-one-video-content.json");
const aboutOneVideoContentTempPath = path.join(projectRoot, "src", "content", ".about-one-video-content-upload.json");
const aboutOneVideoDirectory = path.join(projectRoot, "public", "assets", "video");
const maxAboutOneVideoSize = 200 * 1024 * 1024;
const aboutOnePositionPath = path.join(projectRoot, "src", "content", "about-one-position.json");
const aboutOnePositionTempPath = path.join(projectRoot, "src", "content", ".about-one-position-restore.json");
const aboutOnePositionBackupPath = path.join(projectRoot, ".local-history", "about-one-position.previous.json");
const aboutOneEffectPath = path.join(projectRoot, "src", "content", "about-one-effect.json");
const aboutOneEffectTempPath = path.join(projectRoot, "src", "content", ".about-one-effect-restore.json");
const aboutOneEffectBackupPath = path.join(projectRoot, ".local-history", "about-one-effect.previous.json");
const aboutOneCopyPath = path.join(projectRoot, "src", "content", "about-one-copy.json");
const aboutOneCopyTempPath = path.join(projectRoot, "src", "content", ".about-one-copy-restore.json");
const aboutOneCopyBackupPath = path.join(projectRoot, ".local-history", "about-one-copy.previous.json");
const aboutExtraGroupsPath = path.join(projectRoot, "src", "content", "about-extra-groups.json");
const aboutExtraGroupsTempPath = path.join(projectRoot, "src", "content", ".about-extra-groups-restore.json");
const aboutExtraGroupsBackupPath = path.join(projectRoot, ".local-history", "about-extra-groups.previous.json");
const aboutPanelSelectionRemovalPath = path.join(projectRoot, "src", "content", "about-panel-selection-removal.json");
const aboutPanelSelectionRemovalTempPath = path.join(projectRoot, "src", "content", ".about-panel-selection-removal-restore.json");
const aboutPanelSelectionRemovalBackupPath = path.join(projectRoot, ".local-history", "about-panel-selection-removal.previous.json");
const impactIntroPanelsPath = path.join(projectRoot, "src", "content", "impact-intro-panels.json");
const impactIntroPanelsTempPath = path.join(projectRoot, "src", "content", ".impact-intro-panels-restore.json");
const impactIntroPanelsBackupPath = path.join(projectRoot, ".local-history", "impact-intro-panels.previous.json");
const selectedSevenPageRemovalPath = path.join(projectRoot, "src", "content", "selected-seven-page-removal.json");
const selectedSevenPageRemovalTempPath = path.join(projectRoot, "src", "content", ".selected-seven-page-removal-restore.json");
const selectedSevenPageRemovalBackupPath = path.join(projectRoot, ".local-history", "selected-seven-page-removal.previous.json");
const aboutDiscoverLinksPath = path.join(projectRoot, "src", "content", "about-discover-links.json");
const aboutDiscoverLinksTempPath = path.join(projectRoot, "src", "content", ".about-discover-links-restore.json");
const aboutDiscoverLinksBackupPath = path.join(projectRoot, ".local-history", "about-discover-links.previous.json");
const aboutPanelCopyPath = path.join(projectRoot, "src", "content", "about-panel-copy.json");
const aboutPanelCopyTempPath = path.join(projectRoot, "src", "content", ".about-panel-copy-restore.json");
const editableAboutPanelIds = new Set(["02", "03", "04", "05", "06", "07", "08", "09"]);
const aboutPanelCopyBackupPath = (panelId) => path.join(projectRoot, ".local-history", `about-panel-copy-${panelId}.previous.json`);
const maxAboutPanelCopySize = 16 * 1024;
const aboutPanelBackgroundsPath = path.join(projectRoot, "src", "content", "about-panel-backgrounds.json");
const aboutPanelBackgroundsTempPath = path.join(projectRoot, "src", "content", ".about-panel-backgrounds-upload.json");
const editableAboutPanelBackgroundIds = new Set(["02", "03", "04", "05", "06"]);
const aboutPanelBackgroundBackupPath = (panelId) => path.join(projectRoot, ".local-history", `about-panel-background-${panelId}.previous.json`);
const aboutPanelBackgroundFeaturePath = path.join(projectRoot, "src", "content", "about-panel-background-feature.json");
const aboutPanelBackgroundFeatureTempPath = path.join(projectRoot, "src", "content", ".about-panel-background-feature-restore.json");
const aboutPanelBackgroundFeatureBackupPath = path.join(projectRoot, ".local-history", "about-panel-background-feature.previous.json");
const timelineFollowupBlankPaths = {
  "01": path.join(projectRoot, "src", "content", "timeline-followup-blank-01.json"),
  "02": path.join(projectRoot, "src", "content", "timeline-followup-blank-02.json"),
  "03": path.join(projectRoot, "src", "content", "timeline-followup-blank-03.json"),
  "04": path.join(projectRoot, "src", "content", "timeline-followup-blank-04.json"),
  "05": path.join(projectRoot, "src", "content", "timeline-followup-blank-05.json"),
  "06": path.join(projectRoot, "src", "content", "timeline-followup-blank-06.json"),
  "07": path.join(projectRoot, "src", "content", "timeline-followup-blank-07.json"),
  "08": path.join(projectRoot, "src", "content", "timeline-followup-blank-08.json"),
};
const timelineFollowupBlankTempPaths = {
  "01": path.join(projectRoot, "src", "content", ".timeline-followup-blank-01-restore.json"),
  "02": path.join(projectRoot, "src", "content", ".timeline-followup-blank-02-restore.json"),
  "03": path.join(projectRoot, "src", "content", ".timeline-followup-blank-03-restore.json"),
  "04": path.join(projectRoot, "src", "content", ".timeline-followup-blank-04-restore.json"),
  "05": path.join(projectRoot, "src", "content", ".timeline-followup-blank-05-restore.json"),
  "06": path.join(projectRoot, "src", "content", ".timeline-followup-blank-06-restore.json"),
  "07": path.join(projectRoot, "src", "content", ".timeline-followup-blank-07-restore.json"),
  "08": path.join(projectRoot, "src", "content", ".timeline-followup-blank-08-restore.json"),
};
const timelineFollowupBlankBackupPaths = {
  "01": path.join(projectRoot, ".local-history", "timeline-followup-blank-01.previous.json"),
  "02": path.join(projectRoot, ".local-history", "timeline-followup-blank-02.previous.json"),
  "03": path.join(projectRoot, ".local-history", "timeline-followup-blank-03.previous.json"),
  "04": path.join(projectRoot, ".local-history", "timeline-followup-blank-04.previous.json"),
  "05": path.join(projectRoot, ".local-history", "timeline-followup-blank-05.previous.json"),
  "06": path.join(projectRoot, ".local-history", "timeline-followup-blank-06.previous.json"),
  "07": path.join(projectRoot, ".local-history", "timeline-followup-blank-07.previous.json"),
  "08": path.join(projectRoot, ".local-history", "timeline-followup-blank-08.previous.json"),
};
const timelineBlankOneLayoutPath = path.join(projectRoot, "src", "content", "timeline-blank-one-layout.json");
const timelineBlankOneLayoutTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-one-layout-restore.json");
const timelineBlankOneLayoutBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-layout.previous.json");
const timelineBlankOneCopyPath = path.join(projectRoot, "src", "content", "timeline-blank-one-copy.json");
const timelineBlankOneCopyTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-one-copy-restore.json");
const timelineBlankOneCopyBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-copy.previous.json");
const maxTimelineBlankOneCopySize = 64 * 1024;
const timelineBlankOneExtraRowPath = path.join(projectRoot, "src", "content", "timeline-blank-one-extra-row.json");
const timelineBlankOneExtraRowTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-one-extra-row-restore.json");
const timelineBlankOneExtraRowBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-extra-row.previous.json");
const timelineBlankOneExtraCopyBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-extra-copy.previous.json");
const maxTimelineBlankOneExtraCopySize = 8 * 1024;
const timelineBlankOnePositionPath = path.join(projectRoot, "src", "content", "timeline-blank-one-position.json");
const timelineBlankOnePositionTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-one-position-restore.json");
const timelineBlankOnePositionBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-position.previous.json");
const timelineBlankOneMarkPath = path.join(projectRoot, "src", "content", "timeline-blank-one-mark.json");
const timelineBlankOneMarkTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-one-mark-restore.json");
const timelineBlankOneMarkBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-mark.previous.json");
const timelineBlankOneRemovalPath = path.join(projectRoot, "src", "content", "timeline-blank-one-removal.json");
const timelineBlankOneRemovalTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-one-removal-restore.json");
const timelineBlankOneRemovalBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-removal.previous.json");
const timelineBlankOneBackgroundPath = path.join(projectRoot, "src", "content", "timeline-blank-one-background.json");
const timelineBlankOneBackgroundTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-one-background-upload.json");
const timelineBlankOneBackgroundBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-background.previous.json");
const timelineBlankOneDetailTopPath = path.join(projectRoot, "src", "content", "timeline-blank-one-detail-top.json");
const timelineBlankOneDetailTopTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-one-detail-top-upload.json");
const timelineBlankOneDetailTopBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-detail-top.previous.json");
const timelineBlankOneDetailBottomPath = path.join(projectRoot, "src", "content", "timeline-blank-one-detail-bottom.json");
const timelineBlankOneDetailBottomTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-one-detail-bottom-upload.json");
const timelineBlankOneDetailBottomBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-one-detail-bottom.previous.json");
const timelineBlankTwoLayoutPath = path.join(projectRoot, "src", "content", "timeline-blank-two-layout.json");
const timelineBlankTwoLayoutTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-two-layout-restore.json");
const timelineBlankTwoLayoutBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-two-layout.previous.json");
const timelineBlankTwoCopyPath = path.join(projectRoot, "src", "content", "timeline-blank-two-copy.json");
const timelineBlankTwoCopyTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-two-copy-restore.json");
const timelineBlankTwoCopyBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-two-copy.previous.json");
const maxTimelineBlankTwoCopySize = 32 * 1024;
const timelineBlankTwoImagePath = path.join(projectRoot, "src", "content", "timeline-blank-two-image.json");
const timelineBlankTwoImageTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-two-image-upload.json");
const timelineBlankTwoImageBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-two-image.previous.json");
const timelineBlankTwoBackgroundPath = path.join(projectRoot, "src", "content", "timeline-blank-two-background.json");
const timelineBlankTwoBackgroundTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-two-background-upload.json");
const timelineBlankTwoBackgroundBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-two-background.previous.json");
const timelineBlankThreeLayoutPath = path.join(projectRoot, "src", "content", "timeline-blank-three-layout.json");
const timelineBlankThreeLayoutTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-three-layout-restore.json");
const timelineBlankThreeLayoutBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-three-layout.previous.json");
const timelineBlankThreeCopyPath = path.join(projectRoot, "src", "content", "timeline-blank-three-copy.json");
const timelineBlankThreeCopyTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-three-copy-restore.json");
const timelineBlankThreeCopyBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-three-copy.previous.json");
const maxTimelineBlankThreeCopySize = 16 * 1024;
const timelineBlankThreeImagePath = path.join(projectRoot, "src", "content", "timeline-blank-three-image.json");
const timelineBlankThreeImageTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-three-image-upload.json");
const timelineBlankThreeImageBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-three-image.previous.json");
const timelineBlankFourLayoutPath = path.join(projectRoot, "src", "content", "timeline-blank-four-layout.json");
const timelineBlankFourLayoutTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-four-layout-restore.json");
const timelineBlankFourLayoutBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-four-layout.previous.json");
const timelineBlankFourCopyPath = path.join(projectRoot, "src", "content", "timeline-blank-four-copy.json");
const timelineBlankFourCopyTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-four-copy-restore.json");
const timelineBlankFourCopyBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-four-copy.previous.json");
const maxTimelineBlankFourCopySize = 16 * 1024;
const timelineBlankFourImagePath = path.join(projectRoot, "src", "content", "timeline-blank-four-image.json");
const timelineBlankFourImageTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-four-image-upload.json");
const timelineBlankFourImageBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-four-image.previous.json");
const timelineBlankFourWordFitPath = path.join(projectRoot, "src", "content", "timeline-blank-four-word-fit.json");
const timelineBlankFourWordFitTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-four-word-fit-restore.json");
const timelineBlankFourWordFitBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-four-word-fit.previous.json");
const timelineBlankEightLayoutPath = path.join(projectRoot, "src", "content", "timeline-blank-eight-layout.json");
const timelineBlankEightLayoutTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-eight-layout-restore.json");
const timelineBlankEightLayoutBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-eight-layout.previous.json");
const timelineBlankEightCopyPath = path.join(projectRoot, "src", "content", "timeline-blank-eight-copy.json");
const timelineBlankEightCopyTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-eight-copy-restore.json");
const timelineBlankEightCopyBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-eight-copy.previous.json");
const maxTimelineBlankEightCopySize = 16 * 1024;
const timelineBlankEightImagePath = path.join(projectRoot, "src", "content", "timeline-blank-eight-image.json");
const timelineBlankEightImageTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-eight-image-upload.json");
const timelineBlankEightImageBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-eight-image.previous.json");
const timelineBlankEightTitleFitPath = path.join(projectRoot, "src", "content", "timeline-blank-eight-title-fit.json");
const timelineBlankEightTitleFitTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-eight-title-fit-restore.json");
const timelineBlankEightTitleFitBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-eight-title-fit.previous.json");
const timelineBlankFiveBackgroundPath = path.join(projectRoot, "src", "content", "timeline-blank-five-background.json");
const timelineBlankFiveBackgroundTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-five-background-upload.json");
const timelineBlankFiveBackgroundBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-five-background.previous.json");
const timelineBlankSevenLayoutPath = path.join(projectRoot, "src", "content", "timeline-blank-seven-layout.json");
const timelineBlankSevenLayoutTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-seven-layout-restore.json");
const timelineBlankSevenLayoutBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-seven-layout.previous.json");
const timelineGalleryFollowupBlankPanelPath = path.join(projectRoot, "src", "content", "timeline-gallery-followup-blank-panel.json");
const timelineGalleryFollowupBlankPanelTempPath = path.join(projectRoot, "src", "content", ".timeline-gallery-followup-blank-panel-restore.json");
const timelineGalleryFollowupBlankPanelBackupPath = path.join(projectRoot, ".local-history", "timeline-gallery-followup-blank-panel.previous.json");
const timelineGalleryFollowupPricingLayoutPath = path.join(projectRoot, "src", "content", "timeline-gallery-followup-pricing-layout.json");
const timelineGalleryFollowupPricingLayoutTempPath = path.join(projectRoot, "src", "content", ".timeline-gallery-followup-pricing-layout-restore.json");
const timelineGalleryFollowupPricingLayoutBackupPath = path.join(projectRoot, ".local-history", "timeline-gallery-followup-pricing-layout.previous.json");
const timelineGalleryFollowupPricingContentPath = path.join(projectRoot, "src", "content", "timeline-gallery-followup-pricing-content.json");
const timelineGalleryFollowupPricingContentTempPath = path.join(projectRoot, "src", "content", ".timeline-gallery-followup-pricing-content-restore.json");
const timelineGalleryFollowupPricingContentBackupPath = path.join(projectRoot, ".local-history", "timeline-gallery-followup-pricing-content.previous.json");
const timelineGalleryFollowupPricingTierIds = new Set(["self", "team"]);
const timelineGalleryFollowupPricingFeatureIds = new Set(["self-1", "self-2", "self-3", "self-4", "self-5", "self-6", "team-1", "team-2", "team-3", "team-4", "team-5", "team-6"]);
const maxTimelineGalleryFollowupPricingContentSize = 64 * 1024;
const timelineBlankSixLayoutPath = path.join(projectRoot, "src", "content", "timeline-blank-six-layout.json");
const timelineBlankSixLayoutTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-six-layout-restore.json");
const timelineBlankSixLayoutBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-six-layout.previous.json");
const timelineBlankSixContentPath = path.join(projectRoot, "src", "content", "timeline-blank-six-content.json");
const timelineBlankSixContentTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-six-content-restore.json");
const timelineBlankSixContentBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-six-content.previous.json");
const timelineBlankSixImagesPath = path.join(projectRoot, "src", "content", "timeline-blank-six-images.json");
const timelineBlankSixImagesTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-six-images-upload.json");
const timelineBlankSixPositionPath = path.join(projectRoot, "src", "content", "timeline-blank-six-position.json");
const timelineBlankSixPositionTempPath = path.join(projectRoot, "src", "content", ".timeline-blank-six-position-restore.json");
const timelineBlankSixPositionBackupPath = path.join(projectRoot, ".local-history", "timeline-blank-six-position.previous.json");
const timelineBlankSixImageDirectory = path.join(projectRoot, "public", "assets", "images");
const timelineBlankSixCardIds = new Set(["dali", "zhemoshan", "yangliucun", "tengchong", "mangshi", "xishuangbanna", "reunion"]);
const timelineBlankSixIconNames = new Set(["Mountain", "TentTree", "Landmark", "Castle", "Pyramid", "TowerControl", "Building2"]);
const timelineBlankSixImageBackupPath = (cardId) => path.join(projectRoot, ".local-history", `timeline-blank-six-image-${cardId}.previous.json`);
const maxTimelineBlankSixContentSize = 64 * 1024;
const footerSecondaryPath = path.join(projectRoot, "src", "content", "footer-secondary-content.json");
const footerSecondaryTempPath = path.join(projectRoot, "src", "content", ".footer-secondary-restore.json");
const footerSecondaryBackupPath = path.join(projectRoot, ".local-history", "footer-secondary-content.previous.json");
const footerInvitationPath = path.join(projectRoot, "src", "content", "footer-invitation.json");
const footerInvitationTempPath = path.join(projectRoot, "src", "content", ".footer-invitation-restore.json");
const footerInvitationBackupPath = path.join(projectRoot, ".local-history", "footer-invitation.previous.json");
const mediaCardBodyCopyPath = path.join(projectRoot, "src", "content", "media-card-body-copy.json");
const mediaCardBodyCopyTempPath = path.join(projectRoot, "src", "content", ".media-card-body-copy-restore.json");
const mediaCardBodyCopyBackupPath = path.join(projectRoot, ".local-history", "media-card-body-copy.previous.json");
const mediaCardActionsPath = path.join(projectRoot, "src", "content", "media-card-actions.json");
const mediaCardActionsTempPath = path.join(projectRoot, "src", "content", ".media-card-actions-restore.json");
const mediaCardActionsBackupPath = path.join(projectRoot, ".local-history", "media-card-actions.previous.json");
const mediaCardPodcastImagePath = path.join(projectRoot, "src", "content", "media-card-podcast-image.json");
const mediaCardPodcastImageTempPath = path.join(projectRoot, "src", "content", ".media-card-podcast-image-restore.json");
const mediaCardPodcastImageBackupPath = path.join(projectRoot, ".local-history", "media-card-podcast-image.previous.json");
const mediaCardCrowdfundingImagePath = path.join(projectRoot, "src", "content", "media-card-crowdfunding-image.json");
const mediaCardCrowdfundingImageTempPath = path.join(projectRoot, "src", "content", ".media-card-crowdfunding-image-restore.json");
const mediaCardCrowdfundingImageBackupPath = path.join(projectRoot, ".local-history", "media-card-crowdfunding-image.previous.json");
const impactMediaCopyPath = path.join(projectRoot, "src", "content", "impact-media-copy.json");
const impactMediaCopyTempPath = path.join(projectRoot, "src", "content", ".impact-media-copy-restore.json");
const impactMediaCopyBackupPath = path.join(projectRoot, ".local-history", "impact-media-copy.previous.json");
const impactMediaCopyEditorFeaturePath = path.join(projectRoot, "src", "content", "impact-media-copy-editor-feature.json");
const impactMediaCopyEditorFeatureTempPath = path.join(projectRoot, "src", "content", ".impact-media-copy-editor-feature-restore.json");
const impactMediaCopyEditorFeatureBackupPath = path.join(projectRoot, ".local-history", "impact-media-copy-editor-feature.previous.json");
const maxImpactMediaCopySize = 32 * 1024;
const aboutBlankPanelPath = path.join(projectRoot, "src", "content", "about-blank-panel.json");
const aboutBlankPanelTempPath = path.join(projectRoot, "src", "content", ".about-blank-panel-restore.json");
const aboutBlankPanelBackupPath = path.join(projectRoot, ".local-history", "about-blank-panel.previous.json");
const aboutBlankPanelRemovalTempPath = path.join(projectRoot, "src", "content", ".about-blank-panel-removal-restore.json");
const aboutBlankPanelRemovalBackupPath = path.join(projectRoot, ".local-history", "about-blank-panel-removal.previous.json");
const aboutBlankPanelAppearancePath = path.join(projectRoot, "src", "content", "about-blank-panel-appearance.json");
const aboutBlankPanelAppearanceTempPath = path.join(projectRoot, "src", "content", ".about-blank-panel-appearance-restore.json");
const aboutBlankPanelAppearanceBackupPath = path.join(projectRoot, ".local-history", "about-blank-panel-appearance.previous.json");
const aboutBlankControlsPath = path.join(projectRoot, "src", "content", "about-blank-controls.json");
const aboutBlankControlsTempPath = path.join(projectRoot, "src", "content", ".about-blank-controls-restore.json");
const aboutBlankControlsBackupPath = path.join(projectRoot, ".local-history", "about-blank-controls.previous.json");
const aboutBlankImageFeaturePath = path.join(projectRoot, "src", "content", "about-blank-image-feature.json");
const aboutBlankImageFeatureTempPath = path.join(projectRoot, "src", "content", ".about-blank-image-feature-restore.json");
const aboutBlankImageFeatureBackupPath = path.join(projectRoot, ".local-history", "about-blank-image-feature.previous.json");
const aboutBlankImageContentPath = path.join(projectRoot, "src", "content", "about-blank-image-content.json");
const aboutBlankImageContentTempPath = path.join(projectRoot, "src", "content", ".about-blank-image-content-restore.json");
const aboutBlankImageContentBackupPath = path.join(projectRoot, ".local-history", "about-blank-image-content.previous.json");
const aboutBlankImageDirectory = path.join(projectRoot, "public", "assets", "images");
const maxAboutBlankImageSize = 25 * 1024 * 1024;
const aboutLowerBlankPanelPath = path.join(projectRoot, "src", "content", "about-lower-blank-panel.json");
const aboutLowerBlankPanelTempPath = path.join(projectRoot, "src", "content", ".about-lower-blank-panel-restore.json");
const aboutLowerBlankPanelBackupPath = path.join(projectRoot, ".local-history", "about-lower-blank-panel.previous.json");
const aboutLowerBlankPositionPath = path.join(projectRoot, "src", "content", "about-lower-blank-position.json");
const aboutLowerBlankPositionTempPath = path.join(projectRoot, "src", "content", ".about-lower-blank-position-restore.json");
const aboutLowerBlankPositionBackupPath = path.join(projectRoot, ".local-history", "about-lower-blank-position.previous.json");
const aboutLowerNextBlankPanelPath = path.join(projectRoot, "src", "content", "about-lower-next-blank-panel.json");
const aboutLowerNextBlankPanelTempPath = path.join(projectRoot, "src", "content", ".about-lower-next-blank-panel-restore.json");
const aboutLowerNextBlankPanelBackupPath = path.join(projectRoot, ".local-history", "about-lower-next-blank-panel.previous.json");
const aboutLowerNextBlankLayoutPath = path.join(projectRoot, "src", "content", "about-lower-next-blank-layout.json");
const aboutLowerNextBlankLayoutTempPath = path.join(projectRoot, "src", "content", ".about-lower-next-blank-layout-restore.json");
const aboutLowerNextBlankLayoutBackupPath = path.join(projectRoot, ".local-history", "about-lower-next-blank-layout.previous.json");
const aboutLowerNextBlankCopyPath = path.join(projectRoot, "src", "content", "about-lower-next-blank-copy.json");
const aboutLowerNextBlankCopyTempPath = path.join(projectRoot, "src", "content", ".about-lower-next-blank-copy-restore.json");
const aboutLowerNextBlankCopyBackupPath = path.join(projectRoot, ".local-history", "about-lower-next-blank-copy.previous.json");
const aboutLowerNextBlankBackgroundPath = path.join(projectRoot, "src", "content", "about-lower-next-blank-background.json");
const aboutLowerNextBlankBackgroundTempPath = path.join(projectRoot, "src", "content", ".about-lower-next-blank-background-restore.json");
const aboutLowerNextBlankBackgroundBackupPath = path.join(projectRoot, ".local-history", "about-lower-next-blank-background.previous.json");
const aboutLowerNextBlankLinePath = path.join(projectRoot, "src", "content", "about-lower-next-blank-line.json");
const aboutLowerNextBlankLineTempPath = path.join(projectRoot, "src", "content", ".about-lower-next-blank-line-restore.json");
const aboutLowerNextBlankLineBackupPath = path.join(projectRoot, ".local-history", "about-lower-next-blank-line.previous.json");
const aboutLowerNextBlankMarkPath = path.join(projectRoot, "src", "content", "about-lower-next-blank-mark.json");
const aboutLowerNextBlankMarkTempPath = path.join(projectRoot, "src", "content", ".about-lower-next-blank-mark-restore.json");
const aboutLowerNextBlankMarkBackupPath = path.join(projectRoot, ".local-history", "about-lower-next-blank-mark.previous.json");
const timelineVideoBlankPanelPath = path.join(projectRoot, "src", "content", "timeline-video-blank-panel.json");
const timelineVideoBlankPanelTempPath = path.join(projectRoot, "src", "content", ".timeline-video-blank-panel-restore.json");
const timelineVideoBlankPanelBackupPath = path.join(projectRoot, ".local-history", "timeline-video-blank-panel.previous.json");
const timelineVideoBlankContentPath = path.join(projectRoot, "src", "content", "timeline-video-blank-content.json");
const timelineVideoBlankContentTempPath = path.join(projectRoot, "src", "content", ".timeline-video-blank-content-upload.json");
const timelineVideoBlankContentBackupPath = path.join(projectRoot, ".local-history", "timeline-video-blank-content.previous.json");
const timelineVideoBlankDirectory = path.join(projectRoot, "public", "assets", "video");
const maxTimelineVideoBlankSize = 200 * 1024 * 1024;
const maxAboutLowerNextBlankCopySize = 96 * 1024;
const aboutLowerBlankLayoutPath = path.join(projectRoot, "src", "content", "about-lower-blank-layout.json");
const aboutLowerBlankLayoutTempPath = path.join(projectRoot, "src", "content", ".about-lower-blank-layout-restore.json");
const aboutLowerBlankLayoutBackupPath = path.join(projectRoot, ".local-history", "about-lower-blank-layout.previous.json");
const aboutLowerBlankEffectPath = path.join(projectRoot, "src", "content", "about-lower-blank-effect.json");
const aboutLowerBlankEffectTempPath = path.join(projectRoot, "src", "content", ".about-lower-blank-effect-restore.json");
const aboutLowerBlankEffectBackupPath = path.join(projectRoot, ".local-history", "about-lower-blank-effect.previous.json");
const aboutLowerBlankCopyPath = path.join(projectRoot, "src", "content", "about-lower-blank-copy.json");
const aboutLowerBlankCopyTempPath = path.join(projectRoot, "src", "content", ".about-lower-blank-copy-restore.json");
const aboutLowerBlankCopyBackupPath = path.join(projectRoot, ".local-history", "about-lower-blank-copy.previous.json");
const aboutLowerBlankBackgroundPath = path.join(projectRoot, "src", "content", "about-lower-blank-background.json");
const aboutLowerBlankBackgroundTempPath = path.join(projectRoot, "src", "content", ".about-lower-blank-background-restore.json");
const aboutLowerBlankBackgroundBackupPath = path.join(projectRoot, ".local-history", "about-lower-blank-background.previous.json");
const aboutLowerBlankCardImagePath = path.join(projectRoot, "src", "content", "about-lower-blank-card-image.json");
const aboutLowerBlankCardImageTempPath = path.join(projectRoot, "src", "content", ".about-lower-blank-card-image-restore.json");
const aboutLowerBlankCardImageBackupPath = path.join(projectRoot, ".local-history", "about-lower-blank-card-image.previous.json");
const aboutLowerBlankImageDirectory = path.join(projectRoot, "public", "assets", "images");
const maxAboutLowerBlankImageSize = 25 * 1024 * 1024;
const maxAboutLowerBlankCopySize = 32 * 1024;
const aboutBlankVideoFeaturePath = path.join(projectRoot, "src", "content", "about-blank-video-feature.json");
const aboutBlankVideoFeatureTempPath = path.join(projectRoot, "src", "content", ".about-blank-video-feature-restore.json");
const aboutBlankVideoFeatureBackupPath = path.join(projectRoot, ".local-history", "about-blank-video-feature.previous.json");
const aboutBlankVideoContentPath = path.join(projectRoot, "src", "content", "about-blank-video-content.json");
const aboutBlankVideoContentTempPath = path.join(projectRoot, "src", "content", ".about-blank-video-content-restore.json");
const aboutBlankVideoContentBackupPath = path.join(projectRoot, ".local-history", "about-blank-video-content.previous.json");
const aboutBlankVideoDirectory = path.join(projectRoot, "public", "assets", "video");
const maxAboutBlankVideoSize = 200 * 1024 * 1024;
const aboutTwoVideoFeaturePath = path.join(projectRoot, "src", "content", "about-two-video-feature.json");
const aboutTwoVideoFeatureTempPath = path.join(projectRoot, "src", "content", ".about-two-video-feature-restore.json");
const aboutTwoVideoFeatureBackupPath = path.join(projectRoot, ".local-history", "about-two-video-feature.previous.json");
const aboutTwoVideoContentPath = path.join(projectRoot, "src", "content", "about-two-video-content.json");
const aboutTwoVideoContentTempPath = path.join(projectRoot, "src", "content", ".about-two-video-content-restore.json");
const aboutTwoVideoContentBackupPath = path.join(projectRoot, ".local-history", "about-two-video-content.previous.json");
const aboutTwoVideoDirectory = path.join(projectRoot, "public", "assets", "video");
const maxAboutTwoVideoSize = 200 * 1024 * 1024;
const footerVideoPanelPath = path.join(projectRoot, "src", "content", "footer-video-panel.json");
const footerVideoPanelTempPath = path.join(projectRoot, "src", "content", ".footer-video-panel-restore.json");
const footerVideoPanelBackupPath = path.join(projectRoot, ".local-history", "footer-video-panel.previous.json");
const footerVideoContentPath = path.join(projectRoot, "src", "content", "footer-video-content.json");
const footerVideoContentTempPath = path.join(projectRoot, "src", "content", ".footer-video-content-restore.json");
const footerVideoContentBackupPath = path.join(projectRoot, ".local-history", "footer-video-content.previous.json");
const footerVideoDirectory = path.join(projectRoot, "public", "assets", "video");
const maxFooterVideoSize = 200 * 1024 * 1024;
const footerVideoPositionPath = path.join(projectRoot, "src", "content", "footer-video-position.json");
const footerVideoPositionTempPath = path.join(projectRoot, "src", "content", ".footer-video-position-restore.json");
const footerVideoPositionBackupPath = path.join(projectRoot, ".local-history", "footer-video-position.previous.json");
const footerWordmarkPath = path.join(projectRoot, "src", "content", "footer-wordmark.json");
const footerWordmarkTempPath = path.join(projectRoot, "src", "content", ".footer-wordmark-restore.json");
const footerWordmarkBackupPath = path.join(projectRoot, ".local-history", "footer-wordmark.previous.json");

function localHeroMediaUpload() {
  return {
    name: "jurneos-local-hero-media-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/hero-media", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";

        if (request.method === "GET" && pathname === "/undo") {
          access(heroVideoBackupPath)
            .then(() => {
              response.statusCode = 200;
              response.setHeader("Content-Type", "application/json; charset=utf-8");
              response.setHeader("Cache-Control", "no-store");
              response.end(JSON.stringify({ canUndo: true }));
            })
            .catch(() => {
              response.statusCode = 200;
              response.setHeader("Content-Type", "application/json; charset=utf-8");
              response.setHeader("Cache-Control", "no-store");
              response.end(JSON.stringify({ canUndo: false }));
            });
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          Promise.all([
            copyFile(heroVideoBackupPath, heroVideoTempPath),
            copyFile(heroMetadataBackupPath, heroMetadataTempPath),
          ])
            .then(async () => {
              await rename(heroVideoTempPath, heroVideoPath);
              await rename(heroMetadataTempPath, heroMetadataPath);
              await Promise.all([
                unlink(heroVideoBackupPath),
                unlink(heroMetadataBackupPath),
              ]);
              response.statusCode = 200;
              response.setHeader("Content-Type", "application/json; charset=utf-8");
              response.setHeader("Cache-Control", "no-store");
              response.end(JSON.stringify({ ok: true }));
            })
            .catch(async () => {
              await unlink(heroVideoTempPath).catch(() => {});
              await unlink(heroMetadataTempPath).catch(() => {});
              response.statusCode = 409;
              response.setHeader("Content-Type", "application/json; charset=utf-8");
              response.end(JSON.stringify({ message: "没有可撤销的背景视频修改。" }));
            });
          return;
        }

        if (request.method !== "PUT") {
          next();
          return;
        }

        const declaredSize = Number(request.headers["content-length"] || 0);
        if (declaredSize > maxHeroVideoSize) {
          response.statusCode = 413;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.end(JSON.stringify({ message: "视频不能超过 200 MB。" }));
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;

        const reply = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxHeroVideoSize) {
            reply(413, { message: "视频不能超过 200 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          const hasMp4Signature = body.length > 12 && body.toString("ascii", 4, 8) === "ftyp";
          if (!hasMp4Signature) {
            reply(415, { message: "文件不是有效的 MP4 视频。" });
            return;
          }

          try {
            const width = Number(request.headers["x-video-width"] || 0);
            const height = Number(request.headers["x-video-height"] || 0);
            const duration = Number(request.headers["x-video-duration"] || 0);
            const ratio = String(request.headers["x-video-ratio"] || "");
            const metadata = {
              kind: "MP4 视频",
              codec: "浏览器兼容编码",
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              duration: Number.isFinite(duration) && duration > 0 ? duration : 0,
              fps: null,
              size: body.length,
            };
            await mkdir(path.dirname(heroVideoPath), { recursive: true });
            await Promise.all([
              copyFile(heroVideoPath, heroVideoBackupPath),
              copyFile(heroMetadataPath, heroMetadataBackupPath),
            ]);
            await writeFile(heroVideoTempPath, body);
            await writeFile(heroMetadataTempPath, `${JSON.stringify(metadata, null, 2)}\n`, "utf8");
            await rename(heroVideoTempPath, heroVideoPath);
            await rename(heroMetadataTempPath, heroMetadataPath);
            reply(200, { ok: true, size: body.length });
          } catch {
            await unlink(heroVideoTempPath).catch(() => {});
            await unlink(heroMetadataTempPath).catch(() => {});
            reply(500, { message: "无法保存视频，请重试。" });
          }
        });

        request.on("error", () => reply(400, { message: "视频上传中断，请重试。" }));
      });
    },
  };
}

function localStatementHistory() {
  return {
    name: "jurneos-local-statement-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementTempPath, statementPath);
              await unlink(statementBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的文字修改。" });
            });
          return;
        }

        if (request.method === "PUT" && pathname === "/") {
          const chunks = [];
          let receivedSize = 0;
          let finished = false;
          const finish = (statusCode, payload) => {
            if (finished) return;
            finished = true;
            reply(statusCode, payload);
          };

          request.on("data", (chunk) => {
            if (finished) return;
            receivedSize += chunk.length;
            if (receivedSize > maxStatementSize) {
              finish(413, { message: "五行文字内容过长。" });
              return;
            }
            chunks.push(chunk);
          });

          request.on("end", async () => {
            if (finished) return;
            try {
              const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
              const lines = Array.isArray(input.lines) ? input.lines.slice(0, 5).map((line) => String(line || "").trim().slice(0, 80)) : [];
              const content = {
                language: String(input.language || "zh-CN").slice(0, 16),
                lines,
              };
              if (lines.length !== 5 || lines.some((line) => !line)) {
                finish(400, { message: "五行文字都不能为空。" });
                return;
              }
              const currentSource = await readFile(statementPath, "utf8");
              await mkdir(path.dirname(statementBackupPath), { recursive: true });
              await writeFile(statementBackupPath, currentSource, "utf8");
              await writeFile(statementTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementTempPath, statementPath);
              finish(200, { ok: true, content });
            } catch {
              await unlink(statementTempPath).catch(() => {});
              finish(400, { message: "无法保存五行文字，请检查内容后重试。" });
            }
          });

          request.on("error", () => finish(400, { message: "五行文字保存中断，请重试。" }));
          return;
        }

        next();
      });
    },
  };
}

function localStatementEditorFeatureHistory() {
  return {
    name: "jurneos-local-statement-editor-feature-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-editor-feature", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementEditorFeatureBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementEditorFeatureBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementEditorFeatureTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementEditorFeatureTempPath, statementEditorFeaturePath);
              await unlink(statementEditorFeatureBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementEditorFeatureTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的文字编辑功能修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementPanelRemovalHistory() {
  return {
    name: "jurneos-local-statement-panel-removal-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-panel-removal", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementPanelRemovalBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementPanelRemovalBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementPanelRemovalTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementPanelRemovalTempPath, statementPanelRemovalPath);
              await unlink(statementPanelRemovalBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementPanelRemovalTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的大字屏删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutOneImageUpload() {
  const mimeExtensions = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/avif": "avif",
  };

  const isValidImage = (body, mime) => {
    if (mime === "image/jpeg") return body.length > 3 && body[0] === 0xff && body[1] === 0xd8 && body[2] === 0xff;
    if (mime === "image/png") return body.length > 8 && body.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    if (mime === "image/webp") return body.length > 12 && body.toString("ascii", 0, 4) === "RIFF" && body.toString("ascii", 8, 12) === "WEBP";
    if (mime === "image/avif") return body.length > 16 && body.toString("ascii", 4, 8) === "ftyp" && body.subarray(8, 32).includes(Buffer.from("avif"));
    return false;
  };

  return {
    name: "jurneos-local-about-one-image-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-one-image", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutOneBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          Promise.all([
            readFile(aboutOneBackupPath, "utf8"),
            readFile(aboutOneMetadataPath, "utf8"),
          ])
            .then(async ([source, currentSource]) => {
              const content = JSON.parse(source);
              const current = JSON.parse(currentSource);
              await writeFile(aboutOneMetadataTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutOneMetadataTempPath, aboutOneMetadataPath);
              await unlink(aboutOneBackupPath);
              if (current.src?.startsWith("/assets/images/about-1-user-")) {
                await unlink(path.join(projectRoot, "public", current.src)).catch(() => {});
              }
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutOneMetadataTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的图片修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const mime = String(request.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
        const extension = mimeExtensions[mime];
        const declaredSize = Number(request.headers["content-length"] || 0);
        if (!extension) {
          reply(415, { message: "只支持 JPG、PNG、WebP 或 AVIF 图片。" });
          return;
        }
        if (declaredSize > maxAboutImageSize) {
          reply(413, { message: "图片不能超过 25 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutImageSize) {
            finish(413, { message: "图片不能超过 25 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          if (!isValidImage(body, mime)) {
            finish(415, { message: "文件内容不是有效的图片。" });
            return;
          }

          const width = Number(request.headers["x-image-width"] || 0);
          const height = Number(request.headers["x-image-height"] || 0);
          const ratio = String(request.headers["x-image-ratio"] || "未知");
          const originalName = decodeURIComponent(String(request.headers["x-file-name"] || `背景图片.${extension}`));
          const fileName = `about-1-user-${Date.now()}.${extension}`;
          const imagePath = path.join(aboutOneImageDirectory, fileName);

          try {
            const currentSource = await readFile(aboutOneMetadataPath, "utf8");
            const content = {
              src: `/assets/images/${fileName}`,
              kind: mime === "image/jpeg" ? "JPG 图片" : `${extension.toUpperCase()} 图片`,
              mime,
              width,
              height,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              size: body.length,
              originalName,
            };
            await mkdir(path.dirname(aboutOneBackupPath), { recursive: true });
            await mkdir(aboutOneImageDirectory, { recursive: true });
            await writeFile(aboutOneBackupPath, currentSource, "utf8");
            await writeFile(imagePath, body);
            await writeFile(aboutOneMetadataTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(aboutOneMetadataTempPath, aboutOneMetadataPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(imagePath).catch(() => {});
            await unlink(aboutOneMetadataTempPath).catch(() => {});
            finish(500, { message: "无法保存图片，请重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "图片上传中断，请重试。" }));
      });
    },
  };
}

function localAboutOneVideoUpload() {
  return {
    name: "jurneos-local-about-one-video-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-one-video", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const mime = String(request.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
        let originalName = "上传视频.mp4";
        try {
          originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName));
        } catch {}
        const lowerName = originalName.toLowerCase();
        const isMov = lowerName.endsWith(".mov") || mime === "video/quicktime" || mime === "video/x-quicktime";
        const isMp4 = lowerName.endsWith(".mp4") || mime === "video/mp4";
        if (!isMp4 && !isMov) {
          reply(415, { message: "只支持 MP4 或 MOV 视频。" });
          return;
        }

        const declaredSize = Number(request.headers["content-length"] || 0);
        if (declaredSize > maxAboutOneVideoSize) {
          reply(413, { message: "视频不能超过 200 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutOneVideoSize) {
            finish(413, { message: "视频不能超过 200 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          const containerAtom = body.length > 12 ? body.toString("ascii", 4, 8) : "";
          const hasSupportedSignature = ["ftyp", "moov", "mdat", "wide", "free"].includes(containerAtom);
          if (!hasSupportedSignature) {
            finish(415, { message: "文件不是有效的 MP4 或 MOV 视频。" });
            return;
          }

          let uploadedVideoPath = "";
          try {
            const width = Number(request.headers["x-video-width"] || 0);
            const height = Number(request.headers["x-video-height"] || 0);
            const duration = Number(request.headers["x-video-duration"] || 0);
            const ratio = String(request.headers["x-video-ratio"] || "");
            const extension = isMov ? "mov" : "mp4";
            const fileName = `about-one-user-${Date.now()}.${extension}`;
            uploadedVideoPath = path.join(aboutOneVideoDirectory, fileName);
            const content = {
              src: `/assets/video/${fileName}`,
              kind: isMov ? "MOV 视频" : "MP4 视频",
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              duration: Number.isFinite(duration) && duration > 0 ? duration : 0,
              size: body.length,
              originalName,
            };

            await mkdir(aboutOneVideoDirectory, { recursive: true });
            await writeFile(uploadedVideoPath, body);
            await writeFile(aboutOneVideoContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(aboutOneVideoContentTempPath, aboutOneVideoContentPath);
            finish(200, { ok: true, content });
          } catch {
            if (uploadedVideoPath) await unlink(uploadedVideoPath).catch(() => {});
            await unlink(aboutOneVideoContentTempPath).catch(() => {});
            finish(500, { message: "无法保存背景视频，请重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "背景视频上传中断，请重试。" }));
      });
    },
  };
}

function localAboutOnePositionHistory() {
  return {
    name: "jurneos-local-about-one-position-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-one-position", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutOnePositionBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutOnePositionBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutOnePositionTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutOnePositionTempPath, aboutOnePositionPath);
              await unlink(aboutOnePositionBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutOnePositionTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的位置修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutOneEffectHistory() {
  return {
    name: "jurneos-local-about-one-effect-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-one-effect", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutOneEffectBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutOneEffectBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutOneEffectTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutOneEffectTempPath, aboutOneEffectPath);
              await unlink(aboutOneEffectBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutOneEffectTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的毛玻璃修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutExtraGroupsHistory() {
  return {
    name: "jurneos-local-about-extra-groups-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-extra-groups", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutExtraGroupsBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutExtraGroupsBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutExtraGroupsTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutExtraGroupsTempPath, aboutExtraGroupsPath);
              await unlink(aboutExtraGroupsBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutExtraGroupsTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的新增内容。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutPanelSelectionRemovalHistory() {
  return {
    name: "jurneos-local-about-panel-selection-removal-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-panel-selection-removal", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutPanelSelectionRemovalBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutPanelSelectionRemovalBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutPanelSelectionRemovalTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutPanelSelectionRemovalTempPath, aboutPanelSelectionRemovalPath);
              await unlink(aboutPanelSelectionRemovalBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutPanelSelectionRemovalTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的选中项目屏删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localImpactIntroPanelsHistory() {
  return {
    name: "jurneos-local-impact-intro-panels-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/impact-intro-panels", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(impactIntroPanelsBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(impactIntroPanelsBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(impactIntroPanelsTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(impactIntroPanelsTempPath, impactIntroPanelsPath);
              await unlink(impactIntroPanelsBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(impactIntroPanelsTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的两张英文内容屏删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localMediaCardBodyCopyHistory() {
  return {
    name: "jurneos-local-media-card-body-copy-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/media-card-body-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(mediaCardBodyCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(mediaCardBodyCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(mediaCardBodyCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(mediaCardBodyCopyTempPath, mediaCardBodyCopyPath);
              await unlink(mediaCardBodyCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(mediaCardBodyCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的两段说明文字删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localMediaCardActionsHistory() {
  return {
    name: "jurneos-local-media-card-actions-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/media-card-actions", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(mediaCardActionsBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(mediaCardActionsBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(mediaCardActionsTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(mediaCardActionsTempPath, mediaCardActionsPath);
              await unlink(mediaCardActionsBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(mediaCardActionsTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的按钮删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localMediaCardPodcastImageHistory() {
  return {
    name: "jurneos-local-media-card-podcast-image-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/media-card-podcast-image", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(mediaCardPodcastImageBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(mediaCardPodcastImageBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(mediaCardPodcastImageTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(mediaCardPodcastImageTempPath, mediaCardPodcastImagePath);
              await unlink(mediaCardPodcastImageBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(mediaCardPodcastImageTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的图片插入操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localMediaCardCrowdfundingImageHistory() {
  return {
    name: "jurneos-local-media-card-crowdfunding-image-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/media-card-crowdfunding-image", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(mediaCardCrowdfundingImageBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(mediaCardCrowdfundingImageBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(mediaCardCrowdfundingImageTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(mediaCardCrowdfundingImageTempPath, mediaCardCrowdfundingImagePath);
              await unlink(mediaCardCrowdfundingImageBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(mediaCardCrowdfundingImageTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的右侧图片插入操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localImpactMediaCopyEditor() {
  return {
    name: "jurneos-local-impact-media-copy-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/impact-media-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(impactMediaCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(impactMediaCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(impactMediaCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(impactMediaCopyTempPath, impactMediaCopyPath);
              await unlink(impactMediaCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(impactMediaCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的所选区域文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxImpactMediaCopySize) {
            finish(413, { message: "所选区域文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const content = {
              impact: {
                heading: String(input?.impact?.heading ?? "").trim().slice(0, 80),
                body: String(input?.impact?.body ?? "").trim().slice(0, 900),
              },
              podcast: {
                prefix: String(input?.podcast?.prefix ?? "").trim().slice(0, 30),
                title: String(input?.podcast?.title ?? "").trim().slice(0, 80),
                status: String(input?.podcast?.status ?? "").trim().slice(0, 60),
                body: String(input?.podcast?.body ?? "").trim().slice(0, 500),
              },
              crowdfunding: {
                prefix: String(input?.crowdfunding?.prefix ?? "").trim().slice(0, 30),
                title: String(input?.crowdfunding?.title ?? "").trim().slice(0, 80),
                link: String(input?.crowdfunding?.link ?? "").trim().slice(0, 60),
                body: String(input?.crowdfunding?.body ?? "").trim().slice(0, 500),
              },
            };
            if (Object.values(content).some((group) => Object.values(group).some((value) => !value))) {
              finish(400, { message: "所选区域的文字都不能为空。" });
              return;
            }
            const currentSource = await readFile(impactMediaCopyPath, "utf8");
            await mkdir(path.dirname(impactMediaCopyBackupPath), { recursive: true });
            await writeFile(impactMediaCopyBackupPath, currentSource, "utf8");
            await writeFile(impactMediaCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(impactMediaCopyTempPath, impactMediaCopyPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(impactMediaCopyTempPath).catch(() => {});
            finish(400, { message: "无法保存所选区域文字，请检查后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "所选区域文字保存中断，请重试。" }));
      });
    },
  };
}

function localImpactMediaCopyEditorFeatureHistory() {
  return {
    name: "jurneos-local-impact-media-copy-editor-feature-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/impact-media-copy-editor-feature", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(impactMediaCopyEditorFeatureBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(impactMediaCopyEditorFeatureBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(impactMediaCopyEditorFeatureTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(impactMediaCopyEditorFeatureTempPath, impactMediaCopyEditorFeaturePath);
              await unlink(impactMediaCopyEditorFeatureBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(impactMediaCopyEditorFeatureTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的文字编辑功能新增操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localSelectedSevenPageRemovalHistory() {
  return {
    name: "jurneos-local-selected-seven-page-removal-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/selected-seven-page-removal", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(selectedSevenPageRemovalBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(selectedSevenPageRemovalBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(selectedSevenPageRemovalTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(selectedSevenPageRemovalTempPath, selectedSevenPageRemovalPath);
              await unlink(selectedSevenPageRemovalBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(selectedSevenPageRemovalTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的电影海报页和项目页删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementFollowupBlankPanelHistory() {
  return {
    name: "jurneos-local-statement-followup-blank-panel-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-blank-panel", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupBlankPanelBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementFollowupBlankPanelBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementFollowupBlankPanelTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupBlankPanelTempPath, statementFollowupBlankPanelPath);
              await unlink(statementFollowupBlankPanelBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupBlankPanelTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 THE PROJECT 下方空白屏新增操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementFollowupBlankRemovalHistory() {
  return {
    name: "jurneos-local-statement-followup-blank-removal-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-blank-removal", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupBlankRemovalBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementFollowupBlankRemovalBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementFollowupBlankRemovalTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupBlankRemovalTempPath, statementFollowupBlankRemovalPath);
              await unlink(statementFollowupBlankRemovalBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupBlankRemovalTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的整屏图片页删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementSecondFollowupBlankPanelHistory() {
  return {
    name: "jurneos-local-statement-second-followup-blank-panel-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-second-followup-blank-panel", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementSecondFollowupBlankPanelBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementSecondFollowupBlankPanelBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementSecondFollowupBlankPanelTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementSecondFollowupBlankPanelTempPath, statementSecondFollowupBlankPanelPath);
              await unlink(statementSecondFollowupBlankPanelBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementSecondFollowupBlankPanelTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的新增空白屏操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementFollowupWhitePanelThreeHistory() {
  return {
    name: "jurneos-local-statement-followup-white-panel-three-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-white-panel-03", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupWhitePanelThreeBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementFollowupWhitePanelThreeBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementFollowupWhitePanelThreeTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupWhitePanelThreeTempPath, statementFollowupWhitePanelThreePath);
              await unlink(statementFollowupWhitePanelThreeBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupWhitePanelThreeTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的新白屏新增操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementFollowupBlankPanelFourHistory() {
  return {
    name: "jurneos-local-statement-followup-blank-panel-four-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-blank-panel-04", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupBlankPanelFourBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementFollowupBlankPanelFourBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementFollowupBlankPanelFourTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupBlankPanelFourTempPath, statementFollowupBlankPanelFourPath);
              await unlink(statementFollowupBlankPanelFourBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupBlankPanelFourTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的新空白屏新增操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementFollowupBlankPanelFourAppearanceHistory() {
  return {
    name: "jurneos-local-statement-followup-blank-panel-four-appearance-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-blank-panel-04-appearance", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupBlankPanelFourAppearanceBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementFollowupBlankPanelFourAppearanceBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementFollowupBlankPanelFourAppearanceTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupBlankPanelFourAppearanceTempPath, statementFollowupBlankPanelFourAppearancePath);
              await unlink(statementFollowupBlankPanelFourAppearanceBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupBlankPanelFourAppearanceTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的白色背景修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementFollowupScrollFlyLayoutHistory() {
  return {
    name: "jurneos-local-statement-followup-scroll-fly-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-scroll-fly-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupScrollFlyLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementFollowupScrollFlyLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementFollowupScrollFlyLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupScrollFlyLayoutTempPath, statementFollowupScrollFlyLayoutPath);
              await unlink(statementFollowupScrollFlyLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupScrollFlyLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的滚动飞入排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementFollowupScrollFlyContentEditor() {
  return {
    name: "jurneos-local-statement-followup-scroll-fly-content-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-scroll-fly-content", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupScrollFlyContentBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementFollowupScrollFlyContentBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementFollowupScrollFlyContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupScrollFlyContentTempPath, statementFollowupScrollFlyContentPath);
              await unlink(statementFollowupScrollFlyContentBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupScrollFlyContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的滚动飞入页面文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxStatementFollowupScrollFlyContentSize) {
            finish(413, { message: "滚动飞入页面文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const content = {
              eyebrow: String(input?.eyebrow ?? "").trim().slice(0, 100),
              heading: String(input?.heading ?? "").trim().slice(0, 260),
            };
            if (!content.eyebrow || !content.heading) {
              finish(400, { message: "顶部短句和主标题都不能为空。" });
              return;
            }
            const currentSource = await readFile(statementFollowupScrollFlyContentPath, "utf8");
            await mkdir(path.dirname(statementFollowupScrollFlyContentBackupPath), { recursive: true });
            await writeFile(statementFollowupScrollFlyContentBackupPath, currentSource, "utf8");
            await writeFile(statementFollowupScrollFlyContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(statementFollowupScrollFlyContentTempPath, statementFollowupScrollFlyContentPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(statementFollowupScrollFlyContentTempPath).catch(() => {});
            finish(400, { message: "无法保存滚动飞入页面文字，请检查后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "滚动飞入页面文字保存中断，请重试。" }));
      });
    },
  };
}

function localStatementFollowupScrollFlyHeadingFormatHistory() {
  return {
    name: "jurneos-local-statement-followup-scroll-fly-heading-format-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-scroll-fly-heading-format", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupScrollFlyHeadingFormatBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          Promise.all([
            readFile(statementFollowupScrollFlyHeadingFormatBackupPath, "utf8"),
            readFile(statementFollowupScrollFlyContentPath, "utf8"),
          ])
            .then(async ([backupSource, currentContentSource]) => {
              const backup = JSON.parse(backupSource);
              const currentContent = JSON.parse(currentContentSource);
              const format = { enabled: Boolean(backup.enabled) };
              const content = { ...currentContent, heading: String(backup.heading ?? currentContent.heading) };
              await writeFile(statementFollowupScrollFlyHeadingFormatTempPath, `${JSON.stringify(format, null, 2)}\n`, "utf8");
              await writeFile(statementFollowupScrollFlyContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupScrollFlyHeadingFormatTempPath, statementFollowupScrollFlyHeadingFormatPath);
              await rename(statementFollowupScrollFlyContentTempPath, statementFollowupScrollFlyContentPath);
              await unlink(statementFollowupScrollFlyHeadingFormatBackupPath);
              reply(200, { ok: true, format, content });
            })
            .catch(async () => {
              await unlink(statementFollowupScrollFlyHeadingFormatTempPath).catch(() => {});
              await unlink(statementFollowupScrollFlyContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的两行文字排版。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementFollowupCinematicLayoutHistory() {
  return {
    name: "jurneos-local-statement-followup-cinematic-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-cinematic-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupCinematicLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementFollowupCinematicLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementFollowupCinematicLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupCinematicLayoutTempPath, statementFollowupCinematicLayoutPath);
              await unlink(statementFollowupCinematicLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupCinematicLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的电影列表排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementFollowupCinematicContentEditor() {
  return {
    name: "jurneos-local-statement-followup-cinematic-content-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-cinematic-content", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementFollowupCinematicContentBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementFollowupCinematicContentBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementFollowupCinematicContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupCinematicContentTempPath, statementFollowupCinematicContentPath);
              await unlink(statementFollowupCinematicContentBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupCinematicContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的电影列表文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };
        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxStatementFollowupCinematicContentSize) {
            finish(413, { message: "电影列表文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });
        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const heading = String(input?.heading || "").trim().slice(0, 80);
            const subtitle = String(input?.subtitle || "").trim().slice(0, 80);
            const items = Array.isArray(input?.items) ? input.items.map((item) => ({
              key: String(item?.key || ""),
              id: String(item?.id || "").trim().slice(0, 20),
              title: String(item?.title || "").trim().slice(0, 80),
              location: String(item?.location || "").trim().slice(0, 80),
              alt: String(item?.alt || "").trim().slice(0, 120),
            })) : [];
            const keys = new Set(items.map((item) => item.key));
            if (!heading || !subtitle || items.length !== 4 || keys.size !== 4 || items.some((item) => !statementFollowupCinematicCardIds.has(item.key) || !item.id || !item.title || !item.location || !item.alt)) {
              finish(400, { message: "页眉及四行卡片的序号、标题、地点和图片说明均不能为空。" });
              return;
            }
            const content = { heading, subtitle, items };
            const currentSource = await readFile(statementFollowupCinematicContentPath, "utf8");
            await mkdir(path.dirname(statementFollowupCinematicContentBackupPath), { recursive: true });
            await writeFile(statementFollowupCinematicContentBackupPath, currentSource, "utf8");
            await writeFile(statementFollowupCinematicContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(statementFollowupCinematicContentTempPath, statementFollowupCinematicContentPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(statementFollowupCinematicContentTempPath).catch(() => {});
            finish(400, { message: "无法保存电影列表文字，请检查后重试。" });
          }
        });
        request.on("error", () => finish(400, { message: "电影列表文字保存中断，请重试。" }));
      });
    },
  };
}

function localStatementFollowupCinematicImageUpload() {
  const mimeExtensions = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif" };
  const isValidImage = (body, mime) => {
    if (mime === "image/jpeg") return body.length > 3 && body[0] === 0xff && body[1] === 0xd8 && body[2] === 0xff;
    if (mime === "image/png") return body.length > 8 && body.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    if (mime === "image/webp") return body.length > 12 && body.toString("ascii", 0, 4) === "RIFF" && body.toString("ascii", 8, 12) === "WEBP";
    if (mime === "image/avif") return body.length > 12 && body.toString("ascii", 4, 8) === "ftyp";
    return false;
  };

  return {
    name: "jurneos-local-statement-followup-cinematic-image-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-followup-cinematic-image", (request, response, next) => {
        const requestUrl = new URL(request.url || "/", "http://127.0.0.1");
        const pathname = requestUrl.pathname;
        const cardId = requestUrl.searchParams.get("card");
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (!cardId || !statementFollowupCinematicCardIds.has(cardId)) {
          reply(400, { message: "电影列表卡片编号无效。" });
          return;
        }
        const backupPath = statementFollowupCinematicImageBackupPath(cardId);

        if (request.method === "GET" && pathname === "/undo") {
          access(backupPath).then(() => reply(200, { canUndo: true })).catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          Promise.all([readFile(backupPath, "utf8"), readFile(statementFollowupCinematicImagesPath, "utf8")])
            .then(async ([backupSource, currentSource]) => {
              const previous = JSON.parse(backupSource);
              const content = JSON.parse(currentSource);
              const current = content[cardId];
              content[cardId] = previous;
              await writeFile(statementFollowupCinematicImagesTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementFollowupCinematicImagesTempPath, statementFollowupCinematicImagesPath);
              await unlink(backupPath);
              if (current?.src?.startsWith(`/assets/images/statement-followup-cinematic-${cardId}-user-`)) {
                await unlink(path.join(projectRoot, "public", current.src)).catch(() => {});
              }
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementFollowupCinematicImagesTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的当前卡片图片修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const mime = String(request.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
        const extension = mimeExtensions[mime];
        const declaredSize = Number(request.headers["content-length"] || 0);
        if (!extension) {
          reply(415, { message: "请选择 JPG、PNG、WebP 或 AVIF 图片。" });
          return;
        }
        if (declaredSize > maxStatementFollowupCinematicImageSize) {
          reply(413, { message: "图片不能超过 25 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };
        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxStatementFollowupCinematicImageSize) {
            finish(413, { message: "图片不能超过 25 MB。" });
            return;
          }
          chunks.push(chunk);
        });
        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          if (!isValidImage(body, mime)) {
            finish(415, { message: "文件内容不是有效的图片。" });
            return;
          }
          const width = Number(request.headers["x-image-width"] || 0);
          const height = Number(request.headers["x-image-height"] || 0);
          const ratio = String(request.headers["x-image-ratio"] || "未知");
          let originalName = `卡片图片.${extension}`;
          try { originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName)); } catch {}
          const fileName = `statement-followup-cinematic-${cardId}-user-${Date.now()}.${extension}`;
          const imagePath = path.join(statementFollowupCinematicImageDirectory, fileName);
          try {
            const currentSource = await readFile(statementFollowupCinematicImagesPath, "utf8");
            const content = JSON.parse(currentSource);
            const metadata = {
              src: `/assets/images/${fileName}`,
              kind: mime === "image/jpeg" ? "JPG 图片" : `${extension.toUpperCase()} 图片`,
              mime,
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              size: body.length,
              originalName,
            };
            await mkdir(path.dirname(backupPath), { recursive: true });
            await mkdir(statementFollowupCinematicImageDirectory, { recursive: true });
            await writeFile(backupPath, `${JSON.stringify(content[cardId], null, 2)}\n`, "utf8");
            await writeFile(imagePath, body);
            content[cardId] = metadata;
            await writeFile(statementFollowupCinematicImagesTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(statementFollowupCinematicImagesTempPath, statementFollowupCinematicImagesPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(imagePath).catch(() => {});
            await unlink(statementFollowupCinematicImagesTempPath).catch(() => {});
            finish(500, { message: "无法保存卡片图片，请重试。" });
          }
        });
        request.on("error", () => finish(400, { message: "卡片图片上传中断，请重试。" }));
      });
    },
  };
}

function localStatementSecondFollowupBlankAppearanceHistory() {
  return {
    name: "jurneos-local-statement-second-followup-blank-appearance-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-second-followup-blank-appearance", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementSecondFollowupBlankAppearanceBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementSecondFollowupBlankAppearanceBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementSecondFollowupBlankAppearanceTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementSecondFollowupBlankAppearanceTempPath, statementSecondFollowupBlankAppearancePath);
              await unlink(statementSecondFollowupBlankAppearanceBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementSecondFollowupBlankAppearanceTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的白色背景修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementSecondFollowupBlurLayoutHistory() {
  return {
    name: "jurneos-local-statement-second-followup-blur-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-second-followup-blur-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementSecondFollowupBlurLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementSecondFollowupBlurLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementSecondFollowupBlurLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementSecondFollowupBlurLayoutTempPath, statementSecondFollowupBlurLayoutPath);
              await unlink(statementSecondFollowupBlurLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementSecondFollowupBlurLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 Blur Vignette 视频卡片排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementSecondFollowupBlurRemovalHistory() {
  return {
    name: "jurneos-local-statement-second-followup-blur-removal-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-second-followup-blur-removal", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementSecondFollowupBlurRemovalBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementSecondFollowupBlurRemovalBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementSecondFollowupBlurRemovalTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementSecondFollowupBlurRemovalTempPath, statementSecondFollowupBlurRemovalPath);
              await unlink(statementSecondFollowupBlurRemovalBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementSecondFollowupBlurRemovalTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的视频卡片页删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localStatementSecondFollowupBlurContentEditor() {
  return {
    name: "jurneos-local-statement-second-followup-blur-content-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-second-followup-blur-content", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(statementSecondFollowupBlurContentBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(statementSecondFollowupBlurContentBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(statementSecondFollowupBlurContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementSecondFollowupBlurContentTempPath, statementSecondFollowupBlurContentPath);
              await unlink(statementSecondFollowupBlurContentBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementSecondFollowupBlurContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的视频卡片文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxStatementSecondFollowupBlurContentSize) {
            finish(413, { message: "视频卡片文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const cards = Array.isArray(input.cards) ? input.cards.map((card) => ({
              id: String(card?.id || ""),
              eyebrow: String(card?.eyebrow || "").trim().slice(0, 60),
              title: String(card?.title || "").trim().slice(0, 80),
              description: String(card?.description || "").trim().slice(0, 220),
            })) : [];
            const ids = new Set(cards.map((card) => card.id));
            if (cards.length !== 4 || ids.size !== 4 || cards.some((card) => !statementSecondFollowupBlurCardIds.has(card.id) || !card.eyebrow || !card.title || !card.description)) {
              finish(400, { message: "四张卡片的序号、标题和说明均不能为空。" });
              return;
            }
            const content = { cards };
            const currentSource = await readFile(statementSecondFollowupBlurContentPath, "utf8");
            await mkdir(path.dirname(statementSecondFollowupBlurContentBackupPath), { recursive: true });
            await writeFile(statementSecondFollowupBlurContentBackupPath, currentSource, "utf8");
            await writeFile(statementSecondFollowupBlurContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(statementSecondFollowupBlurContentTempPath, statementSecondFollowupBlurContentPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(statementSecondFollowupBlurContentTempPath).catch(() => {});
            finish(400, { message: "无法保存视频卡片文字，请检查后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "视频卡片文字保存中断，请重试。" }));
      });
    },
  };
}

function localStatementSecondFollowupBlurVideoUpload() {
  const mimeExtensions = {
    "video/mp4": "mp4",
    "video/quicktime": "mov",
    "video/x-quicktime": "mov",
    "video/webm": "webm",
    "video/ogg": "ogv",
  };
  const hasValidSignature = (body, mime) => {
    if (["video/mp4", "video/quicktime", "video/x-quicktime"].includes(mime)) {
      return body.length > 12 && body.toString("ascii", 4, 8) === "ftyp";
    }
    if (mime === "video/webm") {
      return body.length > 4 && body[0] === 0x1a && body[1] === 0x45 && body[2] === 0xdf && body[3] === 0xa3;
    }
    if (mime === "video/ogg") return body.length > 4 && body.toString("ascii", 0, 4) === "OggS";
    return false;
  };

  return {
    name: "jurneos-local-statement-second-followup-blur-video-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/statement-second-followup-blur-video", (request, response, next) => {
        const requestUrl = new URL(request.url || "/", "http://127.0.0.1");
        const pathname = requestUrl.pathname;
        const cardId = requestUrl.searchParams.get("card");
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (!cardId || !statementSecondFollowupBlurCardIds.has(cardId)) {
          reply(400, { message: "视频卡片编号无效。" });
          return;
        }

        const backupPath = statementSecondFollowupBlurVideoBackupPath(cardId);
        if (request.method === "GET" && pathname === "/undo") {
          access(backupPath).then(() => reply(200, { canUndo: true })).catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          Promise.all([readFile(backupPath, "utf8"), readFile(statementSecondFollowupBlurVideosPath, "utf8")])
            .then(async ([backupSource, currentSource]) => {
              const previous = JSON.parse(backupSource);
              const content = JSON.parse(currentSource);
              const current = content[cardId];
              content[cardId] = previous;
              await writeFile(statementSecondFollowupBlurVideosTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(statementSecondFollowupBlurVideosTempPath, statementSecondFollowupBlurVideosPath);
              await unlink(backupPath);
              if (current?.src?.startsWith(`/assets/video/statement-second-followup-blur-${cardId}-user-`)) {
                await unlink(path.join(projectRoot, "public", current.src)).catch(() => {});
              }
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(statementSecondFollowupBlurVideosTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的当前卡片视频修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const mime = String(request.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
        const extension = mimeExtensions[mime];
        const declaredSize = Number(request.headers["content-length"] || 0);
        if (!extension) {
          reply(415, { message: "请选择 MP4、MOV、WebM 或 OGV 视频。" });
          return;
        }
        if (declaredSize > maxStatementSecondFollowupBlurVideoSize) {
          reply(413, { message: "视频不能超过 200 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxStatementSecondFollowupBlurVideoSize) {
            finish(413, { message: "视频不能超过 200 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          if (!hasValidSignature(body, mime)) {
            finish(415, { message: "文件内容与所选视频格式不匹配。" });
            return;
          }

          const width = Number(request.headers["x-video-width"] || 0);
          const height = Number(request.headers["x-video-height"] || 0);
          const duration = Number(request.headers["x-video-duration"] || 0);
          const ratio = String(request.headers["x-video-ratio"] || "未知");
          let originalName = `卡片视频.${extension}`;
          try { originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName)); } catch {}
          const fileName = `statement-second-followup-blur-${cardId}-user-${Date.now()}.${extension}`;
          const videoPath = path.join(statementSecondFollowupBlurVideoDirectory, fileName);

          try {
            const currentSource = await readFile(statementSecondFollowupBlurVideosPath, "utf8");
            const content = JSON.parse(currentSource);
            const metadata = {
              src: `/assets/video/${fileName}`,
              kind: mime === "video/mp4" ? "MP4 视频" : `${extension.toUpperCase()} 视频`,
              mime,
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              duration: Number.isFinite(duration) && duration > 0 ? duration : 0,
              size: body.length,
              originalName,
            };
            await mkdir(path.dirname(backupPath), { recursive: true });
            await mkdir(statementSecondFollowupBlurVideoDirectory, { recursive: true });
            await writeFile(backupPath, `${JSON.stringify(content[cardId], null, 2)}\n`, "utf8");
            await writeFile(videoPath, body);
            content[cardId] = metadata;
            await writeFile(statementSecondFollowupBlurVideosTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(statementSecondFollowupBlurVideosTempPath, statementSecondFollowupBlurVideosPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(videoPath).catch(() => {});
            await unlink(statementSecondFollowupBlurVideosTempPath).catch(() => {});
            finish(500, { message: "无法保存卡片视频，请重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "卡片视频上传中断，请重试。" }));
      });
    },
  };
}

function localAboutOneCopyHistory() {
  return {
    name: "jurneos-local-about-one-copy-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-one-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutOneCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutOneCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutOneCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutOneCopyTempPath, aboutOneCopyPath);
              await unlink(aboutOneCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutOneCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的文字删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutDiscoverLinksHistory() {
  return {
    name: "jurneos-local-about-discover-links-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-discover-links", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutDiscoverLinksBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutDiscoverLinksBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutDiscoverLinksTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutDiscoverLinksTempPath, aboutDiscoverLinksPath);
              await unlink(aboutDiscoverLinksBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutDiscoverLinksTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的按钮删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutPanelCopyEditor() {
  return {
    name: "jurneos-local-about-panel-copy-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-panel-copy", (request, response, next) => {
        const requestUrl = new URL(request.url || "/", "http://local.jurneos");
        const pathname = requestUrl.pathname;
        const queryPanelId = requestUrl.searchParams.get("panel") || "";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          if (!editableAboutPanelIds.has(queryPanelId)) {
            reply(400, { message: "无效的项目屏幕编号。" });
            return;
          }
          access(aboutPanelCopyBackupPath(queryPanelId))
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          if (!editableAboutPanelIds.has(queryPanelId)) {
            reply(400, { message: "无效的项目屏幕编号。" });
            return;
          }
          Promise.all([
            readFile(aboutPanelCopyPath, "utf8"),
            readFile(aboutPanelCopyBackupPath(queryPanelId), "utf8"),
          ])
            .then(async ([currentSource, backupSource]) => {
              const content = JSON.parse(currentSource);
              const backup = JSON.parse(backupSource);
              content[queryPanelId] = String(backup.text || "");
              await writeFile(aboutPanelCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutPanelCopyTempPath, aboutPanelCopyPath);
              await unlink(aboutPanelCopyBackupPath(queryPanelId));
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutPanelCopyTempPath).catch(() => {});
              reply(409, { message: `第 ${queryPanelId} 屏没有可撤销的文字修改。` });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutPanelCopySize) {
            finish(413, { message: "文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const panelId = String(input.panel || "").padStart(2, "0");
            const text = String(input.text || "").trim().slice(0, 700);
            if (!editableAboutPanelIds.has(panelId) || !text) {
              finish(400, { message: "请选择第 02–09 屏并填写文字内容。" });
              return;
            }

            const currentSource = await readFile(aboutPanelCopyPath, "utf8");
            const content = JSON.parse(currentSource);
            await mkdir(path.dirname(aboutPanelCopyBackupPath(panelId)), { recursive: true });
            await writeFile(aboutPanelCopyBackupPath(panelId), `${JSON.stringify({ text: content[panelId] }, null, 2)}\n`, "utf8");
            content[panelId] = text;
            await writeFile(aboutPanelCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(aboutPanelCopyTempPath, aboutPanelCopyPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(aboutPanelCopyTempPath).catch(() => {});
            finish(400, { message: "无法保存文字，请检查内容后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "文字保存中断，请重试。" }));
      });
    },
  };
}

function localAboutPanelBackgroundFeatureHistory() {
  return {
    name: "jurneos-local-about-panel-background-feature-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-panel-background-feature", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutPanelBackgroundFeatureBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutPanelBackgroundFeatureBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutPanelBackgroundFeatureTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutPanelBackgroundFeatureTempPath, aboutPanelBackgroundFeaturePath);
              await unlink(aboutPanelBackgroundFeatureBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutPanelBackgroundFeatureTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的五屏背景图功能修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutPanelBackgroundUpload() {
  const mimeExtensions = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/avif": "avif",
  };
  const isValidImage = (body, mime) => {
    if (mime === "image/jpeg") return body.length > 3 && body[0] === 0xff && body[1] === 0xd8 && body[2] === 0xff;
    if (mime === "image/png") return body.length > 8 && body.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    if (mime === "image/webp") return body.length > 12 && body.toString("ascii", 0, 4) === "RIFF" && body.toString("ascii", 8, 12) === "WEBP";
    if (mime === "image/avif") return body.length > 16 && body.toString("ascii", 4, 8) === "ftyp" && body.subarray(8, 32).includes(Buffer.from("avif"));
    return false;
  };

  return {
    name: "jurneos-local-about-panel-background-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-panel-background", (request, response, next) => {
        const requestUrl = new URL(request.url || "/", "http://localhost");
        const panelId = String(requestUrl.searchParams.get("panel") || "").padStart(2, "0");
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (!editableAboutPanelBackgroundIds.has(panelId)) {
          reply(400, { message: "请选择第 02–06 屏中的一个背景图。" });
          return;
        }

        if (request.method === "GET" && requestUrl.pathname === "/undo") {
          access(aboutPanelBackgroundBackupPath(panelId))
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && requestUrl.pathname === "/undo") {
          Promise.all([
            readFile(aboutPanelBackgroundsPath, "utf8"),
            readFile(aboutPanelBackgroundBackupPath(panelId), "utf8"),
          ])
            .then(async ([currentSource, backupSource]) => {
              const content = JSON.parse(currentSource);
              const current = content[panelId];
              content[panelId] = JSON.parse(backupSource);
              await writeFile(aboutPanelBackgroundsTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutPanelBackgroundsTempPath, aboutPanelBackgroundsPath);
              await unlink(aboutPanelBackgroundBackupPath(panelId));
              if (current?.src?.startsWith(`/assets/images/about-panel-${panelId}-background-user-`)) {
                await unlink(path.join(aboutLowerBlankImageDirectory, path.basename(current.src))).catch(() => {});
              }
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutPanelBackgroundsTempPath).catch(() => {});
              reply(409, { message: `第 ${panelId} 屏没有可撤销的背景图修改。` });
            });
          return;
        }

        if (request.method !== "PUT" || requestUrl.pathname !== "/") {
          next();
          return;
        }

        const mime = String(request.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
        const extension = mimeExtensions[mime];
        const declaredSize = Number(request.headers["content-length"] || 0);
        if (!extension) {
          reply(415, { message: "只支持 JPG、PNG、WebP 或 AVIF 图片。" });
          return;
        }
        if (declaredSize > maxAboutLowerBlankImageSize) {
          reply(413, { message: "图片不能超过 25 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutLowerBlankImageSize) {
            finish(413, { message: "图片不能超过 25 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          if (!isValidImage(body, mime)) {
            finish(415, { message: "文件内容不是有效的图片。" });
            return;
          }

          const width = Number(request.headers["x-image-width"] || 0);
          const height = Number(request.headers["x-image-height"] || 0);
          const ratio = String(request.headers["x-image-ratio"] || "未知");
          let originalName = `第 ${panelId} 屏背景图.${extension}`;
          try {
            originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName));
          } catch {}
          const fileName = `about-panel-${panelId}-background-user-${Date.now()}.${extension}`;
          const imagePath = path.join(aboutLowerBlankImageDirectory, fileName);

          try {
            const currentSource = await readFile(aboutPanelBackgroundsPath, "utf8");
            const content = JSON.parse(currentSource);
            const current = content[panelId];
            content[panelId] = {
              src: `/assets/images/${fileName}`,
              kind: mime === "image/jpeg" ? "JPG 图片" : `${extension.toUpperCase()} 图片`,
              mime,
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              size: body.length,
              originalName,
            };
            await mkdir(path.dirname(aboutPanelBackgroundBackupPath(panelId)), { recursive: true });
            await mkdir(aboutLowerBlankImageDirectory, { recursive: true });
            await writeFile(aboutPanelBackgroundBackupPath(panelId), `${JSON.stringify(current, null, 2)}\n`, "utf8");
            await writeFile(imagePath, body);
            await writeFile(aboutPanelBackgroundsTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(aboutPanelBackgroundsTempPath, aboutPanelBackgroundsPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(imagePath).catch(() => {});
            await unlink(aboutPanelBackgroundsTempPath).catch(() => {});
            finish(500, { message: `无法保存第 ${panelId} 屏背景图，请重试。` });
          }
        });

        request.on("error", () => finish(400, { message: `第 ${panelId} 屏背景图上传中断，请重试。` }));
      });
    },
  };
}

function localFooterSecondaryHistory() {
  return {
    name: "jurneos-local-footer-secondary-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/footer-secondary", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(footerSecondaryBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(footerSecondaryBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(footerSecondaryTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(footerSecondaryTempPath, footerSecondaryPath);
              await unlink(footerSecondaryBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(footerSecondaryTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的页脚删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localFooterInvitationHistory() {
  return {
    name: "jurneos-local-footer-invitation-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/footer-invitation", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(footerInvitationBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(footerInvitationBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(footerInvitationTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(footerInvitationTempPath, footerInvitationPath);
              await unlink(footerInvitationBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(footerInvitationTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的英文联系屏删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutBlankPanelHistory() {
  return {
    name: "jurneos-local-about-blank-panel-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-blank-panel", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutBlankPanelBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutBlankPanelBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutBlankPanelTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutBlankPanelTempPath, aboutBlankPanelPath);
              await unlink(aboutBlankPanelBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutBlankPanelTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的空白屏插入操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutBlankPanelRemovalHistory() {
  return {
    name: "jurneos-local-about-blank-panel-removal-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/remove-first-blank-panel", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutBlankPanelRemovalBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutBlankPanelRemovalBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutBlankPanelRemovalTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutBlankPanelRemovalTempPath, aboutBlankPanelPath);
              await unlink(aboutBlankPanelRemovalBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutBlankPanelRemovalTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的上一屏删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutBlankPanelAppearanceHistory() {
  return {
    name: "jurneos-local-about-blank-panel-appearance-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-blank-panel-appearance", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutBlankPanelAppearanceBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutBlankPanelAppearanceBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutBlankPanelAppearanceTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutBlankPanelAppearanceTempPath, aboutBlankPanelAppearancePath);
              await unlink(aboutBlankPanelAppearanceBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutBlankPanelAppearanceTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的背景颜色修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutBlankControlsHistory() {
  return {
    name: "jurneos-local-about-blank-controls-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-blank-controls", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutBlankControlsBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutBlankControlsBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutBlankControlsTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutBlankControlsTempPath, aboutBlankControlsPath);
              await unlink(aboutBlankControlsBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutBlankControlsTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的按钮删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localFooterVideoPanelHistory() {
  return {
    name: "jurneos-local-footer-video-panel-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/footer-video-panel", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(footerVideoPanelBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(footerVideoPanelBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(footerVideoPanelTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(footerVideoPanelTempPath, footerVideoPanelPath);
              await unlink(footerVideoPanelBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(footerVideoPanelTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的底部屏幕新增操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutBlankImageFeatureHistory() {
  return {
    name: "jurneos-local-about-blank-image-feature-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-blank-image-feature", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutBlankImageFeatureBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutBlankImageFeatureBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutBlankImageFeatureTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutBlankImageFeatureTempPath, aboutBlankImageFeaturePath);
              await unlink(aboutBlankImageFeatureBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutBlankImageFeatureTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的背景图片功能修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutBlankImageUpload() {
  const mimeExtensions = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/avif": "avif",
  };

  const isValidImage = (body, mime) => {
    if (mime === "image/jpeg") return body.length > 3 && body[0] === 0xff && body[1] === 0xd8 && body[2] === 0xff;
    if (mime === "image/png") return body.length > 8 && body.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    if (mime === "image/webp") return body.length > 12 && body.toString("ascii", 0, 4) === "RIFF" && body.toString("ascii", 8, 12) === "WEBP";
    if (mime === "image/avif") return body.length > 16 && body.toString("ascii", 4, 8) === "ftyp" && body.subarray(8, 32).includes(Buffer.from("avif"));
    return false;
  };

  return {
    name: "jurneos-local-about-blank-image-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-blank-image", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutBlankImageContentBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          Promise.all([
            readFile(aboutBlankImageContentBackupPath, "utf8"),
            readFile(aboutBlankImageContentPath, "utf8"),
          ])
            .then(async ([source, currentSource]) => {
              const content = JSON.parse(source);
              const current = JSON.parse(currentSource);
              await writeFile(aboutBlankImageContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutBlankImageContentTempPath, aboutBlankImageContentPath);
              await unlink(aboutBlankImageContentBackupPath);
              if (current.src?.startsWith("/assets/images/about-blank-user-")) {
                await unlink(path.join(projectRoot, "public", current.src)).catch(() => {});
              }
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutBlankImageContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的背景图片修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const mime = String(request.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
        const extension = mimeExtensions[mime];
        const declaredSize = Number(request.headers["content-length"] || 0);
        if (!extension) {
          reply(415, { message: "只支持 JPG、PNG、WebP 或 AVIF 图片。" });
          return;
        }
        if (declaredSize > maxAboutBlankImageSize) {
          reply(413, { message: "图片不能超过 25 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutBlankImageSize) {
            finish(413, { message: "图片不能超过 25 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          if (!isValidImage(body, mime)) {
            finish(415, { message: "文件内容不是有效的图片。" });
            return;
          }

          const width = Number(request.headers["x-image-width"] || 0);
          const height = Number(request.headers["x-image-height"] || 0);
          const ratio = String(request.headers["x-image-ratio"] || "未知");
          let originalName = `背景图片.${extension}`;
          try {
            originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName));
          } catch {}
          const fileName = `about-blank-user-${Date.now()}.${extension}`;
          const imagePath = path.join(aboutBlankImageDirectory, fileName);

          try {
            const currentSource = await readFile(aboutBlankImageContentPath, "utf8");
            const content = {
              src: `/assets/images/${fileName}`,
              kind: mime === "image/jpeg" ? "JPG 图片" : `${extension.toUpperCase()} 图片`,
              mime,
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              size: body.length,
              originalName,
            };
            await mkdir(path.dirname(aboutBlankImageContentBackupPath), { recursive: true });
            await mkdir(aboutBlankImageDirectory, { recursive: true });
            await writeFile(aboutBlankImageContentBackupPath, currentSource, "utf8");
            await writeFile(imagePath, body);
            await writeFile(aboutBlankImageContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(aboutBlankImageContentTempPath, aboutBlankImageContentPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(imagePath).catch(() => {});
            await unlink(aboutBlankImageContentTempPath).catch(() => {});
            finish(500, { message: "无法保存背景图片，请重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "背景图片上传中断，请重试。" }));
      });
    },
  };
}

function localAboutLowerBlankPanelHistory() {
  return {
    name: "jurneos-local-about-lower-blank-panel-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-lower-blank-panel", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutLowerBlankPanelBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutLowerBlankPanelBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutLowerBlankPanelTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutLowerBlankPanelTempPath, aboutLowerBlankPanelPath);
              await unlink(aboutLowerBlankPanelBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutLowerBlankPanelTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的空白页插入操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutLowerBlankPositionHistory() {
  return {
    name: "jurneos-local-about-lower-blank-position-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-lower-blank-position", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutLowerBlankPositionBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutLowerBlankPositionBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutLowerBlankPositionTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutLowerBlankPositionTempPath, aboutLowerBlankPositionPath);
              await unlink(aboutLowerBlankPositionBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutLowerBlankPositionTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的位置修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutLowerNextBlankPanelHistory() {
  return {
    name: "jurneos-local-about-lower-next-blank-panel-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-lower-next-blank-panel", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutLowerNextBlankPanelBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutLowerNextBlankPanelBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutLowerNextBlankPanelTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutLowerNextBlankPanelTempPath, aboutLowerNextBlankPanelPath);
              await unlink(aboutLowerNextBlankPanelBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutLowerNextBlankPanelTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的下方空白屏插入操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineVideoBlankPanelHistory() {
  return {
    name: "jurneos-local-timeline-video-blank-panel-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-video-blank-panel", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineVideoBlankPanelBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineVideoBlankPanelBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineVideoBlankPanelTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineVideoBlankPanelTempPath, timelineVideoBlankPanelPath);
              await unlink(timelineVideoBlankPanelBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineVideoBlankPanelTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的视频空白页插入操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineVideoBlankUpload() {
  const knownVideoExtensions = new Set([
    "mp4", "mov", "webm", "ogv", "ogg", "m4v", "mkv", "avi", "flv", "wmv",
    "3gp", "3g2", "mpeg", "mpg", "m2v", "ts", "mts", "m2ts", "vob", "rm", "rmvb", "asf", "f4v",
  ]);
  return {
    name: "jurneos-local-timeline-video-blank-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-video-blank", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineVideoBlankContentBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          Promise.all([
            readFile(timelineVideoBlankContentBackupPath, "utf8"),
            readFile(timelineVideoBlankContentPath, "utf8"),
          ])
            .then(async ([backupSource, currentSource]) => {
              const content = JSON.parse(backupSource);
              const current = JSON.parse(currentSource);
              await writeFile(timelineVideoBlankContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineVideoBlankContentTempPath, timelineVideoBlankContentPath);
              await unlink(timelineVideoBlankContentBackupPath);
              if (current.src?.startsWith("/assets/video/timeline-video-blank-user-")) {
                await unlink(path.join(projectRoot, "public", current.src)).catch(() => {});
              }
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineVideoBlankContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的视频修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const mime = String(request.headers["content-type"] || "application/octet-stream").split(";")[0].trim().toLowerCase();
        let originalName = "上传视频";
        try { originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName)); } catch {}
        const originalExtension = path.extname(originalName).slice(1).toLowerCase();
        const mimeExtension = String(mime.split("/")[1] || "video").replace(/[^a-z0-9]/g, "").slice(0, 10);
        const extension = /^[a-z0-9]{2,10}$/.test(originalExtension) ? originalExtension : mimeExtension;
        if (!mime.startsWith("video/") && !knownVideoExtensions.has(extension)) {
          reply(415, { message: "请上传视频格式的文件。" });
          return;
        }
        if (!extension) {
          reply(415, { message: "无法识别该视频的文件格式。" });
          return;
        }

        const declaredSize = Number(request.headers["content-length"] || 0);
        if (declaredSize > maxTimelineVideoBlankSize) {
          reply(413, { message: "视频不能超过 200 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxTimelineVideoBlankSize) {
            finish(413, { message: "视频不能超过 200 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          if (!body.length) {
            finish(400, { message: "视频文件为空。" });
            return;
          }
          const fileName = `timeline-video-blank-user-${Date.now()}.${extension}`;
          const videoPath = path.join(timelineVideoBlankDirectory, fileName);
          try {
            const currentSource = await readFile(timelineVideoBlankContentPath, "utf8");
            const content = {
              src: `/assets/video/${fileName}`,
              kind: `${extension.toUpperCase()} 视频`,
              mime,
              size: body.length,
              originalName,
            };
            await mkdir(path.dirname(timelineVideoBlankContentBackupPath), { recursive: true });
            await mkdir(timelineVideoBlankDirectory, { recursive: true });
            await writeFile(timelineVideoBlankContentBackupPath, currentSource, "utf8");
            await writeFile(videoPath, body);
            await writeFile(timelineVideoBlankContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineVideoBlankContentTempPath, timelineVideoBlankContentPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(videoPath).catch(() => {});
            await unlink(timelineVideoBlankContentTempPath).catch(() => {});
            finish(500, { message: "无法保存视频，请重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "视频上传中断，请重试。" }));
      });
    },
  };
}

function localTimelineFollowupBlankHistory() {
  return {
    name: "jurneos-local-timeline-followup-blank-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-followup-blank", (request, response, next) => {
        const requestUrl = new URL(request.url || "/", "http://127.0.0.1");
        const pathname = requestUrl.pathname;
        const panelId = requestUrl.searchParams.get("panel");
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (!panelId || !timelineFollowupBlankPaths[panelId]) {
          reply(400, { message: "空白屏编号无效。" });
          return;
        }

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineFollowupBlankBackupPaths[panelId])
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineFollowupBlankBackupPaths[panelId], "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineFollowupBlankTempPaths[panelId], `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineFollowupBlankTempPaths[panelId], timelineFollowupBlankPaths[panelId]);
              await unlink(timelineFollowupBlankBackupPaths[panelId]);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineFollowupBlankTempPaths[panelId]).catch(() => {});
              reply(409, { message: `没有可撤销的第 ${panelId} 张空白屏插入操作。` });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankOneLayoutHistory() {
  return {
    name: "jurneos-local-timeline-blank-one-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-one-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankOneLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankOneLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankOneLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankOneLayoutTempPath, timelineBlankOneLayoutPath);
              await unlink(timelineBlankOneLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankOneLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的第一张空白屏排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankOneCopyEditor() {
  return {
    name: "jurneos-local-timeline-blank-one-copy-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-one-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankOneCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankOneCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankOneCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankOneCopyTempPath, timelineBlankOneCopyPath);
              await unlink(timelineBlankOneCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankOneCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的本页文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxTimelineBlankOneCopySize) {
            finish(413, { message: "本页文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const values = Array.isArray(input.values)
              ? input.values.slice(0, 4).map((item) => ({
                title: String(item?.title || "").trim().slice(0, 50),
                body: String(item?.body || "").trim().slice(0, 220),
              }))
              : [];
            const content = {
              title: String(input.title || "").trim().slice(0, 100),
              subtitle: String(input.subtitle || "").trim().slice(0, 100),
              principles: String(input.principles || "").trim().slice(0, 160),
              principlesZh: String(input.principlesZh || "").trim().slice(0, 160),
              values,
              footer: String(input.footer || "").trim().slice(0, 500),
            };
            if (!content.title || !content.subtitle || !content.principles || !content.principlesZh || !content.footer || values.length !== 4 || values.some((item) => !item.title || !item.body)) {
              finish(400, { message: "标题、价值主张、四组说明和底部英文均不能为空。" });
              return;
            }
            const currentSource = await readFile(timelineBlankOneCopyPath, "utf8");
            await mkdir(path.dirname(timelineBlankOneCopyBackupPath), { recursive: true });
            await writeFile(timelineBlankOneCopyBackupPath, currentSource, "utf8");
            await writeFile(timelineBlankOneCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineBlankOneCopyTempPath, timelineBlankOneCopyPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(timelineBlankOneCopyTempPath).catch(() => {});
            finish(400, { message: "无法保存本页文字，请检查内容后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "本页文字保存中断，请重试。" }));
      });
    },
  };
}

function localTimelineBlankOnePositionHistory() {
  return {
    name: "jurneos-local-timeline-blank-one-position-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-one-position", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankOnePositionBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankOnePositionBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankOnePositionTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankOnePositionTempPath, timelineBlankOnePositionPath);
              await unlink(timelineBlankOnePositionBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankOnePositionTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 Aman 屏位置调整。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankOneMarkHistory() {
  return {
    name: "jurneos-local-timeline-blank-one-mark-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-one-mark", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankOneMarkBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankOneMarkBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankOneMarkTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankOneMarkTempPath, timelineBlankOneMarkPath);
              await unlink(timelineBlankOneMarkBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankOneMarkTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 AMAN 标志删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankOneRemovalHistory() {
  return {
    name: "jurneos-local-timeline-blank-one-removal-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-one-removal", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankOneRemovalBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankOneRemovalBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankOneRemovalTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankOneRemovalTempPath, timelineBlankOneRemovalPath);
              await unlink(timelineBlankOneRemovalBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankOneRemovalTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 Aman 页面删除操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankOneExtraRowEditor() {
  return {
    name: "jurneos-local-timeline-blank-one-extra-row-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-one-extra-row", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankOneExtraRowBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankOneExtraRowBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankOneExtraRowTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankOneExtraRowTempPath, timelineBlankOneExtraRowPath);
              await unlink(timelineBlankOneExtraRowBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankOneExtraRowTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的复制行操作。" });
            });
          return;
        }

        next();
      });

      server.middlewares.use("/__jurneos/timeline-blank-one-extra-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankOneExtraCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankOneExtraCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankOneExtraRowTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankOneExtraRowTempPath, timelineBlankOneExtraRowPath);
              await unlink(timelineBlankOneExtraCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankOneExtraRowTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的复制行文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxTimelineBlankOneExtraCopySize) {
            finish(413, { message: "复制行文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const current = JSON.parse(await readFile(timelineBlankOneExtraRowPath, "utf8"));
            const content = {
              visible: current.visible !== false,
              title: String(input.title || "").trim().slice(0, 50),
              body: String(input.body || "").trim().slice(0, 220),
            };
            if (!content.title || !content.body) {
              finish(400, { message: "复制行的标题和说明均不能为空。" });
              return;
            }
            await mkdir(path.dirname(timelineBlankOneExtraCopyBackupPath), { recursive: true });
            await writeFile(timelineBlankOneExtraCopyBackupPath, `${JSON.stringify(current, null, 2)}\n`, "utf8");
            await writeFile(timelineBlankOneExtraRowTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineBlankOneExtraRowTempPath, timelineBlankOneExtraRowPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(timelineBlankOneExtraRowTempPath).catch(() => {});
            finish(400, { message: "无法保存复制行文字，请检查内容后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "复制行文字保存中断，请重试。" }));
      });
    },
  };
}

function localTimelineBlankTwoLayoutHistory() {
  return {
    name: "jurneos-local-timeline-blank-two-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-two-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankTwoLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankTwoLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankTwoLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankTwoLayoutTempPath, timelineBlankTwoLayoutPath);
              await unlink(timelineBlankTwoLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankTwoLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的第二张空白屏排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankTwoCopyEditor() {
  return {
    name: "jurneos-local-timeline-blank-two-copy-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-two-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankTwoCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankTwoCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankTwoCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankTwoCopyTempPath, timelineBlankTwoCopyPath);
              await unlink(timelineBlankTwoCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankTwoCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的第二张海报文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxTimelineBlankTwoCopySize) {
            finish(413, { message: "第二张海报文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const content = {
              title: String(input.title || "").trim().slice(0, 80),
              tagline: String(input.tagline || "").trim().slice(0, 100),
              credit: String(input.credit || "").trim().slice(0, 100),
              studioName: String(input.studioName || "").trim().slice(0, 80),
              studioSuffix: String(input.studioSuffix || "").trim().slice(0, 40),
            };
            if (Object.values(content).some((value) => !value)) {
              finish(400, { message: "标题、影片类型、导演署名和品牌文字均不能为空。" });
              return;
            }
            const currentSource = await readFile(timelineBlankTwoCopyPath, "utf8");
            await mkdir(path.dirname(timelineBlankTwoCopyBackupPath), { recursive: true });
            await writeFile(timelineBlankTwoCopyBackupPath, currentSource, "utf8");
            await writeFile(timelineBlankTwoCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineBlankTwoCopyTempPath, timelineBlankTwoCopyPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(timelineBlankTwoCopyTempPath).catch(() => {});
            finish(400, { message: "无法保存第二张海报文字，请检查内容后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "第二张海报文字保存中断，请重试。" }));
      });
    },
  };
}

function localTimelineBlankThreeLayoutHistory() {
  return {
    name: "jurneos-local-timeline-blank-three-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-three-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankThreeLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankThreeLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankThreeLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankThreeLayoutTempPath, timelineBlankThreeLayoutPath);
              await unlink(timelineBlankThreeLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankThreeLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 Market 页面排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankThreeCopyEditor() {
  return {
    name: "jurneos-local-timeline-blank-three-copy-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-three-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankThreeCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankThreeCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankThreeCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankThreeCopyTempPath, timelineBlankThreeCopyPath);
              await unlink(timelineBlankThreeCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankThreeCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 Market 页面文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxTimelineBlankThreeCopySize) {
            finish(413, { message: "Market 页面文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const lines = Array.isArray(input.lines) ? input.lines.slice(0, 3).map((line) => String(line || "").trim().slice(0, 180)) : [];
            const content = {
              title: String(input.title || "").trim().slice(0, 80),
              category: String(input.category || "").trim().slice(0, 80),
              lines,
            };
            if (!content.title || !content.category || lines.length !== 3 || lines.some((line) => !line)) {
              finish(400, { message: "主标题、分类标签和三行正文均不能为空。" });
              return;
            }
            const currentSource = await readFile(timelineBlankThreeCopyPath, "utf8");
            await mkdir(path.dirname(timelineBlankThreeCopyBackupPath), { recursive: true });
            await writeFile(timelineBlankThreeCopyBackupPath, currentSource, "utf8");
            await writeFile(timelineBlankThreeCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineBlankThreeCopyTempPath, timelineBlankThreeCopyPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(timelineBlankThreeCopyTempPath).catch(() => {});
            finish(400, { message: "无法保存 Market 页面文字，请检查内容后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "Market 页面文字保存中断，请重试。" }));
      });
    },
  };
}

function localTimelineBlankFourLayoutHistory() {
  return {
    name: "jurneos-local-timeline-blank-four-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-four-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankFourLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankFourLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankFourLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankFourLayoutTempPath, timelineBlankFourLayoutPath);
              await unlink(timelineBlankFourLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankFourLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 House / NEST 页面排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankFourWordFitHistory() {
  return {
    name: "jurneos-local-timeline-blank-four-word-fit-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-four-word-fit", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankFourWordFitBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankFourWordFitBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankFourWordFitTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankFourWordFitTempPath, timelineBlankFourWordFitPath);
              await unlink(timelineBlankFourWordFitBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankFourWordFitTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的完整标题显示修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankFourCopyEditor() {
  return {
    name: "jurneos-local-timeline-blank-four-copy-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-four-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankFourCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankFourCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankFourCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankFourCopyTempPath, timelineBlankFourCopyPath);
              await unlink(timelineBlankFourCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankFourCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 House / NEST 页面文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxTimelineBlankFourCopySize) {
            finish(413, { message: "House / NEST 页面文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const content = {
              brand: String(input.brand || "").trim().slice(0, 80),
              intro: String(input.intro || "").trim().slice(0, 360),
              menu: String(input.menu || "").trim().slice(0, 80),
              index: String(input.index || "").trim().slice(0, 40),
              copyright: String(input.copyright || "").trim().slice(0, 40),
              word: String(input.word || "").trim().slice(0, 18),
            };
            if (Object.values(content).some((value) => !value)) {
              finish(400, { message: "顶部文字、编号、年份和主标题均不能为空。" });
              return;
            }
            const currentSource = await readFile(timelineBlankFourCopyPath, "utf8");
            await mkdir(path.dirname(timelineBlankFourCopyBackupPath), { recursive: true });
            await writeFile(timelineBlankFourCopyBackupPath, currentSource, "utf8");
            await writeFile(timelineBlankFourCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineBlankFourCopyTempPath, timelineBlankFourCopyPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(timelineBlankFourCopyTempPath).catch(() => {});
            finish(400, { message: "无法保存 House / NEST 页面文字，请检查内容后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "House / NEST 页面文字保存中断，请重试。" }));
      });
    },
  };
}

function localTimelineBlankEightLayoutHistory() {
  return {
    name: "jurneos-local-timeline-blank-eight-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-eight-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankEightLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankEightLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankEightLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankEightLayoutTempPath, timelineBlankEightLayoutPath);
              await unlink(timelineBlankEightLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankEightLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 ELIN 页面排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankEightTitleFitHistory() {
  return {
    name: "jurneos-local-timeline-blank-eight-title-fit-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-eight-title-fit", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankEightTitleFitBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankEightTitleFitBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankEightTitleFitTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankEightTitleFitTempPath, timelineBlankEightTitleFitPath);
              await unlink(timelineBlankEightTitleFitBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankEightTitleFitTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 ELIN 页面完整标题显示修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankEightCopyEditor() {
  return {
    name: "jurneos-local-timeline-blank-eight-copy-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-eight-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankEightCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankEightCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankEightCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankEightCopyTempPath, timelineBlankEightCopyPath);
              await unlink(timelineBlankEightCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankEightCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的 ELIN 页面文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxTimelineBlankEightCopySize) {
            finish(413, { message: "ELIN 页面文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const content = {
              title: String(input.title || "").trim().slice(0, 18),
              topCaption: String(input.topCaption || "").trim().slice(0, 100),
              copyTitle: String(input.copyTitle || "").trim().slice(0, 100),
              body: String(input.body || "").trim().slice(0, 600),
            };
            if (Object.values(content).some((value) => !value)) {
              finish(400, { message: "主标题、图片上方短句、说明标题和正文均不能为空。" });
              return;
            }
            const currentSource = await readFile(timelineBlankEightCopyPath, "utf8");
            await mkdir(path.dirname(timelineBlankEightCopyBackupPath), { recursive: true });
            await writeFile(timelineBlankEightCopyBackupPath, currentSource, "utf8");
            await writeFile(timelineBlankEightCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineBlankEightCopyTempPath, timelineBlankEightCopyPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(timelineBlankEightCopyTempPath).catch(() => {});
            finish(400, { message: "无法保存 ELIN 页面文字，请检查内容后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "ELIN 页面文字保存中断，请重试。" }));
      });
    },
  };
}

function localAboutLowerNextBlankLayoutHistory() {
  return {
    name: "jurneos-local-about-lower-next-blank-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-lower-next-blank-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutLowerNextBlankLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutLowerNextBlankLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutLowerNextBlankLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutLowerNextBlankLayoutTempPath, aboutLowerNextBlankLayoutPath);
              await unlink(aboutLowerNextBlankLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutLowerNextBlankLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的时间轴排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutLowerNextBlankCopyEditor() {
  return {
    name: "jurneos-local-about-lower-next-blank-copy-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-lower-next-blank-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutLowerNextBlankCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutLowerNextBlankCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutLowerNextBlankCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutLowerNextBlankCopyTempPath, aboutLowerNextBlankCopyPath);
              await unlink(aboutLowerNextBlankCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutLowerNextBlankCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的时间轴文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutLowerNextBlankCopySize) {
            finish(413, { message: "时间轴文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const milestones = Array.isArray(input.milestones)
              ? input.milestones.slice(0, 7).map((milestone) => ({
                title: String(milestone?.title || "").trim().slice(0, 80),
                body: String(milestone?.body || "").trim().slice(0, 220),
              }))
              : [];
            const content = {
              title: String(input.title || "").trim().slice(0, 100),
              subtitle: String(input.subtitle || "").trim().slice(0, 100),
              milestones,
            };
            if (!content.title || !content.subtitle || milestones.length !== 7 || milestones.some((milestone) => !milestone.title || !milestone.body)) {
              finish(400, { message: "标题、副标题及 7 组时间节点均不能为空。" });
              return;
            }
            const currentSource = await readFile(aboutLowerNextBlankCopyPath, "utf8");
            await mkdir(path.dirname(aboutLowerNextBlankCopyBackupPath), { recursive: true });
            await writeFile(aboutLowerNextBlankCopyBackupPath, currentSource, "utf8");
            await writeFile(aboutLowerNextBlankCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(aboutLowerNextBlankCopyTempPath, aboutLowerNextBlankCopyPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(aboutLowerNextBlankCopyTempPath).catch(() => {});
            finish(400, { message: "无法保存时间轴文字，请检查内容后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "时间轴文字保存中断，请重试。" }));
      });
    },
  };
}

function localAboutLowerBlankLayoutHistory() {
  return {
    name: "jurneos-local-about-lower-blank-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-lower-blank-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutLowerBlankLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutLowerBlankLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutLowerBlankLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutLowerBlankLayoutTempPath, aboutLowerBlankLayoutPath);
              await unlink(aboutLowerBlankLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutLowerBlankLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的页面排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutLowerBlankEffectHistory() {
  return {
    name: "jurneos-local-about-lower-blank-effect-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-lower-blank-effect", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutLowerBlankEffectBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutLowerBlankEffectBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutLowerBlankEffectTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutLowerBlankEffectTempPath, aboutLowerBlankEffectPath);
              await unlink(aboutLowerBlankEffectBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutLowerBlankEffectTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的毛玻璃修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutLowerBlankCopyEditor() {
  return {
    name: "jurneos-local-about-lower-blank-copy-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-lower-blank-copy", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutLowerBlankCopyBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutLowerBlankCopyBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutLowerBlankCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutLowerBlankCopyTempPath, aboutLowerBlankCopyPath);
              await unlink(aboutLowerBlankCopyBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutLowerBlankCopyTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutLowerBlankCopySize) {
            finish(413, { message: "文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const content = {
              title: String(input.title || "").trim().slice(0, 80),
              body: String(input.body || "").trim().slice(0, 500),
              verticalWord: String(input.verticalWord || "").trim().slice(0, 20),
            };
            if (!content.title || !content.body || !content.verticalWord) {
              finish(400, { message: "标题、正文和竖排英文都不能为空。" });
              return;
            }
            const currentSource = await readFile(aboutLowerBlankCopyPath, "utf8");
            await mkdir(path.dirname(aboutLowerBlankCopyBackupPath), { recursive: true });
            await writeFile(aboutLowerBlankCopyBackupPath, currentSource, "utf8");
            await writeFile(aboutLowerBlankCopyTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(aboutLowerBlankCopyTempPath, aboutLowerBlankCopyPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(aboutLowerBlankCopyTempPath).catch(() => {});
            finish(400, { message: "无法保存文字，请检查内容后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "文字保存中断，请重试。" }));
      });
    },
  };
}

function localAboutLowerBlankImageUpload({ route, name, contentPath, tempPath, backupPath, filePrefix, label }) {
  const mimeExtensions = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/avif": "avif",
  };
  const isValidImage = (body, mime) => {
    if (mime === "image/jpeg") return body.length > 3 && body[0] === 0xff && body[1] === 0xd8 && body[2] === 0xff;
    if (mime === "image/png") return body.length > 8 && body.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    if (mime === "image/webp") return body.length > 12 && body.toString("ascii", 0, 4) === "RIFF" && body.toString("ascii", 8, 12) === "WEBP";
    if (mime === "image/avif") return body.length > 16 && body.toString("ascii", 4, 8) === "ftyp" && body.subarray(8, 32).includes(Buffer.from("avif"));
    return false;
  };

  return {
    name,
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(route, (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(backupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          Promise.all([readFile(backupPath, "utf8"), readFile(contentPath, "utf8")])
            .then(async ([source, currentSource]) => {
              const content = JSON.parse(source);
              const current = JSON.parse(currentSource);
              await writeFile(tempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(tempPath, contentPath);
              await unlink(backupPath);
              if (current.src?.startsWith(`/assets/images/${filePrefix}`)) {
                await unlink(path.join(aboutLowerBlankImageDirectory, path.basename(current.src))).catch(() => {});
              }
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(tempPath).catch(() => {});
              reply(409, { message: `没有可撤销的${label}修改。` });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const mime = String(request.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
        const extension = mimeExtensions[mime];
        const declaredSize = Number(request.headers["content-length"] || 0);
        if (!extension) {
          reply(415, { message: "只支持 JPG、PNG、WebP 或 AVIF 图片。" });
          return;
        }
        if (declaredSize > maxAboutLowerBlankImageSize) {
          reply(413, { message: "图片不能超过 25 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutLowerBlankImageSize) {
            finish(413, { message: "图片不能超过 25 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          if (!isValidImage(body, mime)) {
            finish(415, { message: "文件内容不是有效的图片。" });
            return;
          }

          const width = Number(request.headers["x-image-width"] || 0);
          const height = Number(request.headers["x-image-height"] || 0);
          const ratio = String(request.headers["x-image-ratio"] || "未知");
          let originalName = `${label}.${extension}`;
          try {
            originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName));
          } catch {}
          const fileName = `${filePrefix}${Date.now()}.${extension}`;
          const imagePath = path.join(aboutLowerBlankImageDirectory, fileName);

          try {
            const currentSource = await readFile(contentPath, "utf8");
            const content = {
              src: `/assets/images/${fileName}`,
              kind: mime === "image/jpeg" ? "JPG 图片" : `${extension.toUpperCase()} 图片`,
              mime,
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              size: body.length,
              originalName,
            };
            await mkdir(path.dirname(backupPath), { recursive: true });
            await mkdir(aboutLowerBlankImageDirectory, { recursive: true });
            await writeFile(backupPath, currentSource, "utf8");
            await writeFile(imagePath, body);
            await writeFile(tempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(tempPath, contentPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(imagePath).catch(() => {});
            await unlink(tempPath).catch(() => {});
            finish(500, { message: `无法保存${label}，请重试。` });
          }
        });

        request.on("error", () => finish(400, { message: `${label}上传中断，请重试。` }));
      });
    },
  };
}

function localAboutBlankVideoFeatureHistory() {
  return {
    name: "jurneos-local-about-blank-video-feature-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-blank-video-feature", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutBlankVideoFeatureBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutBlankVideoFeatureBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutBlankVideoFeatureTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutBlankVideoFeatureTempPath, aboutBlankVideoFeaturePath);
              await unlink(aboutBlankVideoFeatureBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutBlankVideoFeatureTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的视频功能修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutBlankVideoUpload() {
  return {
    name: "jurneos-local-about-blank-video-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-blank-video", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutBlankVideoContentBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutBlankVideoContentBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutBlankVideoContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutBlankVideoContentTempPath, aboutBlankVideoContentPath);
              await unlink(aboutBlankVideoContentBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutBlankVideoContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的视频修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const declaredSize = Number(request.headers["content-length"] || 0);
        if (declaredSize > maxAboutBlankVideoSize) {
          reply(413, { message: "视频不能超过 200 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutBlankVideoSize) {
            finish(413, { message: "视频不能超过 200 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          const hasMp4Signature = body.length > 12 && body.toString("ascii", 4, 8) === "ftyp";
          if (!hasMp4Signature) {
            finish(415, { message: "文件不是有效的 MP4 视频。" });
            return;
          }

          let uploadedVideoPath = "";
          try {
            const width = Number(request.headers["x-video-width"] || 0);
            const height = Number(request.headers["x-video-height"] || 0);
            const duration = Number(request.headers["x-video-duration"] || 0);
            const ratio = String(request.headers["x-video-ratio"] || "");
            let originalName = "上传视频.mp4";
            try {
              originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName));
            } catch {}

            const fileName = `about-blank-user-${Date.now()}.mp4`;
            uploadedVideoPath = path.join(aboutBlankVideoDirectory, fileName);
            const content = {
              src: `/assets/video/${fileName}`,
              kind: "MP4 视频",
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              duration: Number.isFinite(duration) && duration > 0 ? duration : 0,
              size: body.length,
              originalName,
            };

            await mkdir(aboutBlankVideoDirectory, { recursive: true });
            await copyFile(aboutBlankVideoContentPath, aboutBlankVideoContentBackupPath);
            await writeFile(uploadedVideoPath, body);
            await writeFile(aboutBlankVideoContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(aboutBlankVideoContentTempPath, aboutBlankVideoContentPath);
            finish(200, { ok: true, content });
          } catch {
            if (uploadedVideoPath) await unlink(uploadedVideoPath).catch(() => {});
            await unlink(aboutBlankVideoContentTempPath).catch(() => {});
            finish(500, { message: "无法保存视频，请重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "视频上传中断，请重试。" }));
      });
    },
  };
}

function localAboutTwoVideoFeatureHistory() {
  return {
    name: "jurneos-local-about-two-video-feature-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-two-video-feature", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutTwoVideoFeatureBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutTwoVideoFeatureBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutTwoVideoFeatureTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutTwoVideoFeatureTempPath, aboutTwoVideoFeaturePath);
              await unlink(aboutTwoVideoFeatureBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutTwoVideoFeatureTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的视频功能修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localAboutTwoVideoUpload() {
  return {
    name: "jurneos-local-about-two-video-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/about-two-video", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(aboutTwoVideoContentBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(aboutTwoVideoContentBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(aboutTwoVideoContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(aboutTwoVideoContentTempPath, aboutTwoVideoContentPath);
              await unlink(aboutTwoVideoContentBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(aboutTwoVideoContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的背景视频修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const declaredSize = Number(request.headers["content-length"] || 0);
        if (declaredSize > maxAboutTwoVideoSize) {
          reply(413, { message: "视频不能超过 200 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutTwoVideoSize) {
            finish(413, { message: "视频不能超过 200 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          const hasMp4Signature = body.length > 12 && body.toString("ascii", 4, 8) === "ftyp";
          if (!hasMp4Signature) {
            finish(415, { message: "文件不是有效的 MP4 视频。" });
            return;
          }

          let uploadedVideoPath = "";
          try {
            const width = Number(request.headers["x-video-width"] || 0);
            const height = Number(request.headers["x-video-height"] || 0);
            const duration = Number(request.headers["x-video-duration"] || 0);
            const ratio = String(request.headers["x-video-ratio"] || "");
            let originalName = "上传视频.mp4";
            try {
              originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName));
            } catch {}

            const fileName = `about-two-user-${Date.now()}.mp4`;
            uploadedVideoPath = path.join(aboutTwoVideoDirectory, fileName);
            const content = {
              src: `/assets/video/${fileName}`,
              kind: "MP4 视频",
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              duration: Number.isFinite(duration) && duration > 0 ? duration : 0,
              size: body.length,
              originalName,
            };

            await mkdir(aboutTwoVideoDirectory, { recursive: true });
            await copyFile(aboutTwoVideoContentPath, aboutTwoVideoContentBackupPath);
            await writeFile(uploadedVideoPath, body);
            await writeFile(aboutTwoVideoContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(aboutTwoVideoContentTempPath, aboutTwoVideoContentPath);
            finish(200, { ok: true, content });
          } catch {
            if (uploadedVideoPath) await unlink(uploadedVideoPath).catch(() => {});
            await unlink(aboutTwoVideoContentTempPath).catch(() => {});
            finish(500, { message: "无法保存背景视频，请重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "背景视频上传中断，请重试。" }));
      });
    },
  };
}

function localFooterVideoUpload() {
  return {
    name: "jurneos-local-footer-video-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/footer-video", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(footerVideoContentBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(footerVideoContentBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(footerVideoContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(footerVideoContentTempPath, footerVideoContentPath);
              await unlink(footerVideoContentBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(footerVideoContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的视频修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const declaredSize = Number(request.headers["content-length"] || 0);
        if (declaredSize > maxFooterVideoSize) {
          reply(413, { message: "视频不能超过 200 MB。" });
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxFooterVideoSize) {
            finish(413, { message: "视频不能超过 200 MB。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          const hasMp4Signature = body.length > 12 && body.toString("ascii", 4, 8) === "ftyp";
          if (!hasMp4Signature) {
            finish(415, { message: "文件不是有效的 MP4 视频。" });
            return;
          }

          let uploadedVideoPath = "";
          try {
            const width = Number(request.headers["x-video-width"] || 0);
            const height = Number(request.headers["x-video-height"] || 0);
            const duration = Number(request.headers["x-video-duration"] || 0);
            const ratio = String(request.headers["x-video-ratio"] || "");
            let originalName = "上传视频.mp4";
            try {
              originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName));
            } catch {}

            const fileName = `footer-panel-user-${Date.now()}.mp4`;
            uploadedVideoPath = path.join(footerVideoDirectory, fileName);
            const content = {
              src: `/assets/video/${fileName}`,
              kind: "MP4 视频",
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              duration: Number.isFinite(duration) && duration > 0 ? duration : 0,
              size: body.length,
              originalName,
            };

            await mkdir(footerVideoDirectory, { recursive: true });
            await copyFile(footerVideoContentPath, footerVideoContentBackupPath);
            await writeFile(uploadedVideoPath, body);
            await writeFile(footerVideoContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(footerVideoContentTempPath, footerVideoContentPath);
            finish(200, { ok: true, content });
          } catch {
            if (uploadedVideoPath) await unlink(uploadedVideoPath).catch(() => {});
            await unlink(footerVideoContentTempPath).catch(() => {});
            finish(500, { message: "无法保存视频，请重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "视频上传中断，请重试。" }));
      });
    },
  };
}

function localFooterVideoPositionHistory() {
  return {
    name: "jurneos-local-footer-video-position-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/footer-video-position", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(footerVideoPositionBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(footerVideoPositionBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(footerVideoPositionTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(footerVideoPositionTempPath, footerVideoPositionPath);
              await unlink(footerVideoPositionBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(footerVideoPositionTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的位置修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localFooterWordmarkHistory() {
  return {
    name: "jurneos-local-footer-wordmark-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/footer-wordmark", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(footerWordmarkBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(footerWordmarkBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(footerWordmarkTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(footerWordmarkTempPath, footerWordmarkPath);
              await unlink(footerWordmarkBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(footerWordmarkTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的底部英文修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankSixLayoutHistory() {
  return {
    name: "jurneos-local-timeline-blank-six-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-six-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };
        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankSixLayoutBackupPath).then(() => reply(200, { canUndo: true })).catch(() => reply(200, { canUndo: false }));
          return;
        }
        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankSixLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankSixLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankSixLayoutTempPath, timelineBlankSixLayoutPath);
              await unlink(timelineBlankSixLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankSixLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的展开卡片排版修改。" });
            });
          return;
        }
        next();
      });
    },
  };
}

function localTimelineBlankSevenLayoutHistory() {
  return {
    name: "jurneos-local-timeline-blank-seven-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-seven-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankSevenLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankSevenLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankSevenLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankSevenLayoutTempPath, timelineBlankSevenLayoutPath);
              await unlink(timelineBlankSevenLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankSevenLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的拍摄设备文件夹排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineGalleryFollowupBlankPanelHistory() {
  return {
    name: "jurneos-local-timeline-gallery-followup-blank-panel-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-gallery-followup-blank-panel", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineGalleryFollowupBlankPanelBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineGalleryFollowupBlankPanelBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineGalleryFollowupBlankPanelTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineGalleryFollowupBlankPanelTempPath, timelineGalleryFollowupBlankPanelPath);
              await unlink(timelineGalleryFollowupBlankPanelBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineGalleryFollowupBlankPanelTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的拍摄设备页下方空白屏新增操作。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineGalleryFollowupPricingLayoutHistory() {
  return {
    name: "jurneos-local-timeline-gallery-followup-pricing-layout-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-gallery-followup-pricing-layout", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineGalleryFollowupPricingLayoutBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineGalleryFollowupPricingLayoutBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineGalleryFollowupPricingLayoutTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineGalleryFollowupPricingLayoutTempPath, timelineGalleryFollowupPricingLayoutPath);
              await unlink(timelineGalleryFollowupPricingLayoutBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineGalleryFollowupPricingLayoutTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的定价卡片排版修改。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineGalleryFollowupPricingContentEditor() {
  return {
    name: "jurneos-local-timeline-gallery-followup-pricing-content-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-gallery-followup-pricing-content", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineGalleryFollowupPricingContentBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineGalleryFollowupPricingContentBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineGalleryFollowupPricingContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineGalleryFollowupPricingContentTempPath, timelineGalleryFollowupPricingContentPath);
              await unlink(timelineGalleryFollowupPricingContentBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineGalleryFollowupPricingContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的定价卡片文字修改。" });
            });
          return;
        }

        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }

        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };

        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxTimelineGalleryFollowupPricingContentSize) {
            finish(413, { message: "定价卡片文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });

        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const tiers = Array.isArray(input.tiers) ? input.tiers.map((tier) => ({
              id: String(tier?.id ?? ""),
              name: String(tier?.name ?? "").trim().slice(0, 60),
              currency: String(tier?.currency ?? "").trim().slice(0, 8),
              price: String(tier?.price ?? "").trim().slice(0, 20),
              interval: String(tier?.interval ?? "").trim().slice(0, 40),
              description: String(tier?.description ?? "").trim().slice(0, 220),
              highlight: String(tier?.id ?? "") === "team",
              features: Array.isArray(tier?.features) ? tier.features.map((feature) => ({
                id: String(feature?.id ?? ""),
                name: String(feature?.name ?? "").trim().slice(0, 100),
                included: feature?.included !== false,
              })) : [],
            })) : [];

            const featureIds = tiers.flatMap((tier) => tier.features.map((feature) => feature.id));
            if (
              tiers.length !== timelineGalleryFollowupPricingTierIds.size
              || tiers.some((tier) => !timelineGalleryFollowupPricingTierIds.has(tier.id) || tier.features.length !== 6)
              || featureIds.length !== timelineGalleryFollowupPricingFeatureIds.size
              || featureIds.some((featureId) => !timelineGalleryFollowupPricingFeatureIds.has(featureId))
            ) {
              finish(400, { message: "定价卡片数据不完整，请刷新后重试。" });
              return;
            }

            const content = { tiers };
            const currentSource = await readFile(timelineGalleryFollowupPricingContentPath, "utf8");
            await mkdir(path.dirname(timelineGalleryFollowupPricingContentBackupPath), { recursive: true });
            await writeFile(timelineGalleryFollowupPricingContentBackupPath, currentSource, "utf8");
            await writeFile(timelineGalleryFollowupPricingContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineGalleryFollowupPricingContentTempPath, timelineGalleryFollowupPricingContentPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(timelineGalleryFollowupPricingContentTempPath).catch(() => {});
            finish(400, { message: "无法保存定价卡片文字，请检查后重试。" });
          }
        });

        request.on("error", () => finish(400, { message: "定价卡片文字保存中断，请重试。" }));
      });
    },
  };
}

function localTimelineBlankSixContentEditor() {
  return {
    name: "jurneos-local-timeline-blank-six-content-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-six-content", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };
        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankSixContentBackupPath).then(() => reply(200, { canUndo: true })).catch(() => reply(200, { canUndo: false }));
          return;
        }
        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankSixContentBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankSixContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankSixContentTempPath, timelineBlankSixContentPath);
              await unlink(timelineBlankSixContentBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankSixContentTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的展开卡片文字或标志修改。" });
            });
          return;
        }
        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }
        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };
        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxTimelineBlankSixContentSize) {
            finish(413, { message: "展开卡片文字内容过长。" });
            return;
          }
          chunks.push(chunk);
        });
        request.on("end", async () => {
          if (finished) return;
          try {
            const input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const header = {
              visible: input.header?.visible !== false,
              eyebrow: String(input.header?.eyebrow || "").trim().slice(0, 80),
              title: String(input.header?.title || "").trim().slice(0, 100),
              intro: String(input.header?.intro || "").trim().slice(0, 240),
            };
            const items = Array.isArray(input.items) ? input.items.map((item) => ({
              id: String(item?.id || ""),
              title: String(item?.title || "").trim().slice(0, 60),
              description: String(item?.description || "").trim().slice(0, 320),
              icon: timelineBlankSixIconNames.has(String(item?.icon || "")) ? String(item.icon) : "Landmark",
              titleVisible: item?.titleVisible !== false,
              descriptionVisible: item?.descriptionVisible !== false,
              logoVisible: item?.logoVisible !== false,
            })) : [];
            if (items.length !== timelineBlankSixCardIds.size || items.some((item) => !timelineBlankSixCardIds.has(item.id))) {
              finish(400, { message: "展开卡片数据不完整，请刷新后重试。" });
              return;
            }
            const content = { header, items };
            const currentSource = await readFile(timelineBlankSixContentPath, "utf8");
            await mkdir(path.dirname(timelineBlankSixContentBackupPath), { recursive: true });
            await writeFile(timelineBlankSixContentBackupPath, currentSource, "utf8");
            await writeFile(timelineBlankSixContentTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineBlankSixContentTempPath, timelineBlankSixContentPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(timelineBlankSixContentTempPath).catch(() => {});
            finish(400, { message: "无法保存展开卡片内容，请检查后重试。" });
          }
        });
        request.on("error", () => finish(400, { message: "展开卡片内容保存中断，请重试。" }));
      });
    },
  };
}

function localTimelineBlankSixPositionHistory() {
  return {
    name: "jurneos-local-timeline-blank-six-position-history",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-six-position", (request, response, next) => {
        const pathname = request.url?.split("?")[0] || "/";
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };

        if (request.method === "GET" && pathname === "/undo") {
          access(timelineBlankSixPositionBackupPath)
            .then(() => reply(200, { canUndo: true }))
            .catch(() => reply(200, { canUndo: false }));
          return;
        }

        if (request.method === "POST" && pathname === "/undo") {
          readFile(timelineBlankSixPositionBackupPath, "utf8")
            .then(async (source) => {
              const content = JSON.parse(source);
              await writeFile(timelineBlankSixPositionTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankSixPositionTempPath, timelineBlankSixPositionPath);
              await unlink(timelineBlankSixPositionBackupPath);
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankSixPositionTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的七卡展开页位置调整。" });
            });
          return;
        }

        next();
      });
    },
  };
}

function localTimelineBlankSixImageUpload() {
  const mimeExtensions = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif" };
  const isValidImage = (body, mime) => {
    if (mime === "image/jpeg") return body.length > 3 && body[0] === 0xff && body[1] === 0xd8 && body[2] === 0xff;
    if (mime === "image/png") return body.length > 8 && body.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    if (mime === "image/webp") return body.length > 12 && body.toString("ascii", 0, 4) === "RIFF" && body.toString("ascii", 8, 12) === "WEBP";
    if (mime === "image/avif") return body.length > 16 && body.toString("ascii", 4, 8) === "ftyp" && body.subarray(8, 32).includes(Buffer.from("avif"));
    return false;
  };
  return {
    name: "jurneos-local-timeline-blank-six-image-upload",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__jurneos/timeline-blank-six-image", (request, response, next) => {
        const requestUrl = new URL(request.url || "/", "http://127.0.0.1");
        const pathname = requestUrl.pathname;
        const cardId = requestUrl.searchParams.get("card");
        const reply = (statusCode, payload) => {
          response.statusCode = statusCode;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "no-store");
          response.end(JSON.stringify(payload));
        };
        if (!cardId || !timelineBlankSixCardIds.has(cardId)) {
          reply(400, { message: "卡片编号无效。" });
          return;
        }
        const backupPath = timelineBlankSixImageBackupPath(cardId);
        if (request.method === "GET" && pathname === "/undo") {
          access(backupPath).then(() => reply(200, { canUndo: true })).catch(() => reply(200, { canUndo: false }));
          return;
        }
        if (request.method === "POST" && pathname === "/undo") {
          Promise.all([readFile(backupPath, "utf8"), readFile(timelineBlankSixImagesPath, "utf8")])
            .then(async ([backupSource, currentSource]) => {
              const previous = JSON.parse(backupSource);
              const content = JSON.parse(currentSource);
              const current = content[cardId];
              content[cardId] = previous;
              await writeFile(timelineBlankSixImagesTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
              await rename(timelineBlankSixImagesTempPath, timelineBlankSixImagesPath);
              await unlink(backupPath);
              if (current?.src?.startsWith(`/assets/images/timeline-blank-six-${cardId}-user-`)) {
                await unlink(path.join(projectRoot, "public", current.src)).catch(() => {});
              }
              reply(200, { ok: true, content });
            })
            .catch(async () => {
              await unlink(timelineBlankSixImagesTempPath).catch(() => {});
              reply(409, { message: "没有可撤销的当前卡片图片修改。" });
            });
          return;
        }
        if (request.method !== "PUT" || pathname !== "/") {
          next();
          return;
        }
        const mime = String(request.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
        const extension = mimeExtensions[mime];
        const declaredSize = Number(request.headers["content-length"] || 0);
        if (!extension) {
          reply(415, { message: "只支持 JPG、PNG、WebP 或 AVIF 图片。" });
          return;
        }
        if (declaredSize > maxAboutImageSize) {
          reply(413, { message: "图片不能超过 25 MB。" });
          return;
        }
        const chunks = [];
        let receivedSize = 0;
        let finished = false;
        const finish = (statusCode, payload) => {
          if (finished) return;
          finished = true;
          reply(statusCode, payload);
        };
        request.on("data", (chunk) => {
          if (finished) return;
          receivedSize += chunk.length;
          if (receivedSize > maxAboutImageSize) {
            finish(413, { message: "图片不能超过 25 MB。" });
            return;
          }
          chunks.push(chunk);
        });
        request.on("end", async () => {
          if (finished) return;
          const body = Buffer.concat(chunks);
          if (!isValidImage(body, mime)) {
            finish(415, { message: "文件内容不是有效的图片。" });
            return;
          }
          const width = Number(request.headers["x-image-width"] || 0);
          const height = Number(request.headers["x-image-height"] || 0);
          const ratio = String(request.headers["x-image-ratio"] || "未知");
          let originalName = `卡片图片.${extension}`;
          try { originalName = decodeURIComponent(String(request.headers["x-file-name"] || originalName)); } catch {}
          const fileName = `timeline-blank-six-${cardId}-user-${Date.now()}.${extension}`;
          const imagePath = path.join(timelineBlankSixImageDirectory, fileName);
          try {
            const currentSource = await readFile(timelineBlankSixImagesPath, "utf8");
            const content = JSON.parse(currentSource);
            const metadata = {
              src: `/assets/images/${fileName}`,
              kind: mime === "image/jpeg" ? "JPG 图片" : `${extension.toUpperCase()} 图片`,
              mime,
              width: Number.isFinite(width) && width > 0 ? width : 0,
              height: Number.isFinite(height) && height > 0 ? height : 0,
              ratio: /^\d+:\d+$/.test(ratio) ? ratio : "未知",
              size: body.length,
              originalName,
            };
            await mkdir(path.dirname(backupPath), { recursive: true });
            await mkdir(timelineBlankSixImageDirectory, { recursive: true });
            await writeFile(backupPath, `${JSON.stringify(content[cardId], null, 2)}\n`, "utf8");
            await writeFile(imagePath, body);
            content[cardId] = metadata;
            await writeFile(timelineBlankSixImagesTempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
            await rename(timelineBlankSixImagesTempPath, timelineBlankSixImagesPath);
            finish(200, { ok: true, content });
          } catch {
            await unlink(imagePath).catch(() => {});
            await unlink(timelineBlankSixImagesTempPath).catch(() => {});
            finish(500, { message: "无法保存卡片图片，请重试。" });
          }
        });
        request.on("error", () => finish(400, { message: "卡片图片上传中断，请重试。" }));
      });
    },
  };
}

export default defineConfig({
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [
    localHeroMediaUpload(),
    localStatementHistory(),
    localStatementEditorFeatureHistory(),
    localStatementPanelRemovalHistory(),
    localStatementSecondFollowupBlankPanelHistory(),
    localStatementFollowupWhitePanelThreeHistory(),
    localStatementFollowupBlankPanelFourHistory(),
    localStatementFollowupBlankPanelFourAppearanceHistory(),
    localStatementFollowupScrollFlyLayoutHistory(),
    localStatementFollowupScrollFlyContentEditor(),
    localStatementFollowupScrollFlyHeadingFormatHistory(),
    localStatementFollowupCinematicLayoutHistory(),
    localStatementFollowupCinematicContentEditor(),
    localStatementFollowupCinematicImageUpload(),
    localStatementSecondFollowupBlankAppearanceHistory(),
    localStatementSecondFollowupBlurLayoutHistory(),
    localStatementSecondFollowupBlurRemovalHistory(),
    localStatementSecondFollowupBlurContentEditor(),
    localStatementSecondFollowupBlurVideoUpload(),
    localStatementFollowupBlankPanelHistory(),
    localStatementFollowupBlankRemovalHistory(),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/statement-followup-blank-image",
      name: "jurneos-local-statement-followup-blank-image-upload",
      contentPath: statementFollowupBlankImagePath,
      tempPath: statementFollowupBlankImageTempPath,
      backupPath: statementFollowupBlankImageBackupPath,
      filePrefix: "statement-followup-blank-user-",
      label: "THE PROJECT 下方空白屏图片",
    }),
    localAboutOneImageUpload(),
    localAboutOneVideoUpload(),
    localAboutOnePositionHistory(),
    localAboutOneEffectHistory(),
    localAboutOneCopyHistory(),
    localAboutExtraGroupsHistory(),
    localAboutPanelSelectionRemovalHistory(),
    localImpactIntroPanelsHistory(),
    localMediaCardBodyCopyHistory(),
    localMediaCardActionsHistory(),
    localMediaCardPodcastImageHistory(),
    localMediaCardCrowdfundingImageHistory(),
    localImpactMediaCopyEditor(),
    localImpactMediaCopyEditorFeatureHistory(),
    localSelectedSevenPageRemovalHistory(),
    localAboutDiscoverLinksHistory(),
    localAboutPanelCopyEditor(),
    localAboutPanelBackgroundFeatureHistory(),
    localAboutPanelBackgroundUpload(),
    localFooterSecondaryHistory(),
    localFooterInvitationHistory(),
    localAboutBlankPanelHistory(),
    localAboutBlankPanelRemovalHistory(),
    localAboutBlankPanelAppearanceHistory(),
    localAboutBlankControlsHistory(),
    localAboutBlankImageFeatureHistory(),
    localAboutBlankImageUpload(),
    localAboutLowerBlankPanelHistory(),
    localAboutLowerBlankPositionHistory(),
    localAboutLowerNextBlankPanelHistory(),
    localTimelineVideoBlankPanelHistory(),
    localTimelineVideoBlankUpload(),
    localTimelineFollowupBlankHistory(),
    localTimelineBlankOneLayoutHistory(),
    localTimelineBlankOneCopyEditor(),
    localTimelineBlankOnePositionHistory(),
    localTimelineBlankOneMarkHistory(),
    localTimelineBlankOneRemovalHistory(),
    localTimelineBlankOneExtraRowEditor(),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/timeline-blank-one-background",
      name: "jurneos-local-timeline-blank-one-background-upload",
      contentPath: timelineBlankOneBackgroundPath,
      tempPath: timelineBlankOneBackgroundTempPath,
      backupPath: timelineBlankOneBackgroundBackupPath,
      filePrefix: "timeline-blank-one-background-user-",
      label: "左侧背景",
    }),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/timeline-blank-one-top",
      name: "jurneos-local-timeline-blank-one-top-upload",
      contentPath: timelineBlankOneDetailTopPath,
      tempPath: timelineBlankOneDetailTopTempPath,
      backupPath: timelineBlankOneDetailTopBackupPath,
      filePrefix: "timeline-blank-one-top-user-",
      label: "上方内容图片",
    }),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/timeline-blank-one-bottom",
      name: "jurneos-local-timeline-blank-one-bottom-upload",
      contentPath: timelineBlankOneDetailBottomPath,
      tempPath: timelineBlankOneDetailBottomTempPath,
      backupPath: timelineBlankOneDetailBottomBackupPath,
      filePrefix: "timeline-blank-one-bottom-user-",
      label: "下方内容图片",
    }),
    localTimelineBlankTwoLayoutHistory(),
    localTimelineBlankTwoCopyEditor(),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/timeline-blank-two-image",
      name: "jurneos-local-timeline-blank-two-image-upload",
      contentPath: timelineBlankTwoImagePath,
      tempPath: timelineBlankTwoImageTempPath,
      backupPath: timelineBlankTwoImageBackupPath,
      filePrefix: "timeline-blank-two-image-user-",
      label: "黑白主图",
    }),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/timeline-blank-two-background",
      name: "jurneos-local-timeline-blank-two-background-upload",
      contentPath: timelineBlankTwoBackgroundPath,
      tempPath: timelineBlankTwoBackgroundTempPath,
      backupPath: timelineBlankTwoBackgroundBackupPath,
      filePrefix: "timeline-blank-two-background-user-",
      label: "整页背景",
    }),
    localTimelineBlankThreeLayoutHistory(),
    localTimelineBlankThreeCopyEditor(),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/timeline-blank-three-image",
      name: "jurneos-local-timeline-blank-three-image-upload",
      contentPath: timelineBlankThreeImagePath,
      tempPath: timelineBlankThreeImageTempPath,
      backupPath: timelineBlankThreeImageBackupPath,
      filePrefix: "timeline-blank-three-image-user-",
      label: "Market 页面右侧图片",
    }),
    localTimelineBlankFourLayoutHistory(),
    localTimelineBlankFourWordFitHistory(),
    localTimelineBlankFourCopyEditor(),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/timeline-blank-four-image",
      name: "jurneos-local-timeline-blank-four-image-upload",
      contentPath: timelineBlankFourImagePath,
      tempPath: timelineBlankFourImageTempPath,
      backupPath: timelineBlankFourImageBackupPath,
      filePrefix: "timeline-blank-four-image-user-",
      label: "House / NEST 页面建筑图片",
    }),
    localTimelineBlankEightLayoutHistory(),
    localTimelineBlankEightTitleFitHistory(),
    localTimelineBlankEightCopyEditor(),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/timeline-blank-eight-image",
      name: "jurneos-local-timeline-blank-eight-image-upload",
      contentPath: timelineBlankEightImagePath,
      tempPath: timelineBlankEightImageTempPath,
      backupPath: timelineBlankEightImageBackupPath,
      filePrefix: "timeline-blank-eight-image-user-",
      label: "ELIN 页面右侧图片",
    }),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/timeline-blank-five-background",
      name: "jurneos-local-timeline-blank-five-background-upload",
      contentPath: timelineBlankFiveBackgroundPath,
      tempPath: timelineBlankFiveBackgroundTempPath,
      backupPath: timelineBlankFiveBackgroundBackupPath,
      filePrefix: "timeline-blank-five-background-user-",
      label: "第五张独立空白页背景图片",
    }),
    localTimelineBlankSevenLayoutHistory(),
    localTimelineGalleryFollowupBlankPanelHistory(),
    localTimelineGalleryFollowupPricingLayoutHistory(),
    localTimelineGalleryFollowupPricingContentEditor(),
    localTimelineBlankSixLayoutHistory(),
    localTimelineBlankSixContentEditor(),
    localTimelineBlankSixPositionHistory(),
    localTimelineBlankSixImageUpload(),
    localAboutLowerNextBlankLayoutHistory(),
    localAboutLowerNextBlankCopyEditor(),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/about-lower-next-blank-background",
      name: "jurneos-local-about-lower-next-blank-background-upload",
      contentPath: aboutLowerNextBlankBackgroundPath,
      tempPath: aboutLowerNextBlankBackgroundTempPath,
      backupPath: aboutLowerNextBlankBackgroundBackupPath,
      filePrefix: "about-lower-next-background-user-",
      label: "时间轴整页背景",
    }),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/about-lower-next-blank-line",
      name: "jurneos-local-about-lower-next-blank-line-upload",
      contentPath: aboutLowerNextBlankLinePath,
      tempPath: aboutLowerNextBlankLineTempPath,
      backupPath: aboutLowerNextBlankLineBackupPath,
      filePrefix: "about-lower-next-line-user-",
      label: "时间轴标志",
    }),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/about-lower-next-blank-mark",
      name: "jurneos-local-about-lower-next-blank-mark-upload",
      contentPath: aboutLowerNextBlankMarkPath,
      tempPath: aboutLowerNextBlankMarkTempPath,
      backupPath: aboutLowerNextBlankMarkBackupPath,
      filePrefix: "about-lower-next-mark-user-",
      label: "标题标志",
    }),
    localAboutLowerBlankLayoutHistory(),
    localAboutLowerBlankEffectHistory(),
    localAboutLowerBlankCopyEditor(),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/about-lower-blank-background",
      name: "jurneos-local-about-lower-blank-background-upload",
      contentPath: aboutLowerBlankBackgroundPath,
      tempPath: aboutLowerBlankBackgroundTempPath,
      backupPath: aboutLowerBlankBackgroundBackupPath,
      filePrefix: "about-lower-background-user-",
      label: "整页背景",
    }),
    localAboutLowerBlankImageUpload({
      route: "/__jurneos/about-lower-blank-card-image",
      name: "jurneos-local-about-lower-blank-card-image-upload",
      contentPath: aboutLowerBlankCardImagePath,
      tempPath: aboutLowerBlankCardImageTempPath,
      backupPath: aboutLowerBlankCardImageBackupPath,
      filePrefix: "about-lower-card-user-",
      label: "卡片图片",
    }),
    localAboutBlankVideoFeatureHistory(),
    localAboutBlankVideoUpload(),
    localAboutTwoVideoFeatureHistory(),
    localAboutTwoVideoUpload(),
    localFooterVideoPanelHistory(),
    localFooterVideoUpload(),
    localFooterVideoPositionHistory(),
    localFooterWordmarkHistory(),
    react(),
  ],
});
