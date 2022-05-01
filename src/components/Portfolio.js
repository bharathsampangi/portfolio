import React from 'react'
import {PortfolioCard} from './Card'

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
                        <PortfolioCard src="/images/omnifood.png" text="Omnifood" 
                            link="https://omnifoodpremium.netlify.app" 
                            gitlink="https://github.com/bharathsampangi/omnifood"/>
                        <PortfolioCard src="/images/old-profile.png" text="Portfolio Old" 
                            link="https://bharathsampangi-old.netlify.app" 
                            gitlink="https://github.com/bharathsampangi/portfolio_website"/>
                        <PortfolioCard src="/images/banana.png" text="Banana Talk" 
                            link="https://banana-talk-markfive.netlify.app" 
                            gitlink="https://github.com/bharathsampangi/banana-language"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio