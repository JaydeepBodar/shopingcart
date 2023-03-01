import React, { useState } from "react";
import Topnav from "../Header/Topnav";
import "./checkout.css";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Totalprice from "./Totalprice";
import Login from "../User/Login";
import Canclemodal from "./Canclemodal";
const Checkout = () => {
  const [active, setactive] = useState(false);
  const data = useSelector((state) => state.cart.Items);
  const cartdata = data.length > 0;
  const cdata = data.length === 0;
  const navigate = useNavigate();
  const back = useNavigate();
  const show = () => {
    setactive(true);
  };
  const cancledata=()=>{
    if(cartdata){
      return <Canclemodal />
    }
    navigate("/")
  }
  return (
    <React.Fragment>
      <div className="checkout-header">
        <Topnav />
      </div>
      <div className="checkout-wrapper">
        <div className="checkout-details">
          <div className="cart-details">
            <Item />
            <Totalprice />
            <div className="modal-btn">
              {cartdata && (
                <React.Fragment>
                  <button
                    onClick={cancledata}
                    style={{ marginRight: "15px" }}
                    className="button"
                  >
                    cancle
                  </button>
                  <button className="button" onClick={show}>
                    Order
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
          {cartdata || cdata ? (
            <img
              className={cartdata && active ? "data" : "newdata"}
              src="https://previews.123rf.com/images/dashu83/dashu831910/dashu83191000170/132733246-shoping-bags-boxes-and-cart-on-laptop-online-shopping-concept.jpg"
              width="100%"
              height="400px"
            />
          ) : (
            ""
          )}
            <div className={cartdata && active ? "login-detail" : "data"}>
              <Login />
            </div>
        </div>
        <button
          onClick={() => back("/")}
          className="button"
          style={{ margin: "0 auto", display: "inline-block" }}
        >
          Back
        </button>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
