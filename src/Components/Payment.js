import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  useEffect(() =>{
    // generate the special stripe secret which allows us to change a customer

    const getClientSecret = async () =>{
      const response = await axios({
        method : 'post',
        // Stripe expects the total in a currencies subunits
        url : `payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  },[basket])

  const handleSubmit = async (event) => {
    // do all fancy stripe things
    event.preventDefault();
    setProcessing(true);
    // const payload = await stripe
  };

  const handleChange = (event) => {
    // listen change in the card and
    // displays the errors to customers all the card errors
    setDisabled(event.empty);
    setError(event.empty ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        {/* we need three sections for address/ review items/ and the last for reviewing items */}
        <h1>
          Checkout(<Link to="./checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React addr</p>
            <p>Uttar Pradesh, INDIA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* all products in basket will show here */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            {/* sripe magic will go here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal({basket.length} items) :{" "}
                        <strong>{value}</strong>
                      </p>
                      <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
