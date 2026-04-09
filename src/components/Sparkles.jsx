export default function Sparkles() {
  return (
    <div className="sparkle-container">
      {Array.from({ length: 30 }).map((_, i) => ( // 👈 reduced count
        <span
          key={i}
          className="sparkle"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 18 + Math.random() * 10 + "s",

            // 👇 MUCH SMALLER SIZE
            width: 1 + Math.random() * 2 + "px",
            height: 1 + Math.random() * 2 + "px",

            // 👇 EXTRA BRIGHT
            boxShadow: "0 0 8px rgba(255,255,255,0.9), 0 0 12px gold"
          }}
        ></span>
      ))}
    </div>
  );
}