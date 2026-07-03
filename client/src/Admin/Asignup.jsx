import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Asignup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg]   = useState('');
  const navigate        = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/admin/signup', form);
      setMsg(res.data.message);
      setTimeout(() => navigate('/admin/login'), 1000);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-4 text-danger">Admin Sign Up</h3>
        {msg && <div className="alert alert-info">{msg}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" onChange={e => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" onChange={e => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={e => setForm({ ...form, password: e.target.value })} required />
          </div>
          <button type="submit" className="btn btn-danger w-100">Sign Up</button>
        </form>
        <p className="text-center mt-3">Already admin? <Link to="/admin/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Asignup;