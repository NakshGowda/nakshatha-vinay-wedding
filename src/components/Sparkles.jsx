import "./sparkle.css";

export default function Sparkles() {
  return (
    <div className="sparkle-container">
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDuration: 30 + Math.random() * 20 + "s",
          }}
        ></span>
      ))}
    </div>
  );
}