import { useState, useEffect } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';

function Items() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/books')
      .then(res => setBooks(res.data))
      .catch(console.error);
  }, []);

  const handleDelete = async id => {
    if (!window.confirm('Delete this book?')) return;
    await axios.delete(`http://localhost:8000/api/admin/book/${id}`);
    setBooks(prev => prev.filter(b => b._id !== id));
  };

  return (
    <div>
      <Anavbar />
      <div className="container py-4">
        <h3 className="mb-4">All Books</h3>
        {books.length === 0 ? (
          <p className="text-muted">No books available yet.</p>
        ) : (
          <table className="table table-bordered shadow-sm">
            <thead className="table-warning">
              <tr><th>#</th><th>Title</th><th>Author</th><th>Genre</th><th>Price</th><th>Seller</th><th>Action</th></tr>
            </thead>
            <tbody>
              {books.map((b, i) => (
                <tr key={b._id}>
                  <td>{i + 1}</td>
                  <td>{b.title}</td>
                  <td>{b.author}</td>
                  <td>{b.genre}</td>
                  <td>₹{b.price}</td>
                  <td>{b.sellerName}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(b._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Items;