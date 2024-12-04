// constants.js
import { lazy } from 'react';

// Import all images
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import web from "../assets/web.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";
import college from "../assets/company/college.png";
import sliit from "../assets/company/sliit.png";
import java from "../assets/tech/java.png";
import threejs from "../assets/tech/threejs.svg";
import oepm from "../assets/oepm.png";
import smart_diary_app from "../assets/smart_diary_app.png";
import math_game_app from "../assets/math_game_app.png";
import online_book_store from "../assets/online_book_store.png";
import govimithura from "../assets/govimithura.png";
import ridemate from "../assets/ridemate.jpeg";
import greenbin from "../assets/greenbin.jpeg"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: java,
  },
];

export const experiences = [
  {
    title: "A/Niwaththakachethiya National School",
    company_name: "School Education",
    icon: college,
    iconBg: "#ffffff",
    date: "Jan 2011 - Dec 2020",
    points: [
      "A/Niwaththakachethiya National School is a mixed school providing education for more than 4,000 students in Anuradhapura.",
      "G.C.E Ordinary Level Education (2016-2017).",
      "G.C.E Advanced Level Education in the Physical Science stream (2018-2020).",
    ],
  },
  {
    title: "Sri Lanka Institute of Information Technology",
    company_name: "Higher Education",
    icon: sliit,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "SLIIT offers the best IT degree in Sri Lanka in the field of Information Technology.",
      "BSc (Hons) Information Technology Specializing in Software Engineering.",
    ],
  },
];

export const projects = [
  {
    name: "Green Bin",
    description:
      '"Green Bin" is a smart waste management app in Sri Lanka that streamlines waste collection, promotes recycling, and optimizes routes using QR code tracking, contributing to a cleaner and more sustainable environment.',
    tags: [
      { name: "reactnative", color: "blue-text-gradient" },
      { name: "node.JS", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "react js", color: "blue-text-gradient" },
      { name: "Google Api", color: "green-text-gradient" },


    ],
    image: greenbin,
    source_code_link: "https://github.com/Praveen1214/Ride-Mate",
  },
  {
    name: "Ride mate",
    description:
      '"RideMate" is a ride-sharing app for Sri Lanka that reduces traffic congestion and pollution in urban areas like Colombo by promoting shared rides. It offers a convenient, eco-friendly, and cost-effective solution for both drivers and passengers, enhancing commuting efficiency while supporting a sustainable future for urban mobility.',
    tags: [
      { name: "reactnative", color: "blue-text-gradient" },
      { name: "node.JS", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
    ],
    image: ridemate,
    source_code_link: "https://github.com/Praveen1214/Ride-Mate",
  },
  {
    name: "Govi Mithura",
    description:
      '"Govi Mithura" is a web and mobile app supporting Sri Lankan agriculture with GPS-based land measurement, fertilizer recommendations, crop predictions, and a warehouse management system. It also provides expert consultations, empowering farmers to make informed decisions, enhance productivity, and reduce waste.',
    tags: [
      { name: "react.JS", color: "blue-text-gradient" },
      { name: "node.JS", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "React Native", color: "pink-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
    ],
    image: govimithura,
    source_code_link: "https://github.com/Govi-mithura-agro",
  },
  {
    name: "Politunnel Management System",
    description:
      "A system for employee management with features like role assignment, leave approval, and visual data representation with graphs.",
    tags: [
      { name: "react.JS", color: "blue-text-gradient" },
      { name: "node.JS", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: oepm,
    source_code_link: "https://github.com/AnjanaTinush/OEPM_System",
  },
  {
    name: "Smart Diary App",
    description:
      "A mobile app for creating, editing, and deleting diary notes, with a search functionality for easy navigation.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
    ],
    image: smart_diary_app,
    source_code_link: "https://github.com/AnjanaTinush/Note_App-crud-",
  },
  {
    name: "Maths Game App",
    description:
      "A mobile game offering quizzes of varying difficulty, with a timer and high-score tracking.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
    ],
    image: math_game_app,
    source_code_link: "https://github.com/AnjanaTinush/Mobile-game-Kotlin-",
  },
  {
    name: "Online Book Store",
    description:
      "An online bookstore allowing admins to manage books and customers to browse and purchase books.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
    ],
    image: online_book_store,
    source_code_link: "https://github.com/AnjanaTinush/Online_Book_Store",
  },
];