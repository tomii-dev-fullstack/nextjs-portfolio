import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import opworkImg from "@/public/opawork.png";
import analyzerImg from "@/public/analyze.png";
import wordanalyticsImg from "@/public/next1.png";
import contygoImg from "@/public/contygonext.png";
import keplanImg from "@/public/keplannext.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Works",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer | Keplan",
    location: "Montevideo",
    description:
      "Present.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2019",
  },
  {
    title: "Administrative Assistant | Transporte Cabarcos",
    location: "Montevideo",
    description:
      "Administrative Assistant at a transportation company",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full Stack Developer | Bambuy Digitial",
    location: "Montevideo",
    description:
      "Web Design and Development for my own startup",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Contygo",
    description:
      "I worked as a full-stack developer on my own startup. Psychologists can efficiently manage patients.",
    tags: ["React", "TypeScript", "Nodejs", "Tailwind", "MongoDB", "Express"],
    imageUrl: contygoImg,
  },
  {
    title: "Keplan",
    description:
      "Designed and developed a scalable ecommerce platform with secure authentication and payment integration.",
    tags: ["React", "Nodejs", "Tailwind", "MongoDB", "Express"],
    imageUrl: keplanImg,
  },
  {
    title: "Opawork",
    description:
      "I also worked on developing a platform for freelancers, where I focused on creating an intuitive and user-friendly experience. The platform aims to connect freelancers with clients efficiently, offering features that streamline project management, communication, and payments.",
    tags: ["React", "Nodejs", "Tailwind", "MongoDB", "Express", "Supabase", "SQL"],
    imageUrl: opworkImg,
  },
  {
    title: "Files organizer",
    description:
      "A public web app for reorganize files from one zip upload.",
    tags: ["React", "Nodejs", "Tailwind", "MongoDB", "Express"],
    imageUrl: analyzerImg,
  },
  {
    title: "SaveAnySnippet",
    description:
      "Developed an app to save and store code snippets. Currently, it allows users to easily save their favorite pieces of code, with plans to add more features in the future to enhance functionality and usability.",
    tags: ["NextJs", "Tailwind", "MongoDB"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Bootstrap",
  "Hosting & Cloud",
] as const;
