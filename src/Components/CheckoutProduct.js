import React from 'react';
import "./Styles/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({id, tiles, ratting, price, image, hideButton}) {

    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();
    
    const removetoBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
                id: id,
                //note 
        });

    }; 
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title" >{tiles}</p>
                <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {
                    Array(ratting)
                    .fill()
                    .map((_) =>(
                        // <span role="img" className="name"></span>
                        <span role="img" aria-label="star">⭐</span>     
                    ))
                }
                </div>
                {!hideButton && (
                    <button onClick={removetoBasket}>Remove from Basket</button>
                )}
            </div>  
 
        </div>
    )
}

export default CheckoutProduct;
