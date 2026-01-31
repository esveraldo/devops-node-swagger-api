const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Ana', email: 'ana@email.com' },
    { id: 2, name: 'Carlos', email: 'carlos@email.com' }
  ]);
});

module.exports = router;
