// import React, { useState, useEffect } from "react";
// import CheckoutProduct from "./CheckoutProduct";
// import { useStateValue } from "./StateProvider";
// import CurrencyFormat from "react-currency-format";
// import { getBaketTotal } from "./Reducer";
// import { Link, useHistory } from "react-router-dom";
// import "./Styles/Pagement.css";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import Axios from "./axios";

// function Pagement() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const history = useHistory();
//   // console.log("object", basket)
//   const stripe = useStripe();
//   const elements = useElements();
//   const [succeeded, setSucceeded] = useState(false);
//   const [processing, setProcessing] = useState("");
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [clientSecret, setClientSecret] = useState(true);

//   useEffect(() => {
//     const getClinetSecret = async () => {
//       const response = await Axios({
//         method: "post",
//         //strip expects the total in currencies submits
//         url: `/paymements/create?total=${getBaketTotal(basket) * 100}`,
//       });
//       setClientSecret(response.data.clientSecret);
//     };
//     getClinetSecret();
//   }, [basket]);

//   const handleSubmit = async (e) => {
//     // lam tat ca o here
//     e.preventDefault();
//     setProcessing(true);

//     const payLoad = await stripe
//       .confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       })
//       .then(({ paymentIntent }) => {
//         //paymentIntent = payment confirmation
//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);

//         history.replaceState("/oders");
//       });
//   };
//   const handleChange = (e) => {
//     // xu ly thanh toan hay ko

//     setDisabled(e.empty);
//     setError(e.error ? e.error.message : "Nothing ");
//   };

//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>
//           Checkout (<Link to="/checkout">{basket?.length} items</Link>)
//         </h1>
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Delivery Address</h3>
//           </div>
//           <div className="payment__address">
//             <p>{user?.email}</p>
//           </div>
//         </div>
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Review items and delivery</h3>
//           </div>
//           <div className="payment__items">
//             {basket.map((item) => (
//               <CheckoutProduct
//                 id={item.id}
//                 image={item.image}
//                 tiles={item.tiles}
//                 price={item.price}
//                 ratting={item.ratting}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>payment Method</h3>
//           </div>
//           <div className="payment__details">
//             <form onSubmit={handleSubmit}>
//               <CardElement onChange={handleChange} />

//               <div className="payment__priceContainer">
//                 <CurrencyFormat
//                   renderText={(value) => <h3>Order Total : {value} </h3>}
//                   decimalScale={2}
//                   value={getBaketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//                 <button disabled={processing || disabled || succeeded}>
//                   <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//                 </button>
//               </div>
//               {/* Errors */}
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pagement;
import React, { useState, useEffect } from "react";
import "./Styles/Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBaketTotal } from "./Reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBaketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
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
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
      return payload();
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBaketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
