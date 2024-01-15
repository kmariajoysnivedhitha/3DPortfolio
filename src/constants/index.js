import {
  mobile,
  web,
  javascript,
  
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  
  accenture,
  moreton,
  /*meta,
  starbucks,
  tesla,
  shopify,*/
  carrent,
  jobit,
  tripguide,
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
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  /*{
    title: "Content Creator",
    icon: creator,
  },*/
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
  /*{
    name: "TypeScript",
    icon: typescript,
  },*/
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
  /*{
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Moreton",
    icon: moreton,
    iconBg: "#383E56",
    date: "Sept 2023 - Nov 2023",
    points: [
      "Completed a job simulation involving website planning and creation.",
      "Created a sitemap and user flow using a diagram creation tool.",
      "Used Web Development tools such as HTML,CSS and various other frameworks to create a landing page.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "July 2023 - Aug 2023",
    points: [
      "Associating projects to the most suitable project management approach and  understand the entire project management life cycle form initiation to closing a project.",
      "Learned to use Excel more effectively by creating Data Formatting, data editing, Data analysis, dashboard, VBAs, and Macros",
    ],
  },
  /*{
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

/*const testimonials = [
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
];*/

const projects = [
  {
    name: "AI Article Summarizer",
    description:
      "The AI-Article-Summarizer is a web application built using React and the OpenAI API that allows users to summarize articles by simply pasting the article URL into the input box. The app also includes local storage, allowing users to browse their previously summarized articles and URLs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kmariajoysnivedhitha/AI_Article_Summarizer",
  },
  {
    name: "Tourism SouthIndia",
    description:
"This project is based on effective travel website using HTML and CSS. This contains important places along with high quality photography using JAVASCRIPT and allow people to book their dream destination using PHP. It also includes book places as per your choice by using MYSQL",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "mysql,",
        color: "pink-text-gradient",
      },
      {
        name: "php,",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kmariajoysnivedhitha/SouthIndian_website",
  },
  {
    name: "Memories App",
    description:
      "Using React, Node.js, Express & MongoDB with Full Stack MERN Application. The App is called Memories App and it is a simple social media app created very simply with MERN frameworks that allows users to post interesting events that happened in their lives and share it with your friends",
    tags: [
      {
        name: "mongo-db",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/kmariajoysnivedhitha/Memories-App",
  },
];

export { services, technologies, experiences, projects };