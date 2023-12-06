import { Add_To_Cart } from "./actionTypes"

const initialState={
    cart:[]
}

export const cartReducer=(state=initialState,{type,payload})=>{
  switch(type){
 case Add_To_Cart:
    const alreadyexistitem = state.cart.find(item => item.id === payload.id);   
 if(alreadyexistitem){
    alert(`Already in the Cart`)
    return state
 }
   else{
    alert(`Added to the cart`)
    return {...state,cart:[...state.cart,payload]}
   }
   


    default: return state;


  }


}
