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
      I believe that our whole life is a constant continuous development, where
      our attention, there's our energy, and that in our life increases..
    </motion.p>
  );
};

export default About;
