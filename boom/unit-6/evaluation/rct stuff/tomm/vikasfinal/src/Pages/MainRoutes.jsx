import { Route, Routes } from "react-router-dom";
import {Homepage} from "./Homepage";
import { Login } from "./Login";
import {CartPage} from "./CartPage";
export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="/" element={<Homepage></Homepage>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
    </Routes>
  );
};
