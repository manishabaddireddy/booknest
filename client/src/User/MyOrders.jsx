import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OrderItem from './OrderItem';

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get(`http://localhost:8000/api/user/orders/${userId}`)
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">
        <span className="navbar-brand fw-bold">📚 BookStore</span>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/user/home')}>
            Back to Home
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => { localStorage.clear(); navigate('/'); }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="container py-4">
        <h3 className="mb-4">My Orders</h3>

        {orders.length === 0 ? (
          <div className="text-center py-5">
            <h5 className="text-muted">No orders placed yet.</h5>
            <button className="btn btn-primary mt-3" onClick={() => navigate('/user/products')}>
              Browse Books
            </button>
          </div>
        ) : (
          orders.map(order => (
            <OrderItem key={order._id} order={order} />
          ))
        )}
      </div>
    </div>
  );
}

export default MyOrders;