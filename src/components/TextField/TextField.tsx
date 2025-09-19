// src/components/TextField/TextField.tsx
import type { InputHTMLAttributes } from 'react'
import './TextField.css'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  helperText?: string
}

export default function TextField({
                                    label,
                                    error,
                                    helperText,
                                    className,
                                    id,
                                    ...rest
                                  }: TextFieldProps) {
  const inputId =
    id || (label ? `tf-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined)

  const cls = ['tf-input', error ? 'tf-input-error' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <label className="tf-root" htmlFor={inputId}>
      {label && <span className="tf-label">{label}</span>}
      <input id={inputId} className={cls} type="text" {...rest} />
      {(helperText || error) && (
        <span className={error ? 'tf-helper tf-helper-error' : 'tf-helper'}>
          {error || helperText}
        </span>
      )}
    </label>
  )
}
