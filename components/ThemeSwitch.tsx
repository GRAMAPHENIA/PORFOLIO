'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitch () {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleChange = () =>
    theme == 'dark' ? setTheme('ligth') : setTheme('dark')

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full border-2  border-white/40 flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white/70 dark:bg-opacity-50"
      onClick={handleChange}
    >
      {theme === 'ligth' ? <BsSun /> : <BsMoon />}
    </button>
  )
}
