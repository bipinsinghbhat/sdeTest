import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const getdata=(url)=>{
    return fetch(url).then((res)=>res.json())
}



const Homepage=()=>{
     const [data,setData]=useState([])
     const [title,setTitle]=useState("")
   
   

     const fetchdata=async()=>{
        try {
             const res=await getdata(`https://fakestoreapi.com/products?q=${title}`)
             console.log("res",res)
             setData(res)
        } catch (error) {
            console.log("error")
        }
     }

     useEffect(()=>{
          fetchdata()
     },[title])

   
  


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

      const linkStyle = {
        textDecoration: 'none', 
        color: 'black'
      };


        return (
       <div>
        <div>
            <input type="text" 
            placeholder="Search..." 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div style={HomeBox}>
        
                  {data?.map((el)=>(
                    <div  style={HomeBox2}
                     
                     key={el.id}>
                        <Link to={`/${el.id}`} style={linkStyle}>
                        <div style={HomeBox3}>
                        <img src={el.image} style={imgg} alt="" />
                        </div>
                       
                     <div style={HomeBox3}>
                     <p>{el.title}</p>
                      <p>Rs.{el.price}</p>
                      {/* <Link to={`/${el.id}`}>
                      More Info
                      </Link> */}
                        <button >Add To Cart</button>
                       
                     </div>
                     </Link>
                       
                    </div>
                  ))}

     

            </div>

          
 

       </div>
               
       
           
        )
}
export default Homepage