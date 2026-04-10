import "./sparkle.css";

export default function Sparkles() {
  return (
    <div className="sparkle-container">
      {Array.from({ length: 1 }).map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",

            // 🐢 EXTREMELY SLOW
            animationDuration: 80 + Math.random() * 40 + "s",
          }}
        ></span>
      ))}
    </div>
  );
}