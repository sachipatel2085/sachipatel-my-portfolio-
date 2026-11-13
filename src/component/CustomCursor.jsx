import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch or prefers reduced motion
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleHoverCheck = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".interactive-target") ||
        target.getAttribute("role") === "button";
      setIsHovering(Boolean(isInteractive));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleHoverCheck, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHoverCheck);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp animation for the trailing ring
  useEffect(() => {
    if (isTouch) return;
    let animationFrame;

    const render = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300" style={{ opacity: isVisible ? 1 : 0 }}>
      {/* Trailing Ring */}
      <div
        className="fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${trailingPos.x - (isHovering ? 24 : 16)}px, ${trailingPos.y - (isHovering ? 24 : 16)}px, 0)`,
          width: isHovering ? "48px" : "32px",
          height: isHovering ? "48px" : "32px",
          borderColor: isHovering ? "rgba(196, 107, 69, 0.7)" : "rgba(119, 124, 98, 0.45)",
          backgroundColor: isHovering ? "rgba(196, 107, 69, 0.08)" : "transparent",
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0) scale(${isHovering ? 1.5 : 1})`,
          width: "6px",
          height: "6px",
          backgroundColor: isHovering ? "#C46B45" : "#20211F",
        }}
      />
    </div>
  );
};

export default CustomCursor;
