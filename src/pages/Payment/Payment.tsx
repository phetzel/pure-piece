import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { addPayment } from "../../services/paymentServices";
// import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51M4DLFAW0ruGLxXAptFTyAN5Viyd193gcv5II8WdHWtOYi51Gx4qBOmDytOrLs7p93Doo89jgc3kdQxnjlJhRHnC00llLcDoPp"
);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    addPayment().then((res) => {
      setClientSecret(res.client_secret);
    });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App" style={{ display: "flex", padding: "100px" }}>
      {clientSecret && (
        /* @ts-ignore */
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
