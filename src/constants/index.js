import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    
    college,
    sliit,
    java,
    oepm,
    smart_diary_app,
    math_game_app,
    online_book_store,

   
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
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
  
  const technologies = [
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "A/Niwaththakachethiya national school",
      college_name: "Starbucks",
      icon: college,
      iconBg: "#ffffff",
      date: "Jan 2011 - dec 2020",
      points: [
        "A/Niwaththakachethiya national school is a mixed school which provides education for more than 4000 students which is situated at Anuradhapura.",
        "G.C.E Ordinary Level Education (2016-2017).",
        "G.C.E Advance Level Education in Physical Science stream (2018-2020).",
      ],
    },
    {
      title: "Sri Lanka Institute of Information Technology",
      college_name: "Tesla",
      icon: sliit,
      iconBg: "#E6DEDD",
      date: "june 2022 - present",
      points: [
        "Sri Lanka Institute of Information Technology (SLIIT) awards the best IT Degree in Sri Lanka in the field of Information Technology and produces successful professionals..",
        "BSc (Hons) Information Technology Specializing in Software Engineering.",
        
      ],
    },
  ];

  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Politunnel Management System",
      description:
        "This system incorporates a employee management feature that enables users login and download reports, as well as admin can give server rile for employee, visually represented with graphs. Additionally, it includes a employee leave requested and admin approveable and also reset password. To enhance userfriendliness, pop-up windows and toast messages were implemented in the interface.",
        tags: [
          {
            name: "react.JS",
            color: "blue-text-gradient",
          },
          {
            name: "node.JS",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
          {
            name: "mongodb",
            color: "green-text-gradient",
          },
        ],
      image: oepm,
      source_code_link: "https://github.com/AnjanaTinush/OEPM_System",
    },
    {
      name: "Smart diary app",
      description:
        "In this mobile app user can write a diary ,edit diary note,delete diary note and user can search specific diary note.",
        tags: [
          {
            name: "Kotlin",
            color: "blue-text-gradient",
          },
          {
            name: "Mysql",
            color: "green-text-gradient",
          },
        ],
      image: smart_diary_app,
      source_code_link: "https://github.com/AnjanaTinush/Note_App-crud-",
    },
    {
      name: "Maths game app",
      description:
        "This mobile game includes easy, medium, and hard difficulty choices. When the player selects one, the system generates random quizzes, and a timer starts. After answering the questions, the final score is displayed along with the game's high score.",
        tags: [
          {
            name: "Kotlin",
            color: "blue-text-gradient",
          },
          
        ],
      image: math_game_app,
      source_code_link: "https://github.com/AnjanaTinush/Mobile-game-Kotlin-",
    },

    {
      name: "Online book store",
      description:
        "The administrator of this website application for an online bookstore has the ability to the books for sale, as well as display those books for customers to browse, buy, and purchase.",
        tags: [
          {
            name: "php",
            color: "blue-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "pink-text-gradient",
          },
          {
            name: "javaScript",
            color: "green-text-gradient",
          },
        ],
      image: online_book_store,
      source_code_link: "https://github.com/AnjanaTinush/OEPM_System",
    },  
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  