import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {

    componentDidMount() {
        // with react route each component needs to fetch its own data
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        return <div>StreamEdit</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { currentStream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);