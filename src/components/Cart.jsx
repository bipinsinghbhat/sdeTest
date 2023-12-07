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
    <div>
      <h1>Cart</h1>
      <div>
        {/* Display cart items */}
        {cartData?.map((el) => (
          <div key={el.id}>
            <img src={el.image} alt="" />
            <p>{el.title}</p>
            <p>Price: Rs{el.price}</p>
            <div>
              <button onClick={() => handleDecrease(el.id)}  disabled={el.quantity===1}>-</button>
              <p>{el.quantity}</p>
              <button onClick={() => handleIncrease(el.id)}>+</button>
            </div>
            <button onClick={() => handleRemove(el.id)}>Remove</button>
          </div>
        ))}

        <p>Total:{TotalAmount()}</p>
 

        {/* Display total price */}
        {/* Add checkout button or other functionality */}
      </div>
     
   


    </div>
  );
};

export default Cart;
