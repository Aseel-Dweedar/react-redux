import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "song 1 ", duration: "4.06" },
        { title: "song 2 ", duration: "3.06" },
        { title: "song 3 ", duration: "6.06" },
        { title: "song 4 ", duration: "1.50" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSongs: selectedSongReducer
});