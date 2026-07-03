import axios from 'axios';
import './List.css';

function Book({ book, onDelete }) {
  const imgSrc = book.itemImage
    ? `http://localhost:8000/uploads/${book.itemImage}`
    : 'https://via.placeholder.com/200x160?text=No+Image';

  const handleDelete = async () => {
    if (!window.confirm('Delete this book?')) return;
    await axios.delete(`http://localhost:8000/api/seller/book/${book._id}`);
    onDelete(book._id);
  };

  return (
    <div className="col-md-3">
      <div className="card book-list-card shadow-sm">
        <img src={imgSrc} className="book-list-img" alt={book.title} />
        <div className="card-body">
          <h6 className="fw-bold">{book.title}</h6>
          <p className="text-muted mb-1 small">By {book.author}</p>
          <p className="text-muted mb-1 small">Genre: {book.genre}</p>
          <p className="fw-bold text-success">₹{book.price}</p>
          <p className="small">{book.description}</p>
          <button className="btn btn-danger btn-sm w-100" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Book;