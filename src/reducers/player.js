const initialState = {
    id: 1,
    musicTitle: "Bichota",
    artists: "Karol G",
    src: "./assets/music/bichota.mp3",
    duration: "02:56",
    isPlaying: false,
    coverImg: "./assets/img/placeholders/placeholder-cover--karolG.png"
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_MUSIC":
            return action.music;
        default:
            return state;
    }
};

export default playerReducer;