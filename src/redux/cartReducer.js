import { Add_To_Cart,  Clear_Cart,  Decrease_Quantity, Increase_Quantity, Remove_From_Cart } from "./actionTypes"
     
const initialState={
    cart:[]
}

export const cartReducer=(state=initialState,{type,payload})=>{
  switch(type){
 case Add_To_Cart:
    const alreadyexistitem = state.cart.find(el => el.id === payload.id);   
 if(alreadyexistitem){
    alert(`Already in the Cart`)
    return state
 }
   else{
    alert(`Added to the cart`)
    const newpayload={...payload,quantity:1}
    return {...state,cart:[...state.cart,newpayload]}
   }
   

    case Increase_Quantity:return {...state,cart:state.cart.map((el)=>el.id===payload.id ? {...el,quantity:el.quantity+1}:el)}
    case Decrease_Quantity:return {...state,cart:state.cart.map((el)=>el.id===payload.id ? {...el,quantity:el.quantity-1}:el)}

    case Remove_From_Cart:return {...state,cart:state.cart.filter((el)=>el.id!==payload.id)}


    case Clear_Cart: return { ...state, cart: []};


    default: return state


  }
}
