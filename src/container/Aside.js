import AsideNav from "../components/Aside/AsideNav";
import { useSelector } from "react-redux";

const Aside = () => {

    const playerState = useSelector(state => state.player);

    return (
        <aside className="appContainer__aside aside">
            <img src="./assets/img/icons/logo.svg" alt="Logo" />
            <AsideNav />
            <div className="list-wrapper">
                <div className="aside__item">
                    <h4>Tu biblioteca</h4>
                    <ul className="list">
                        <li>
                            <a href="#">Creada para ti</a>
                        </li>
                        <li>
                            <a href="#">Escuchados recientemente</a>
                        </li>
                        <li>
                            <a href="#">Tus Me Gusta</a>
                        </li>
                        <li>
                            <a href="#">Artistas</a>
                        </li>
                        <li>
                            <a href="#">Podcasts</a>
                        </li>
                    </ul>
                </div>
                <div className="aside__item">
                    <h4>Tu biblioteca</h4>
                    <ul className="list">
                        <li>
                            <a href="#">Creada para ti</a>
                        </li>
                        <li>
                            <a href="#">Escuchados recientemente</a>
                        </li>
                        <li>
                            <a href="#">Tus Me Gusta</a>
                        </li>
                        <li>
                            <a href="#">Artistas</a>
                        </li>
                        <li>
                            <a href="#">Podcasts</a>
                        </li>
                    </ul>
                </div>
                <div className="aside__item">
                    <h4>Tu biblioteca</h4>
                    <ul className="list">
                        <li>
                            <a href="#">Creada para ti</a>
                        </li>
                        <li>
                            <a href="#">Escuchados recientemente</a>
                        </li>
                        <li>
                            <a href="#">Tus Me Gusta</a>
                        </li>
                        <li>
                            <a href="#">Artistas</a>
                        </li>
                        <li>
                            <a href="#">Podcasts</a>
                        </li>
                    </ul>
                </div>
                <div className="aside__item">
                    <h4>Tu biblioteca</h4>
                    <ul className="list">
                        <li>
                            <a href="#">Creada para ti</a>
                        </li>
                        <li>
                            <a href="#">Escuchados recientemente</a>
                        </li>
                        <li>
                            <a href="#">Tus Me Gusta</a>
                        </li>
                        <li>
                            <a href="#">Artistas</a>
                        </li>
                        <li>
                            <a href="#">Podcasts</a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src={playerState.coverImg} className="aside__playing js-image-cover" alt="Bad Bunny - Dakiti" />
        </aside>
    );
}

export default Aside;