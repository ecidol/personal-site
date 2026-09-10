import { createContext, useContext } from "react";

const BlurVignetteContext = createContext({
  radius: "24px",
  inset: "20px",
  transitionLength: "44px",
  blur: "6px",
});

export function BlurVignette({
  className = "",
  children,
  radius = "24px",
  inset = "20px",
  transitionLength = "44px",
  blur = "6px",
}) {
  return (
    <BlurVignetteContext.Provider value={{ radius, inset, transitionLength, blur }}>
      <div className={`blur-vignette-frame ${className}`.trim()} style={{ borderRadius: radius }}>
        {children}
      </div>
    </BlurVignetteContext.Provider>
  );
}

export function BlurVignetteArticle({ className = "", children }) {
  const { radius, inset, transitionLength, blur } = useContext(BlurVignetteContext);

  return (
    <div
      className={`blur-vignette ${className}`.trim()}
      style={{
        "--radius": radius,
        "--inset": inset,
        "--transition-length": transitionLength,
        "--blur": blur,
      }}
      aria-hidden={!children}
    >
      {children}
    </div>
  );
}
