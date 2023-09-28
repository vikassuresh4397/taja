import ProductsTable from "../Components/ProductsTable"

function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable/>
      </div>
    </div>
  );
}

export default Dashboard;
