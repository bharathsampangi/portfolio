import React from 'react'
import '../styles/About.scss'

function About() {
    return (
        <section className="about" id="about">
            <div class="row">
                <div className="about__text">
                    <h6>MAIN INFO</h6>
                    <h2>About me</h2>
                    <p>My name is Bharath Sampangi. I'm a Fullstack Developer. I have 4 years of experience in building web application. 
                        I am working in Spurtree Technologies as Fullstack Developer. I have experience building both Frontend and Backend
                        using Javascript stack. My tech stack is ReactJS, NodeJS, Redux, ContextAPI and ExpressJS. I have experience building
                        UI on ReactJS using HTML and Sass.
                    </p>
                    {/* <button className="btn btn__primary">Download CV</button> */}
                </div>
                <div className="about__social">
                    <a href="https://github.com/bharathsampangi" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/bharathsampangi" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </section>     
    )
}

export default About