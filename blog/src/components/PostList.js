import React from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions"

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    renderList() {
        return this.props.posts.map(post => {
            return <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
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