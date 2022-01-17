import React from 'react'
import './Payment.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct'

function Payment() {
    const [{cart,user},dispatch]=useStateValue();
    return (
        <div className="payment">
            {/* Customer's Address */}
            <div className="payment--container">

            <div className="payment--section">
                <div className="payment--address">

                    <h3>Delivery Address</h3>
                    <p><i>{user?.email}</i></p>
                    <p>Mumbai</p>
                    <p>Bandra</p>
                </div>
            </div>
            {/* Cart Review */}
            <div className="payment--section">
                <h3>Review Your Product Details:</h3>
            <div className="payment--items">

            {cart.map(item=>(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                         />
                    )
                     )}
                     </div>
            </div>
            <div className="payment--section">
                <h2>Payment Method:</h2>
                <div className="payment--details">

                </div>


            </div>
            </div>
        </div>
    )
}

export default Payment
