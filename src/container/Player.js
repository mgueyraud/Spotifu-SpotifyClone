
import PlayerDescription from "../components/Player/PlayerDescription";
import PlayerL from "../libraries/player";
import { useEffect } from "react";

const Player = () => {

    useEffect(() => {
        const player = new PlayerL({
            el: ".js-audio",
            playButton: ".js-play-button",
            currentMusic: "./assets/music/dakiti.mp3",
            progress: ".js-progress",
            duration: ".js-duration",
            currentTime: ".js-current-time"
        });
    }, []);

    return (
        <footer className="appContainer__player player-wrapper">
            <PlayerDescription
                title="Dakiti"
                artists="Jhay Cortez, Bad bunny"
            />
            <div className="player">
                <audio src="" className="js-audio" preload="metadata"></audio>
                <div className="player__controls">
                    <img src="./assets/img/icons/skip.svg" alt="Skip Prev Icon" className="player__skip player__skip--prev" />
                    <img src="./assets/img/icons/play--hover.png"
                        data-pause="./assets/img/icons/pause.png"
                        data-play="./assets/img/icons/play--hover.png"
                        alt="Play Icon"
                        className="player__play js-play-button" />
                    <img src="./assets/img/icons/skip.svg" alt="Skip Next Icon" className="player__skip player__skip--next" />
                </div>
                <div className="player__timing">
                    <span className="js-current-time">00:00</span>
                    <div className="player__progress js-progress">
                        <div className="progress-bar">

                        </div>
                    </div>
                    <span className="js-duration">00:00</span>
                </div>
            </div>
        </footer>
    );
}

export default Player;