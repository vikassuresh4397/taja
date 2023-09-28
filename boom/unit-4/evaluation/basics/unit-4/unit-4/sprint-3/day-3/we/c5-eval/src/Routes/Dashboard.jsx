import { useContext,useState,useEffect } from "react";
import Loader from "../Components/Loader";
import ProductList from "../Components/ProductList";
import {AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination";

function Dashboard() {
  const {token,logoutUser}=useContext(AuthContext);
  const [loading,setLoading]=useState(false)
  const [Apidata,setApidata]=useState([]);
  const [page,setPage]=useState(1)
  const [orderBy,setorderBy]=useState('asc');
  const [totalPages, setTotalPages] = useState(1);

  const handleSort=()=>{
    setorderBy('asc')
  }
  const handleSort1=()=>{
    setorderBy('desc')
    fetchdata('desc', page)
  }


      const getdata=async (order, pageNo)=>{
          return fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${pageNo}&limit=10&orderBy=${order}`)
          .then((res)=>res.json());
      }
      const fetchdata=async (order, pageNo)=>{
        try {
            setLoading(true)
            let response=await getdata(order, pageNo);
            setApidata(response.data)
            setTotalPages(response.totalPages);
            console.log(response.totalPages)
            setLoading(false);
        } catch (err) {
            console.log(err)
            setLoading(false);
        }
      }
      useEffect(()=>{
        fetchdata('asc', 1)
      },[order,page])

      function onPageChange(changeBy){
          setPage(page + changeBy);
          fetchdata(orderBy, page);
      }

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser} >Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high" onClick={handleSort} disabled={orderBy == "asc"} >Sort low to high</button>
      <button data-testid="high-to-low" onClick={handleSort1} disabled={orderBy =="desc"} >Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination page = {page} onChange={onPageChange} totalPages = {totalPages}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          loading?<Loader />: <ProductList products={Apidata} />

        }
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;


