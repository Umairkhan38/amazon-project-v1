import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider.js";

function Product({id,title,price,image}) {
    const [state,dispatch] = useStateValue();

    const addTocart=()=>{
        dispatch(
            {
                type:"ADD_TO_CART",
                item:{
                    id:id,
                    title:title,
                    price:price,
                    image:image,

                }
            }
        )
    }
    return (
        <div className="product">
        <div className="product--info">
        <p>{title}</p>

        <p className="product--price">
        <bold>₹</bold>
        <strong>{price}</strong>
        </p>
            
         <img className="product--image" src={image} alt="" /> 
        </div>
        
         <button className="product--button" onClick={addTocart}>Add to Cart</button>  
    </div>
    )
}

export default Product

