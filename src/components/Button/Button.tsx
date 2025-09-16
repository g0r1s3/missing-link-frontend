// src/components/Button/Button.tsx
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './Button.css'

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> & {
  variant?: 'primary' | 'ghost'
}

export function Button({
                         variant = 'primary',
                         className,
                         children,
                         ...rest
                       }: ButtonProps) {
  const cls = [
    'btn',
    variant === 'ghost' ? 'btn-ghost' : 'btn-primary',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

export default Button
