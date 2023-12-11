import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { addtocart } from "../redux/action"
import { useDispatch } from "react-redux"


const getData=(url)=>{
    return fetch(url).then((res)=>res.json())
}


const SingleUserPage=()=>{
   const [data,setData]=useState([])
 
   const dispatch=useDispatch()
      
   const params=useParams()
   console.log("p",params)
 
    const {product_id}=useParams()
    
    const fetchandupdate=async(url)=>{
        try {
              let res=await getData(url)
              console.log("data",res)
              setData(res)

        } catch (error) {
            console.log(error)
        }
    }

  useEffect(()=>{
    fetchandupdate(`https://fakestoreapi.com/products/${product_id}`)
  },[product_id])

  console.log(product_id)

 const handleAdd=(data)=>{
    dispatch(addtocart(data))
 }


  



 
 
return (
<div className="bg-red-50 min-h-[90vh] pt-4">
  <div key={data?.id} className="flex justify-center w-5/6 m-auto  pt-4 sm:flex-col md:flex-col lg:flex-row xs:flex-col">
    <div className="lg:w-2/5 lg:min-h-[70vh] xs:min-h-[50vh]  shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border  overflow-hidden">
      <img
        src={data.image}
        className=" lg:h-full xs:h-full "
          alt=""
      
      />
    </div>
    
    <div className="lg:w-3/5 p-8 xs:w-full">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <hr className="my-4" />
      <h3 className="text-lg font-semibold">Rs. {data.price}</h3>
      <hr className="my-4" />
      <p className="text-justify">{data.description}</p>
      <hr className="my-4" />
      <div>
        <h3 className="text-lg font-semibold">Category: {data.category}</h3>
      </div>
      <button onClick={()=>handleAdd(data)} className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded mt-4">Add To Cart</button>
    </div>
  </div>
</div>


)
}
export default SingleUserPage