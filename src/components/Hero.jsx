import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import bg from "../assets/NV333.jpeg";
import music from "../assets/music.mp3";
import Sparkles from "./Sparkles";
import "./hero.css";

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, -80]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7]);

  const audioRef = useRef(null);

  // 🎵 PLAY MUSIC ON FIRST INTERACTION (SCROLL / TOUCH)
useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  let hasPlayed = false;

  const playAudio = () => {
    if (hasPlayed) return;

    audio.volume = 0;

    audio.play()
      .then(() => {
        hasPlayed = true;

        let vol = 0;
        const interval = setInterval(() => {
          if (vol < 0.3) {
            vol += 0.02;
            audio.volume = vol;
          } else {
            clearInterval(interval);
          }
        }, 100);

        // remove listeners after success
        window.removeEventListener("click", playAudio);
        window.removeEventListener("touchstart", playAudio);
        window.removeEventListener("scroll", playAudio);
      })
      .catch(() => {
        // do nothing → wait for next interaction
      });
  };

  // ✅ Multiple triggers (best coverage)
  window.addEventListener("click", playAudio);
  window.addEventListener("touchstart", playAudio, { passive: true });
  window.addEventListener("scroll", playAudio);

  return () => {
    window.removeEventListener("click", playAudio);
    window.removeEventListener("touchstart", playAudio);
    window.removeEventListener("scroll", playAudio);
  };
}, []);

  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

      {/* 🎵 AUDIO */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      {/* 🌟 BACKGROUND IMAGE */}
      <img 
        src={bg}
        alt="wedding"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          filter: "brightness(110%) contrast(110%)"
        }}
      />

      {/* ✨ EFFECTS */}
      <div className="shimmer"></div>
      <Sparkles />

      {/* 💎 CONTENT */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: "120px",
        color: "white",
        textAlign: "center"
      }}>
        <motion.p
          style={{ y, scale, opacity }}
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="luxury-text"
        >
          A celebration of love, laughter, and beautiful moments as we begin our forever together
        </motion.p>
      </div>
    </section>
  );
}