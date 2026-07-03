import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand fw-bold fs-4">📚 BookStore</span>
      </nav>

      {/* Hero */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="display-4 fw-bold">Welcome to BookStore</h1>
        <p className="lead mt-3">Your one-stop destination for all things books!</p>
        <p className="px-5">Browse thousands of books across every genre. Built on the MERN Stack.</p>
      </div>

      {/* Cards */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Choose Your Role</h2>
        <div className="row g-4 justify-content-center">

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <div className="fs-1">👤</div>
              <h4 className="mt-3">User</h4>
              <p>Browse and buy books from our vast collection.</p>
              <div className="d-flex gap-2 justify-content-center mt-auto">
                <button className="btn btn-primary" onClick={() => navigate('/user/signup')}>Sign Up</button>
                <button className="btn btn-outline-primary" onClick={() => navigate('/user/login')}>Login</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <div className="fs-1">🏪</div>
              <h4 className="mt-3">Seller</h4>
              <p>List your books and manage orders easily.</p>
              <div className="d-flex gap-2 justify-content-center mt-auto">
                <button className="btn btn-success" onClick={() => navigate('/seller/signup')}>Sign Up</button>
                <button className="btn btn-outline-success" onClick={() => navigate('/seller/login')}>Login</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <div className="fs-1">🛡️</div>
              <h4 className="mt-3">Admin</h4>
              <p>Manage users, sellers, and all books.</p>
              <div className="d-flex gap-2 justify-content-center mt-auto">
                <button className="btn btn-danger" onClick={() => navigate('/admin/signup')}>Sign Up</button>
                <button className="btn btn-outline-danger" onClick={() => navigate('/admin/login')}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p className="mb-0">© 2024 BookStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;