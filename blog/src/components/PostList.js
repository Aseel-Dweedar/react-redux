import React from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions"
import User from './User';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    renderList() {
        return this.props.posts.map((post, idx) => {
            return <div key={idx} >
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <User userId={post.userId} />
            </div>
        })
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
