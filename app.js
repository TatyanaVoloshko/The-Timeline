const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const dbConnect = require('./utils/dbConnect')
dbConnect();

const getRoute = require("./routes/getRoute");
const newMessageRoute = require("./routes/newMessageRoute")
const commentRoute = require('./routes/commentRoute')
const authRoute = require('./routes/authRoute')

app.use("/", getRoute);
app.use("/auth", authRoute);
app.use("/auth/auth", authRoute);


app.use("/newMessage", newMessageRoute)
app.use('/comment', commentRoute)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
