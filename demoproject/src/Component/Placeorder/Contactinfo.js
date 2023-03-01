import React from "react";
import Inputdata from "../User/Inputdata";
const Contactinfo = ({formiks}) => {
  return (
    <div className="customer-info">
      <h3 style={{ borderBottom: "4px solid #808080" }}>Customer Info</h3>
      <div className="cus-info">
        <div className="form-group">
          <Inputdata
            label="First name :-"
            name="Contactinfo.firstname"
            value={formiks.values.Contactinfo.firstname}
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            type="text"
            placeholder="Enter Firstname..."
          />
          {formiks.errors.Contactinfo && formiks.touched.Contactinfo ? (
            <p style={{ color: "red", margin: "0" }}>{formiks.errors.Contactinfo.firstname}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="Last name :-"
            type="text"
            name="Contactinfo.lastname"
            value={formiks.values.Contactinfo.lastname}
            onChange={formiks.handleChange}
            placeholder="Enter Lastname..."
            onBlur={formiks.handleBlur}
          />
          {formiks.errors.Contactinfo && formiks.touched.Contactinfo ? (
            <p style={{ color: "red" }}>{formiks.errors.Contactinfo.lastname}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            name="Contactinfo.email"
            value={formiks.values.Contactinfo.email}
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            label="Email :-"
            type="text"
            placeholder="Enter email..."
          />
          {formiks.errors.Contactinfo && formiks.touched.Contactinfo ? (
            <p style={{ color: "red" }}>{formiks.errors.Contactinfo.email}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="Address :-"
            name="Contactinfo.address"
            value={formiks.values.Contactinfo.address}
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            type="text"
            placeholder="Enter Address..."
          />
          {formiks.errors.Contactinfo && formiks.touched.Contactinfo ? (
            <p style={{ color: "red", margin: "0" }}>{formiks.errors.Contactinfo.address}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="Contact Number :-"
            name="Contactinfo.mobilenumber"
            value={formiks.values.Contactinfo.mobilenumber}
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            type="number"
            placeholder="Enter Contactnumber..."
          />
          {formiks.errors.Contactinfo && formiks.touched.Contactinfo ? (
            <p style={{ color: "red" }}>{formiks.errors.Contactinfo.mobilenumber}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="Postalcode :-"
            name="Contactinfo.postalcode"
            value={formiks.values.Contactinfo.postalcode}
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            type="number"
            placeholder="Enter Postalcode..."
          />
          {formiks.errors.Contactinfo && formiks.touched.Contactinfo ? (
            <p style={{ color: "red", margin: "0" }}>{formiks.errors.Contactinfo.postalcode}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="City :-"
            name="Contactinfo.city"
            value={formiks.values.Contactinfo.city}
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            type="text"
            placeholder="Enter Cityname..."
          />
          {formiks.errors.Contactinfo && formiks.touched.Contactinfo ? (
            <p style={{ color: "red", margin: "0" }}>{formiks.errors.Contactinfo.city}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="State :-"
            type="text"
            name="Contactinfo.state"
            value={formiks.values.Contactinfo.state}
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            placeholder="Enter statename"
          />
          {formiks.errors.Contactinfo && formiks.touched.Contactinfo ? (
            <p style={{ color: "red", margin: "0" }}>{formiks.errors.Contactinfo.state}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
