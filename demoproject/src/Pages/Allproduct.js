import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cartActions } from "../store/reducer";
import "./Allproduct.css";
const Allproduct = () => {
  const [product, setproduct] = useState([]);
  const qut = useSelector((s) => s.cart.Items);
  const[filter,setfilter]=useState([])
  const [search,datasearch]=useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();
  // console.log(category);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const inline = {
    fontSize: "22px",
    textAlign: "center",
    padding: "20px 0",
  };
  useEffect(() => {
    axios
      .get("http://localhost:4100/product")
      .then((response) => {
        let newdata = response.data;
        let categorydata
        if (category) {
          categorydata = newdata.filter((p) => p.category === category);
          console.log(categorydata);
          setproduct(categorydata);
          setfilter(categorydata);
        } else {
          setproduct(newdata);
          setfilter(product);
        }
      })
      .catch((error) => seterror(true))
      .finally(() => setloading(false));
  }, [category,loading]);
  let searchdata,filterdata;
  const filterhandle=(e)=>{
    searchdata=e.target.value;
    if(searchdata.length > 0){
     filterdata=product.filter((item)=>item.title.toLowerCase().includes(searchdata))
     console.log(filterdata)
      setproduct(filterdata)
    }
    else{
      console.log(filter)
      setproduct(filter)
    }
    datasearch(searchdata)
  }
  return (
    <div className="main-wrapper">
      {loading && <p style={inline}>Loading...</p>}
      {error && <p style={inline}>Failed to fetch</p>}
      {!loading && !error && <div className="search-field"><SearchIcon className="searchicon"/><TextField className="input-field" type='text' onChange={filterhandle} value={search} placeholder='Search Product...' /></div>} 
      {searchdata && filterdata.length === 0 && <p>No product Found</p>}
      <div className="site-wrapper">
        {!loading &&
          !error &&
          product.map((value) => {
            const {
              title,
              discountPercentage,
              rating,
              price,
              thumbnail,
              id,
              brand,
            } = value;
            return (
              <div className="card-box">
                <div
                  key={id}
                  className="card-wrapper"
                  onClick={() => navigate(`product/${id}`)}
                >
                  <div className="card-img">
                    <img src={thumbnail} alt={title} />
                  </div>
                  <div className="card-content">
                    <h3>Product Name :-{title}</h3>
                    <h4>Brand :- {brand}</h4>
                    <p style={{ color: "green" }}>
                      Discount :- {discountPercentage} %
                    </p>
                    <p>
                      Product Rating :-{" "}
                      <span style={{ color: "red" }}>{rating}</span> out of 5
                    </p>
                    <p>Product Price :- {price} $</p>
                  </div>
                </div>
                <div className="cart-btn">
                  <button
                    className="button"
                    onClick={() =>
                      dispatch(
                        cartActions.addItem({
                          id,
                          title,
                          price,
                          thumbnail,
                          rating,
                        })
                      )
                    }
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Allproduct;
