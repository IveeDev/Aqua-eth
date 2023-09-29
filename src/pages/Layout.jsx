import React from "react";
import NavBar from "../components/navbar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Layout = () => {
  const location = useLocation();
  const claimsPage = location.pathname === "/claims";
  return (
    <>
      <NavBar />
      <Outlet />
      {!claimsPage && <Footer />}
    </>
  );
};

export default Layout;
