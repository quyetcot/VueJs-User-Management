const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Nam', email: 'nam@example.com', address: '123 Street', phone_number: '0123456789' },
  { id: 2, name: 'Linh', email: 'linh@example.com', address: '456 Avenue', phone_number: '0987654321' }
];

// Lấy danh sách người dùng
router.get('/', (req, res) => {
  res.json(users);
});

// Lấy thông tin chi tiết của một người dùng
router.get('/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// Thêm mới người dùng
router.post('/', (req, res) => {
  const { name, email, address, phone_number } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
    address,
    phone_number
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Cập nhật thông tin người dùng
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, address, phone_number } = req.body;

  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users[userIndex] = { id: parseInt(id), name, email, address, phone_number };
  res.json(users[userIndex]);
});

// Xóa người dùng
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;
