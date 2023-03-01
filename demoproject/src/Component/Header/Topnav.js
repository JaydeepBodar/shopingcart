import React from "react";
import { useSelector } from "react-redux";
import Cartbutton from '../Cart/Cartbutton'
import Maincart from '../Cart/Maincart'
const Topnav = () => {
    const show=useSelector((state)=>state.cartshow.cartvisible)
  return (
    <React.Fragment>
      {show && <Maincart />}
      <Cartbutton />
    </React.Fragment>
  );
};

export default Topnav;
