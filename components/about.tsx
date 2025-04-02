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

        I am a full-stack developer with a strong focus on building high-performance, scalable digital solutions. By integrating frontend and backend technologies, I create modern, efficient applications that deliver seamless user experiences.
      </p>

      <p className="mb-3">
        I specialize in developing dynamic interfaces with React and TypeScript while building robust backend systems using Node.js, Express, and databases like PostgreSQL and MongoDB. My approach emphasizes clean code, well-structured architectures, and continuous improvement to ensure maintainability and efficiency.
      </p>

      <p className="mb-3">
        Every challenge presents an opportunity to develop a solution.

        I am always exploring new ways to innovate and build impactful applications. Let’s collaborate.
      </p>


    </motion.section>
  );
}
