const express = require('express')
const bodyParser = require('body-parser')
const app = express();



app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/greeting', (req, res) => {
    const params = req.query;
    console.log('params: ', params)
    res.send(`Hi ${params.name}, you are welcome to our site`)
})


// App routes
const userRoutes = require('./routes/user.route');


app.use('/users', userRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server start on port ', port)
});