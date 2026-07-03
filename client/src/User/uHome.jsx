import { useNavigate } from 'react-router-dom';
import './uhome.css';

function Uhome() {
  const navigate  = useNavigate();
  const userName  = localStorage.getItem('userName');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">
        <span className="navbar-brand fw-bold">📚 BookStore</span>
        <div className="d-flex gap-3 align-items-center">
          <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/user/products')}>Browse Books</button>
          <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/user/orders')}>My Orders</button>
          <span className="text-white">Hi, {userName}</span>
          <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="uhome-hero">
        <h1>Welcome, {userName}!</h1>
        <p className="lead mt-2">Discover your next favourite book</p>
        <button className="btn btn-warning btn-lg mt-3" onClick={() => navigate('/user/products')}>
          Browse Books
        </button>
      </div>

      {/* Categories */}
      <div className="container py-5">
        <h2 className="mb-4">Popular Categories</h2>
        <div className="row g-3">
          {['Fiction', 'Science', 'History', 'Technology', 'Romance', 'Biography'].map(cat => (
            <div key={cat} className="col-md-2 col-4">
              <div className="card text-center p-3 book-card bg-light">
                <span className="fs-4">📖</span>
                <p className="mb-0 mt-2 fw-semibold">{cat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Uhome;