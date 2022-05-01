import React from 'react'

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

export function PortfolioCard({src, text, link, gitlink}) {
    return(
        <div className="card card__portfolio">
            <img src={src} className="card__image" alt="Profile" />
            <div className="card__link">
                {text}
                <span className="card__link-icons">
                    <a href={link} target="_blank" className="link__small"><i class="fas fa-desktop"></i></a>
                    <a href={gitlink} target="_blank" className="link__small"><i class="fas fa-code-branch"></i></a>
                </span>
            </div>
        </div>
    )
}

export function ContactCard({ iconClass, title, text }) {
    return (
        <div className="card">
            <i className={`icon-big ${iconClass}`}></i>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}