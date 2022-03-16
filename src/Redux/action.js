//////////////////////////////login and signup actions///////////////////////////

//manage phone number input state
export const loginInputHandler = (val,name) => {
    return {type : "handleLoginInput",payload:{value:val,name:name}}
}

//toggle address input box
export const addressBoxToggle = () => {
    return {type:"toggleAddressBox"}
}

//change input state
export const signupInputHandler = (val,name) => {
    return {type:"handleSignupInput", payload : {value:val,name:name}}
}

/////////////////////////product and cart actions//////////////////////////

//Add product to cart
export const addToCart = (product) => {
    return {type:"addToCart", payload:product}
}

//Increase product quantity
export const increaseQty = (product) => {
    return {type:"increaseQty", payload:product}
}

//Decrease product quantity
export const decreaseQty = (product) => {
    return {type:"decreaseQty", payload:product}
}

