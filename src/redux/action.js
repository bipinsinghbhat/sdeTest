import { Add_To_Cart, CLEAR_CART, Decrease_Quantity, Increase_Quantity, Remove_From_Cart } from "./actionTypes"


export const addtocart=(product)=>{
    return {type:Add_To_Cart,payload:product}
}

export const removefromcart=(id)=>{
    return {type:Remove_From_Cart,payload:{id}}
}

export const increaseqty=(id)=>{
    return {type:Increase_Quantity,payload:{id}}
}

export const decreaseqty=(id)=>{
    return {type:Decrease_Quantity,payload:{id}}
}
export const clearCart = () => {
    return { type: CLEAR_CART };};