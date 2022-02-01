import streams from '../apis/streams'
import * as types from "./types"

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

export const createStream = (formValues) => async (dispatch) => {
    streams.post('./streams', formValues)
};