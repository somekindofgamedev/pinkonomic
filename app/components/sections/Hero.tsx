import { forwardRef } from "react";
import { motion } from "framer-motion";
import Sparkle from "~/components/Sparkle";
import PlatypusImage from "~/images/playtypus.png"; // Ensure correct import path

const Hero = forwardRef<HTMLDivElement>((props, ref) => (
  <section
    id="hero"
    ref={ref}
    className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 md:px-16 pt-24 pb-24 overflow-hidden bg-black"
  >
    {/* 🔥 Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-pink-700/50 to-black opacity-80 -z-10"></div>

    {/* 🏆 Hero Branding */}
    <motion.div
      className="relative z-10 text-center text-white space-y-4 w-full max-w-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1
        className="font-extrabold uppercase bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        style={{ fontSize: "clamp(4rem, 7vw, 9rem)", lineHeight: "1.1" }}
      >
        Welcome to <span className="text-pink-500">PINK</span>
      </h1>
      <motion.h2
        className="font-semibold uppercase tracking-widest text-white opacity-100"
        style={{ fontSize: "clamp(1.5rem, 3vw, 3.2rem)", lineHeight: "1.2", textShadow: "0px 0px 30px rgba(255, 105, 180, 1)" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Polkadot’s <span className="text-pink-400">First Meme Community</span>
      </motion.h2>
    </motion.div>

    {/* 🖼 **Platypus Image Section** (Replacing Video) */}
    <motion.div
      className="relative w-full mt-8 mx-auto flex justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ maxWidth: "clamp(300px, 80vw, 1000px)" }} // Scaled for balance
    >
      {/* 🖼 **Image with Overlay** */}
      <div className="relative w-full h-[clamp(180px, 45vw, 450px)] overflow-hidden rounded-2xl shadow-lg">
        <img
          src={PlatypusImage}
          alt="PINK Platypus"
          className="w-full h-full object-cover rounded-2xl"
        />
        {/* 🔥 **Subtle Overlay to Reduce Dominance** */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
      </div>
    </motion.div>

    {/* ✨ Hero Descriptions */}
    <motion.div
      className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-white w-full max-w-5xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
    >
      {[
        "Interopable with Moonbeam, Base, and Polkadot parachains",
        "Gaming ecosystem & NFT collectibles",
        "Community-driven with DAO governance",
      ].map((text, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-5 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 + index * 0.2, ease: "easeOut" }}
        >
          {/* ⭐ Animated Sparkle */}
          <motion.div
            className="w-10 h-10 flex-shrink-0"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Sparkle />
          </motion.div>

          <p className="text-lg font-light leading-relaxed text-white opacity-90">
            {text}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* 🔽 Subtle transition into next section */}
    <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
  </section>
));

Hero.displayName = "Hero";
export default Hero;
