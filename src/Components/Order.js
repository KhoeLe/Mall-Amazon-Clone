import React from 'react'
import moment from "moment"
import './Styles/Order.css'
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct"

function Order({newOrders}) {
    return (
        <div className="order">
            <h2>Order </h2>
             <p>{moment.unix(newOrders.data.created).format("MMMM Do YYYY, h:mma")}</p>
             <p className="order_id">
                <small>{newOrders.id}</small>
             </p>
             {newOrders.data.basket?.map(item =>(
                 <CheckoutProduct
                 id={item.id}
                 tiles={item.tiles}
                 price={item.price}
                 image={item.image}
                 ratting={item.ratting}
                hideButton
                 />
             ))}
              <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={newOrders.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order
