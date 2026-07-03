import { useState, useEffect } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';

function Ahome() {
  const [stats, setStats] = useState({ users: 0, sellers: 0, books: 0 });
  const adminName = localStorage.getItem('adminName');

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8000/api/admin/users'),
      axios.get('http://localhost:8000/api/admin/sellers'),
      axios.get('http://localhost:8000/api/admin/books'),
    ]).then(([u, s, b]) => {
      setStats({ users: u.data.length, sellers: s.data.length, books: b.data.length });
    }).catch(console.error);
  }, []);

  return (
    <div>
      <Anavbar />
      <div className="container py-5">
        <h2>Welcome, {adminName}!</h2>
        <p className="text-muted">Overview of the BookStore system.</p>
        <div className="row g-4 mt-2">
          <div className="col-md-4">
            <div className="card bg-primary text-white text-center p-4 shadow">
              <h1>{stats.users}</h1>
              <p className="mb-0">Total Users</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-success text-white text-center p-4 shadow">
              <h1>{stats.sellers}</h1>
              <p className="mb-0">Total Sellers</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-warning text-dark text-center p-4 shadow">
              <h1>{stats.books}</h1>
              <p className="mb-0">Total Books</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ahome;