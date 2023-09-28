function Pagination({current,onChange,totalPage}) {
    var prev = <button data-testid="prev-page"  disabled={current===1} onClick={()=>onChange(-1)} >PREV</button>;
    var currentPage = <button data-testid="current-page" >{current}</button>;
    var next = <button data-testid="next-page"  disabled={current===totalPage} onClick={()=>onChange(1)}>NEXT</button>;
    var totalPagesElem = (
      <div>
        Total Pages: <b data-testid="total-pages">{totalPage}</b>{" "}
      </div>
    );
    return (
      <div data-testid="pagination-container">
        {prev}
        {currentPage}
        {next}
        {totalPagesElem}
      </div>
    );
  }
  
  export default Pagination;