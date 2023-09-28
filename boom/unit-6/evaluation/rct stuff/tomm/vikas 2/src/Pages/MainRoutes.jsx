import { Route, Routes } from "react-router-dom";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
