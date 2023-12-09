import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Pagination from "./Pagination"




const getdata=(url)=>{
    return fetch(url).then((res)=>res.json())
}



const Homepage=()=>{
     const [data,setData]=useState([])
     const [page,setPage]=useState(1)
     const [totalPages, setTotalPages] = useState(1);
     const limit=8
     const [qu,setqu]=useState("")
     const [search,setsearch]=useState([])
   

            

      
     const fetchdata=async()=>{
       
       const startindex=(page-1)*limit
       const endindex=startindex+limit

        try {
              const res=await getdata(`https://fakestoreapi.com/products`)
              console.log("res",res)
              // setData(res)
              setTotalPages(Math.ceil(res.length/limit))
            
              const paginatedproduct=res.slice(startindex,endindex)
              setData(paginatedproduct)

           
        } catch (error) {
            console.log("error",error)
        }
     }

     useEffect(()=>{
          fetchdata()
     },[page])



   

     const handleSearch=(e)=>{
      e.preventDefault();
        const searching=qu.toLowerCase()
        const result=data?.filter((el)=>el.title.toLowerCase().includes(searching))
         setsearch(result)
     }

console.log("q",qu)


   


     

      const linkStyle = {
        textDecoration: 'none', 
        color: 'black'
      };


        return (
        <div className="bg-red-50 min-h-[90vh] w-full">

                     <div>
                     <form onSubmit={handleSearch} className="flex items-center justify-center pt-4">
                    <div className="relative">
                     <input
                      type="text"
                       placeholder="Search..."
                       value={qu}
                       onChange={(e) => setqu(e.target.value)}
                       className="py-2 pl-4 pr-10 rounded-full border border-black-500 focus:outline-none focus:border-black-700 focus:ring-1 focus:ring-black-500"
                />
               <button type="submit" className="hidden">Search</button>
                   </div>
                     </form>
                     </div>
           
            
            
                     <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10 lg:w-5/6 lg:mx-auto xs:w-5/6 xs:mx-auto py-4">
             
            
          {search.length > 0 ? search?.map((el)=>(
                  <div className="w-72 h-96 pt-4 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"   

                     
                     key={el.id}>
                        <Link to={`/${el.id}`} style={linkStyle}>
                        <div  className="flex justify-center w-72 h-48">
                        <img src={el.image} className="w-3/5 h-full" alt="" />
                        </div>
                       
                        <div className = "w-72 h-24 py-4">
                        <h1 className="pl-4 pr-4">{el.title.substring(0,60)}</h1>
                     <p className="pb-2 font-semibold">Rs.{el.price}</p>
                      {/* <Link to={`/${el.id}`}>
                      More Info
                      </Link> */}
                           </div>
                           <div className = "w-72 h-24 py-4">

                       <button className="px-4 py-2  text-white bg-blue-500 hover:bg-blue-700 rounded">Add To Cart</button>
                       
                     </div>
                     </Link>
                       
                    </div>
                  )) : 
                  data?.map((el)=>(
                    <div className="w-72 h-96 pt-4 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"             
                     
                     key={el.id}>
                        <Link to={`/${el.id}`} style={linkStyle}>
                        <div  className="flex justify-center w-72 h-48 ">
                        <img src={el.image} className="w-3/5 h-full" alt="" />
                        </div>
                       
                     <div className = "w-72 h-24 py-4">
                     <h1 className="pl-4 pr-4">{el.title.substring(0,60)}</h1>
                     <p className="pb-2 font-semibold">Rs.{el.price}</p>


                      {/* <Link to={`/${el.id}`}>
                      More Info
                      </Link> */}
                      </div>
                        
                         <div className = "w-72 h-24 py-4"> 
                       <button className="px-4 py-2  text-white bg-blue-500 hover:bg-blue-700 rounded">Add To Cart</button>
                     
                       
                     </div>
                     </Link>
                       
                    </div>
                  ))
                }

       

            </div>

        
 

                    

                   <div>
                   <Pagination    page={page} totalPages={totalPages} setPage={setPage}    />
                   </div>
          
          
          
          
          
         </div>

      
               
       
           
        )
}
export default Homepage