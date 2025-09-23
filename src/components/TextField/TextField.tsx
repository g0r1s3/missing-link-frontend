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
                                    // neu: explizit unterstützen wir text | number | date
                                    type = 'text',
                                    ...rest
                                  }: TextFieldProps) {
  const inputId =
    id || (label ? `tf-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined)

  const cls = ['tf-input', error ? 'tf-input-error' : '', className]
    .filter(Boolean)
    .join(' ')

  // Zusätzliche Attribute je Typ:
  const typeSpecificProps: InputHTMLAttributes<HTMLInputElement> =
    type === 'number'
      ? {
          inputMode: 'decimal',        // bessere Mobile-Tastatur
          // range & step werden bereits via ...rest (min, max, step) unterstützt
        }
      : type === 'date'
        ? {
            // Europäische Darstellung/Picker
            lang: 'de-DE',
            inputMode: 'numeric',
            placeholder: (rest.placeholder as string) ?? 'TT.MM.JJJJ',
          }
        : {}

  return (
    <label className="tf-root" htmlFor={inputId}>
      {label && <span className="tf-label">{label}</span>}
      <input
        id={inputId}
        className={cls}
        type={type}
        // Hinweis: min, max, step etc. kommen aus ...rest
        {...typeSpecificProps}
        {...rest}
      />
      {(helperText || error) && (
        <span className={error ? 'tf-helper tf-helper-error' : 'tf-helper'}>
          {error || helperText}
        </span>
      )}
    </label>
  )
}
