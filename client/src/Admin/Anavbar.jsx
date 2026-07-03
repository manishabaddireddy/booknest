import { useNavigate } from 'react-router-dom';

function Anavbar() {
  const navigate  = useNavigate();
  const adminName = localStorage.getItem('adminName');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-dark bg-danger px-4 d-flex justify-content-between">
      <span className="navbar-brand fw-bold">🛡️ Admin Panel</span>
      <div className="d-flex gap-2 align-items-center">
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/admin/home')}>Dashboard</button>
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/admin/users')}>Users</button>
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/admin/sellers')}>Sellers</button>
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/admin/items')}>Books</button>
        <span className="text-white">Hi, {adminName}</span>
        <button className="btn btn-dark btn-sm" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Anavbar;