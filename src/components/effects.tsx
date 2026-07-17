import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}

export function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 32, stiffness: 260, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    let raf = 0;
    let pendingX = -100;
    let pendingY = -100;

    const onMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          cursorX.set(pendingX);
          cursorY.set(pendingY);
          raf = 0;
        });
      }
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor='hover']")) setIsHovering(true);
    };
    const onOut = () => setIsHovering(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: isHovering ? 44 : 10,
          height: isHovering ? 44 : 10,
          backgroundColor: isHovering ? "transparent" : "#ff6b35",
          borderWidth: isHovering ? 1.5 : 0,
          borderColor: "#ff6b35",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="rounded-full border-solid"
      />
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[28vh] w-px bg-border z-50 hidden lg:block">
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="h-full w-full bg-accent origin-top"
      />
    </div>
  );
}
