
const initState = {
    email : "",
    password : ""
}

const loginReducer = (state = initState,action) => {

   if(action.type === "handleLoginInput"){
         return  {
            ...state,
            [action.payload.name] : action.payload.value
         }
   }

   return state;
}

export default loginReducer;