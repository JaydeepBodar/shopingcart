import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import Topnav from "./Topnav";

const Mainnavigation = () => {
  return (
    <header>
      <Topnav />
      <Navigation />
      <Outlet />
    </header>
  );
};

export default Mainnavigation;
