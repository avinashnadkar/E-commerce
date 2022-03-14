let initState = {
   cart : [],
   total : 0,
   totalSavings : 0,
   mrp : 0,
}

const cartReducer = (state=initState, action) => {

    //Add product to cart
    if(action.type === "addToCart"){
        let newCart = state.cart
        let prod = action.payload
        prod.quantity += 1

        //return total price, qty , discount
        return {
            ...state,
            cart : [...newCart,prod],
            total : state.total +  ( prod.price -  prod.discount) *  prod.quantity,
            totalSavings : state.totalSavings + prod.discount,
            mrp : state.mrp + prod.price
        }
    }

    //Increase quantity
    if(action.type === "increaseQty"){
    
        for(let i=0;i<state.cart.length;i++){
            if(state.cart[i].name === action.payload.name){
                state.cart[i].quantity++
                break;
            }
        }

        //calculate total price
        let totalPrice = 0;
        let totalSave = 0;
        let totalMrp = 0;
        for(let j=0;j<state.cart.length;j++){
            totalPrice +=  (state.cart[j].price - state.cart[j].discount) * state.cart[j].quantity
            totalSave += state.cart[j].discount * state.cart[j].quantity
            totalMrp += state.cart[j].price * state.cart[j].quantity
        }
        
        return{
             ...state,
             cart : [...state.cart],
             total : totalPrice,
             totalSavings :  totalSave,
             mrp :  totalMrp
        }
    }

    //Decrease quantity
    if(action.type === "decreaseQty"){

        for(let i=0;i<state.cart.length;i++){
            if(state.cart[i].name === action.payload.name){
                state.cart[i].quantity--
                if(state.cart[i].quantity <= 0){
                    state.cart.splice(i, 1); 
                }
                break;
            }
        }

        //calculate total price
        let totalPrice = 0;
        let totalSave = 0;
        let totalMrp = 0;
        for(let j=0;j<state.cart.length;j++){
            totalPrice +=  (state.cart[j].price - state.cart[j].discount) * state.cart[j].quantity
            totalSave += state.cart[j].discount * state.cart[j].quantity
            totalMrp += state.cart[j].price * state.cart[j].quantity
        }

        return{
             ...state,
             cart : [...state.cart],
             total : totalPrice,
             totalSavings :  totalSave,
             mrp :  totalMrp
        }
    }

    return state;
}

export default cartReducer;