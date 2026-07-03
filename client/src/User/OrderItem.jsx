function OrderItem({ order }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="row align-items-center">

          {/* Book Image */}
          <div className="col-md-2 text-center">
            {order.itemImage ? (
              <img
                src={`http://localhost:8000/uploads/${order.itemImage}`}
                alt={order.booktitle}
                style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px' }}
              />
            ) : (
              <div className="bg-secondary text-white d-flex align-items-center justify-content-center"
                style={{ height: '120px', borderRadius: '6px' }}>
                No Image
              </div>
            )}
          </div>

          {/* Book Info */}
          <div className="col-md-5">
            <h5 className="fw-bold">{order.booktitle}</h5>
            <p className="mb-1 text-muted">Author: {order.bookauthor}</p>
            <p className="mb-1 text-muted">Genre: {order.bookgenre}</p>
            <p className="mb-1 small">{order.description}</p>
          </div>

          {/* Order Info */}
          <div className="col-md-5">
            <p className="mb-1"><strong>Amount:</strong> ₹{order.totalamount}</p>
            <p className="mb-1"><strong>Booked On:</strong> {order.BookingDate}</p>
            <p className="mb-1"><strong>Delivery By:</strong> {order.Delivery}</p>
            <p className="mb-1">
              <strong>Address:</strong> {order.flatno}, {order.city}, {order.state} - {order.pincode}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OrderItem;