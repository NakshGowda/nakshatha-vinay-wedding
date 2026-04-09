import { useRef, useEffect, useState } from "react";
import "./loader.css";

export default function Loader({ onEnter }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scratchCount, setScratchCount] = useState(0);

  const SCRATCH_THRESHOLD = 10;
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 🎭 GOLDEN VEIL
    ctx.fillStyle = "rgb(218, 204, 163)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  // 👉 START / STOP
  const startDrawing = () => setIsDrawing(true);
  const stopDrawing = () => setIsDrawing(false);

  // ✨ SCRATCH FUNCTION (works for mouse + touch)
  const scratch = (e) => {
    if (!isDrawing) return;

    const now = Date.now();
    if (now - lastTimeRef.current < 80) return;
    lastTimeRef.current = now;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2); // 👈 slightly bigger for mobile
    ctx.fill();

    createSpark(x, y);

    setScratchCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= SCRATCH_THRESHOLD) {
        onEnter();
      }
      return newCount;
    });
  };

  // ✨ SPARK EFFECT
  const createSpark = (x, y) => {
    for (let i = 0; i < 10; i++) {
      const spark = document.createElement("div");
      spark.className = "scratch-spark";

      spark.style.left = x + "px";
      spark.style.top = y + "px";

      spark.style.setProperty("--x", Math.random());
      spark.style.setProperty("--y", Math.random());

      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 1200);
    }
  };

  return (
    <div
      className="loader-container"

      // 🖱️ DESKTOP
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={scratch}

      // 📱 MOBILE (FIX)
      onTouchStart={(e) => {
        startDrawing();
        scratch(e.touches[0]);
      }}
      onTouchMove={(e) => {
        scratch(e.touches[0]);
      }}
      onTouchEnd={stopDrawing}
    >
      <div className="loader-text">
        Gently scratch the golden veil...
      </div>

      <canvas ref={canvasRef} className="scratch-canvas"></canvas>
    </div>
  );
}