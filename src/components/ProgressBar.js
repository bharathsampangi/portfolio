import React from "react"
import '../styles/ProgressBar.scss'
import '../variables/Typography.scss'

function ProgressBar({text, progress}) {
    return (
        <div className="progress">
            <div className="progress__details">{text}<span className="progress__details-progress">{progress}</span></div>
            <div class="progress__outline">
                <div class="progress__inline">
                    <div className="progress__bar" style={{width: progress}}></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;