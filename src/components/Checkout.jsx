
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bipin from "../images/depositphotos_610736028-stock-photo-fantasy-background-magic-forest-road.jpg"
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/action';

const initialstate={
  name: "",
  address: "",
  phoneNumber: "",
  paymentMethod: 'Credit Card',
}



const Checkout = () => {
 

  const [formData, setFormData] = useState(initialstate);
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData", formData);
    alert("Order Sucessfull")
    navigate("/Thankyou")
    dispatch(clearCart())
    
  };

  return (
    <div className='w-full min-h-[90vh]  border border-1 border-red bg-red-50' >
       <div className="flex w-5/6  mx-auto min-h-[80vh] border-1 border-red-100  lg:flex-row xs:flex-col">
                <div className="w-full sm:w-full xs:w-full min-h-[40vh] md:full   lg:w-1/2   ">
                <img src={bipin} className='w-full lg:h-full xs:h-full' alt="" />
                </div>

                <div className="w-full sm:w-3/4  xs:3/4 md:3/4   lg:w-1/2 border border-red-500 p-6 rounded-lg shadow-lg">
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="flex items-center " >
      <label htmlFor="name" className="text-gray-800 w-28">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full sm:w-48 border border-gray-400 rounded-md p-2 flex-grow focus:outline-none focus:border-b-2 focus:border-blue-500 "
      />
    </div>
    <div className="flex items-center">
      <label htmlFor="address" className="text-gray-800 w-28">
        Address:
      </label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
        className="w-full sm:w-48 border border-gray-400 rounded-md p-2 flex-grow focus:outline-none focus:border-b-2 focus:border-blue-500"
      />
    </div>
    <div className="flex items-center">
      <label htmlFor="phoneNumber" className="text-gray-800 w-28">
        Phone Number:
      </label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        className="w-full sm:w-48 border border-gray-400 rounded-md p-2 flex-grow focus:outline-none focus:border-b-2 focus:border-blue-500"
      />
    </div>
    <div className="flex items-center">
      <label htmlFor="paymentMethod" className="text-gray-800 w-28">
        Payment Method:
      </label>
      <select
        id="paymentMethod"
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleChange}
        className="w-full sm:w-48 border border-gray-400 rounded-md p-2 flex-grow focus:outline-none focus:border-b-2 focus:border-blue-500"
      >
        <option value="Credit Card">Credit Card</option>
        <option value="PayPal">PayPal</option>
        {/* Add other payment methods as needed */}
      </select>
    </div>
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      
    >
       Place Order
    </button>
  </form>
                 </div>



              

       </div>


       </div> 
  );
};

export default Checkout;
