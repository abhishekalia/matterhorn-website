import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        window.getComputedStyle(target).cursor === "pointer"
      );
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursor);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-8 h-8 border-2 border-white rounded-full transition-transform duration-200 ${
            isPointer ? "scale-150" : "scale-100"
          }`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference hidden lg:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.1s, top 0.1s",
        }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
    </>
  );
}
