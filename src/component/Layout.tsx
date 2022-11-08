import { Outlet } from "react-router-dom";

import { Footer, Header, Sidebar } from "./UI";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <main className="w-full px-16 py-8">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
