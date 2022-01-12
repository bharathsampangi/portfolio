import React from 'react'
import '../styles/Header.scss'
import '../variables/Typography.scss'

function Header() {
    return (
        <>
            <div className="header">
                <div className="header__content">
                    <div class="header__content-text">
                        <p>Hello</p>
                        <h1>I'm Bharath Sampangi</h1>
                        <h3>Fullstack Dev</h3>
                        <button class="btn">More About Me</button>
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