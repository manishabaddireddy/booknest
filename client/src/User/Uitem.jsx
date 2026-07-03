import { useState } from 'react';
import axios from 'axios';

function Uitem({ book }) {
  const [showOrder, setShowOrder] = useState(false);
  const [form, setForm] = useState({ flatno: '', pincode: '', city: '', state: '' });
  const [msg, setMsg]   = useState('');

  const imgSrc = book.itemImage
    ? `http://localhost:8000/uploads/${book.itemImage}`
    : 'https://via.placeholder.com/200x150?text=No+Image';

  const handleOrder = async () => {
    try {
      const userId   = localStorage.getItem('userId');
      const userName = localStorage.getItem('userName');
      await axios.post('http://localhost:8000/api/user/order', {
        ...form,
        totalamount: book.price,
        booktitle:   book.title,
        bookauthor:  book.author,
        bookgenre:   book.genre,
        itemImage:   book.itemImage,
        description: book.description,
        userId, userName,
        sellerId:    book.sellerId,
        sellerName:  book.sellerName,
      });
      setMsg('Order placed successfully!');
      setShowOrder(false);
    } catch (err) {
      setMsg('Failed to place order');
    }
  };

  return (
    <div className="col-md-3">
      <div className="card shadow-sm h-100">
        <img src={imgSrc} className="card-img-top" alt={book.title} style={{ height: '180px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{book.title}</h5>
          <p className="text-muted mb-1">By {book.author}</p>
          <p className="text-muted mb-1">Genre: {book.genre}</p>
          <p className="fw-bold text-success">₹{book.price}</p>
          <p className="small">{book.description}</p>
          {msg && <div className="alert alert-success py-1">{msg}</div>}
          <button className="btn btn-primary mt-auto" onClick={() => setShowOrder(!showOrder)}>
            Buy Now
          </button>

          {showOrder && (
            <div className="mt-3">
              <input className="form-control mb-2" placeholder="Flat No" onChange={e => setForm({ ...form, flatno: e.target.value })} />
              <input className="form-control mb-2" placeholder="Pincode" onChange={e => setForm({ ...form, pincode: e.target.value })} />
              <input className="form-control mb-2" placeholder="City"    onChange={e => setForm({ ...form, city: e.target.value })} />
              <input className="form-control mb-2" placeholder="State"   onChange={e => setForm({ ...form, state: e.target.value })} />
              <button className="btn btn-success w-100" onClick={handleOrder}>Confirm Order</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Uitem;