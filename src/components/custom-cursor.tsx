import { useEffect, useRef, useState } from "react";
import { useSettings } from "../context/SettingsContext"

export default function SmoothCursor() {
  const { isCustomCursor } = useSettings();
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isCustomCursor) return;

    const move = (e: MouseEvent) => {
      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;
    };
    window.addEventListener("mousemove", move);

    const animate = () => {
      pos.current.x += (pos.current.targetX - pos.current.x) * 0.3;
      pos.current.y += (pos.current.targetY - pos.current.y) * 0.3;

      if (cursorRef.current) {
        cursorRef.current.style.transform = 
          `translate(${pos.current.x - 12}px, ${pos.current.y - 12}px) scale(${scale})`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, [scale, isCustomCursor]);

  useEffect(() => {
    if (!isCustomCursor) return;

    const addHover = () => setScale(2);
    const removeHover = () => setScale(1);

    const hoverables = document.querySelectorAll("a, button, input, textarea");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [isCustomCursor]);

  useEffect(() => {
    if (isCustomCursor) {
      document.body.style.cursor = "none";
      const style = document.createElement('style');
      style.id = 'custom-cursor-style';
      style.textContent = '* { cursor: none !important; }';
      document.head.appendChild(style);
      
      return () => {
        const existingStyle = document.getElementById('custom-cursor-style');
        if (existingStyle) {
          document.head.removeChild(existingStyle);
        }
        document.body.style.cursor = "default";
      };
    } else {
      document.body.style.cursor = "default";
      const existingStyle = document.getElementById('custom-cursor-style');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    }
  }, [isCustomCursor]);

  if (!isCustomCursor) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-black pointer-events-none z-[9999] transition-transform duration-200 ease-out"
    />
  );
}