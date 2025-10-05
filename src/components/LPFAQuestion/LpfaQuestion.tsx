// src/components/LpfaQuestion/LpfaQuestion.tsx
import React, { useEffect, useRef } from 'react'
import './LpfaQuestion.css'

export type LPFAQuestionProps = {
  question: string | React.ReactNode
  answer: React.ReactNode
  defaultOpen?: boolean
  open?: boolean // optional controlled mode
  onToggle?: (open: boolean) => void
  id?: string
  className?: string
}

export default function LpfaQuestion({
  question,
  answer,
  defaultOpen,
  open,
  onToggle,
  id,
  className,
}: LPFAQuestionProps) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null)
  const answerId = id ? `${id}-panel` : undefined

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

  const isOpen = detailsRef.current?.open || open || defaultOpen || false

  return (
    <details
      ref={detailsRef}
      className={cls}
      onToggle={handleToggle}
      {...(defaultOpen ? { open: true } : null)}
      {...(id ? { id } : null)}
    >
      <summary className="ml-faq-summary" aria-expanded={isOpen} {...(answerId ? { 'aria-controls': answerId } : {})}>
        <span className="ml-faq-q">{question}</span>
        <span className="ml-faq-icon" aria-hidden="true" />
      </summary>

      <div className="ml-faq-panel" {...(answerId ? { id: answerId } : {})}>
        <div className="ml-faq-a">{answer}</div>
      </div>
    </details>
  )
}
