import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import expense from "@/public/expense.png";
import studentrepo from "@/public/student_repo.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ggl from "@/public/ggl.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title:
  //     "G K Shetty Vivekananda Vidyalaya Junior College, Secondary Education",
  //   location: "Chennai, India",
  //   description: "I completed my secondary education.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2018",
  // },
  {
    title:
      "Dr.Nalli Kuppuswami Vivekananda Vidyalaya Junior College, Higher Secondary Education",
    location: "Chennai, India",
    description:
      "I completed my higher secondary education. I studied Computer Science, Physics, Chemistry and Mathematics.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Intern",
    location: "QPay India Pvt Ltd, Chennai, India",
    description: "I worked as an intern.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Mar 2022",
  },
  {
    title: "Intern",
    location: "iamNeo Edutech Pvt Ltd, Coiamabtore, India",
    description: "I worked as an intern.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Mar 2023",
  },
  {
    title: "Engineering Graduate",
    location: "R.M.K. Engineering College, Chennai, India",
    description: "Currently Pursuing B.E. Computer Science and Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "USER API",
    description:
      "A REST API to manage users. It has features like adding, deleting, editing and archiving users.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Google Keep Clone",
    description:
      "A clone of Google Keep. It is a note-taking app. It has features like adding, deleting, editing and archiving notes.",
    tags: ["React", "Material UI", "Redux", "Firebase"],
    imageUrl: ggl,
  },
  {
    title: "Student Repository",
    description:
      "A web app to showcase the projects done by students. It provides community features where students can get help from other students/mentors.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    imageUrl: studentrepo,
  },
  {
    title: "Personal Expense Tracker",
    description: "A mobile app to track personal expenses.",
    tags: ["Flutter", "Dart"],
    imageUrl: expense,
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Java",
  "Python",
  "Dart",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Flutter",
  "MongoDB",
  "Redux",
  "Apollo",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "Django",
  "Framer Motion",
  "AWS",
  "Firebase",
  "Google Cloud",
] as const;
