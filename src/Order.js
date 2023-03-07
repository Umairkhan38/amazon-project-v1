import React from 'react';
import './Orders.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
  return (
    <div className='order'>
        <h2>Order Items</h2>
        <strong>On {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</strong>
        <p className='order_id'>
           Order ID:  {order.id}
        </p>
        <hr />
        <div >
        {
            order.data.cart?.map((item,i)=>(
                <CheckoutProduct  
                        key={i}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        hideButton
                         />
            ))
        }
        {
            <CurrencyFormat
            renderText={(value) => (
              <>
                <h4 style={{ margin: "auto" }}>
                  Total Payment of <small>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</small> <small>({order?.data.cart.length} items)</small> :{" "}
                  <strong>{value}/-</strong>{" "}
                </h4>
              </>
            )}
            decimalScale={2}
            value={order.data.amount/100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        }
        </div>
    </div>
  )
}

export default Order