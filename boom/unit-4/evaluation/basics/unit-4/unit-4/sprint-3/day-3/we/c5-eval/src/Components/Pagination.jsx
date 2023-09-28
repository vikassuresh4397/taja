function Pagination({page, totalPages, onChange}) {
  const prev = <button data-testid="prev-page" onClick={()=>onChange(-1)} disabled = {page == 1}>PREV</button>;
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = <button data-testid="next-page" onClick={()=>onChange(1)} disabled = {page == totalPages}>NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{totalPages}</b>{" "}
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
