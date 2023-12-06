import { Route, Routes } from "react-router-dom"
import Homepage from "../components/Homepage"
import Cart from "../components/Cart"
import Checkout from "../components/Checkout"
import SingleUserPage from "../components/SingleUserPage"

const MainRoutes=()=>{
     return (

     <Routes>
          <Route path="/"  element={<Homepage/>}   />
          <Route path="/Cart"  element={<Cart/>}   />
          <Route path="/:product_id" element={<SingleUserPage />} />
          <Route path="/Checkout"  element={<Checkout/>}   />
     </Routes>
     )
}
export default MainRoutes