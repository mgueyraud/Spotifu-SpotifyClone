import { Fragment, useState } from "react";
import Header from "../components/Header";
import Music from "../data/musics.json";
import Hero from "../components/Hero";
import PlayList from "../container/Playlist";
import PlayListItem from "../components/Playlist/PlaylistItem";
import { useDispatch } from "react-redux";
import { changeMusic } from "../actions";


const Playlist = ({ location }) => {

    let coverImg, albumTitle, albumSubtitle, albumFollowers;
    const [musics, setMusics] = useState(Music);
    const dispatch = useDispatch();

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

    const handleClick = (id) => {
        setMusics(
            [
                ...musics.map(music => {
                    music.isPlaying = false;
                    if (music.id === id) {
                        dispatch(changeMusic(music));
                        music.isPlaying = true;
                    }
                    return music;
                })
            ]
        );
    };


    return (
        <Fragment>

            <Header isTransparent />

            <Hero
                albumTitle={albumTitle}
                albumSubtitle={albumSubtitle}
                albumFollowers={albumFollowers}
                coverImg={coverImg}
            />


            <PlayList >
                {
                    musics.map((music, i) => {
                        return (
                            <PlayListItem
                                key={music.id}
                                title={music.musicTitle}
                                duration={music.duration}
                                albumTitle={albumTitle}
                                isPlaying={music.isPlaying}
                                lastModified="Hace 15 dias"
                                artists={music.artists}
                                handleClick={() => handleClick(music.id)}
                            />
                        );
                    })
                }

            </PlayList>
        </Fragment>
    );
}

export default Playlist;