import React from 'react';
import { connect } from "react-redux";
import User from './User';

// importing actions 
import { fetchPostsAndUser } from "../actions"

class PostList extends React.Component {
    componentDidMount() {
        // call actions from props so it dispatched to reducer
        this.props.fetchPostsAndUser()
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


// this function will get our state from the store and map it to props
const mapStateToProps = (state) => {
    return { posts: state.posts }
}

// connect function take first argument (mapStateToProps), the second arguments is action creators to map it ot props and call it
export default connect(mapStateToProps, { fetchPostsAndUser })(PostList);
