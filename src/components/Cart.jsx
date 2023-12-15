import { useDispatch, useSelector } from "react-redux";
import { decreaseqty, increaseqty, removefromcart } from "../redux/action";
import { useNavigate } from "react-router-dom";
import cartimg from "../images/empty-cart-2130356-1800917.webp";
import { useEffect, useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const cartData = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();
  const [deliveryMessage, setDeliveryMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
 

  const handleIncrease = (id) => {
    dispatch(increaseqty(id));
    
  };

  const handleDecrease = (id) => {
    dispatch(decreaseqty(id));
  };

  const handleRemove = (id) => {
    dispatch(removefromcart(id));
  };

  const TotalAmount = () => {
    const totalPrice = cartData.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);

    return Math.round(totalPrice * 100) / 100;
  };





  
  
  

  const handleNavigate = () => {
    navigate("/Checkout");
  };

  useEffect(() => {
    const total = TotalAmount();
    if (total < 1000) {
      setTotalPrice(total + 100);
      setDeliveryMessage(`Delivery Charges: Rs 100 for shopping less than 1000`);
    } else {
      setTotalPrice(total);
      setDeliveryMessage("Delivery Charges: Free for orders above 1000");
    }
  }, [cartData]);

   

  return (
    <div className="min-h-screen bg-red-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-stretch">
       
        <div className="w-full md:w-2/3  ">
          {cartData.length > 0 ? (
            cartData?.map((el) => (
              <div key={el.id} className="w-full border border-green mt-4 bg-white rounded-md shadow-md">
                <div className="flex justify-between items-center p-4">
                  <img src={el.image} className="h-24 md:h-32" alt="" />
                  <div className="flex flex-col items-start justify-center w-2/3 md:w-3/4 ml-4">
                 <p>{el.title}</p>
                    <p>Price: Rs {el.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleDecrease(el.id)}
                        className={`${
                          el.quantity === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-blue-700"
                        } bg-blue-500 text-white font-bold py-1 px-2 rounded-md`}
                        disabled={el.quantity === 1}
                      >
                        -
                      </button>
                      <p className="px-2 py-1 font-semibold">{el.quantity}</p>
                      <button
                        onClick={() => handleIncrease(el.id)}
                        className="hover:bg-blue-800 bg-blue-500 text-white font-bold py-1 px-2 rounded-md"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemove(el.id)}
                        className="ml-2 bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full bg-white p-8 rounded-md mt-4">
              <img src={cartimg} className="w-full" alt="" />
              <p className="pt-4 font-semibold text-center">
                The cart is Empty, Add some items to buy
              </p>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/3 border border-green mt-4 bg-white rounded-md p-4">
          <p className="text-xl font-semibold text-center mb-4">
            Total Amount: Rs {cartData.length===0 ? 0 :totalPrice}
          </p>
         
          <button
            onClick={handleNavigate}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md shadow-md"
          >
            Buy
          </button>
          {deliveryMessage && <p className="mt-4">{deliveryMessage}</p>}
        </div>


      </div>
    </div>
  );
};

export default Cart;
