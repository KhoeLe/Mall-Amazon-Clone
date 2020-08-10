import React from 'react';
import "./Styles/Product.css"
import { useStateValue } from "./StateProvider";
function Product({id, tiles, ratting, price, image}) {
    
    const [{ }, dispatch] = useStateValue();
    const addtoBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                tiles: tiles,
                image : image,
                price : price,
                ratting : ratting,
            },
        });

        }

    return (
        <div className="product">
            <div className="product__info">
                <p >{tiles}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {
                    Array(ratting)
                    .fill()
                    .map((_) =>(
                        // <span role="img" className="name"></span>
                        <span role="img" aria-label="star">⭐</span>     
                    ))
                }
                </div>
            </div>  
                <img src={image} alt=""/>
                <button onClick={addtoBasket}>Add to basket</button>
        </div>
    )
}

export default Product