import React from 'react'
import '../styles/Header.scss'

function Header() {
    return (
        <>
            <div className="header">
                <div className="header__content">
                    Header
                </div>
                <div className="header__img">
                    <img src="images/profile.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Header