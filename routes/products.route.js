const Router = require('express');

const router = Router();

router.get('/products', (req, res) => {
  res.json(`Продукты`)
});

router.get('/products/:id', (req, res) => {
  res.json(`Продукт с ID: ${req.params.id}`)
});

router.post('/products', (req, res) => {
  res.json(`Продукт добавлен`)
});

router.delete('/products/:id', (req, res) => {
  res.json(`Продукт с ID: ${req.params.id} удален`)
});

module.exports = router;