import React from 'react'
import './Subtotal.css'

function Subtotal() {
    return (
        <div className="subtotal">
            <p>Subtotal(0 Items):<strong>0</strong></p>  
            <small className="subtotal--gift">
                <input type="checkbox" />
                This Order Contains a Gift
                </small>
                <button>Proceed to buy</button>
        </div>
    )
}

export default Subtotal
