// components/BikeListItem.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import './BikeListItem.css'

export type Bike = {
    id: string | number
    brand?: string
    model?: string
    color?: string
    year?: string | number
}

type Props = {
    bike: Bike
}

const BikeListItem: React.FC<Props> = ({ bike }) => {
    const { id, brand, model, color, year } = bike || {}
    const isClickable = id !== undefined && id !== null && id !== ''

    const content = (
        <div className="bikeItemRow">
            <div className="bikeItemTexts">
                <div className="bikeItemTitle">
                    {brand || 'Unbekannte Marke'}{model ? ` • ${model}` : ''}
                </div>
                <div className="bikeItemMeta">
                    {[
                        color && `${color}`,
                        year !== undefined && year !== null && year !== '' ? `• ${year}` : null
                    ].filter(Boolean).join(' ')}
                </div>
            </div>
            <span className="bikeItemCta">{isClickable ? 'Details ›' : ''}</span>
        </div>
    )

    if (isClickable) {
        return (
            <Link
                to={`/bikes/${id}`}
                className="bikeItem"
                aria-label={`Details zu ${brand || 'Fahrzeug'}`}
            >
                {content}
            </Link>
        )
    }

    // Fallback ohne Link, wenn keine ID vorhanden ist
    return (
        <div className="bikeItem" aria-label={brand || 'Fahrzeug'}>
            {content}
        </div>
    )
}

export default BikeListItem
