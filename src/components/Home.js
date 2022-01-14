import React from 'react'
import Header from './Header'
import About from './About'
import Tabs from './Tabs'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'

function Home() {
    return(
        <>
            <Header />
            <About />
            <Tabs />
            <Skills />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home;