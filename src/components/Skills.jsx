import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiCplusplus, SiMysql } from "react-icons/si";
import { GiArtificialIntelligence, GiAtom } from "react-icons/gi";
import { FaDatabase, FaBrain } from "react-icons/fa";

const skills = [
  // Frontend
  
  { name: "CSS (Basic)", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS (Basic)", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript (Basic)", icon: <FaJs className="text-yellow-500" /> },
  { name: "React.js (Basic)", icon: <FaReact className="text-blue-400" /> },
  { name: "React Native (Basic)", icon: <FaReact className="text-blue-500" /> },

  // Backend
  { name: "Node.js (Basic)", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js (Basic)", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB (Basic)", icon: <SiMongodb className="text-green-600" /> },
  { name: "SQL (Basic)", icon: <SiMysql className="text-blue-600" /> },
  { name: "Database Management (Basic)", icon: <FaDatabase className="text-indigo-400" /> },

  // Programming
  { name: "Python (Basic)", icon: <FaPython className="text-yellow-400" /> },
  { name: "C++ (Basic)", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "DSA (Basic)", icon: <FaBrain className="text-pink-400" /> },

  // Advanced / Academic
  { name: "Artificial Intelligence (Basic)", icon: <GiArtificialIntelligence className="text-purple-400" /> },
  { name: "Machine Learning (Basic)", icon: <FaBrain className="text-purple-500" /> },
  { name: "Physics (Basic)", icon: <GiAtom className="text-purple-300" /> }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 1,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center text-white py-16 px-8"
    >
      <motion.h2
        className="text-2xl lg:text-4xl font-bold mb-4 flex items-center gap-2"
        variants={itemVariants}
      >
        My Skills 
      </motion.h2>

      <motion.p
        className="font-mono text-gray-300 text-sm lg:text-lg mb-8 text-center max-w-2xl"
        variants={itemVariants}
      >
        Skilled in frontend and backend development, programming fundamentals,
        and currently expanding knowledge in Artificial Intelligence and Machine Learning.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#111827] flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-white font-semibold text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;