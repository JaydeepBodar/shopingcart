import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Item.css";
const Item = () => {
  const data = useSelector((state) => state.cart.Items);
  const newdata = data.length === 0;
  return (
    <div className="cart-wrapper">
      <div className="noitem">
        {newdata && (
          <p
            style={{
              fontSize: "22px",
              fontWeight: "800",
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            No Item Found
          </p>
        )}
      </div>
      <div className="Cart-data">
        <div className="cart-box">
          {data?.map((item, index) => {
            {
              console.log("fjufee", item);
            }
            return (
              <React.Fragment>
                <CartItem
                  key={index}
                  id={item.id}
                  title={item.title}
                  quantity={item.quantity}
                  total={item.total}
                  price={item.price}
                  thumbnail={item.thumbnail}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Item;
