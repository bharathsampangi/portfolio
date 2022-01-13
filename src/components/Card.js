import React from 'react'
import '../styles/Card.scss'

function Card({children}) {
    return (
        <>
        <div class="card">
            {children}
        </div>
        </>
    )
}

export default Card;