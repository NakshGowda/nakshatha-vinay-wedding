export default function Sparkles() {
  return (
    <div className="sparkle-container">
      {Array.from({ length: 80 }).map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 4 + Math.random() * 6 + "s",
            width: 3 + Math.random() * 5 + "px",
            height: 3 + Math.random() * 5 + "px"
          }}
        ></span>
      ))}
    </div>
  );
}