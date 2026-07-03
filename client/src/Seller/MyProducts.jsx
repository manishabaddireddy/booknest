import { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import Book from './Book';
import { useNavigate } from 'react-router-dom';

function MyProducts() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const sellerId = localStorage.getItem('sellerId');
    axios.get(`http://localhost:8000/api/seller/mybooks/${sellerId}`)
      .then(res => setBooks(res.data))
      .catch(console.error);
  }, []);

  const handleDelete = id => setBooks(prev => prev.filter(b => b._id !== id));

  return (
    <div>
      <Snavbar />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>My Books</h3>
          <button className="btn btn-success" onClick={() => navigate('/seller/addbook')}>+ Add New Book</button>
        </div>
        {books.length === 0 ? (
          <div className="text-center py-5">
            <h5 className="text-muted">No books listed yet.</h5>
            <button className="btn btn-success mt-3" onClick={() => navigate('/seller/addbook')}>Add Your First Book</button>
          </div>
        ) : (
          <div className="row g-4">
            {books.map(b => <Book key={b._id} book={b} onDelete={handleDelete} />)}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProducts;