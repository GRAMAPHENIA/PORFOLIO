'use client'

import { useSectionInView } from '@/lib/hooks'
import React, { useRef } from 'react'
import SectionHeading from '../SectionHeading'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from '../SubmitBtn'
import toast from 'react-hot-toast'

export default function Contact () {
  const { ref } = useSectionInView('Contacto')
  const formRef = useRef<HTMLFormElement | null>(null)

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contáctame</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Contactame directamente a {''}
        <a className="underline" href="mailto:dicoratojuanpablo@gmail.com">
          {' '}
          dicoratojuanpablo@gmail.com
        </a>
        {''} o atravez de este formulario
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData)
          if (error) {
            toast.error(error)
            return
          }

          formRef.current?.reset()

          toast.success('🌱  El email se envio con exito  🌱')
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Tu email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Tu mensaje"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
