import * as actions from "./actionTypes"

let lastId = 0;

export default function reducer(state = [], action) {
    if (action.type === actions.BUG_ADDED) {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolve: false
            }
        ]
    } else if (action.type === actions.BUD_REMOVED) {
        return state.filter(bug => bug.id != action.payload.id);
    } else if (action.type === actions.BUD_RESOLVED) {

        return state.map(bug => { bug.id === action.payload.id ? { ...bug, resolve: true } : bug });

    }
    return state;
}