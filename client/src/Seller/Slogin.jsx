import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Slogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg]   = useState('');
  const navigate        = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/seller/login', form);
      localStorage.setItem('sellerToken', res.data.token);
      localStorage.setItem('sellerId',    res.data.seller._id);
      localStorage.setItem('sellerName',  res.data.seller.name);
      navigate('/seller/home');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-4 text-success">Seller Login</h3>
        {msg && <div className="alert alert-danger">{msg}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" onChange={e => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={e => setForm({ ...form, password: e.target.value })} required />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
        <p className="text-center mt-3">New seller? <Link to="/seller/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Slogin;