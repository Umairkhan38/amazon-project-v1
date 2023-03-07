import React,{useState, useEffect} from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import {db} from './Firebase'

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [error,setError]=useState(null)
  const [disable,setDisabled]=useState(true)
  const [processing,setProcessing]=useState('')
  const [succeeded,setSucceeded]=useState(false)
  const [clientSecret,setClientSecret]=useState(true)

  const elements=useElements()
  const history= useHistory()
  const stripe=useStripe();

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits in Paise
        url:`/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);


  console.log("THE SECRET IS >>>", clientSecret);
  console.log("User", user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      {/* Customer's Address */}
      <div className="payment--container">
        <div className="payment--section">
          <div className="payment--address">
            <h3>Delivery Address</h3>
            <p>
              <i>{user?user?.email.split("@")[0] : "Guest"}</i>
            </p>
            <p>Mumbai</p>
            <p>Bandra</p>
          </div>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <h4 style={{ margin: "auto" }}>
                  Total Payment of <small>({cart?.length} items)</small> :{" "}
                  <h4>{value}/-</h4>{" "}
                </h4>
              </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </div>
        {/* Cart Review */}
        <div className="payment--section">
          <h3>Review Your Product Details:</h3>
          <div className="payment--items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="payment--section">
          <h2>Payment Method:</h2>
          <div className="payment--details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
              <CurrencyFormat
            renderText={(value) => (
              <>
                <h4 style={{ margin: "auto" }}>
                  Order Total : <span>{value}/-</span>
                </h4>
              </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
            <button className="payment-btn" disabled={processing || disable || succeeded}><span>{processing?<p>Processing...</p>:<p>Buy Now</p>}</span></button>
              </div>
              {error&&<div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
