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

  const formiks1 = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobilenumber: "",
      postalcode: "",
      address: "",
      city: "",
      state: "",

      // Paymentdetail: {
      //   upi: "",
      //   number: "",
      //   name: "",
      //   cvc: "",
      //   expiry: "",
      // },
    },
    validationSchema: yup.object({
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
    onSubmit: (values, actions ) => {
      console.log(values);
      actions.setSubmitting(false)
    },
  });
  const formiks2 = useFormik({
    initialValues: {
      newpostalcode: "",
      newaddress: "",
      newcity: "",
      newstate: "",
    },
    validationSchema: yup.object({
      newaddress: yup.string().required("billing address is require"),
      newpostalcode: yup
        .string()
        .required("billing postalcode is require")
        .min(6)
        .max(6, "postal code exact 6 number "),
      newstate: yup
        .string()
        .required("billing state is require")
        .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
      newcity: yup
        .string()
        .required("billing city is require")
        .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
    }),
    onSubmit: (values,actions) => {
      actions.setSubmitting(false)
      console.log(values);
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();
    formiks1.handleSubmit();
    formiks2.handleSubmit();
  };
  return (
    <section className="placehorder-section">
      <div className="placeorder-wrapper">
        <div className="user-info">
          <form onSubmit={onSubmit}>
            <Contactinfo formiks1={formiks1} />
            <Addressinfo formiks2={formiks2} formiks1={formiks1} />
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
