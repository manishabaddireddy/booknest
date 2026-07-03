import { useNavigate } from 'react-router-dom';

function Snavbar() {
  const navigate   = useNavigate();
  const sellerName = localStorage.getItem('sellerName');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-dark bg-success px-4 d-flex justify-content-between">
      <span className="navbar-brand fw-bold">🏪 Seller Panel</span>
      <div className="d-flex gap-2 align-items-center">
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/seller/home')}>Home</button>
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/seller/addbook')}>Add Book</button>
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/seller/myproducts')}>My Books</button>
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/seller/orders')}>Orders</button>
        <span className="text-white">Hi, {sellerName}</span>
        <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Snavbar;