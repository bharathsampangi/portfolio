import React from 'react'
import Header from './Header'
import About from './About'
import Tabs from './Tabs'
import Skills from './Skills'
import Portfolio from './Portfolio'

function Home() {
    return(
        <>
            <Header />
            <About />
            <Tabs />
            <Skills />
            <Portfolio />
        </>
    )
}

export default Home;