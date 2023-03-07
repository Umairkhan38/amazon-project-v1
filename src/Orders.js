import React,{useState,useEffect } from 'react'
import { db } from './Firebase'
import './Orders.css'
import { useStateValue } from './StateProvider';
import Order from './Order';
function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [order,setOrder]=useState([])

  useEffect(() => {

    if(user){
      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created','desc')
      .onSnapshot(snapShot=>(
         setOrder(snapShot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
         }))) 
      ))
    }
    else{
      setOrder([])
    }
  }, [user])
  console.log(order)

  return (
    <div className='orders'>
    <h1 style={{textAlign:'center',padding:'8px'}}>Your Order Has Taken Successfully!!</h1>
    <h2 style={{textAlign:'center',padding:'8px'}}>Checkout your Orders</h2>
    <div className='orders_order'>
      {
        order?order?.map(order=> <Order order={order} />):<p>No Orders Found!</p>
      }
    </div>
    </div>
  )
}

export default Orders