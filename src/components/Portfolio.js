import React from 'react'
import {PortfolioCard} from './Card'
import '../styles/Portfolio.scss'

function Portfolio() {
    return (
        <section class="portfolio">
            <div class="row">
                <h6>PORTFOLIO</h6>
                <h2>Latest works</h2>
            </div>
            <div class="row">
                <div className="portfolio__main">
                    <div className="portfolio__container">
                        <PortfolioCard src="/images/omnifood.png"/>
                        <PortfolioCard src="/images/old-profile.png"/>
                        <PortfolioCard src="/images/banana.png"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio