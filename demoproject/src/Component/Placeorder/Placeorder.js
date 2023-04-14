import React, { useState } from "react";
import Item from "../Cart/Item";
import * as yup from "yup";
import Paymentdetail from "./Paymentdetail";
import Totalprice from "../Cart/Totalprice";
import "./placeorder.css";
import { useFormik } from "formik";
import { newadd, custdata } from "../../Schema/schema";
import Contactinfo from "./Contactinfo";
import Addressinfo from "./Addressinfo";
import { useSelector } from "react-redux";
const Placeorder = () => {
  // const cartitems = useSelector((state) => state.cart.Items);
  // const [message, setmessage] = useState("");
  // const items = cartitems.length === 0;
  const formiks = useFormik({
    initialValues: {
      Contactinfo: {
        firstname: "",
        lastname: "",
        email: "",
        mobilenumber: "",
        postalcode: "",
        address: "",
        city: "",
        state: "",
      },
      Addressinfo: {
        newpostalcode: "",
        newaddress: "",
        newcity: "",
        newstate: "",
      },
      // Paymentdetail: {
      //   upi: "",
      //   number: "",
      //   name: "",
      //   cvc: "",
      //   expiry: "",
      // },
    },
    validationSchema: yup.object({
      Contactinfo: yup.object({
        firstname: yup
          .string()
          .min(3, "firstname atleast 5 character")
          .max(15, "first name not morethan 15 character")
          .required("firstname is required")
          .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
        lastname: yup
          .string()
          .min(3, "lasttname atleast 5 character")
          .max(15, "last name not morethan 15 character")
          .required("Lastname is required")
          .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
        email: yup.string().required("Email is required"),
        mobilenumber: yup
          .number()
          .required("Mobilenumber is required")
          .integer("A phone number can't include a decimal point")
          .typeError("That doesn't look like a phone number")
          .positive("A phone number can't start with a minus"),
        address: yup.string().required("address is require"),
        postalcode: yup
          .string()
          .required("postalcode is require")
          .min(6)
          .max(6, "postal code exact 6 number "),
        state: yup
          .string()
          .required("state name is require")
          .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
        city: yup
          .string()
          .required("city name is require")
          .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
      }),
      // Addressinfo: yup.object({
      //   newaddress: yup.string().required("billing address is require"),
      //   newpostalcode: yup
      //     .string()
      //     .required("billing postalcode is require")
      //     .min(6)
      //     .max(6, "postal code exact 6 number "),
      //   newstate: yup
      //     .string()
      //     .required("billing state is require")
      //     .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
      //   newcity: yup
      //     .string()
      //     .required("billing city is require")
      //     .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
      // }),
    }),
    onSubmit: (values, action) => {
      console.log(values);
    },
  });
  return (
    <section className="placehorder-section">
      <div className="placeorder-wrapper">
        <div className="user-info">
          <form onSubmit={formiks.handleSubmit}>
            <Contactinfo formiks={formiks} />
            <Addressinfo formiks={formiks} />
            {/* <Paymentdetail formiks={formiks} /> */}
            <div className="submit-btn">
              <button className="place-btn" type="submit">
                Place order
              </button>
            </div>
          </form>
        </div>
        <div className="order-summury">
          <div className="order-cart">
            <h2 style={{ textAlign: "center" }}>Order Summury</h2>
            {/* {items ? <p>{message}</p> : ""} */}
            <Item />
            <Totalprice />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placeorder;
