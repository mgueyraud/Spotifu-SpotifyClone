const PlayerTiming = () => {
    return (
        <div className="player__timing">
            <span className="js-current-time">00:00</span>
            <div className="player__progress js-progress">
                <div className="progress-bar">

                </div>
            </div>
            <span className="js-duration">00:00</span>
        </div>
    );
}

export default PlayerTiming;