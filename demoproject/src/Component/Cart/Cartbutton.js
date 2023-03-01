import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartaction } from "../../store/cardreducer";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartbutton.css'
const Cartbutton = () => {
  const quantity = useSelector((state) => state.cart.totalquantity);
  const dispatch = useDispatch();
  const togglehandler = () => {
    dispatch(cartaction.toggle());
  };
  return (
    <div className="top-header">
      <div className="cart-heading">
        <h2>Shoping cart</h2>
      </div>
      <div onClick={togglehandler} className='cart-btn'>
        <ShoppingCartIcon  className="new"/>
        <p className="quantity" >{quantity}</p>
      </div>
    </div>
  );
};

export default Cartbutton;
