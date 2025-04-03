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

        I’m a full-stack developer passionate about building high-performance, scalable digital solutions that seamlessly integrate frontend and backend technologies to deliver exceptional user experiences.
      </p>

      <p className="mb-3">
        With expertise in React and TypeScript for dynamic interfaces and Node.js, Express, PostgreSQL, and MongoDB for robust backend systems, I focus on writing clean code, designing well-structured architectures, and continuously improving to ensure maintainability and efficiency.
      </p>

      <p className="mb-3">
        For me, every challenge is an opportunity to innovate and create meaningful solutions, and I’m always exploring new ways to build impactful applications. Let’s connect and create something great together!
      </p>


    </motion.section>
  );
}
