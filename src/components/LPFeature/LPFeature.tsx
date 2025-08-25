// components/LPFeature/LPFeature.tsx
// @ts-ignore
import React from 'react'
import './LPFeature.css'

export type LPFeatureProps = {
    emoji: string
    title: string
    description: string
    onClick?: () => void
    as?: 'button' | 'article' | 'a'
    href?: string // nur relevant, wenn as="a"
}

export default function LPFeature({
                                      emoji,
                                      title,
                                      description,
                                      onClick,
                                      as = 'article',
                                      href
                                  }: LPFeatureProps) {
    const Tag: any = as

    const commonProps: any = {
        className: 'ml-lpfeature',
        onClick,
    }

    if (as === 'a' && href) {
        commonProps.href = href
    }
    if (as === 'button') {
        commonProps.type = 'button'
    }

    return (
        <Tag {...commonProps}>
      <span className="ml-lpfeature__emoji" aria-hidden="true">
        {emoji}
      </span>
            <div className="ml-lpfeature__body">
                <h3 className="ml-lpfeature__title">{title}</h3>
                <p className="ml-lpfeature__desc">{description}</p>
            </div>
        </Tag>
    )
}