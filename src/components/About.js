import React from 'react'
import '../styles/About.scss'

function About() {
    return (
        <section className="about">
            <div class="row">
                <div className="about__text">
                    <h6>MAIN INFO</h6>
                    <h2>About me</h2>
                    <p>My name is Bharath Sampangi. I'm a Fullstack Developer. I have 4 years of experience in building web application. 
                        I am working in Spurtree Technologies as Fullstack Developer. Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="btn btn__primary">Download CV</button>
                </div>
                <div className="about__social">
                    <i className="fab fa-github"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
        </section>     
    )
}

export default About