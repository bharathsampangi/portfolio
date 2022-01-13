import React from 'react'
import '../styles/Card.scss'

export function LeftCard({children}) {
    return (
        <>
            <div class="card">
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