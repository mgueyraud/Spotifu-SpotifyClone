const PlayerControls = () => {
    return (
        <div className="player__controls">
            <img src="./assets/img/icons/skip.svg" alt="Skip Prev Icon" className="player__skip player__skip--prev" />
            <img src="./assets/img/icons/play--hover.png"
                data-pause="./assets/img/icons/pause.png"
                data-play="./assets/img/icons/play--hover.png"
                alt="Play Icon"
                className="player__play js-play-button" />
            <img src="./assets/img/icons/skip.svg" alt="Skip Next Icon" className="player__skip player__skip--next" />
        </div>
    );
}

export default PlayerControls;