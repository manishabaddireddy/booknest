import { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';

function Shome() {
  const [stats, setStats] = useState({ books: 0, orders: 0 });
  const sellerName = localStorage.getItem('sellerName');

  useEffect(() => {
    const sellerId = localStorage.getItem('sellerId');
    Promise.all([
      axios.get(`http://localhost:8000/api/seller/mybooks/${sellerId}`),
      axios.get(`http://localhost:8000/api/seller/orders/${sellerId}`)
    ]).then(([books, orders]) => {
      setStats({ books: books.data.length, orders: orders.data.length });
    }).catch(console.error);
  }, []);

  return (
    <div>
      <Snavbar />
      <div className="container py-5">
        <h2>Welcome, {sellerName}!</h2>
        <p className="text-muted">Manage your books and orders from here.</p>
        <div className="row g-4 mt-2">
          <div className="col-md-4">
            <div className="card bg-success text-white text-center p-4 shadow">
              <h1>{stats.books}</h1>
              <p className="mb-0">Total Books Listed</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-info text-white text-center p-4 shadow">
              <h1>{stats.orders}</h1>
              <p className="mb-0">Total Orders Received</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shome;