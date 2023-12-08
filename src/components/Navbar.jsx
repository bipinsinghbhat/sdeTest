import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

import logo from "../images/Fashion (1).png"

const Navbar=()=>{
    const cartData = useSelector((store) => store.cartReducer.cart);
    console.log("navbar",cartData)


    return (
        
            

              <div className="bg-gray-800 text-white py-4 px-8 flex justify-between w-full mx-auto  md:flex-col  lg:flex-row sm:flex-col xs:flex-col">

<div className="ml-24">
  <Link to={"/"} className="hover:underline"> <img src={logo} alt="" className="w-24 h-8" /> </Link>
</div>

             <div className=" w-1/2 flex justify-between pr-24 md:flex-col  lg:flex-row  sm:flex-col    xs:flex-col  ">
             <Link to={"/"}  className="hover:underline ">Home</Link>
            <Link to={"/Cart"} className="hover:underline ">Cart-{cartData.length}</Link>
            <Link to={"/Checkout"} className="hover:underline ">Checkout</Link>
             </div>

            
        </div>

        

       
    )
}
export default Navbar