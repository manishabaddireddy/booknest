import { useState, useEffect } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/users')
      .then(res => setUsers(res.data))
      .catch(console.error);
  }, []);

  const handleDelete = async id => {
    if (!window.confirm('Delete this user?')) return;
    await axios.delete(`http://localhost:8000/api/admin/user/${id}`);
    setUsers(prev => prev.filter(u => u._id !== id));
  };

  return (
    <div>
      <Anavbar />
      <div className="container py-4">
        <h3 className="mb-4">All Users</h3>
        {users.length === 0 ? (
          <p className="text-muted">No users registered yet.</p>
        ) : (
          <table className="table table-bordered shadow-sm">
            <thead className="table-dark">
              <tr><th>#</th><th>Name</th><th>Email</th><th>Action</th></tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(u._id)}>Delete</button>
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

export default Users;