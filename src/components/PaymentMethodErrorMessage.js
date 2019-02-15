import React from "react";

const PaymentMethodError = () => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">We're sorry</h5>
      <p className="card-text">
        Unfortunately, this payment method is not available at the moment.
      </p>
    </div>
  </div>
);

export default PaymentMethodError;
