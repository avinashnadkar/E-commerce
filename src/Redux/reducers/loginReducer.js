
const initState = {
    phoneNumber : "",
    showOtpInputBox : false,
    otp : ""
}

const loginReducer = (state = initState,action) => {

   if(action.type === "handleLoginInput"){
         return  {
            ...state,
            phoneNumber : "" + action.payload
         }
   }

   if(action.type === "handleOtpInput"){
       return {
           ...state,
           otp : "" + action.payload
       }
   }

   if(action.type === "toggleOtpBox"){
       return{
           ...state,
           showOtpInputBox : true
       }
   }

   return state;
}

export default loginReducer;