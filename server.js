const express=require('express')
const connectDB = require('./config/connectDB')
const path = require('path')

const app=express()

connectDB()

app.use(express.json())

app.use('/api/users',require('./routes/userRoute'))
app.use('/api/products',require('./routes/productRoute'))
app.use('/api/orders',require('./routes/orderRoute'))
app.use('/api/upload',require('./routes/uploadRoute'));


app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/',(req,res)=>{
    res.send('API is running...')
})

const PAYPAL_CLIENT_ID = "AShPbTI-zn7pE34RgILWLa9ziTWFKnt2yubzicsJ6RIsyiwNT1eFgU_VNZGkSDN3Td4XenoatpCT3xj3"
app.get('/api/config/paypal', (req, res) =>
  res.send(PAYPAL_CLIENT_ID)
  );

const port= process.env.PORT || 5000
app.listen(port,err=>err?console.log(err):console.log(`server is running on port ${port}`))
