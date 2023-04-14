const app = require('./app')
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() =>
    app.listen(3000, () => console.log("Database connection successful"))
  )
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
