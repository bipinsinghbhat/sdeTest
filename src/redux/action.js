import { Add_To_Cart, Decrease_Quantity, Increase_Quantity, Remove_From_Cart } from "./actionTypes"


export const addtocart=(product)=>{
    return {type:Add_To_Cart,payload:product}
}

export const removefromcart=(Id)=>{
    return {type:Remove_From_Cart,payload:Id}
}

export const increaseqty=(Id)=>{
    return {type:Increase_Quantity,payload:Id}
}

export const decreaseqty=(Id)=>{
    return {type:Decrease_Quantity,payload:Id}
}