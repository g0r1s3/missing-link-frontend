// @ts-ignore
import React from 'react'
import './Counter.css' // added

export function Counter({ value = 0, onChange, step = 1, label = 'Count' }) {
    const increment = () => {
        if (typeof onChange === 'function') onChange(value + step)
    }

    return (
        <div className="retro-counter">
            <button className="retro-counter__button" onClick={increment}>
                <span className="retro-counter__label">{label}</span>
                <span className="retro-counter__value">{value}</span>
            </button>
        </div>
    )
}

export default Counter