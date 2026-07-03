# 📚 BookNest

A full-stack bookstore web application where:

- 👤 **Users** can browse and purchase books.
- 🏪 **Sellers** can add and manage their book inventory.
- 🛡️ **Admins** can manage users, sellers, and books from a centralized dashboard.

---

# ✨ Features

## 👤 User
- Sign up & Login
- Browse all books
- Search books by:
  - Title
  - Author
  - Genre
- Purchase books
- Enter delivery address
- View order history and delivery dates

## 🏪 Seller
- Sign up & Login
- Add new books
- Upload book cover images
- View listed books
- Delete books
- View customer orders

## 🛡️ Admin
- Sign up & Login
- Dashboard with platform statistics
- View all users
- Delete users
- View all sellers
- Delete sellers
- View all books
- Delete books

---

# 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React, React Router, Bootstrap 5, Axios |
| Backend | Node.js, Express 5 |
| Database | MongoDB (Mongoose) |
| Authentication | JWT, bcryptjs |

---

# 📂 Project Structure

```
booknest/
│
├── artifacts/
│   ├── booknest/              # React Frontend
│   │   └── src/
│   │       ├── Components/
│   │       ├── User/
│   │       ├── Seller/
│   │       └── Admin/
│   │
│   └── api-server/            # Express Backend
│       └── src/
│           └── routes/
│               ├── user.ts
│               ├── seller.ts
│               └── admin.ts
│
├── lib/
│   └── db/                    # Drizzle schema & database client
│
└── uploads/                   # Uploaded book cover images
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js (v18 or later)
- PostgreSQL
- pnpm

Install pnpm globally:

```bash
npm install -g pnpm
```

---

## Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/booknest.git

cd booknest
```

---

## Install Dependencies

```bash
npm install
```
---

## Run the Application

### Terminal 1 (Backend)

```bash
pnpm --filter @workspace/api-server run dev
```

Runs on:

```
http://localhost:8080
```

---

### Terminal 2 (Frontend)

```bash
pnpm --filter @workspace/booknest run dev
```

Runs on:

```
http://localhost:5173
```

Open the application in your browser:

```
http://localhost:5173
```

---

# 🌐 API Endpoints

## 👤 User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/signup` | Register a new user |
| POST | `/api/user/login` | Login |
| GET | `/api/user/books` | Get all books |
| POST | `/api/user/order` | Place an order |
| GET | `/api/user/orders/:userId` | Get user's orders |

### Search Parameters

```
/api/user/books?title=
/api/user/books?author=
/api/user/books?genre=
```

---

## 🏪 Seller APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/seller/signup` | Register seller |
| POST | `/api/seller/login` | Login |
| POST | `/api/seller/addbook` | Add book with image |
| GET | `/api/seller/mybooks/:sellerId` | Seller's books |
| DELETE | `/api/seller/book/:id` | Delete a book |
| GET | `/api/seller/orders/:sellerId` | Seller orders |

---

## 🛡️ Admin APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/signup` | Register admin |
| POST | `/api/admin/login` | Login |
| GET | `/api/admin/users` | Get all users |
| GET | `/api/admin/sellers` | Get all sellers |
| GET | `/api/admin/books` | Get all books |
| DELETE | `/api/admin/user/:id` | Delete user |
| DELETE | `/api/admin/seller/:id` | Delete seller |
| DELETE | `/api/admin/book/:id` | Delete book |
