import { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const sellerId = localStorage.getItem('sellerId');
    axios.get(`http://localhost:8000/api/seller/orders/${sellerId}`)
      .then(res => setOrders(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Snavbar />
      <div className="container py-4">
        <h3 className="mb-4">Orders Received</h3>
        {orders.length === 0 ? (
          <div className="text-center py-5">
            <h5 className="text-muted">No orders received yet.</h5>
          </div>
        ) : (
          orders.map(o => (
            <div key={o._id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h5>{o.booktitle}</h5>
                    <p className="mb-1">Author: {o.bookauthor}</p>
                    <p className="mb-1">Genre: {o.bookgenre}</p>
                    <p className="mb-1 fw-bold text-success">Amount: ₹{o.totalamount}</p>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Buyer:</strong> {o.userName}</p>
                    <p><strong>Address:</strong> {o.flatno}, {o.city}, {o.state} - {o.pincode}</p>
                    <p><strong>Booked:</strong> {o.BookingDate}</p>
                    <p><strong>Delivery:</strong> {o.Delivery}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;