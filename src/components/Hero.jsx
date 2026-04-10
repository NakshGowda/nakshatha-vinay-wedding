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

  // 🎵 AUTO PLAY WITH FADE-IN
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = () => {
      audio.volume = 0;
      audio.play().catch(() => {});

      let vol = 0;
      const interval = setInterval(() => {
        if (vol < 0.3) {
          vol += 0.02;
          audio.volume = vol;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    // Try autoplay
    const promise = audio.play();

    if (promise !== undefined) {
      promise
        .then(() => {
          playAudio();
        })
        .catch(() => {
          // fallback for mobile: play on first tap
          window.addEventListener("click", playAudio, { once: true });
        });
    }
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