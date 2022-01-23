import jsonPlaceholder from "../apis/jsonPlaceholder";

// lodash library "main use here is memoize function so we don't have to fetch users with the same id again and again"
import _ from "lodash";

/*---------- fetch posts --------------- */

// common way with redux thunk - first argument is dispatch
export const fetchPosts = () => async (dispatch) => {
    let response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

/*---------- fetch users --------------- */

export const fetchUsers = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USERS", payload: response.data });
};

/*---------- Solve fetching same user multi times using lodash library --------------- */

/*
export const fetchUsers = (id) => async (dispatch) => _fetchUsers(id, dispatch);

// we can't memoize inside action creator so we create external function

const _fetchUsers = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USERS", payload: response.data });
});
*/

/*---------- Solve fetching same user multi times using action creator that calls other action creators --------------- */

// second argument with redux thunk is "getState", is a redux function give us access to all of our redux store data
export const fetchPostsAndUser = () => async (dispatch, getState) => {

    await dispatch(fetchPosts());

    // this map with lodash execute second argument "userId" from the first argument "getState().posts ==> the posts form reducer"
    // uniq to remove the duplication from the array
    const usersIds = _.uniq(_.map(getState().posts, "userId"));
    usersIds.forEach(id => dispatch(fetchUsers(id)));

    // OR (chain with lodash)
    // _.chain(getState().posts).map("userId").uniq().forEach(id => dispatch(fetchUsers(id))).value();
};




