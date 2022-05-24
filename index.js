const express = require('express')
const app = express()
const port = 4000


app.use(require('./routes/products.route.js'));
app.use(require('./routes/brands.route.js'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})