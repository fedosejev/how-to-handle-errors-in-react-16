import React from "react";
import PaymentMethodForm from "./PaymentMethodForm";
import { PAYMENT_METHODS } from "../config";

const PaymentMethod = props => {
  if (
    props.showPaymentMethodForm &&
    props.name === PAYMENT_METHODS.CREDIT_CARD
  ) {
    return (
      <PaymentMethodForm
        onSubmit={event => {
          event.preventDefault();

          console.log("Payment submitted.");
        }}
        onCancel={props.onCancelPaymentMethod}
      />
    );
  }

  if (
    props.showPaymentMethodForm &&
    (props.name === PAYMENT_METHODS.BANK_TRANSFER ||
      props.name === PAYMENT_METHODS.DEBIT_CARD)
  ) {
    throw new Error("Failed to render payment form.");
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Pay by {props.name}</h5>

        <button
          className="btn btn-primary"
          onClick={() => props.onSelectPaymentMethod(props.name)}
        >
          Choose {props.name}
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
