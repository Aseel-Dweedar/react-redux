import streams from '../apis/streams'
import * as types from "./types"


/* ---------------------------- Auth actions ---------------------------- */
export const signIn = (userId) => {
    return {
        type: types.SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: types.SIGN_OUT,
    }
};

/* -------------------------- streams actions ---------------------------- */
export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('./streams', { ...formValues, userId });
    dispatch({
        type: types.CREATE_STREAM,
        payload: response.data
    })
};

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get('./streams');
    dispatch({
        type: types.FETCH_STREAMS,
        payload: response.data
    })
};

export const fetchStream = (id) => async (dispatch) => {
    const response = await streams.get(`./streams/${id}`);
    dispatch({
        type: types.FETCH_STREAM,
        payload: response.data
    })
};

export const DELETE_STREAM = (id) => async (dispatch) => {
    await streams.delete(`./streams/${id}`);
    dispatch({
        type: types.DELETE_STREAM,
    })
};

export const editStream = (id, formValues) => async (dispatch) => {
    const response = await streams.put(`./streams/${id}`, formValues);
    dispatch({
        type: types.EDIT_STREAM,
        payload: response.data
    })
};