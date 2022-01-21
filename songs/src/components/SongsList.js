import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import Details from './Details';
class SongsList extends Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.songs && this.props.songs.map((value, idx) => {
                        return <div key={idx} >
                            <h3 style={{ display: "inline-block", marginRight: "50px" }} >{value.title}</h3>
                            <button onClick={() => this.props.selectSong(value)}>SELECT</button>
                        </div>
                    })}
                </div>
                <div>
                    <Details />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongsList);
