import React from 'react';
import "./Styles/Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBaketTotal } from "./Reducer"
function Subtotal() {
    
    // eslint-disable-next-line
    const [{ basket },dispatch] = useStateValue();
    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> This order contains a git
                </small>
                </>
                )}
            decimalScale={2} 
            value={getBaketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}

            />

        <button>Proceed to Checkout</button>


        </div>
    )
}

export default Subtotal;
