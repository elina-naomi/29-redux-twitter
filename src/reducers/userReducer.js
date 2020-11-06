import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";

export default function userReducer(state={
                                        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
                                        name: 'Monster'
                                    }
, action) {
    const user = {...state.user};
    switch (action.type) {
        case CHANGE_AVATAR:
            user.avatar = action.payload || user.avatar;
            return {...state, user};
        case CHANGE_NAME:
            user.name = action.payload || user.name;
            return {...state, user};
        default:
            return state;
    }
}