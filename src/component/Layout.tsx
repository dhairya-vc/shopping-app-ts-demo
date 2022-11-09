import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "./UI";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <main className="w-full px-16 py-8">
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
