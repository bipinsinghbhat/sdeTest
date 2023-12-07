
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialstate={
  name: "",
  address: "",
  phoneNumber: "",
  paymentMethod: 'Credit Card',
}



const Checkout = () => {
 

  const [formData, setFormData] = useState(initialstate);
  const navigate=useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation here before submission
    console.log("FormData", formData);
    alert("Order Sucessfull")
    // Redirect to Thank You page
     navigate("/Thankyou")
    
  };

  return (
    
       <div className="flex w-5/6 mx-auto h-screen">
                <div className="w-1/2 h-4/5 border border-red-500 bg-red-200">

                </div>

                <div className="w-1/2 h-4/5 border border-red-500 p-6 rounded-lg shadow-lg">
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
        className="border border-gray-400 rounded-md p-2 flex-grow focus:outline-none focus:border-b-2 focus:border-blue-500 "
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
        className="border border-gray-400 rounded-md p-2 flex-grow focus:outline-none focus:border-b-2 focus:border-blue-500"
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
        className="border border-gray-400 rounded-md p-2 flex-grow focus:outline-none focus:border-b-2 focus:border-blue-500"
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
        className="border border-gray-400 rounded-md p-2 flex-grow focus:outline-none focus:border-b-2 focus:border-blue-500"
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
      Submit
    </button>
  </form>
</div>



              

       </div>


    
  );
};

export default Checkout;
