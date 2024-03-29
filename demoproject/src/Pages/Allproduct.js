import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cartActions } from "../store/reducer";
import "./Allproduct.css";
const Allproduct = () => {
  const [product, setproduct] = useState([]);
  const qut = useSelector((s) => s.cart.Items);
  const [filter, setfilter] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [search, datasearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();
  // console.log(category);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const sortoption = [
    { label: "Price, low to high", value: "price-accending", code: 1 },
    { label: "Price, high to low", value: "price-decending", code: 2 },
    { label: "Alphabetically, A-Z", value: "alphabetic-accending", code: 3 },
    { label: "Alphabetically, Z-A", value: "alphabetic-decending", code: 4 },
  ];
  const inline = {
    fontSize: "22px",
    textAlign: "center",
    padding: "20px 0",
  };
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let categorydata;
  useEffect(() => {
    console.log("dataproduct")
    axios
      .get("http://localhost:4100/product")
      .then((response) => {
        let newdata = response.data;
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
  }, [category, loading]);
  // filter data
  let searchdata, filterdata;
  const filterhandle = (e) => {
    searchdata = e.target.value;
    if (searchdata.length > 0) {
      filterdata = product.filter((item) =>
        item.title.toLowerCase().includes(searchdata)
      );
      console.log(filterdata);
      setproduct(filterdata);
    } else {
      console.log(filter);
      setproduct(filter);
    }
    datasearch(searchdata);
  };
  // sorting data
  console.log("product", product);
  const sortdata = product.sort((a, b) => {
    // console.log('data',a)
    if (sortOption === "price-accending") {
      return a.price - b.price;
    } else if (sortOption === "price-decending") {
      return b.price - a.price;
    } else if (sortOption === "alphabetic-accending") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "alphabetic-decending") {
      return b.title.localeCompare(a.title);
    }
  });
  return (
    <div className="site-wrapper">
      {loading && error && <p style={inline}>Loading...</p>}
      {!loading && error && <p style={inline}>Failed to fetch</p>}
      <div className="filter-data">
        {!loading && !error && (
          <div className="search-field">
            <SearchIcon className="searchicon" />
            <TextField
              className="input-field"
              type="text"
              onChange={filterhandle}
              value={search}
              placeholder="Search Product..."
            />
          </div>
        )}
        {!loading && !error && (
          <select
            className="dropdown"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            {sortoption.map((val,index) => {
              const { value, label, code } = val;
              return (
                <option value={value} key={index} className="option-val">
                  {label}
                </option>
              );
            })}
          </select>
        )}
      </div>
      <section className="product-section">
        {!loading &&
          !error &&
          sortdata.slice(indexOfFirstItem, indexOfLastItem).map((value) => {
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
      </section>
      <div className="paginate">
          {!searchdata && (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={sortdata.length}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
    </div>
  );
};

export default Allproduct;
