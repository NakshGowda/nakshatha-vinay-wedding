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

            // ✨ short sparkle moment
            animationDuration: 4 + Math.random() * 3 + "s",

            // ⏳ BIG delay → makes it VERY RARE
            animationDelay: Math.random() * 120 + "s",
          }}
        ></span>
      ))}
    </div>
  );
}