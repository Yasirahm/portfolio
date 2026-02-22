import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Internship = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 text-white">
      <div className="container mx-auto text-center">

        {/* Section Heading */}
        <motion.h2
          className="lg:text-4xl text-2xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          My Internships
        </motion.h2>

        {/* ================= CODTECH ================= */}
        <motion.div
          className="mb-16  p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="lg:text-2xl text-xl font-semibold mb-3">
            Internship at CODTECH
          </h3>

          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Completed internship at CODTECH in Frontend Web Development, where I gained practical
            experience in web development, project handling, and collaborative
            teamwork in a professional environment.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.a
              href="https://drive.google.com/file/d/1Y_AuG2eQG5P7FU1az3zYIAHxnw7iLZeT/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-sm lg:text-lg font-semibold shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View Offer Letter
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1ZsWQH7rNvPRrdHrNULRYxPgM3r2KbEzf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm lg:text-lg font-semibold shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View Completion Certificate
            </motion.a>
          </div>
        </motion.div>

        {/* ================= ASEEF IT ================= */}
        <motion.div
          className=" p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="lg:text-2xl text-xl font-semibold mb-3">
            Internship at Aseef IT Holding Co.
          </h3>

          <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
            Working as an intern at Aseef IT Holding Co. in Artificial Intelligence & Machine Learning from 1st January to
            Present. Actively contributing to development projects, improving
            technical skills, and gaining real-world industry experience.
          </p>

          <p className="text-green-400 font-medium">
            Ongoing Internship (January 1 – Present)
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Internship;