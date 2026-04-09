import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import bg from "../assets/N_G1.jpeg";
import music from "../assets/music.mp3";
import Sparkles from "./Sparkles";
import "./hero.css";



export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, -80]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7]);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🎵 Fade-in function
  const fadeInAudio = () => {
  const audio = audioRef.current;
  if (!audio) return;

  audio.volume = 0;

  audio.play().catch(() => {}); // ✅ FIX

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

  // 🎵 Start music on first interaction
 useEffect(() => {
  const startMusic = () => {
    if (!audioRef.current) return;

    fadeInAudio();
    setIsPlaying(true);

    window.removeEventListener("click", startMusic);
  };

  window.addEventListener("click", startMusic);

  return () => window.removeEventListener("click", startMusic);
}, []);

  // 🔊 Toggle button
 const toggleAudio = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    audio.currentTime = 0; // 🔥 reset (important)
    setIsPlaying(false);
  } else {
    fadeInAudio();
    setIsPlaying(true);
  }
};

  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

      {/* 🎵 AUDIO */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      {/* 🔊 TOGGLE BUTTON */}
      <button
        onClick={toggleAudio}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 10,
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.4)",
          backdropFilter: "blur(6px)",
          color: "white",
          padding: "10px 14px",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "18px"
        }}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>

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
          filter: "brightness(75%)"
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