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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Huy Doan, a developer with a Master’s degree in{" "}
        <span className="font-medium">Data Science</span> from Tampere University and a background in{" "}
        <span className="font-medium">Management Information Systems</span> from Brigham Young University.
        I enjoy building clean, efficient applications using{" "}
        <span className="font-medium">TypeScript, React, Next.js, Python, and SQL</span>.
      </p>

      <p className="mb-3">
        I’m particularly interested in projects that combine backend systems, AI integration, and modern web frameworks.
        I recently built a document AI app using{" "}
        <span className="font-medium">OpenAI, NeonDB, Stripe, and AWS</span> to enable real-time interaction with PDFs.
      </p>

      <p>
        In my free time, I enjoy story-driven games, reading about{" "}
        <span className="font-medium">history and philosophy</span>, and writing fiction.
        I'm also exploring music and currently learning to play the guitar.
      </p>
    </motion.section>
  );
}
