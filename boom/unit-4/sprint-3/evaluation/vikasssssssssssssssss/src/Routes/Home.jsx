import { Link } from "react-router-dom";
// color: white;
  // text-shadow: 2px 2px 4px #000000
function Home() {
  return (
    <div className="home">
      <h1 ></h1>
      <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
  );
}
export default Home;
