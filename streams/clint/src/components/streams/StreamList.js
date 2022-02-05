import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchStreams } from "../../actions"

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (this.props.currentUserId === stream.userId) {
            return (
                <div className='right floated content' >
                    <Link to={`/stream/edit/${stream.id}`} className='ui button primary' >Edit</Link>
                    <Link to={`stream/delete/${stream.id}`} className='ui button negative' >Delete</Link>
                </div>
            )
        }
    }

    renderCreateStreamButton() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }} >
                    <Link to="/stream/new" className='ui button primary' >Create Stream</Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id} >
                    {this.renderAdmin(stream)}
                    <i className='large middle aligned icon camera' />
                    <div className='content' >
                        <Link to={`stream/show/${stream.id}`} className='header' >
                            {stream.title}
                        </Link>
                        <div className='description' >{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className='ui celled list' > {this.renderList()} </div>
                {this.renderCreateStreamButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    /* 
    streams state in the store saved like this"
    { 
        1 : { title : 1 , description : 1 , userId : 1 },
        2 : { title : 2 , description : 2 , userId : 2 },
    }
    that why we need just the values
    */
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
