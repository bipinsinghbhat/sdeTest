import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bipin from "../images/depositphotos_610736028-stock-photo-fantasy-background-magic-forest-road.jpg";
import { useDispatch } from 'react-redux';
import { clearcart } from '../redux/action';

const initialState = {
  name: "",
  address: "",
  phoneNumber: "",
  paymentMethod: 'Credit Card',
};

const Checkout = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData", formData);
    alert("Order Successful");
    navigate("/Thankyou");
    dispatch(clearcart());
  };

  return (
    <div className="flex  justify-center min-h-screen bg-red-50 overflow-hidden border border-4 border-red">
      <div className="max-w-6xl w-full mx-auto px-8 py-8 bg-white rounded-lg shadow-lg  border border-4 border-red">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <img src={bipin} className="w-full h-auto rounded-lg" alt="Fantasy Background" />
          </div>
          <div className="md:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-800 mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="text-gray-800 mb-2">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phoneNumber" className="text-gray-800 mb-2">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="paymentMethod" className="text-gray-800 mb-2">Payment Method:</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
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

     
       

    </div>
  );
};

export default Checkout;
