const PlaylistItem = ({ title, artists, duration, albumTitle, lastModified, isPlaying, handleClick }) => {
    return (
        <tr className="playlist__music">
            <td className="-play">
                <img src={`./assets/img/icons/${!isPlaying ? "play--hover.png" : "pause.png"}`} alt="" onClick={handleClick} />
            </td>
            <td className="-title">
                <img src="./assets/img/icons/heart-bold.svg" alt="Like Icon" className="-like" /> {title}
            </td>
            <td>{artists}</td>
            <td>{albumTitle}</td>
            <td className="-dark">{lastModified}</td>
            <td className="-dark">{duration}</td>
        </tr>
    );
}

export default PlaylistItem;