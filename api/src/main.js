const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// App routes
const userRoutes = require('./routes/user.route');
const productRoutes = require('./routes/product.route');

app.use('/users', userRoutes);
app.use('/products', productRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server started on port', port);
});
