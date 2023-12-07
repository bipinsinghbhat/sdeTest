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


  

  const singleBox1={
    width:"40%",
    height:"100%",
    border:"2px solid blue"
  }
  const singleBox11={
    width:"100%",
    height:"100%",
   
  }
  const singleBox2={
    width:"60%",
   padding:"40px"
  }
 
return (
    <div>
        <div key={data?.id} className="flex justify-center w-5/6 m-auto h-5/6 ">
                        <div className="w-2/5 h-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <img src={data.image} style={singleBox11} alt="" />
                        </div>
                       
                     <div style={singleBox2}>
                     <h2>{data.title}</h2>
                      <h3>Rs.{data.price}</h3>
                      <hr />
                      <p className="text-justify">{data.description}</p>

                    <hr />
                      <h3>{data.category}</h3>
                        <button onClick={()=>handleAdd(data)} className="px-4 py-2  text-white bg-blue-500 hover:bg-blue-700 rounded">Add To Cart</button>
                     </div>       
        </div>       
    </div>
)
}
export default SingleUserPage