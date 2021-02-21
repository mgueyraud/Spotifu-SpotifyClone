import { Link } from "react-router-dom";

const CardMusic = ({ albumTitle, albumSubtitle, albumFollowers, coverImg }) => {
    return (
        <article className="card-music">
            <figure className="card-music__img js-play-hawai">
                <img src={coverImg} alt={`${albumTitle} Cover`} />
                <div className="card-music__img-hover">
                    <img src="./assets/img/icons/play--hover.png" alt="Play Icon" />
                </div>
            </figure>
            <h1>
                <Link to={{
                    pathname: '/play',
                    state: {
                        coverImg,
                        albumTitle,
                        albumSubtitle,
                        albumFollowers
                    }
                }}>
                    {albumTitle}
                </Link>
            </h1>
            <p>{albumSubtitle}</p>
            <p>{albumFollowers} seguidores</p>
        </article>
    );
}

export default CardMusic;