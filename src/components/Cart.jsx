import { useDispatch, useSelector } from "react-redux";
import {  decreaseqty, increaseqty, removefromcart } from "../redux/action";

const Cart = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  console.log("cd",cartData)
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseqty(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseqty(id));
  };

  const handleRemove = (id) => {
    dispatch(removefromcart(id));
  };

  const TotalAmount=()=>{
     if(cartData.length===0){
      return 0;
     }
      const total=cartData.reduce((acc,el)=>{
        return acc+el.price*el.quantity
      },0)

      console.log("Total",total)
        return total
        
    }


 

  return (
    <div className="flex w-5/6 mx-auto justify-between" >
     
      <div className="w-3/5 h-48 border border-solid border-black">
        {/* Display cart items */}
        {cartData?.map((el) => (
          <div key={el.id} className="w-1/4 h-48 border border-solid border-black">
            <img src={el.image} alt="" />
            <p>{el.title}</p>
            <p>Price: Rs{el.price}</p>
            <div className="w-1/4 h-48 border border-solid border-black">
              <button onClick={() => handleDecrease(el.id)}  disabled={el.quantity===1}>-</button>
              <p>{el.quantity}</p>
              <button onClick={() => handleIncrease(el.id)}>+</button>
            </div>
            <button onClick={() => handleRemove(el.id)}>Remove</button>
          </div>
        ))}

      
 

        {/* Display total price */}
        {/* Add checkout button or other functionality */}
      </div>
     
         <div className="w-1/4 h-48 border border-solid border-black">
         <p>Total:{TotalAmount()}</p>
         </div>


    </div>
  );
};

export default Cart;
