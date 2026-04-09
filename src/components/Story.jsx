import { motion } from "framer-motion";
import "./story.css";

export default function Story() {
  return (
    <section className="story-section">
      <div className="story-card">

        {/* Top Ornament */}
        <div className="ornament">
          <span></span>
          <span className="dot"></span>
          <span></span>
        </div>

        {/* Title */}
        <motion.h2
          className="story-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Blessings & Sacred Union
        </motion.h2>

        {/* Main Text */}
        <motion.p
          className="story-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
        With the divine blessings of the Almighty and the cherished love of our families, two souls come together, bound by faith, companionship, and a promise of forever. May their union be graced with harmony, laughter, and the gentle radiance of a lifetime shared in love.
        </motion.p>

        {/* Names Line */}
        <motion.p
          className="story-highlight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <i>With immense happiness, we invite your blessings and warm wishes as{" "}
          <span><b>Vinay & Nakshatha</b></span> begin their journey of togetherness.</i>
        </motion.p>

        {/* Bottom Ornament */}
        <div className="ornament">
          <span></span>
          <span className="dot"></span>
          <span></span>
        </div>

      </div>
    </section>
  );
}