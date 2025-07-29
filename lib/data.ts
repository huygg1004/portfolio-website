import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import smartEmailAppImg from "@/public/smartEmailApp.png"
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import chatWithPdfImg from "@/public/chatPDF.png"
import emotionSaasImg from "@/public/sentimentAI.png"
import lifeOrganizerImg from "@/public/lifeOrganizer.png"
import BlackRecruiterImg from "@/public/blackCyberRecruiter.png"
import snakeGameImg from "@/public/snakeGame.png"

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
  {
  title: "Software Developer at Tradelink Technology",
  location: "Ho Chi Minh City, Vietnam",
  description:
    "Built .NET web applications to automate workflows, developed REST APIs in C# and Python for data processing, and improved product reliability through rigorous testing.",
    icon: React.createElement(CgWorkAlt),
  date: "May 2020 – Dec 2023",
},
  {
    title: "Graduated from Brigham Young University",
    location: "Provo, Utah, USA",
    description:
      "Earned a Bachelor's degree in Management Information Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2021",
  },
  {
  title: "Business Analyst at FPT Software",
  location: "Ho Chi Minh City, Vietnam",
  description:
    "Collaborated on GE Renewables projects to deliver solutions that improved productivity and reduced waste. Defined 100+ user stories and facilitated Agile ceremonies to align teams and ensure timely delivery.",
    icon: React.createElement(CgWorkAlt),
  date: "Jan 2022 – Dec 2022",
},
{
  title: "Graduated from Tampere University",
  location: "Tampere, Finland",
  description:
    "Earned a Master's degree in Data Science, focusing on machine learning, statistical analysis, and data-driven solutions.",
  icon: React.createElement(LuGraduationCap),
  date: "Dec 2024",
},
] as const;

export const projectsData = [
{
  title: "Smart Email App",
  description:
    "A Superhuman-inspired email client with AI-assisted replies, semantic search, and smooth UX powered by the modern T3 stack.",
  tags: ["Next.js", "TypeScript", "tRPC", "Prisma", "Tailwind", "OpenAI"],
  imageUrl: smartEmailAppImg,
},
{
  title: "Chat with PDF SaaS",
  description:
    "A document-aware AI chat platform using RAG, Pinecone, and OpenAI to deliver fast, accurate answers from uploaded PDFs.",
  tags: ["Next.js", "LangChain", "OpenAI", "Pinecone"],
  imageUrl: chatWithPdfImg,
},
{
  title: "Multimodal Emotion Detection SaaS",
  description:
    "A full-stack AI platform that analyzes video content for emotion and sentiment using multimodal deep learning and cloud inference.",
  tags: ["PyTorch", "BERT", "Next.js", "SageMaker"],
  imageUrl: emotionSaasImg,
},
{
  title: "Life Organizer App",
  description:
    "A C#-powered task manager with filtering, calendar, search, and category grouping. Tracks, edits, and displays tasks from a connected database.",
  tags: ["C#", "ASP.NET", "DataTables"],
  imageUrl: lifeOrganizerImg,
},
{
  title: "BLACK Cyber Recruiter",
  description:
    "A Django-based job platform designed to empower African Americans by connecting job seekers with employers",
  tags: ["Python", "Django", "HTML", "CSS", "SQLite", "Bootstrap"],
  imageUrl: BlackRecruiterImg,
},
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
