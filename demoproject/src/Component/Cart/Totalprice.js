import React from "react";
import "./totalprice.css";
import { useSelector } from "react-redux";
const Totalprice = () => {
    const tprice = useSelector((state) => state.cart.totalprice);
    const data=useSelector((state)=>state.cart.Items);
    const hide =data.length > 0
  return (
    <React.Fragment>
      {hide && <h3 className="total-price">Total price :-  {tprice}$</h3>}
    </React.Fragment>
  );
};

export default Totalprice;
