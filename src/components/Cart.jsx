import { useSelector } from "react-redux"

const Cart=()=>{
const cartdata=useSelector((store)=>store.cartReducer.cart)
 console.log("CD",cartdata)

 return (
    <div>
      <h1>Cart</h1>
      <div>
        {/* Display cart items */}
        {cartdata?.map((el) => (
          <div key={el.id}>
            <img src={el.image} alt="" />
            <p>{el.title}</p>
            
            <p>Price: Rs{el.price}</p>
            {/* Add buttons for modifying quantity or removing items */}
          </div>
        ))}
        {/* Display total price */}
        {/* Add checkout button or other functionality */}
      </div>
    </div>
  );
}
export default Cart