
//Get user data from localstorage if any
let info = JSON.parse(localStorage.getItem("userData"));
let userInfo;

if(info != undefined){
    userInfo = {
        u_id : info.u_id,
        name : info.name,
        email : info.email,
        address : info.address,
        token : info.token,
        isUserLoggedIn : true
    }
}else{
    userInfo = {
        u_id : "",
        name : "",
        email : "",
        address : "",
        token : "",
        isUserLoggedIn : false
    }
}


const userInfoReducer = (state = userInfo, action) => {
    if(action.type == "isUserLoggedIn"){
        return {
            ...state,
            isUserLoggedIn : action.payload
        }
    }

    if(action.type == "setUserInfo"){
        console.log(action.payload)
        localStorage.setItem("userData",JSON.stringify(action.payload))
        return {
            ...state,
            ...action.payload
        }
    }

    return state;
}

export default userInfoReducer;