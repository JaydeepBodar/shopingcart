import React, { useState } from "react";
import Inputdata from "../User/Inputdata";
const Addressinfo = ({ formiks2, formiks1 }) => {
  const [check, setcheck] = useState(false);
  return (
    <div className="addressinfo">
      <h3 style={{ borderBottom: "4px solid #808080" }}>Billing Address</h3>
      <div className="billcheck">
        <Inputdata
          label="billing address same as shipping address"
          type="checkbox"
          onChange={() => setcheck((check) => !check)}
        />
      </div>
      <div className="bill-info">
        <div className="form-group">
          <Inputdata
            label="Address :-"
            type="text"
            onChange={check ? formiks1.handleChange : formiks2.handleChange}
            onBlur={formiks2.handleBlur}
            name="newaddress"
            placeholder="Enter Address..."
            value={check ? formiks1.values.address : formiks2.values.newaddress}
          />
          {!check ? (
            formiks2.errors && formiks2.touched ? (
              <p style={{ color: "red" }}>{formiks2.errors.newaddress}</p>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="Postalcode :-"
            type="number"
            name="newpostalcode"
            placeholder="Enter Postalcode..."
            onChange={check ? formiks1.handleChange : formiks2.handleChange}
            onBlur={formiks2.handleBlur}
            value={
              check ? formiks1.values.postalcode : formiks2.values.newpostalcode
            }
          />
          {!check ? (
            formiks2.errors && formiks2.touched ? (
              <p style={{ color: "red" }}>{formiks2.errors.newpostalcode}</p>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="City :-"
            type="text"
            name="newcity"
            placeholder="Enter Cityname..."
            onChange={check ? formiks1.handleChange : formiks2.handleChange}
            onBlur={formiks2.handleBlur}
            value={check ? formiks1.values.city : formiks2.values.newcity}
          />
          {!check ? (
            formiks2.errors && formiks2.touched ? (
              <p style={{ color: "red" }}>{formiks2.errors.newcity}</p>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Inputdata
            label="State :-"
            name="newstate"
            onChange={check ? formiks1.handleChange : formiks2.handleChange}
            onBlur={formiks2.handleBlur}
            type="text"
            placeholder="Enter statename"
            value={check ? formiks1.values.state : formiks2.values.newstate}
          />
          {!check ? (
            formiks2.errors && formiks2.touched ? (
              <p style={{ color: "red" }}>{formiks2.errors.newstate}</p>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Addressinfo;
