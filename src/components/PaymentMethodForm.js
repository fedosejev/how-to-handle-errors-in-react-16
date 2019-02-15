import React from "react";

const PaymentMethodForm = props => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">Pay by credit card</h5>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="number"
            placeholder="Enter number"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="expirationDate"
            placeholder="Enter expiration date"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="CVV"
            placeholder="Enter CVV"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Pay now
        </button>
        <button type="button" className="btn btn-link" onClick={props.onCancel}>
          Cancel
        </button>
      </form>
    </div>
  </div>
);

export default PaymentMethodForm;
