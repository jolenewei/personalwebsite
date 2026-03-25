import { useState, useEffect, useRef } from "react";

const FloatingComputer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Tilt
      setTilt({
        x: deltaY * -15,
        y: deltaX * 15,
      });

      // Parallax float movement
      setPos({
        x: deltaX * 25,
        y: deltaY * 18,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[320px] h-[280px] md:w-[440px] md:h-[360px]"
      style={{ perspective: "900px" }}
    >
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.2s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="../../assets/computer.png"
          alt="3D MacBook"
          className="w-full h-full object-contain"
          style={{
            filter: `drop-shadow(${tilt.y * -2}px ${14 + tilt.x * 2}px 35px rgba(0,0,0,0.5))`,
            transition: "filter 0.2s ease-out",
          }}
        />
      </div>
    </div>
  );
};

export default FloatingComputer;
