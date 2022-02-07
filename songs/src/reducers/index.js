import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "Fly", duration: "4.06" },
        { title: "Haven", duration: "3.06" },
        { title: "To the sky", duration: "6.06" },
        { title: "Dreams", duration: "1.50" }
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