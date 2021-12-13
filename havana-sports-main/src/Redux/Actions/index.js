import { SIGNIN_WITH_JWT } from "@constants/actions";

export const SigninWithJwt = payload => {
    return dispatch => { 
        dispatch({
            type: SIGNIN_WITH_JWT,
            payload: payload
        })
     }
}