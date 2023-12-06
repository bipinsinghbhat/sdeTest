import { useEffect, useState } from "react"


const getdata=()=>{
    return fetch(`https://fakestoreapi.com/products`).then((res)=>res.json())
}

const Homepage=()=>{
   
     const [data,setData]=useState([])

     const fetchdata=async()=>{
        try {
             const res=await getdata()
             console.log("res",res)
             setData(res)
        } catch (error) {
            console.log("error")
        }
     }

     useEffect(()=>{
          fetchdata()
     },[])



     const HomeBox={
        display:"grid",
        width:"1260px",
        margin: "auto",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
       
      
   
       
    
        
      
     }

      const HomeBox2={
        width:"300px",height:"400px",paddingTop:"50px",
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
       
      }

      const HomeBox3={
        width:"300px",height:"200px"
       
      }
      const imgg={width:"60%" ,height:"100%"}
    


        return (
       
               <div style={HomeBox}>
                  {data?.map((el)=>(
                    <div  style={HomeBox2}
                     
                     key={el.id}>
                        <div style={HomeBox3}>
                        <img src={el.image} style={imgg} alt="" />
                        </div>
                       
                     <div style={HomeBox3}>
                     <p>{el.title}</p>
                      <p>Rs.{el.price}</p>
                        <button>Add To Cart</button>
                     </div>
                      
                       
                    </div>

                  ))}
            </div>
       
           
        )
}
export default Homepage