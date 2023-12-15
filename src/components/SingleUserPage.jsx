import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addtocart } from "../redux/action";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const SingleUserPage = () => {
  const [data, setData] = useState({});
  const { product_id } = useParams();
  const dispatch=useDispatch()

  const fetchAndUpdate = async (url) => {
    try {
      const res = await getData(url);
      console.log("data", res);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd=(product)=>{
    dispatch(addtocart(product))
 }

  useEffect(() => {
    fetchAndUpdate(`https://fakestoreapi.com/products/${product_id}`);
  }, [product_id]);

  return (
   <div className="bg-red-50 min-h-screen" >
   
   <div className="max-w-5xl mx-auto bg-white p-8 shadow-md flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col">
        <img src={data.image} alt={data.title} className="w-full h-auto object-cover" />
      </div>
      <div className="w-full md:w-1/2 pl-8">
        <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-700 mb-4">Price: Rs {data.price}</p>
        <p className="text-gray-700 mb-4">Category: {data.category}</p>
        <p className="text-gray-700 mb-4">Gender: {data.gender}</p>
        <p className="text-gray-700 mb-4">Color: {data.color}</p>
        <p className="text-gray-700 mb-4">Description: {data.description}</p>
       
        <button
          onClick={() => handleAdd(data)}
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
   

      </div>
  );
};

export default SingleUserPage;
