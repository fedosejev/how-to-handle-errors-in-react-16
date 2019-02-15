import React, { Component } from "react";
import PaymentMethodErrorMessage from "./PaymentMethodErrorMessage";

class PaymentMethodErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return <PaymentMethodErrorMessage />;
    }

    return this.props.children;
  }
}

export default PaymentMethodErrorBoundary;
