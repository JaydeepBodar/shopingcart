import React from "react";
import Inputdata from "../User/Inputdata";
const Contactinfo = ({formiks1}) => {
  return (
    <div className="customer-info">
      <h3 style={{ borderBottom: "4px solid #808080" }}>Customer Info</h3>
      <div className="cus-info">
        <div className="form-group">
          <Inputdata
            label="First name :-"
            name="firstname"
            value={formiks1.values.firstname}
            onChange={formiks1.handleChange}
            onBlur={formiks1.handleBlur}
            type="text"
            placeholder="Enter Firstname..."
          />
          {formiks1.errors && formiks1.touched ? (
            <p style={{ color: "red", margin: "0" }}>{formiks1.errors.firstname}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="Last name :-"
            type="text"
            name="lastname"
            value={formiks1.values.lastname}
            onChange={formiks1.handleChange}
            placeholder="Enter Lastname..."
            onBlur={formiks1.handleBlur}
          />
          {formiks1.errors && formiks1.touched ? (
            <p style={{ color: "red" }}>{formiks1.errors.lastname}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            name="email"
            value={formiks1.values.email}
            onChange={formiks1.handleChange}
            onBlur={formiks1.handleBlur}
            label="Email :-"
            type="text"
            placeholder="Enter email..."
          />
          {formiks1.errors && formiks1.touched ? (
            <p style={{ color: "red" }}>{formiks1.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="Address :-"
            name="address"
            value={formiks1.values.address}
            onChange={formiks1.handleChange}
            onBlur={formiks1.handleBlur}
            type="text"
            placeholder="Enter Address..."
          />
          {formiks1.errors && formiks1.touched ? (
            <p style={{ color: "red", margin: "0" }}>{formiks1.errors.address}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="Contact Number :-"
            name="mobilenumber"
            value={formiks1.values.mobilenumber}
            onChange={formiks1.handleChange}
            onBlur={formiks1.handleBlur}
            type="number"
            placeholder="Enter Contactnumber..."
          />
          {formiks1.errors && formiks1.touched ? (
            <p style={{ color: "red" }}>{formiks1.errors.mobilenumber}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="Postalcode :-"
            name="postalcode"
            value={formiks1.values.postalcode}
            onChange={formiks1.handleChange}
            onBlur={formiks1.handleBlur}
            type="number"
            placeholder="Enter Postalcode..."
          />
          {formiks1.errors && formiks1.touched ? (
            <p style={{ color: "red", margin: "0" }}>{formiks1.errors.postalcode}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="City :-"
            name="city"
            value={formiks1.values.city}
            onChange={formiks1.handleChange}
            onBlur={formiks1.handleBlur}
            type="text"
            placeholder="Enter Cityname..."
          />
          {formiks1.errors && formiks1.touched ? (
            <p style={{ color: "red", margin: "0" }}>{formiks1.errors.city}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="State :-"
            type="text"
            name="state"
            value={formiks1.values.state}
            onChange={formiks1.handleChange}
            onBlur={formiks1.handleBlur}
            placeholder="Enter statename"
          />
          {formiks1.errors && formiks1.touched ? (
            <p style={{ color: "red", margin: "0" }}>{formiks1.errors.state}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
