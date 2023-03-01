import React, { useState } from "react";
import Inputdata from "../User/Inputdata";
import Card from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css'
import "./paymentdetail.css";
const Paymentdetail = ({ formiks }) => {
  const [check, setcheck] = useState(false);
  return (
    <div className="payment wrapper">
      <h3 style={{ borderBottom: "4px solid #808080" }}>Payment details</h3>
      <div className="payment-option">
        <div className="f-group">
          <Inputdata
            type="radio"
            label="Upi payment"
            name="upi"
            onChange={() => setcheck((check) => !check)}
            checked={check}
          />
        </div>
        <div className="f-group">
          <Inputdata
            type="radio"
            label="Debit/Credit Card payment"
            name="upi"
            onChange={() => setcheck((check) => !check)}
            checked={!check}
          />
        </div>
      </div>
      <div className="pyment-method">
        {check && (
          <div className="upi-method">
            <div className="form-group">
              <Inputdata label="Enter your UPI ID or VPA address" />
            </div>
          </div>
        )}
        {!check && (
          <div className="card-method">
            <div className="form-group">
              <Card
                name={formiks.values.Paymentdetail.name}
                cvc={formiks.values.Paymentdetail.cvc}
                number={formiks.values.Paymentdetail.number}
                expiry={formiks.values.Paymentdetail.expiry}
              />
              <Inputdata
                label="Card holder name"
                type="text"
                name="Paymentdetail.name"
                onChange={formiks.handleChange}
                onBlur={formiks.handleBlur}
                value={formiks.values.Paymentdetail.name}
              />
              <Inputdata
                label="expirydate"
                type="text"
                name="Paymentdetail.expiry"
                onChange={formiks.handleChange}
                onBlur={formiks.handleBlur}
                value={formiks.values.Paymentdetail.expiry}
              />
              <Inputdata
                label="Card number"
                type="number"
                name="Paymentdetail.number"
                onChange={formiks.handleChange}
                onBlur={formiks.handleBlur}
                value={formiks.values.Paymentdetail.number}
              />
              <Inputdata
                label="expirydate"
                type="text"
                name="Paymentdetail.cvc"
                onChange={formiks.handleChange}
                onBlur={formiks.handleBlur}
                value={formiks.values.Paymentdetail.cvc}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Paymentdetail;
