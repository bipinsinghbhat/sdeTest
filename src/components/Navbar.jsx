import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Navbar=()=>{
    const cartData = useSelector((store) => store.cartReducer.cart);
    console.log("navbar",cartData)


    return (
        
            

              <div className="bg-gray-800 text-white py-4 px-8 flex justify-between w-full mx-auto  md:flex-col  lg:flex-row sm:flex-col xs:flex-col">

             <div className="pl-24">
                logo
             </div>

             <div className=" w-1/2 flex justify-between pr-24 md:flex-col  lg:flex-row  sm:flex-col border border-4 border-red   xs:flex-col border border-4 border-red ">
             <Link to={"/"}  className="hover:underline ">Home</Link>
            <Link to={"/Cart"} className="hover:underline ">Cart-{cartData.length}</Link>
            <Link to={"/Checkout"} className="hover:underline ">Checkout</Link>
             </div>

            
        </div>

        

       
    )
}
export default Navbar