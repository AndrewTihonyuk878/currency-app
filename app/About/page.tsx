"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.p
      className="text-[white] mt-10 text-center w-1/2 font-bold text-2xl"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      The biggest risk is not taking any risk. In a world that's changing really
      quickly, the only strategy that is guaranteed to fail is not taking risks.
    </motion.p>
  );
};

export default About;
