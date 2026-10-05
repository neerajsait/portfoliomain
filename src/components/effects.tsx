import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

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
          backgroundColor: isHovering ? "transparent" : "#C7F000",
          borderWidth: isHovering ? 1.5 : 0,
          borderColor: "#C7F000",
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

export function Magnetic({ children, className }: { children: React.ReactElement; className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      className={className}
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}



export function ScrambleText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span 
      className={className} 
      style={{ display: "inline-block" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  );
}
