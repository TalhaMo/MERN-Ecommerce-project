const express=require('express')
const connectDB = require('./config/connectDB')
const path = require('path')
const morgan=require('morgan')
const config = require("config");

const app=express()

connectDB()

app.use(express.json())

app.use('/api/users',require('./routes/userRoute'))
app.use('/api/products',require('./routes/productRoute'))
app.use('/api/orders',require('./routes/orderRoute'))
app.use('/api/upload',require('./routes/uploadRoute'));


app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (config.get("NODE_ENV") === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}


app.get('/api/config/paypal', (req, res) =>
  res.send(config.get("PAYPAL_CLIENT_ID"))
  );

const port= process.env.PORT || 5000
app.listen(port,err=>err?console.log(err):console.log(`server is running on port ${port}`))
