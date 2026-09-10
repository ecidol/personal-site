import React, { forwardRef, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollFlyIn = forwardRef(function ScrollFlyIn({ children, imageUrl, imageAlt = "Animated image", className = "" }, forwardedRef) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.1, 0.8], ["-500vw", "250vw"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.7, 0.8], [0, 1, 1, 0]);

  const setTargetRef = (node) => {
    targetRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  return (
    <div ref={setTargetRef} className={`scroll-fly-in ${className}`.trim()}>
      <div className="scroll-fly-in__stage">
        <div className="scroll-fly-in__copy">{children}</div>
        <motion.div className="scroll-fly-in__media" style={{ x, opacity }} aria-hidden="true">
          <img className="scroll-fly-in__image" src={imageUrl} alt={imageAlt} />
        </motion.div>
      </div>
    </div>
  );
});

export { ScrollFlyIn };
export default ScrollFlyIn;
