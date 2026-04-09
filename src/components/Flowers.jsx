export default function Flowers() {
  return (
    <div className="flowers">
      {Array.from({ length: 15 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}