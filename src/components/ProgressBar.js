import React from "react"

function ProgressBar({text, progress}) {
    return (
        <div className="progress">
            <div className="progress__details">{text}<span className="progress__details-progress">{progress}</span></div>
            <div className="progress__outline">
                <div className="progress__inline">
                    <div className="progress__bar" style={{width: progress}}></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;