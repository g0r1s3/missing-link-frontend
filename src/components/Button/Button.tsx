// src/components/Button/Button.tsx
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './Button.css'

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> & {
  variant?: 'primary' | 'ghost' | 'secondary' | 'danger'
}

export function Button({
                         variant = 'primary',
                         className,
                         children,
                         ...rest
                       }: ButtonProps) {
  const cls = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ')

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

export default Button
