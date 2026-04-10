import { useEffect, useState } from "react";
import "./sparkle.css";

export default function Sparkles() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function triggerSparkle() {
      // VERY LONG RANDOM DELAY (1 to 3 minutes 😎)
      const delay = 60000 + Math.random() * 120000;

      setTimeout(() => {
        setVisible(true);

        // show sparkle VERY briefly
        setTimeout(() => {
          setVisible(false);
          triggerSparkle(); // loop again
        }, 1500); // visible only 1.5 sec
      }, delay);
    }

    triggerSparkle();
  }, []);

  if (!visible) return null; // 🚫 nothing most of the time

  return (
    <span
      className="sparkle"
      style={{
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
      }}
    ></span>
  );
}