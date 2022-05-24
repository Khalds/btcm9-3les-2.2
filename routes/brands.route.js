const Router = require('express');

const router = Router();

router.get('/brands', (req, res) => {
  res.json(`Бренд`)
});

router.post('/brands', (req, res) => {
  res.json(`Бренд добавлен`)
});

router.delete('/brands', (req, res) => {
  res.json(`Бренд удален`)
});

module.exports = router;