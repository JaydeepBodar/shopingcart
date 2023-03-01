import React from "react";
import * as yup from "yup";
export const schemasignup = yup.object().shape({
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
  password: yup
    .string()
    .required("password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(RegExp("(.*[a-z].*)"), "1 lowercase letter")
    .matches(RegExp("(.*[A-Z].*)"), "1 uppercase letter")
    .matches(RegExp("(.*\\d.*)"), "1 number")
    .matches(
      RegExp("(.*[!@#%&].*)"),
      "Must contain at least one special character"
    ),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required("Conforim password required"),
});
export const schemalogin = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("password is required"),
});
export const custdata = () =>
  yup.object().shape();
export const newadd = () =>
  yup.object().shape();
