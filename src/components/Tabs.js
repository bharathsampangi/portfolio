import React, {useState} from 'react'
import '../styles/Tabs.scss'
import '../variables/Typography.scss'
import Card from './Card'

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
                    <Card>
                        <h5>Software Engineer</h5>
                    </Card>
                </div>
            </div>
            <div id="education" className="tabs__bars" style={active !== 'education' ? {display: 'none'} : {}}>
                <div className="row">
                    Hi
                </div>
            </div>
        </section>        
    )
}

export default Tabs