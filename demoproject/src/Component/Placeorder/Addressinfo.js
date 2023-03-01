import React,{useState} from "react";
import Inputdata from "../User/Inputdata";
const Addressinfo = ({formiks}) => {
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
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            name="Addressinfo.newaddress"
            placeholder="Enter Address..."
            value={check ? formiks.values.Contactinfo.address : formiks.values.Addressinfo.newaddress}
          />
          {!check ? (
            formiks.errors.Addressinfo && formiks.touched.Addressinfo ? (
              <p style={{ color: "red" }}>{formiks.errors.Addressinfo.newaddress}</p>
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
            name="Addressinfo.newpostalcode"
            placeholder="Enter Postalcode..."
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            value={check ? formiks.values.Contactinfo.postalcode : formiks.values.Addressinfo.newpostalcode}
          />
          {!check ? (
            formiks.errors.Addressinfo && formiks.touched.Addressinfo ? (
              <p style={{ color: "red" }}>{formiks.errors.Addressinfo.newpostalcode}</p>
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
            name="Addressinfo.newcity"
            placeholder="Enter Cityname..."
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            value={check ? formiks.values.Contactinfo.city : formiks.values.Addressinfo.newcity}
          />
          {!check ? (
            formiks.errors.Addressinfo && formiks.touched.Addressinfo ? (
              <p style={{ color: "red" }}>{formiks.errors.Addressinfo.newcity}</p>
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
            name="Addressinfo.newstate"
            onChange={formiks.handleChange}
            onBlur={formiks.handleBlur}
            type="text"
            placeholder="Enter statename"
            value={check ? formiks.values.Contactinfo.state : formiks.values.Addressinfo.newstate}
          />
          {!check ? (
            formiks.errors.Addressinfo && formiks.touched.Addressinfo ? (
              <p style={{ color: "red" }}>{formiks.errors.Addressinfo.newstate}</p>
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
