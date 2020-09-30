import React,{useState} from 'react'
import { useEffect } from 'react';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from "./Order"

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{baskets, user}, dispathch] = useStateValue();
  
    useEffect(() => {
      if(user){
        db
        .collection("users")
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()
            })))
        ))
      }else{
          setOrders([]) // empty baskets
      }
       
    }, [user])
  
  
  return (
    <div className="orders">
          <h2>Your Orders</h2>

          <div className="oders__order">
            {orders?.map(newOrders =>(
              <Order newOrders={newOrders}/>
            ))}
          </div>
    </div>
  )
}

export default Orders;
