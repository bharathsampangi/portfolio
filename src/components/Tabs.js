import React from 'react'
import '../styles/Tabs.scss'
import '../variables/Typography.scss'

function Tabs() {

    const openBar = (bar) => {
        let bars = document.getElementsByClassName("tabs__bars")
        for(let i=0; i<bars.length; i++) {
            bars[i].style.display = "none"
        }
        document.getElementById(bar).style.display = "block"
    }

    return (
        <section className="tabs" >
            <div className="tabs__bar">
                <button className="btn btn__primary" onClick={() => openBar('experience')} >Experience</button>
                <button className="btn btn__flat" onClick={() => openBar('education')}>Education</button>
            </div>
            <div id="experience" className="tabs__bars">
                <div className="row">
                    Hello
                </div>
            </div>
            <div id="education" className="tabs__bars" style={{display: 'none'}}>
                <div className="row">
                    Hi
                </div>
            </div>
        </section>        
    )
}

export default Tabs