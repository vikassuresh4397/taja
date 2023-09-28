import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { CartPage } from "./CartPage";
import { PrivateRoute } from "../Components/PrivateRoute";


export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}

      <Route path="*" element={<Homepage></Homepage>} />
      <Route path="*" element={<Login></Login>} />
      <Route path="*" element={
        <PrivateRoute>
          <CartPage></CartPage>
        </PrivateRoute>
      } />

      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
