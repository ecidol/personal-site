import { forwardRef, useEffect, useMemo, useState } from "react";
import { Building2, Castle, Landmark, Mountain, Pyramid, TentTree, TowerControl } from "lucide-react";

const iconComponents = {
  Mountain,
  TentTree,
  Landmark,
  Castle,
  Pyramid,
  TowerControl,
  Building2,
};

export const expandingCardIconNames = Object.keys(iconComponents);

export const ExpandingCards = forwardRef(function ExpandingCards(
  { className = "", items, defaultActiveIndex = 0, renderControls, onActiveChange, ...props },
  ref,
) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const gridStyle = useMemo(() => {
    const tracks = items.map((_, index) => index === activeIndex ? "5fr" : "1fr").join(" ");
    return isDesktop
      ? { gridTemplateColumns: tracks, gridTemplateRows: "1fr" }
      : { gridTemplateColumns: "1fr", gridTemplateRows: tracks };
  }, [activeIndex, isDesktop, items]);

  function activate(index) {
    setActiveIndex(index);
    onActiveChange?.(items[index]?.id);
  }

  return (
    <ul
      className={`expanding-cards ${className}`.trim()}
      style={gridStyle}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => {
        const Icon = iconComponents[item.icon] || Landmark;
        const active = activeIndex === index;
        return (
          <li
            className="expanding-card"
            data-active={active}
            key={item.id}
            onMouseEnter={() => activate(index)}
            onFocus={() => activate(index)}
            onClick={() => activate(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activate(index);
              }
            }}
            tabIndex={0}
          >
            <img className="expanding-card__image" src={item.imgSrc} alt={item.title || "旅程图片"} />
            <div className="expanding-card__shade" />
            <article className="expanding-card__content">
              {item.titleVisible !== false && <h3 className="expanding-card__folded-title">{item.title}</h3>}
              <div className="expanding-card__expanded-copy">
                {item.logoVisible !== false && (
                  <span className="expanding-card__logo" aria-label={`${item.title || "本卡片"}标志`}>
                    <Icon aria-hidden="true" size={24} strokeWidth={1.6} />
                  </span>
                )}
                {item.titleVisible !== false && <h3>{item.title}</h3>}
                {item.descriptionVisible !== false && <p>{item.description}</p>}
              </div>
              {active && renderControls?.(item)}
            </article>
          </li>
        );
      })}
    </ul>
  );
});

ExpandingCards.displayName = "ExpandingCards";
