import React from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import {useHistory} from "react-router-dom";
import Payment from './Payment' 
function Subtotal() {
  const history=useHistory();
  const [{cart}, dispatch] = useStateValue();  

  return (
    <div className="subtotal">
      <CurrencyFormat 
         renderText = { (value) => (
          <>
                <p>Subtotal ({cart.length} items) : <strong>{value}</strong> </p>
                <small className="subtotal--gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
          </>
         )}
         decimalScale = {2}
         value = {getCartTotal(cart)}
         displayType = {"text"}
         thousandSeparator = {true}
         prefix = {"₹"}
      />      
      <button onClick={e=>history.push('/Payment')}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
