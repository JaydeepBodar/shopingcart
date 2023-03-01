import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { cartaction } from "../../store/cardreducer";
import { useNavigate } from "react-router-dom";
import './cart.css'
import Totalprice from "./Totalprice";
import Item from "./Item";
const Cart = () => {
  const data = useSelector((state) => state.cart.Items);
  const objdata=data.length > 0
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(cartaction.toggle());
  };
  const Checkout=()=>{
    dispatch(cartaction.toggle());
    navigate('/checkout')
  }
  // console.log('cartdata',data);
  return (
    <React.Fragment>
     <Item />
      <Totalprice />
      <div className="modal-btn">
        <button onClick={onClick} style={{marginRight:'15px'}} className='button'>cancle</button>
        {objdata && <button className='button' onClick={Checkout}>checkout</button>}
      </div>
    </React.Fragment>
  );
};

export default Cart;
