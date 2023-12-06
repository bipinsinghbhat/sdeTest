import { Link } from "react-router-dom"

const Navbar=()=>{
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/Cart"}>Cart</Link>
            <Link to={"/Checkout"}>Checkout</Link>
        </div>
    )
}
export default Navbar