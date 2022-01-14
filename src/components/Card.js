import React from 'react'
import '../styles/Card.scss'

export function LeftCard({children}) {
    return (
        <>
            <div class="card card__left">
                {children}
            </div>
        </>
    )
}

export function RightCard({children}) {
    return (
        <>
            <div class="card card__right">
                {children}
            </div>
        </>
    )
}

export function PortfolioCard({src}) {
    return(
        <div className="card card__portfolio">
            <img src={src} className="card__image" />
        </div>
    )
}