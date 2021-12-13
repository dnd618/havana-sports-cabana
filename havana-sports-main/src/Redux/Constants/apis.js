import axios from "axios";

const urlmixer = para => {
    const mixedUrl = window.HOSTURL + "/api/" + para;
    return mixedUrl;
}

export const signin = (user) => {
    axios.post(urlmixer("signin"), {
        email: user.email,
        password: user.password,
    })
    .then(response => {
        if(response.data){
            return {
                state : true,
                data : response.data
            };
        } else {
            return {
                state : false,
                data : "something went wrong."
            };
        }
    }).catch(e => {
        return {
            state : false,
            data : e
        };
    })
}