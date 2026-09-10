import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function InteractiveFolderGallery({
  photos = [],
  folderName = "Photography.gallery",
  dragHintText = "Drag any photo down to close",
  className = "",
}) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 700px)");
    const update = () => setIsCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isFolderOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsFolderOpen(false);
        setHoverFolder(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isFolderOpen]);

  return (
    <section className={`interactive-folder-gallery ${isFolderOpen ? "is-open" : ""} ${className}`.trim()} aria-label={folderName}>
      <div className="interactive-folder-gallery__stage">
        <div className="interactive-folder-gallery__folder-scene">
          <motion.div
            className="interactive-folder-gallery__folder-back"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
            transition={{ duration: 0.28 }}
            aria-hidden="true"
          >
            <span className="interactive-folder-gallery__folder-tab" />
            <span className="interactive-folder-gallery__folder-shell" />
            <span className="interactive-folder-gallery__folder-pocket" />
          </motion.div>

          <div className="interactive-folder-gallery__photos">
            {photos.map((photo, index) => {
              const offset = index - (photos.length - 1) / 2;
              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * 30 : offset * 3;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;
              const openX = offset * (isCompact ? 50 : 128);

              return (
                <motion.figure
                  key={photo.id}
                  drag={isFolderOpen}
                  dragSnapToOrigin
                  dragElastic={0.16}
                  onDragEnd={(_, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  className={`interactive-folder-gallery__photo ${isFolderOpen ? "is-active" : ""}`}
                  animate={!isFolderOpen ? {
                    y: stackY,
                    x: stackX,
                    rotate: stackRotate,
                    scale: stackScale,
                    zIndex: index + 10,
                  } : {
                    y: isCompact ? -104 : -132,
                    x: openX,
                    rotate: 0,
                    scale: isCompact ? 0.64 : 1.02,
                    zIndex: 50,
                  }}
                  whileHover={isFolderOpen ? { scale: isCompact ? 0.69 : 1.07, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: isCompact ? 0.72 : 1.11, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  tabIndex={isFolderOpen ? 0 : -1}
                  aria-label={`拍摄设备图片 ${index + 1}`}
                >
                  <img src={photo.image} alt={photo.alt || `拍摄设备 ${index + 1}`} draggable="false" />
                </motion.figure>
              );
            })}
          </div>

          <motion.button
            className="interactive-folder-gallery__front"
            type="button"
            style={{ transformOrigin: "bottom" }}
            animate={{
              opacity: isFolderOpen ? 0 : 1,
              rotateX: hoverFolder ? -25 : 0,
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto",
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onFocus={() => setHoverFolder(true)}
            onBlur={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
            aria-label={`打开${folderName}文件夹`}
          >
            <span className="interactive-folder-gallery__front-highlight" />
            <span className="interactive-folder-gallery__folder-label">{folderName}</span>
          </motion.button>
        </div>

        <motion.p
          className="interactive-folder-gallery__hint"
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 50 }}
          aria-hidden={!isFolderOpen}
        >
          {dragHintText}
        </motion.p>
      </div>
    </section>
  );
}

export { InteractiveFolderGallery as Component };
