import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "B.Tech in CSE",
    location: "Indian Institute of Information Technology, Nagpur",
    description:
      "Graduated learning and building projects in DBMS,NLP,ML,OS,DSA,CN,Web Dev and more. Learned soft-skills and team-work. Acquired 8.11 CGPA and a remarkable experience in four years.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "SDE Intern : RiDiv (Remote)",
    location: "Noida, UP",
    description:
      "Worked mainly on the frontend side of various projects. Learned React/ Next.js, TailwindCSS and npm packages. Tested Backend API's through Postman. Started learning Django, PostgreSQL, Docker and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 - Jun 2024",
  },
  {
    title: "SDE - I : RiDiv (Remote)",
    location: "Noida, UP",
    description:
      "Learned more about Next.js and designing responsive web pages using TailwindCSS. Maintained deployed applications writted in Next.js and Django. Continued understanding of Django, PostgreSQL, Docker and AWS.",
    icon: React.createElement(FaReact),
    date: "Jun 2024 - August 2024",
  },
  {
    title: "SDE - I : Aviara Labs (Remote)",
    location: "Noida, UP",
    description:
      "Developed more robust and scalable application in Next.js & Django adhering to DRY principles. Worked on the application and continued learning more about frontend and backend technologies. ",
    icon: React.createElement(FaReact),
    date: "August 2024 - Present",
  },
] as const;
