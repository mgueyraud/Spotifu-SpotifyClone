const PlayerDescription = ({ title, artists }) => {
    return (
        <div className="player__description">
            <h1>
                <span className="js-title">{title}</span>
                <img src="./assets/img/icons/heart.svg" alt="Like Icon" />
            </h1>
            <p className="js-subtitle">{artists}</p>
        </div>
    );
}

export default PlayerDescription;