import React from 'react'

function Header() {
    return (
        <>
            <div className="header">
                <div className="header__content">
                    <div className="header__content-text">
                        <p>Hello, I'm </p>
                        <h1>Bharath Sampangi</h1>
                        <h3>A Fullstack Developer</h3>
                        <a href="#about" className="btn__primary header__button" rel="no_referrer">More About Me</a>
                    </div>
                </div>
                <div className="header__img">
                    <div className="header__img-outline">
                        <div className="header__img-inline">
                            <img src="images/profile2.avif" alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header