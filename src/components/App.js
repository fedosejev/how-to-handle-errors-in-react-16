import React, { Component } from "react";
import PaymentMethod from "./PaymentMethod";
import PaymentMethodErrorBoundary from "./PaymentMethodErrorBoundary";
import { PAYMENT_METHODS, NO_PAYMENT_METHOD } from "../config";

class App extends Component {
  state = {
    selectedPaymentMethod: NO_PAYMENT_METHOD
  };

  shouldRenderPaymentMethod = paymentMethod =>
    this.state.selectedPaymentMethod === NO_PAYMENT_METHOD ||
    this.state.selectedPaymentMethod === paymentMethod;

  selectPaymentMethod = paymentMethod => {
    this.setState({
      selectedPaymentMethod: paymentMethod
    });
  };

  cancelPaymentMethod = () => this.selectPaymentMethod(NO_PAYMENT_METHOD);

  render() {
    const showPaymentMethodForm =
      this.state.selectedPaymentMethod !== NO_PAYMENT_METHOD;

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            {this.shouldRenderPaymentMethod(PAYMENT_METHODS.CREDIT_CARD) && (
              <PaymentMethod
                name={PAYMENT_METHODS.CREDIT_CARD}
                onSelectPaymentMethod={this.selectPaymentMethod}
                onCancelPaymentMethod={this.cancelPaymentMethod}
                showPaymentMethodForm={showPaymentMethodForm}
              />
            )}

            {this.shouldRenderPaymentMethod(PAYMENT_METHODS.DEBIT_CARD) && (
              <PaymentMethod
                name={PAYMENT_METHODS.DEBIT_CARD}
                onSelectPaymentMethod={this.selectPaymentMethod}
                onCancelPaymentMethod={this.cancelPaymentMethod}
                showPaymentMethodForm={showPaymentMethodForm}
              />
            )}

            {this.shouldRenderPaymentMethod(PAYMENT_METHODS.BANK_TRANSFER) && (
              <PaymentMethodErrorBoundary onError={this.cancelPaymentMethod}>
                <PaymentMethod
                  name={PAYMENT_METHODS.BANK_TRANSFER}
                  onSelectPaymentMethod={this.selectPaymentMethod}
                  onCancelPaymentMethod={this.cancelPaymentMethod}
                  showPaymentMethodForm={showPaymentMethodForm}
                />
              </PaymentMethodErrorBoundary>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
