import React from "react";
import { PortfolioCard } from "./Card";

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="row">
                <h6>PORTFOLIO</h6>
                <h2>Latest works</h2>
            </div>
            <div className="row">
                <div className="portfolio__main">
                    <div className="portfolio__container">
                        <PortfolioCard
                            src="/images/banana.avif"
                            text="Banana Talk"
                            link="https://banana-talk-markfive.netlify.app"
                            gitlink="https://github.com/bharathsampangi/banana-language"
                        />
                        <PortfolioCard
                            src="/images/omnifood.avif"
                            text="Omnifood"
                            link="https://omnifoodpremium.netlify.app"
                            gitlink="https://github.com/bharathsampangi/omnifood"
                        />
                        <PortfolioCard
                            src="/images/old-profile.avif"
                            text="Portfolio Old"
                            link="https://bharathsampangi-old.netlify.app"
                            gitlink="https://github.com/bharathsampangi/portfolio_website"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
