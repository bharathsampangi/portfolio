import React from 'react'
import '../styles/Navbar.scss'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar__menu row">
                    <h3>BS</h3>
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar