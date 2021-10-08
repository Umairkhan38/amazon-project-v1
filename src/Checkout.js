import React from 'react';
import './Checkout.css';
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout--left">
            <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="" />
                <div>
                    <h3 className=" checkout--title"> your shopping details</h3>
                </div>
            </div>

            <div className="checkout--right">
                <h3>Subtotal (2 Items):</h3>
            </div>
        </div>
    )
}

export default Checkout
