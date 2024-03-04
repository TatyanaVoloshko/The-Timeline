const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));

const dbConnect = require('./utils/dbConnect')
dbConnect();

const getRoute = require("./routes/getRoute");
const neMessageRoute = require("./routes/newMessageRoute")
app.use("/", getRoute);
app.use("/newMessage", neMessageRoute)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
