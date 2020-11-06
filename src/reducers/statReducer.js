import {CHANGE_STATS} from "../actions/statsAction";

export default function statReducer(state = {
    followers: 0,
    following: 0
}, action) {
    const stats = {...state.stats};
    switch (action.type) {
        case CHANGE_STATS:
            console.log(action);
            const res = stats[action.fieldType] + action.increment;
            stats[action.fieldType] = res < 0 ? 0 : res;
            return {...state, stats};
        default:
            return state;

    }
}