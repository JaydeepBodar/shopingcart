import Reac from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/reducer";
import "./cartitem.css";
const CartItem = ({ id, title, price, quantity, total, thumbnail }) => {
  const dispatch = useDispatch();
  const Additemhandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        quantity,
        thumbnail,
      })
    );
  };
  const Removehandler = () => {
    dispatch(cartActions.RemoveItem(id));
  };
  const Remove = () => {
    let text =
      "if you really want to remove item from the cart ? if yes then press ok otherwise press cancle";
    if (window.confirm(text) == true) {
      dispatch(cartActions.DeleteItem(id));
    }
  };
  return (
    <div className="product-wrapper">
      <div className="product-img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="product-detail">
        <div className="product-content">
          <h3>Product Name :- {title}</h3>
          <h4>Price :- {price}$</h4>
          <h3>Total Price :-{total}$</h3>
        </div>
        <div className="btn-group">
          <div className="btn">
            <button onClick={Removehandler} className="add remove">
              -
            </button>
            <p>{quantity}</p>
            <button onClick={Additemhandler} className="add">
              +
            </button>
          </div>
          <div>
            <button onClick={Remove} className="remove-btn">
              remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
