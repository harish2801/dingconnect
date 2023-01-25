const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const db = require("./models");

const bookRouter = require("./routes/Bookings");
app.use("/book", bookRouter);
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server Connected");
  });
});
