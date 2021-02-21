
import PlayerDescription from "../components/Player/PlayerDescription";
import PlayerL from "../libraries/player";
import { useEffect } from "react";
import PlayerControls from "../components/Player/PlayerControls";
import PlayerTiming from "../components/Player/PlayerTiming";
import { useSelector } from "react-redux";

const Player = () => {

    let player = null;

    const playerState = useSelector(state => state.player);

    useEffect(() => {
        player = new PlayerL({
            el: ".js-audio",
            playButton: ".js-play-button",
            currentMusic: "./assets/music/dakiti.mp3",
            progress: ".js-progress",
            duration: ".js-duration",
            currentTime: ".js-current-time"
        });
    });

    useEffect(() => {
        if (playerState) {
            player.play(playerState.src);
        }
    }, [playerState]);

    return (
        <footer className="appContainer__player player-wrapper">
            <PlayerDescription
                title={playerState.musicTitle}
                artists={playerState.artists}
            />
            <div className="player">
                <audio src="" className="js-audio" preload="metadata"></audio>
                <PlayerControls />
                <PlayerTiming />
            </div>
        </footer>
    );
}

export default Player;