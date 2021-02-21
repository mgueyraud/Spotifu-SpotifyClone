import Header from "../components/Header";

const { Fragment } = require("react")

const Playlist = ({ location }) => {

    let coverImg, albumTitle, albumSubtitle, albumFollowers;

    if (!location.state) {
        coverImg = "/assets/img/placeholders/placeholder-cover-hero.png";
        albumTitle = "Mansion Reggaeton";
        albumSubtitle = "Te pille loco!!!";
        albumFollowers = "2,312,123";
    } else {
        coverImg = location.state.coverImg;
        albumTitle = location.state.albumTitle;
        albumSubtitle = location.state.albumSubtitle;
        albumFollowers = location.state.albumFollowers;
    }


    return (
        <Fragment>
            <Header isTransparent />
            <section className="hero js-hero">
                <div className="hero__content js-hero-content">
                    <h1 className="title-black--lg text--white">{albumTitle}</h1>
                    <p className="mt-16">{albumSubtitle}</p>
                    <p>{albumFollowers} seguidores.</p>
                    <button className="btn btn--primary mt-16">Reproducir</button>
                </div>
                <div className="hero__bg js-hero-bg" data-bg="/assets/img/placeholders/placeholder-cover-hero.png" style={{ backgroundImage: `linear-gradient(to bottom, rgba(47, 47, 47, 0) 0%, #171717 90%), url(${coverImg})` }}></div>
            </section>

            <table className="playlist">
                <thead>
                    <tr>
                        <th className="play"></th>
                        <th>Titulo</th>
                        <th>Artista</th>
                        <th>Album</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="playlist__music">
                        <td className="-play">
                            <img src="./assets/img/icons/play--hover.png" alt="" />
                        </td>
                        <td className="-title">
                            <img src="./assets/img/icons/heart-bold.svg" alt="Like Icon" className="-like" /> Dakiti
                        </td>
                        <td>Bad Bunny</td>
                        <td>YHLQMDLG</td>
                        <td className="-dark">Hace 15 dias</td>
                        <td className="-dark">3:25</td>
                    </tr>
                    <tr className="playlist__music">
                        <td className="-play">
                            <img src="./assets/img/icons/play--hover.png" alt="" />
                        </td>
                        <td className="-title">
                            <img src="./assets/img/icons/heart-bold.svg" alt="Like Icon" className="-like" /> Dakiti
                        </td>
                        <td>Bad Bunny</td>
                        <td>YHLQMDLG</td>
                        <td className="-dark">Hace 15 dias</td>
                        <td className="-dark">3:25</td>
                    </tr>
                    <tr className="playlist__music">
                        <td className="-play">
                            <img src="./assets/img/icons/play--hover.png" alt="" />
                        </td>
                        <td className="-title">
                            <img src="./assets/img/icons/heart-bold.svg" alt="Like Icon" className="-like" /> Dakiti
                        </td>
                        <td>Bad Bunny</td>
                        <td>YHLQMDLG</td>
                        <td className="-dark">Hace 15 dias</td>
                        <td className="-dark">3:25</td>
                    </tr>
                    <tr className="playlist__music">
                        <td className="-play">
                            <img src="./assets/img/icons/play--hover.png" alt="" />
                        </td>
                        <td className="-title">
                            <img src="./assets/img/icons/heart-bold.svg" alt="Like Icon" className="-like" /> Dakiti
                        </td>
                        <td>Bad Bunny</td>
                        <td>YHLQMDLG</td>
                        <td className="-dark">Hace 15 dias</td>
                        <td className="-dark">3:25</td>
                    </tr>
                    <tr className="playlist__music">
                        <td className="-play">
                            <img src="./assets/img/icons/play--hover.png" alt="" />
                        </td>
                        <td className="-title">
                            <img src="./assets/img/icons/heart-bold.svg" alt="Like Icon" className="-like" /> Dakiti
                        </td>
                        <td>Bad Bunny</td>
                        <td>YHLQMDLG</td>
                        <td className="-dark">Hace 15 dias</td>
                        <td className="-dark">3:25</td>
                    </tr>
                    <tr className="playlist__music">
                        <td className="-play">
                            <img src="./assets/img/icons/play--hover.png" alt="" />
                        </td>
                        <td className="-title">
                            <img src="./assets/img/icons/heart-bold.svg" alt="Like Icon" className="-like" /> Dakiti
                        </td>
                        <td>Bad Bunny</td>
                        <td>YHLQMDLG</td>
                        <td className="-dark">Hace 15 dias</td>
                        <td className="-dark">3:25</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}

export default Playlist;