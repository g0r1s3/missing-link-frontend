// src/components/Modal/Modal.tsx
import React, { useEffect, useRef, useId } from 'react'

import './Modal.css'
import { Button } from '../Button'

export type ModalProps = {
  open: boolean
  title?: React.ReactNode
  onClose: () => void
  children: React.ReactNode
  labelledById?: string
  className?: string
  closeLabel?: string
}

/**
 * Accessible modal dialog (basic):
 * - Closes on ESC or backdrop click
 * - Focus moves to dialog on open
 * - Returns focus to previously focused element on close
 * NOTE: Not a full focus-trap; can be extended later.
 */
export const Modal: React.FC<ModalProps> = ({
  open,
  title,
  onClose,
  children,
  labelledById,
  className,
  closeLabel = 'Schließen'
}) => {
  const internalTitleId = useId()
  const titleId = labelledById || (title ? internalTitleId : undefined)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)

  // Handle ESC key & initial focus
  useEffect(() => {
    if (!open) return
    lastFocusedRef.current = document.activeElement as HTMLElement | null
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    // focus dialog
    requestAnimationFrame(() => dialogRef.current?.focus())
    return () => {
      window.removeEventListener('keydown', onKey)
      // restore focus
      lastFocusedRef.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="ml-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        ref={dialogRef}
        className={["ml-modal", className].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        {...(titleId ? { 'aria-labelledby': titleId } : {})}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2 id={titleId} className="ml-modal-title">{title}</h2>
        )}
        <div className="ml-modal-body">
          {children}
        </div>
    <div className="ml-modal-actions">
      <Button type="button" onClick={onClose}>{closeLabel}</Button>
    </div>
      </div>
    </div>
  )
}

export default Modal
