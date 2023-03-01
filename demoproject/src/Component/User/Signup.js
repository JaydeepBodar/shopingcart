import React from "react";
import Modal from "../../UI/Modal";
import "./signup.css";
import Inputdata from "./Inputdata";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { schemasignup } from "../../Schema/schema";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const signupnavigate = useNavigate();
  const { handleChange, handleSubmit, values, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        mobilenumber: "",
        password: "",
        cpassword: "",
      },
      validationSchema: schemasignup,
      onSubmit: (values, action) => {
        axios
          .post("http://localhost:4100/user/signup", values)
          .then((response) => alert("data send succssesfully"))
          .catch((e) => console.log(e));
        console.log(values);
        signupnavigate("/");
        action.resetForm();
      },
    });
  return (
    <Modal>
      <div className="signin">
        <div className="signup-wrapper">
          <h2 style={{ textAlign: "center" }}>User Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {" "}
              <Inputdata
                label="First Name"
                type="text"
                placeholder="Enter Your First Name..."
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.firstname && touched.firstname ? (
              <p style={{ color: "red" }}>{errors.firstname}</p>
            ) : (
              ""
            )}
            <div className="form-group">
              {" "}
              <Inputdata
                label="Last Name"
                type="text"
                placeholder="Enter Your Last Name..."
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.lastname && touched.lastname ? (
              <p style={{ color: "red" }}>{errors.lastname}</p>
            ) : (
              ""
            )}
            <div className="form-group">
              {" "}
              <Inputdata
                label="Email"
                type="email"
                placeholder="Enter Your Email..."
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : (
              ""
            )}
            <div className="form-group">
              {" "}
              <Inputdata
                label="Mobile Number"
                placeholder="Enter Your Mobile Number..."
                type="number"
                name="mobilenumber"
                value={values.mobilenumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.mobilenumber && touched.mobilenumber ? (
              <p style={{ color: "red" }}>{errors.mobilenumber}</p>
            ) : (
              ""
            )}
            <div className="form-group">
              <Inputdata
                label="Password"
                placeholder="Enter Your Password..."
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            {errors.password && touched.password ? (
              <p style={{ color: "red" }}>{errors.password}</p>
            ) : (
              ""
            )}
            <div className="form-group">
              {" "}
              <Inputdata
                label="Confirom Password"
                placeholder="Enter Your Conform Password..."
                type="password"
                name="cpassword"
                value={values.cpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.cpassword && touched.cpassword ? (
              <p style={{ color: "red" }}>{errors.cpassword}</p>
            ) : (
              ""
            )}
            <div className="sign-up-btn">
              <button className="button" onClick={() => navigate("/checkout")}>
                Back
              </button>
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Signup;
