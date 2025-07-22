import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12 px-6 relative w-full border-t border-purple-700 shadow-inner"
    >
      <motion.div
        className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-4 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        {/* Left - Brand Info */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-purple-400">Yasir Hamid Rather &trade;</h2>
          <p className="text-gray-300 text-sm mt-2 leading-relaxed">
            &copy; {new Date().getFullYear()} Thanks for visiting! Feel free to email me with suggestions or questions — I’d love to connect.
          </p>
          <p className="text-sm lg:text-lg text-gray-300 mt-4 italic">
            "وَقُل رَّبِّ زِدْنِي عِلْمًا"
          </p>
          <p className="text-xs lg:text-sm text-gray-400">
            (And say, "My Lord, increase me in knowledge.") – Surah Taha 20:114
          </p>
        </motion.div>

        {/* Center - Contact Info */}
        <motion.div
          className="flex flex-col gap-4 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <FaEnvelope className="text-lg" />
            <a href="mailto:ratherseenu16@gmail.com" className="underline">
              YasirHamid@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <FaMapMarkerAlt className="text-lg" />
            <span>Hajin, bandipora, Jammu & Kashmir, India</span>
          </div>

          <div className="flex space-x-6 text-2xl mt-4">
            <motion.a
              href="https://github.com/Yasirahm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yasir-hamid-3a961925b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>

        {/* Right - Quick Links */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
            <li><a href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a></li>
            <li><a href="#skills" className="text-gray-400 hover:text-white transition">Skills</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.2, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 p-3 rounded-full text-white shadow-lg transition md:bottom-8 md:right-8 z-50"
      >
        <FaArrowUp size={22} />
      </motion.button>
    </footer>
  );
};

export default Footer;
