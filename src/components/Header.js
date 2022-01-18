import React from 'react'
import '../styles/Header.scss'
import '../variables/Typography.scss'

function Header() {
    return (
        <>
            <div className="header">
                <div className="header__content">
                    <div class="header__content-text">
                        <p>Hello, I'm </p>
                        <h1>Bharath Sampangi</h1>
                        <h3>A Fullstack Developer</h3>
                        <a href="#about" className="btn btn__primary header__button" rel="no_referrer" style={{fontSize: '1.15rem'}}>More About Me</a>
                    </div>
                </div>
                <div className="header__img">
                    <div className="header__img-outline">
                        <div className="header__img-inline">
                            <img src="images/profile2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header