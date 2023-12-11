import { useDispatch, useSelector } from "react-redux";
import {  decreaseqty, increaseqty, removefromcart } from "../redux/action";
import { useNavigate } from "react-router-dom";
import cartimg from "../images/empty-cart-2130356-1800917.webp"

const Cart = () => {
  const navigate=useNavigate()
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

     const totalsum = Math.round(total * 100) / 100;
      console.log("Total", totalsum); 
      return totalsum
        
    }

 const handlenavigate=()=>{
     navigate("/Checkout")
 }
 

  return (
 <div className="w-full min-h-[90vh]  bg-red-50">


    <div className="flex lg:w-5/6 mx-auto justify-between xs:flex-col lg:flex-row" >
     
      <div className="lg:w-3/5">
        {/* Display cart items */}
        {cartData.length>0  ?  cartData?.map((el) => (
        <div key={el.id} className="w-full xs:h-60 lg:h-48 border border-1 border-green flex mt-4 bg-red-50 lg:flex-row shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
           
           <div className=" lg:w-1/4 xs:w-3/4 border border-2 border-red">
            <img src={el.image}  className="h-44 pl-4 pt-2 xs:w-4/5 lg:w-4/5" alt="" />
            </div>


          <div className="w-3/5 " >
                   
          <div className="lg:pt-4  xs:pt-1  ">
               <p >{el.title.substring(0,30)}</p>
               <p >Price: Rs{el.price}</p>
           </div>

         <div className="w-3/4 lg:mt-4 xs:mt-4 flex items-center justify-between  xs:flex-col " >
            <div className="flex">
            <button
             onClick={() => handleDecrease(el.id)}
             className={`${el.quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded-lg`}
             disabled={el.quantity === 1}
             >
              -
             </button>
             <p className="px-2 py-2 font-semibold bg-white-500 text-black">{el.quantity}</p>
             <button onClick={() => handleIncrease(el.id)} className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"> +</button>
              </div>
             <div className="xs:pt-2">
             <button onClick={() => handleRemove(el.id)} className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"> Remove </button>
             </div>
        </div>
       </div>
          


          </div>
        )) : 
           <div className="bg-red-50 w-full min-h-[90vh] p-8" ><img src={cartimg} className="lg:w-full   sx:w-full" alt="" /><p className="pt-4 font-semibold">The cart is Empty , Add some items to buy</p></div> }

      
 

        {/* Display total price */}
        {/* Add checkout button or other functionality */}
      </div>
     
     
      <div className="lg:w-1/4 h-48 border border-4 border-green mt-4 flex flex-col justify-center items-center bg-red-50 ">
  <p className="text-xl font-semibold">Total Amount: Rs {TotalAmount()}</p>
  <button onClick={handlenavigate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md mt-4">
  Buy
</button>
</div>



    </div>




    </div>
  );
};

export default Cart;
