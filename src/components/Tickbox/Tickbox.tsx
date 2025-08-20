// src/components/Tickbox/Tickbox.tsx
import type { InputHTMLAttributes, ReactNode } from 'react'
import './Tickbox.css'

export type TickboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    label?: ReactNode
    description?: ReactNode
    id?: string
}

export default function Tickbox({
                                    id,
                                    label,
                                    description,
                                    disabled,
                                    className,
                                    ...rest
                                }: TickboxProps) {
    const inputId = id || (typeof label === 'string' ? `tb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined)

    return (
        <label className={['tb-root', disabled ? 'tb--disabled' : '', className].filter(Boolean).join(' ')} htmlFor={inputId}>
            <input
                id={inputId}
                type="checkbox"
                className="tb-input"
                disabled={disabled}
                {...rest}
            />
            <span className="tb-box" aria-hidden="true" />
            {(label || description) && (
                <span className="tb-text">
          {label && <span className="tb-label">{label}</span>}
                    {description && <span className="tb-desc">{description}</span>}
        </span>
            )}
        </label>
    )
}