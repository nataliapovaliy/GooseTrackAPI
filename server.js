const app = require('./app')
const mongoose = require('mongoose');

const configPath = path.join(__dirname, ".env");
require("dotenv").config({ path: configPath });

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(3000, () => console.log("Database connection successful"))
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
