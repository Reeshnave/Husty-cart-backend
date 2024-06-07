const express = require('express')
const connectDB=require('./db')
const cookieParser = require('cookie-parser')
const userRouter= require('./router/userRouter')
const sellerRouter= require('./router/sellerRouter')

const app = express()


// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser())
app.use("/api/v1/user", userRouter);
app.use("/api/v1/seller",sellerRouter);
const port = 3000


connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})