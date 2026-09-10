import { MoveRight } from "lucide-react";

function CinematicListItem({
  item,
  image,
  editorEnabled = false,
  imageUploading = false,
  canUndoImage = false,
  imageStatus = "",
  onEdit,
  onReplaceImage,
  onUndoImage,
}) {
  return (
    <article className="cinematic-list__item" tabIndex={0}>
      <div className="cinematic-list__image-layer">
        <img src={image?.src} alt={item.alt} />
        <span aria-hidden="true" />
      </div>

      <div className="cinematic-list__row-content">
        <div className="cinematic-list__identity">
          <span className="cinematic-list__id">{item.id}</span>
          <div>
            <h3>{item.title}</h3>
            <span className="cinematic-list__location cinematic-list__location--mobile">{item.location}</span>
          </div>
        </div>

        <div className="cinematic-list__meta">
          <span className="cinematic-list__location cinematic-list__location--desktop">{item.location}</span>
          <span className="cinematic-list__arrow" aria-hidden="true"><MoveRight /></span>
        </div>
      </div>

      {editorEnabled && (
        <div className="cinematic-list__item-tools" aria-label={`${item.title} 本地编辑工具`}>
          <button type="button" onClick={(event) => { event.stopPropagation(); onEdit?.(item.key); }}>编辑文字</button>
          <button type="button" onClick={(event) => { event.stopPropagation(); onReplaceImage?.(item.key); }} disabled={imageUploading}>{imageUploading ? "上传中…" : "更换图片"}</button>
          <button type="button" onClick={(event) => { event.stopPropagation(); onUndoImage?.(item.key); }} disabled={imageUploading || !canUndoImage}>↶ 撤销图片</button>
        </div>
      )}
      {editorEnabled && imageStatus && <span className="cinematic-list__item-status" role="status">{imageStatus}</span>}
    </article>
  );
}

export function CinematicList({
  heading,
  subtitle,
  items,
  images,
  editorEnabled = false,
  imageUploading = {},
  canUndoImages = {},
  imageStatuses = {},
  onEditHeader,
  onEditItem,
  onReplaceImage,
  onUndoImage,
}) {
  return (
    <div className="cinematic-list">
      <header className="cinematic-list__header">
        <h2>{heading}</h2>
        <span>{subtitle}</span>
        {editorEnabled && <button type="button" onClick={onEditHeader}>编辑页眉文字</button>}
      </header>

      <div className="cinematic-list__items">
        {items.map((item) => (
          <CinematicListItem
            key={item.key}
            item={item}
            image={images[item.key]}
            editorEnabled={editorEnabled}
            imageUploading={imageUploading[item.key]}
            canUndoImage={canUndoImages[item.key]}
            imageStatus={imageStatuses[item.key]}
            onEdit={onEditItem}
            onReplaceImage={onReplaceImage}
            onUndoImage={onUndoImage}
          />
        ))}
        <div className="cinematic-list__closing-line" />
      </div>
    </div>
  );
}
