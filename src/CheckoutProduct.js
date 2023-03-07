import React from 'react';
import './CheckoutProduct.css' 
import {useStateValue} from './StateProvider'
function CheckoutProduct({id,image,title,price,hideButton}) {
    const[{cart},dispatch]=useStateValue();

    const removeFromCart= ()=>{
        dispatch(
            {
                type:'REMOVE_FROM_CART',
                id:id,
               
            }
        )
    }
    return (
        <div className="checkoutProduct">
        <img className="checkoutProductImage" src={image} />
         
         <div className="checkoutProduct--info" >
         <p className="checkoutproduct--title">{title}</p>
         <p className="checkoutproduct--price"><bold>₹</bold>
         <strong>{price}</strong>
         </p>
         {!hideButton&&(
         <button onClick={removeFromCart} >Remove From Cart</button>   
         )}</div>
        </div>
    )
}

export default CheckoutProduct
