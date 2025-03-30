"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-6"
    >
      <SectionHeading>Tech skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 dark:text-gray-100">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border rounded-full px-6 py-3 text-sm font-medium uppercase shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl hover:bg-indigo-500 hover:text-white"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
