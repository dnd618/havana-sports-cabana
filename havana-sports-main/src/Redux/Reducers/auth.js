import { SIGNIN_WITH_JWT } from "@constants/actions";

const authInitialState = {
    user: [],
};

function authReducer(state = authInitialState, action) {
    switch (action.type) {
        case SIGNIN_WITH_JWT:
            console.log(action.payload)
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

export default authReducer;