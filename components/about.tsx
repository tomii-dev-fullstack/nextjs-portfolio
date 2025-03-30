"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-3xl text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">


        Passionate about technology and creating digital solutions, I specialize in full-stack development, combining the power of frontend and backend to bring innovative experiences to life.
        With a performance- and scalability-driven mindset, I design modern and efficient applications that not only work well but also make an impact. From fluid, engaging interfaces with React and TypeScript to robust backend systems with Node.js, Express, and databases like PostgreSQL and MongoDB, each project is an opportunity to push boundaries.
        I believe in clean code, well-structured architectures, and continuous improvement.
        If there’s a challenge, there’s a solution waiting to be built.
        <br /> 🚀 Always looking for new opportunities to innovate and create. Shall we work together?
      </p>


    </motion.section>
  );
}
