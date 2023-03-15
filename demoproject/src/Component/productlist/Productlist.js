import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cartActions } from "../../store/reducer";
import "./productlist.css";
const Productlist = () => {
  const [loading, setloading] = useState(true);
  const [product, setproduct] = useState([]);
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const options = {
    items: 2,
    margin: 30,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    loop: true,
    smartSpeed: 500,
  };
  const inline = {
    fontSize: "22px",
    textAlign: "center",
    padding: "20px 0",
  };

  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4100/product/${id}`)
      .then((resolve) => {
        console.log("fsfsfs", resolve.data);
        setproduct(resolve.data);
      })
      .catch((err) => seterror(true))
      .finally(() => setloading(false));
  }, []);
  return (
    <React.Fragment>
      {loading && <p style={inline}>Loading...</p>}
      {error && <p style={inline}>Failed to Fetch data </p>}
      {!loading && !error && (
        <div className="product-list-wrapper">
          <div className="product-img">
            <OwlCarousel className="owl-theme" {...options}>
              {product.images?.map((value, index) => {
                return <img src={value} key={index} alt={product.title} />;
              })}
            </OwlCarousel>
          </div>
          <div className="product-content">
            <h2>Product Name :- {product.title}</h2>
            <h4>Brand :- {product.brand}</h4>
            <p>Categorey :- {product.category}</p>
            <p>Stock :- {product.stock}</p>
            <p>
              Discount :-{" "}
              <span style={{ color: "green" }}>
                {product.discountPercentage}%
              </span>
            </p>
            <p>
              Product Rating :- 5 out of
              <span style={{ color: "red" }}> {product.rating}</span>
            </p>
            <h3></h3>
            <p>Description :- {product.description}</p>
            <div className="product-btn">
              <button onClick={() => navigate(-1)} className="button">
                Back
              </button>
              <button
                className="button"
                onClick={() =>
                  dispatch(
                    cartActions.addItem({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      thumbnail: product.thumbnail,
                      rating: product.rating,
                    })
                  )
                }
              >
                Add cart
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Productlist;
