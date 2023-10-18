'use client'

import React from 'react'
import SectionHeading from '../SectionHeading'
import { motion } from 'framer-motion'
import { languagesData } from '@/lib/data'
import Image from 'next/image'
import LanguageLevel from '../LanguageLevel'
import { useSectionInView } from '@/lib/hooks'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -50
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

export default function Languages () {
  const { ref } = useSectionInView('Habilidades')

  return (
    <section
      id="languages"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeading>Idiomas</SectionHeading>

      <motion.ul
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true
        }}
        className="flex flex-wrap justify-center gap-2 text-gray-800"
      >
        {languagesData.map((lang, index) => (
          <li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 "
            key={index}
          >
            <div className="flex gap-1 items-center mb-1">
              <Image
                src={lang.flagImage}
                alt={lang.name}
                width={25}
                height={25}
              ></Image>
              <div className='text-lg'>{lang.name}</div>
            </div>
            <LanguageLevel levelOverTen={lang.level} />
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
