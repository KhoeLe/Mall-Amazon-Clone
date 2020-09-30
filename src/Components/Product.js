import React from "react";
import "./Styles/Product.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ id, tiles, ratting, price, image }) {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  // console.log({id, tiles, ratting, price, image});

  const addtoBasket = () => {
    toast(" 🦄 Item is Added to Basket", {
        position: "bottom-right",
        autoClose: 3600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        tiles: tiles,
        image: image,
        price: price,
        ratting: ratting,
      },
    });
  };


  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{tiles}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(ratting)
            .fill()
            .map((_) => (
              // <span role="img" className="name"></span>
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      
      <button onClick={addtoBasket}>Add to basket</button>
      {/* <button onClick={notify}>Notify !</button> */}
      <ToastContainer
        position="bottom-right"
        autoClose={3600}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Product;
