const initState = {
    name : "",
    password : "",
    email : "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    addressLine4: "",
    toggleAdressBox : false
}

const signupReducer = (state = initState,action) => {

    if(action.type === "toggleAddressBox"){
        if( state.toggleAdressBox == false){
            return {
                ...state,
                toggleAdressBox : true
            }
        }else{
            return {
                ...state,
                toggleAdressBox : false
            }
        }
    }

    if(action.type === "handleSignupInput"){

        return{
            ...state,
            [action.payload.name] : action.payload.value
        }
        // console.log(action.payload)
    }


    return state
}

export default signupReducer;