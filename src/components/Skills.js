import React from 'react'

import ProgressBar from './ProgressBar'

function Skills() {
    return (
        <section className="skills">
            <div className="row">
                <h2>Skills</h2>
            </div>
            <div class="row skills__box">
                <div className="skills__container">
                    <ProgressBar text='HTML 5' progress='100%'/>
                    <ProgressBar text='CSS 3' progress='90%'/>
                    <ProgressBar text='SASS' progress='80%'/>
                    <ProgressBar text='ReactJS' progress='90%'/>
                    <ProgressBar text='NodeJS' progress='80%'/>
                    <ProgressBar text='React Native' progress='70%'/>
                </div>
            </div>
        </section>
    )
}

export default Skills