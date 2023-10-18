'use client'

import { useSectionInView } from '@/lib/hooks'
import React, { useEffect, useState } from 'react'
import SectionHeading from '../SectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useTheme } from 'next-themes'

export default function Experience () {
  const { ref } = useSectionInView('Experiencia')
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <SectionHeading>Experiencia</SectionHeading>

      {mounted && (
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'ligth'
                    ? '#f5f5f4'
                    : 'rgba(255, 255, 255, 0.025)',
                boxShadow: 'none',
                border: '2px solid rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                padding: '1.3rem 2rem'
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'ligth'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)'
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'ligth' ? 'white' : '#1d2432',
                fontSize: '1.5rem'
              }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal mt-0">{item.location}</p>
                <p className="mt-1 font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      )}
    </section>
  )
}
