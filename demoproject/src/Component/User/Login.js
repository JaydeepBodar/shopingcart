import React, { useState } from "react";
import "./login.css";
import Inputdata  from "./Inputdata";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { schemalogin } from "../../Schema/schema";
import axios from "axios";
const Login = () => {
  const [error, seterror] = useState({ error: false, massege: "" });
  const navigate = useNavigate();
  const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: schemalogin,
      onSubmit: (values, action) => {
        axios
          .post("http://localhost:4100/user/login", values)
          .then((res) => navigate("/placehorder"))
          .catch((e) => {
            const newdata = e.response.data;
            console.log("asdsadsa", newdata);

            // if (e.response.status Inputdata== 401) {
            //   console.log("yasdiasdiu")
            //   seterrorMsg('invalid login')
            // }
            // console.log("sdasdsa",error);
            seterror({ error: true, massege: newdata.message });
          });
        if (!error) {
          action.resetForm();
          seterror({ error: false });
        }
      },
    });
  return (
    <React.Fragment>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Inputdata
            label="Email"
            placeholder="Enter your email.."
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
        </div>

        {errors.email && touched.email ? (
          <p style={{ color: "red" }}>{errors.email}</p>
        ) : (
          ""
        )}
        <div className="form-group">
          <Inputdata
            label="Password"
            placeholder="Enter your Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
        </div>
        {errors.password && touched.password ? (
          <p style={{ color: "red" }}>{errors.password}</p>
        ) : (
          ""
        )}
        {error.error && (
          <p style={{ color: "red", textAlign: "center" }}>{error.massege}</p>
        )}
        <div className="submit-btn">
          <button className="button">Submit</button>
        </div>
      </form>
      <div className="newuser">
        <NavLink
          to="/signup  "
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          new user to create account
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Login;
