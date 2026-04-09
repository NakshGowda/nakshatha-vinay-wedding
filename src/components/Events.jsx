import "./events.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import coupleImg from "../assets/NV21.jpeg";

export default function Events() {

  // ✨ floating sparkles
  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";

      sparkle.style.left = Math.random() * window.innerWidth + "px";
      sparkle.style.top = window.innerHeight + "px";

      sparkle.style.animationDuration = 3 + Math.random() * 3 + "s";
      sparkle.style.opacity = Math.random();

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 6000);
    };

    const interval = setInterval(createSparkle, 120);
    return () => clearInterval(interval);
  }, []);

  // 🎞️ animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="events-section">
      <div className="events-container">

        {/* ✨ Title animation */}
        <motion.h2
          className="events-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Events
        </motion.h2>

        {/* 🎞️ Cards container */}
        <motion.div
          className="events-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* Card 1 */}
          <motion.div className="event-card" variants={item}>
            <h3><i><b>Reception</b></i></h3>
            <p><i>Wednesday, 13-05-2026</i></p>
            <p><i>6:00 pm onwards</i></p>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="event-card" variants={item}>
            <h3><i><b>Muhurtham</b></i></h3>
            <p><i>Thursday, 14-05-2026</i></p>
            <p><i>10:20 am to 11:20 am</i></p>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="event-card" variants={item}>
            <h3><i><b>Venue</b></i></h3>
            <p><i>The Bangalore Main Palace</i></p>
            <p><i>Vasanth Nagar Entrance, Near Mount Carmel College</i></p>
            <p><i>Bengaluru - 560001</i></p>
          </motion.div>

        </motion.div>

        {/* 🗺️ Map animation */}
        <motion.div
          className="map-container"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <iframe
            title="venue-map"
            src="https://www.google.com/maps?q=Bangalore+Palace+Bengaluru&output=embed"
            loading="lazy"
          ></iframe>

          <a
            href="https://www.google.com/maps?q=Bangalore+Palace+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            OPEN IN GOOGLE MAPS →
          </a>
        </motion.div>
        {/* 📸 Couple Image Section */}
       {/* 📸 Couple Image Section */}
<motion.div
  className="couple-image-wrapper"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <div className="image-frame">
    <img src={coupleImg} alt="couple" />
  </div>
</motion.div>

{/* 💎 ULTRA PREMIUM REGARDS */}
<motion.div
  className="regards-section premium"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  {/* 💫 watermark */}
  <div className="watermark">V & N</div>

  {/* ✨ sparkles container */}
  <div className="regards-sparkles"></div>

  {/* 🎞️ animated text */}
  <motion.p
    className="forever-text"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      show: {
        transition: { staggerChildren: 0.05 }
      }
    }}
  >
    {"TOGETHER, FOREVER".split("").map((char, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 }
        }}
      >
        {char}
      </motion.span>
    ))}
  </motion.p>

  <div className="divider-line glow"></div>

  <h2 className="regards-title"><i>Warm Regards</i></h2>

  <div className="family-container">

    <div className="family-block">
      <p className="family-heading"><b>Smt. Savitha & Shri Shivananje Gowda</b></p>
      
    </div>

    <div className="ampersand">&</div>

    <div className="family-block">
      <p className="family-heading"><b>Smt. C.K. Kusumarani & Shri C.N. Balakrishna</b></p>
    
    </div>

  </div>

  <div className="bottom-line glow"></div>

  <p className="blessing-text">With love & golden wishes</p>

</motion.div>
                </div>
    </section>
  );
}