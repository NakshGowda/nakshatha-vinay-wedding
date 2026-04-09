export default function CursorImage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      src="/NV12.jpeg"   // ✅ correct path
      alt="cursor"
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: "30px",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        filter: "drop-shadow(0 0 6px gold)"
      }}
    />
  );
}