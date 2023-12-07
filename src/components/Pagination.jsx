function Pagination({page,totalPages,setPage}) {
    const handleChange=(val)=>{
      const updatepage=page+val;
      setPage(updatepage)
    }
  
    const prev = (
      <button
     
        disabled={page===1}
        onClick={()=>handleChange(-1)}
      >
        Prev
      </button>
    );
    const currentPage = <button>{page}</button>;
    const next = (
      <button
       
        disabled={page===totalPages} onClick={()=>handleChange(1)}
      >
        Next
      </button>
    );
    return (
    <div>
        <div>
        {prev}
        {currentPage}
        {next}
        </div>
        <div>
          Total Pages: <b>{totalPages}</b>
        </div>
      </div>
    );
  }
  
  export default Pagination;