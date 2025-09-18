// src/components/LPFAQuestion/LPFAQuestion.tsx
import React, { useEffect, useRef } from 'react'
import './LPFAQuestion.css'

export type LPFAQuestionProps = {
  question: string | React.ReactNode
  answer: React.ReactNode
  defaultOpen?: boolean
  open?: boolean // optional controlled mode
  onToggle?: (open: boolean) => void
  id?: string
  className?: string
}

export default function LPFAQuestion({
                                       question,
                                       answer,
                                       defaultOpen,
                                       open,
                                       onToggle,
                                       id,
                                       className,
                                     }: LPFAQuestionProps) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null)

  // Keep the native <details> state in sync when used as a controlled component
  useEffect(() => {
    if (typeof open === 'boolean' && detailsRef.current) {
      if (open !== detailsRef.current.open) {
        if (open) detailsRef.current.setAttribute('open', '')
        else detailsRef.current.removeAttribute('open')
      }
    }
  }, [open])

  const handleToggle = () => {
    if (onToggle && detailsRef.current) {
      onToggle(detailsRef.current.open)
    }
  }

  const cls = ['ml-faq', className].filter(Boolean).join(' ')

  return (
    <details
      ref={detailsRef}
      className={cls}
      onToggle={handleToggle}
      {...(defaultOpen ? { open: true } : null)}
      {...(id ? { id } : null)}
    >
      <summary className="ml-faq-summary">
        <span className="ml-faq-q">{question}</span>
        <span className="ml-faq-icon" aria-hidden="true" />
      </summary>

      <div className="ml-faq-panel">
        <div className="ml-faq-a">{answer}</div>
      </div>
    </details>
  )
}
