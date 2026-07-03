import { useState, useEffect } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';

function Seller() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/sellers')
      .then(res => setSellers(res.data))
      .catch(console.error);
  }, []);

  const handleDelete = async id => {
    if (!window.confirm('Delete this seller?')) return;
    await axios.delete(`http://localhost:8000/api/admin/seller/${id}`);
    setSellers(prev => prev.filter(s => s._id !== id));
  };

  return (
    <div>
      <Anavbar />
      <div className="container py-4">
        <h3 className="mb-4">All Sellers</h3>
        {sellers.length === 0 ? (
          <p className="text-muted">No sellers registered yet.</p>
        ) : (
          <table className="table table-bordered shadow-sm">
            <thead className="table-success">
              <tr><th>#</th><th>Name</th><th>Email</th><th>Action</th></tr>
            </thead>
            <tbody>
              {sellers.map((s, i) => (
                <tr key={s._id}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(s._id)}>Delete</button>
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

export default Seller;