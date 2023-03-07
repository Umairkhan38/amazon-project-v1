import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider'
function Checkout() {
    const[{cart,user},dispatch]=useStateValue();

    return (

        <div className="checkout">
            <div className="checkout--left">
            <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="" />
                <div>
                    <h2>Hello, {user?user?.email.split("@")[0] : "Guest"}</h2>
                    <h3 className=" checkout--title"> Your Shopping Details:</h3>
                    {cart.map((item,i)=>(
                        <CheckoutProduct 
                        key={i}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                         />
                    )
                     )}

                </div>
            </div>

            <div className="checkout--right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
