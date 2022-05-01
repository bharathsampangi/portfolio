import React, {useState} from 'react'
import {LeftCard, RightCard} from './Card'

function Tabs() {
    const [active, setActive] = useState("experience")
    const openBar = (bar) => {
        setActive(bar)
    }

    return (
        <section className="tabs" >
            <div className="tabs__bar">
                <button className={active === 'experience' ? 'btn btn__primary' : 'btn btn__flat'} onClick={() => openBar('experience')} >Experience</button>
                <button className={active === 'education' ? 'btn btn__primary' : 'btn btn__flat'} onClick={() => openBar('education')}>Education</button>
            </div>
            <div id="experience" className="tabs__bars" style={active !== 'experience' ? {display: 'none'} : {}}>
                <div className="row">
                    <div className="tabs__tab clearfix">
                        <div className="tabs__tab-left">
                            <div className="tabs__tab-left-round"></div>
                            <LeftCard>
                                <h5>Aug. 2021 - Present</h5>
                                <h4>Software Engineer</h4>
                                <span className="text__medium">Spurtree Technologies, Bangalore</span>
                                <p>
                                    Designing backend API's on Nodejs with efficient error handling. Using Sequelize to connect to SQL and build models and queries. Participating in
                                    model building based on requirements. Integrating robust applications like Nodebb forums and Algolia Search in backend.
                                    Building UI on React and integrating API's from backend and handling pagination.
                                </p>   
                            </LeftCard>
                        </div>
                    </div>
                    <div className="tabs__tab clearfix">
                        <div className="tabs__tab-right">
                            <div className="tabs__tab-right-round"></div>
                            <RightCard>
                                <h5>Apr. 2020 - Aug. 2021</h5>
                                <h4>Full stack Developer</h4>
                                <span className="text__medium">Allstate Technology Solutions, Bangalore</span>
                                <p>Built multiple products using React, SQL and Spring Boot. Collaborating with product teams across organization for product development and support.
                                    Mentoring colleagues and new joinees on product info and development. Keeping product healthy by consistent maintainence and deploys.</p>   
                            </RightCard>
                        </div>
                    </div>
                    <div className="tabs__tab clearfix">
                        <div className="tabs__tab-left">
                            <div className="tabs__tab-left-round"></div>
                            <LeftCard>
                                <h5>Oct. 2017 - Apr.2020</h5>
                                <h4>Software Developer</h4>
                                <span className="text__medium">Improwea Business Solutions Private Limited, Bangalore</span>
                                <p>Built scalable backends on Spring Boot, MongoDB. Developed Cross platform mobile application using Apache Cordova framework.
                                    Built extensive UI's and Component libraries using React, HTML and CSS.</p>   
                            </LeftCard>
                        </div>
                    </div>
                </div>
            </div>
            <div id="education" className="tabs__bars" style={active !== 'education' ? {display: 'none'} : {}}>
                <div className="row">
                    <div className="tabs__tab clearfix">
                        <div className="tabs__tab-left">
                            <div className="tabs__tab-left-round"></div>
                            <LeftCard>
                                <h5>Jun. 2013 - May. 2017</h5>
                                <h4>Bachelor of Engineering, Information Science</h4>
                                <span className="text__medium">Visveshvaraya Technological University</span>
                                <p>
                                    Aggregate: 71%
                                </p>   
                            </LeftCard>
                        </div>
                    </div>
                    <div className="tabs__tab clearfix">
                        <div className="tabs__tab-right">
                            <div className="tabs__tab-right-round"></div>
                            <RightCard>
                                <h5>Jun. 2012 - Mar. 2013</h5>
                                <h4>12th standard, PCMB</h4>
                                <span className="text__medium">Central Board of Secondary Education</span>
                                <p>Aggregate: 70%</p>   
                            </RightCard>
                        </div>
                    </div>
                    <div className="tabs__tab clearfix">
                        <div className="tabs__tab-left">
                            <div className="tabs__tab-left-round"></div>
                            <LeftCard>
                                <h5>Jun. 2010 - Mar. 2011</h5>
                                <h4>10th standard</h4>
                                <span className="text__medium">Central Board of Secondary Education</span>
                                <p>Aggregate: 92%</p>   
                            </LeftCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default Tabs