import { useContext } from "react";
import ProductsTable from "../Components/ProductsTable"
import {AuthContext } from "../Context/AuthContext";
function Dashboard() {
  const {token,logoutUser}=useContext(AuthContext);
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable  />
      </div>
    </div>
  );
}

export default Dashboard;
