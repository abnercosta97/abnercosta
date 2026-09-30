import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest: Point[];
  active: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const points: Point[] = [];
    let animationFrame = 0;
    let isActive = !document.hidden && !reducedMotion.matches;

    const distance = (first: Point, second: Point) =>
      (first.x - second.x) ** 2 + (first.y - second.y) ** 2;

    const initialize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      points.length = 0;

      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const pointX = x + (Math.random() * width) / 20;
          const pointY = y + (Math.random() * height) / 20;
          points.push({
            x: pointX,
            y: pointY,
            originX: pointX,
            originY: pointY,
            closest: [],
            active: 0,
          });
        }
      }

      points.forEach((point) => {
        point.closest = points
          .filter((candidate) => candidate !== point)
          .sort((first, second) => distance(point, first) - distance(point, second))
          .slice(0, 5);
      });
    };

    const draw = () => {
      if (!isActive) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.forEach((point) => {
        const pointDistance = (target.current.x - point.x) ** 2 + (target.current.y - point.y) ** 2;
        point.active = pointDistance < 4000 ? 0.3 : pointDistance < 20000 ? 0.1 : pointDistance < 40000 ? 0.02 : 0;
        if (!point.active) return;

        point.closest.forEach((closest) => {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(closest.x, closest.y);
          ctx.strokeStyle = `rgba(156, 217, 249, ${point.active})`;
          ctx.stroke();
        });
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2.5, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(156, 217, 249, ${point.active * 2})`;
        ctx.fill();
      });
    };

    const animate = () => {
      draw();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const shiftPoint = (point: Point) => {
      gsap.to(point, {
        duration: 1 + Math.random(),
        x: point.originX - 50 + Math.random() * 100,
        y: point.originY - 50 + Math.random() * 100,
        ease: "circ.inOut",
        onComplete: () => {
          if (isActive) shiftPoint(point);
        },
      });
    };

    const updateActivity = () => {
      isActive = !document.hidden && !reducedMotion.matches;
      if (!isActive) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        gsap.killTweensOf(points);
      } else if (!animationFrame) {
        points.forEach(shiftPoint);
        animate();
      }
    };
    const handleMouseMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
    };
    const handleResize = () => {
      gsap.killTweensOf(points);
      initialize();
      if (isActive) points.forEach(shiftPoint);
    };

    initialize();
    if (isActive) {
      points.forEach(shiftPoint);
      animate();
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", updateActivity);
    reducedMotion.addEventListener("change", updateActivity);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      gsap.killTweensOf(points);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", updateActivity);
      reducedMotion.removeEventListener("change", updateActivity);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
};

export default AnimatedBackground;
