import { AuthContext } from "../Context/AuthContext"
import Pagination from "../Components/Pagination"
import ProductList from "../Components/ProductList";
import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";


function Dashboard() {
  const { logoutUser, authState } = useContext(AuthContext)

  const [urldata, seturldata] = useState([]);
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState("asc")
  const [totalPages, settotalPages] = useState(1)
  const [loading, setloading] = useState(false)
  const fetchData = async () => {
    try {
      setloading(true)
      const data = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=${order}`)
      const response = await data.json();
      seturldata(response.data)
      settotalPages(response.totalPages)
      setloading(false)
    } catch (error) {
      setloading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [order, page])

  const handleSort1 = () => {
    setOrder("asc")
  }
  const handleSort2 = () => {
    setOrder("desc")
  }

  const onPageChange = (val) => {
    setPage(page + val)
  }

  return (
    <div>
      <h1 style={{textShadow: "5px 1px 6px #1001",color:"grey"}} >Dashboard</h1>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid="sort-container">
        <button data-testid="low-to-high" style={{color:"black", background:"teal"}} onClick={handleSort1} disabled={order === "asc"} >Sort low to high</button>
        <button data-testid="high-to-low" style={{color:"black", background:"teal"}} onClick={handleSort2} disabled={order === "desc"} >Sort high to low</button>
      </div>
      <br />
      <br />
      <div >
        <Pagination current={page} totalPage={totalPages} onChange={onPageChange} />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          loading ? <Loader /> : <ProductList products={urldata} />
        }
      </div>

    </div>
  );
}

export default Dashboard;