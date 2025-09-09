import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavbarHero() {
  const [open, setOpen] = useState(false);

  const navLinks = ["Work", "Services", "Clients", "About", "Knowledge"];

  return (
    <div className="relative w-full min-h-screen bg-white text-black overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 fixed w-full top-0 left-0 bg-white shadow-md z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black"></div>
          <span className="font-bold text-xl">Neo9</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-gray-600"
            >
              {link}
            </motion.li>
          ))}
        </ul>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="hidden md:block bg-black text-white px-4 py-2 rounded-lg"
        >
          Contact
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="absolute top-16 right-0 w-2/3 h-screen bg-white shadow-lg flex flex-col items-start p-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <p
                key={i}
                className="py-2 text-lg cursor-pointer hover:text-gray-600"
              >
                {link}
              </p>
            ))}
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
              Contact
            </button>
          </motion.div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center min-h-screen px-6 md:px-16 pt-28 gap-16 md:gap-24">
        {/* Left Animated Orb */}
        <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] flex items-center justify-center">
          {/* Outer Glowing Gradient Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-indigo-500 blur-3xl opacity-60"
          />

          {/* Rotating Concentric Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute w-72 h-72 rounded-full border border-white/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute w-60 h-60 rounded-full border border-white/20"
          />

          {/* Floating Particles inside orb */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-white/70 shadow-md"
              animate={{
                x: [0, Math.random() * 80 - 40, 0],
                y: [0, Math.random() * 80 - 40, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Big Hexagon in center */}
          {/* Big Hexagon in center */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.9, 1.05, 0.9], // pulsing zoom
              opacity: [0.6, 1, 0.6], // fade in/out
              rotate: 360, // slow rotation
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative w-40 h-40 shadow-2xl"
            style={{
              clipPath:
                "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
              background: "linear-gradient(135deg, #ff6ec7, #6e8efb, #00f2fe)", // multi-color gradient
              backgroundSize: "300% 300%",
            }}
          >
            {/* Animated gradient shimmer inside hexagon */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                clipPath: "inherit",
                background:
                  "linear-gradient(270deg, #ff6ec7, #fddb92, #00f2fe, #6e8efb)",
                backgroundSize: "600% 600%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Glass overlay for futuristic look */}
            <motion.div
              className="absolute inset-0 bg-white/10 backdrop-blur-md"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ clipPath: "inherit" }}
            />
          </motion.div>
        </div>

        <div className="flex flex-col space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Design
            <br />
            Transform
            <br />
            Accelerate
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            Redefining user experiences through <br />
            Behavioural Science & AI
          </p>
        </div>
      </section>
    </div>
  );
}
