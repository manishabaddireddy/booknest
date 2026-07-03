import { useState } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import { useNavigate } from 'react-router-dom';

function Addbook() {
  const [form, setForm]   = useState({ title: '', author: '', genre: '', description: '', price: '' });
  const [image, setImage] = useState(null);
  const [msg, setMsg]     = useState('');
  const navigate          = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const sellerId   = localStorage.getItem('sellerId');
      const sellerName = localStorage.getItem('sellerName');
      const data       = new FormData();
      Object.entries({ ...form, sellerId, sellerName }).forEach(([k, v]) => data.append(k, v));
      if (image) data.append('itemImage', image);
      await axios.post('http://localhost:8000/api/seller/addbook', data);
      setMsg('Book added successfully!');
      setTimeout(() => navigate('/seller/myproducts'), 1000);
    } catch (err) {
      setMsg('Failed to add book');
    }
  };

  return (
    <div>
      <Snavbar />
      <div className="container py-4">
        <div className="card shadow p-4" style={{ maxWidth: '600px', margin: 'auto' }}>
          <h3 className="mb-4">Add New Book</h3>
          {msg && <div className="alert alert-success">{msg}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" onChange={e => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input type="text" className="form-control" onChange={e => setForm({ ...form, author: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Genre</label>
              <input type="text" className="form-control" onChange={e => setForm({ ...form, genre: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" onChange={e => setForm({ ...form, description: e.target.value })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Price (₹)</label>
              <input type="number" className="form-control" onChange={e => setForm({ ...form, price: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Book Cover Image</label>
              <input type="file" className="form-control" onChange={e => setImage(e.target.files[0])} />
            </div>
            <button type="submit" className="btn btn-success w-100">Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addbook;