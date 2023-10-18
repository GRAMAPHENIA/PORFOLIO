'use client'

import React, { createContext, useContext, useState } from 'react'

import { SectionName } from '@/lib/types'


type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

type Props = {
  children: React.ReactNode
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
)

export default function ActiveSectionContextProvider ({ children }: Props) {
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  const [activeSection, setActiveSection] = useState<SectionName>('inicio')

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext () {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider!'
    )
  }

  return context
}
