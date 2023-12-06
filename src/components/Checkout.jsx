
import React, { useState } from 'react';


const Checkout = () => {
 

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    paymentMethod: 'Credit Card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation here before submission
    console.log('Form Data:', formData);
    // Redirect to Thank You page
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          {/* Add other payment methods as needed */}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Checkout;
