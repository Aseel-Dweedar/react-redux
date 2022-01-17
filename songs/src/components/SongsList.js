import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongsList extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.songs && this.props.songs.map((value, idx) => {
                    return <div key={idx} >
                        <h3 style={{ display: "inline-block", marginRight: "50px" }} >{value.title}</h3>
                        <button>SELECT</button>
                    </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongsList);
