import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Topnav from "./Topnav";
const Mainnavigation = () => {
  return (
    <div className="main-wrapper">
      <header>
        <Topnav />
        <Navigation />
      </header>
      <Outlet />
    </div>
  );
};

export default Mainnavigation;
