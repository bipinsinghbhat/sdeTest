function Pagination({page,totalPages,setPage}) {
    const handleChange=(val)=>{
       setPage(page+val)
    }
  
    const prev = (
      <button
      className={`px-4 py-2  rounded-lg ${
        page === 1 ? 'bg-gray-300 cursor-not-allowed ' : 'bg-blue-500 hover:bg-blue-700 text-white'
      }`}
        disabled={page===1}
        onClick={()=>handleChange(-1)}
      >
        Prev
      </button>
    );
    const currentPage = <button className="px-4 py-2  bg-white-500 text-black">{page}</button>;
    const next = (
      <button
      className={`px-4 py-2 rounded-lg ${
        page === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'
      }`}
        disabled={page===totalPages} onClick={()=>handleChange(1)}
      >
        Next
      </button>
    );
    return (
      <div className="flex-col h-full pt-4">
      <div>
        {prev}
        {currentPage}
        {next}
      </div>
      <div className="mt-2 text-lg">
        Total Pages: <span className="font-bold">{totalPages}</span>
      </div>
    </div>
    
    );
  }
  
  export default Pagination;