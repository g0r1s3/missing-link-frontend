// components/LpFeature/LpFeature.tsx
import React from 'react'
import './LpFeature.css'

export type LPFeatureProps = {
  emoji: string
  title: string
  description: string
  onClick?: () => void
  as?: 'button' | 'article' | 'a'
  href?: string // nur relevant, wenn as="a"
}

export default function LpFeature({
                                    emoji,
                                    title,
                                    description,
                                    onClick,
                                    as = 'article',
                                    href,
                                  }: LPFeatureProps) {
  const content = (
    <>
      <span className="ml-lpfeature-emoji" aria-hidden="true">
        {emoji}
      </span>
      <div className="ml-lpfeature-body">
        <h3 className="ml-lpfeature-title">{title}</h3>
        <p className="ml-lpfeature-desc">{description}</p>
      </div>
    </>
  )

  if (as === 'a') {
    return (
      <a className="ml-lpfeature" onClick={onClick} href={href ?? '#'}>
        {content}
      </a>
    )
  }

  if (as === 'button') {
    return (
      <button className="ml-lpfeature" onClick={onClick} type="button">
        {content}
      </button>
    )
  }

  return (
    <article className="ml-lpfeature" onClick={onClick}>
      {content}
    </article>
  )
}
