import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Uitem from './Uitem';

function Products() {
  const [books,  setBooks]  = useState([]);
  const [search, setSearch] = useState({ title: '', author: '', genre: '' });
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const params = {};
      if (search.title)  params.title  = search.title;
      if (search.author) params.author = search.author;
      if (search.genre)  params.genre  = search.genre;
      const res = await axios.get('http://localhost:8000/api/user/books', { params });
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchBooks(); }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">
        <span className="navbar-brand fw-bold">📚 BookStore</span>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/user/home')}>Home</button>
          <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/user/orders')}>My Orders</button>
        </div>
      </nav>

      <div className="container py-4">
        <h3>Browse Books</h3>

        {/* Search/Filter */}
        <div className="row g-2 mb-4">
          <div className="col-md-3">
            <input className="form-control" placeholder="Search by title..."
              onChange={e => setSearch({ ...search, title: e.target.value })} />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Search by author..."
              onChange={e => setSearch({ ...search, author: e.target.value })} />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Search by genre..."
              onChange={e => setSearch({ ...search, genre: e.target.value })} />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary w-100" onClick={fetchBooks}>Search</button>
          </div>
        </div>

        {/* Books Grid */}
        <div className="row g-4">
          {books.length === 0
            ? <p>No books found.</p>
            : books.map(book => <Uitem key={book._id} book={book} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Products;