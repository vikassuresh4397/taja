import { Route, Routes } from "react-router-dom";
import { ProductList } from "../Components/ProductList";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="/" element={<ProductList />} />
    </Routes>
  );
};
