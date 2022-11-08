import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Layout from "./Layout";

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
