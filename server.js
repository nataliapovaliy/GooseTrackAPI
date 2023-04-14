const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.MONGO_CONNECTION_STRING || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const userRouter = require('./routes/userRouter');
app.use('/users/', userRouter);

const contactsRouter = require('./routes');
app.use('/api/', contactsRouter);

app.use((err, req, res, next) => {
  const { message, statusCode = 500 } = err;
  res.status(statusCode).json({ error: message });
})

mongoose.connect(PORT)
  .then(() => 
    app.listen(3000, () => console.log("Database connection successfull")))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
})



// app.use((_, res, __) => {
//   res.status(404).json({
//     status: 'error',
//     code: 404,
//     message: 'Use api on routes: /api/contacts',
//     data: 'Not found',
//   })
// })

// app.use((err, _, res, __) => {
//   console.log(err.stack)
//   res.status(500).json({
//     status: 'fail',
//     code: 500,
//     message: err.message,
//     data: 'Internal Server Error',
//   })
// })
