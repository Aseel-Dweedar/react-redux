import React from 'react';
import { connect } from 'react-redux';

const Details = ({ song }) => {
    if (!song) {
        return <div>SELECT A SONG</div>
    }
    return <div>
        <h1>{song.title}</h1>
        <p>{song.duration}</p>
    </div>;
}

const mapStateToProps = (state) => {
    return { song: state.selectedSongs }
}

export default connect(mapStateToProps)(Details);
