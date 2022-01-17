import * as actions from "./actionTypes";

export function addBug(discretion) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            discretion
        }
    }
}

export function removeBug(id) {
    return {
        type: actions.BUD_REMOVED,
        payload: {
            id
        }
    }
}
export function resolveBug(id) {
    return {
        type: actions.BUD_REMOVED,
        payload: {
            id
        }
    }
}