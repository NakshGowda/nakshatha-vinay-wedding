import { useEffect, useState } from "react";
import "./sparkle.css";

export default function Sparkles() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const delay = Math.random() * 120000; // up to 2 min

    const timer = setTimeout(() => {
      setVisible(true);

      // remove after short sparkle
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null; // 🚫 nothing most of the time

  return (
    <span
      className="sparkle"
      style={{
        position: "absolute",
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
      }}
    ></span>
  );
}