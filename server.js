const express = require("express");
const cors = require("cors");
const app = express();

// ROUTER
const products = require('./routes/productRouter.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.json({ message: 'Api working...' }) })

app.use('/api/products', products);


// PORT 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})