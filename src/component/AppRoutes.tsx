import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

const Home = lazy(() => import("../pages/Home"));

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
