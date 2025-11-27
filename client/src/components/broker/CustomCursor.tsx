import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest(
        'a, button, input, textarea, select, [role="button"]',
      );
      setIsPointer(!!isClickable);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer
            ? "translate(-50%, -50%) scale(0.5)"
            : "translate(-50%, -50%) scale(1)",
        }}
      />
      <div
        className="custom-cursor-ring"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer
            ? "translate(-50%, -50%) scale(1.5)"
            : "translate(-50%, -50%) scale(1)",
        }}
      />
    </>
  );
}
