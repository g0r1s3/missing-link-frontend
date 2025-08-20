import { useState, type InputHTMLAttributes } from 'react'
import './PasswordField.css'

export type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    error?: string
    helperText?: string
}

export default function PasswordField({
                                          label,
                                          error,
                                          helperText,
                                          className,
                                          id,
                                          maxLength = 128,
                                          ...rest
                                      }: PasswordFieldProps) {
    const [show, setShow] = useState(false)
    const inputId = id || (label ? `pf-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined)
    const cls = ['pf-input', error ? 'pf-input--error' : '', className].filter(Boolean).join(' ')

    return (
        <label className="pf-root" htmlFor={inputId}>
            {label && <span className="pf-label">{label}</span>}
            <span className="pf-field">
        <input
            id={inputId}
            className={cls}
            type={show ? 'text' : 'password'}
            autoComplete="current-password"
            maxLength={maxLength}
            {...rest}
        />
        <button
            type="button"
            className="pf-toggle"
            aria-label={show ? 'Hide password' : 'Show password'}
            onClick={() => setShow((s) => !s)}
        >
          {show ? 'Hide' : 'Show'}
        </button>
      </span>
            {(helperText || error) && (
                <span className={error ? 'pf-helper pf-helper--error' : 'pf-helper'}>
          {error || helperText}
        </span>
            )}
        </label>
    )
}