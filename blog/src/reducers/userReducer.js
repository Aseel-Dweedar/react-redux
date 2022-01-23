// first argument an reducers is the "state" the last thing we return when the reducer is run
const userReducer = (state = [], action) => {

    // it's better to use switch
    if (action.type === "FETCH_USERS") {

        // should return new state not modify the original to make component re render
        return [...state, action.payload];
    }
    return state;
}

export default userReducer;