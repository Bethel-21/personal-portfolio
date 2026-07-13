import { Project, Experience, Certification, BlogPost, SkillCategory } from '../types/portfolio';

export const personalInfo = {
  name: "Bethelhem Daniel",
  role: "Backend Engineer",
  tagline: "AI Enthusiast",
  bio: "I'm a software engineer who enjoys turning ideas into working applications and occasionally spending an unreasonable amount of time tracking down a missing semicolon. I started my journey in frontend development, creating user interfaces that people enjoy using. Along the way, I discovered that I was even more fascinated by what happens behind the scenes, which led me to backend engineering. These days, I enjoy designing APIs, working with databases, and building systems that are reliable, scalable, and (hopefully) bug-free. I'm also exploring artificial intelligence and love experimenting with ways AI can solve real-world problems. Outside of coding, I volunteer with organizations focused on environmental sustainability, peacebuilding, and education because I believe technology can create meaningful change beyond the screen. I also enjoy writing, reading, and collecting project ideas faster than I can finish them.",
  mission: "To build technology that creates opportunities, supports communities, and helps solve meaningful problems across Africa. Until then, you'll usually find me learning something new, building the next project, or convincing myself that one more feature won't take that long.",
  email: "bethelhemdanielfenta@gmail.com",
  github: "https://github.com/Bethel-21",
  linkedin: "https://www.linkedin.com/in/bet-daniel2000/",
  resumeUrl: "https://drive.google.com/file/d/1e8dMuRYtNRTPEefMsWqU3rjwS8aabQ2F/view?usp=sharing",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "SiPython" },
      { name: "TypeScript", icon: "SiTypescript" },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "Django", icon: "SiDjango" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Kubernetes", icon: "SiKubernetes" },
    ],
  },
  {
    title: "AI Technologies",
    skills: [
      { name: "PyTorch", icon: "SiPytorch" },
      { name: "OpenAI API", icon: "SiOpenai" },
      { name: "Hugging Face", icon: "SiHuggingface" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "News Alert App",
    description: "A simple web-based tool that fetches articles from multiple RSS feeds, filters them by user-provided keywords, displays the results on the page, and sends the filtered list to a provided email address.",
    image: "https://i.postimg.cc/SKtSTxyT/photo-2026-06-27-21-06-46-(2).jpg",
    tags: ["Python", "Flask", "Feedparser", "SQLite"],
    githubUrl: "https://github.com/Bethel-21/News-alert",
    liveUrl: "https://drive.google.com/file/d/1G-LDkYpbSkAuw2oV9svWDahdGqlAO1Ea/view?usp=sharing",
  },
  {
    id: "2",
    title: "Buddy",
    description: "Buddy is a prototype platform for self-learners that combines a Pomodoro timer, curated learning resources, and quizzes to help users study efficiently and track their progress. (I built this for a hackaton)",
    image: "https://i.postimg.cc/vHBdjdNv/img2.png",
    tags: ["Flask", "Javascript", "YouTube Data API v3", "HTML, CSS"],
    githubUrl: "https://github.com/Bethel-21/buddy",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Brain tumor detection and classification",
    description: "Developed a deep learning application for detecting and classifying brain tumors from MRI images. While the original source code was unfortunately lost due to a local storage issue, the experience strengthened my understanding of computer vision workflows and medical AI applications. I'm rebuilding it using more advanced techniques, cleaner architecture, and the knowledge I've gained in software engineering and AI.",
    image: "https://i.postimg.cc/j5cSH4Dn/tumor.jpg",
    tags: ["Python", "TensorFlow/Keras", "OpenCV", "Transfer Learning"],
    githubUrl: "https://github.com",
    liveUrl: "https://drive.google.com/drive/folders/1HcjYcdITs-n5pPadiONBPMZ_RL3j-KD9?usp=sharing",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Independent Software Developer",
    company: "Self-Employed",
    period: "2026 - Present",
    description: [
      "Building projects that challenge me more than yesterday's did.",
      "Exploring backend engineering, AI, and whatever sparks my curiosity next.",
      "Taking on freelance work while continuously learning and experimenting."
    ],
    type: "work",
  },
  {
    id: "2",
    role: "Software & Mobile Application Tester | Data Compliance Officer",
    company: "Forward Logistics Technologies PLC",
    period: "2024 - 2026",
    description: [
      "Tested web and mobile applications before release (so users didn't find the bugs first).",
      "Reported issues, verified fixes, and improved overall product quality.",
      "Checked data for accuracy and compliance with company standards."
    ],
    type: "work",
  },
  {
    id: "3",
    role: "Software Engineering Intern",
    company: "Biz Technologies",
    period: "Summer 2022",
    description: [
      "Built web and mobile interfaces based on client requirements.",
      "Updated and maintained company websites and digital content."
    ],
    type: "internship",
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Certificate for Back-End Web Development",
    issuer: "ALX",
    date: "2025",
  },
  {
    id: "2",
    title: "Certificate for ALX AiCE - AI Career Essentials",
    issuer: "ALX",
    date: "2024",
  },
  {
    id: "3",
    title: "Certificate for Professional Foundations",
    issuer: "ALX",
    date: "2025",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Vector Databases in LLM Apps",
    excerpt: "Exploring why vector search is becoming the backbone of modern AI applications and how to choose the right provider.",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: "2",
    title: "Scaling Go Microservices with gRPC",
    excerpt: "A deep dive into performance benefits and implementation patterns for inter-service communication using gRPC.",
    date: "Sep 28, 2023",
    readTime: "8 min read",
    link: "#",
  },
  {
    id: "3",
    title: "My Transition from Linguistics to Code",
    excerpt: "Reflecting on the parallels between natural languages and programming, and how it shaped my approach to software.",
    date: "Aug 15, 2023",
    readTime: "6 min read",
    link: "#",
  },
];
