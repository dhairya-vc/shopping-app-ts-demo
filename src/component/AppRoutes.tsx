import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
