"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";

const fadeInAnimationVarians = {
  initial: {
    opacity: 0,
    y: 0
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};

export default function Skills() {
  const { ref } = useSectionInView("Habilidades");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-20 max-w-[53rem] scroll-mt-40 text-center"
    >
      <SectionHeading>Habilidades</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 my-20">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVarians}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
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
