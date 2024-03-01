const express = require('express')
const mongoose = require("mongoose");
require("dotenv").config();

const {DB_URI} = process.env;

const app = express()
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`))
app.use(express.urlencoded({ extended: true }))



  async function dbConnect() {
     await mongoose
        .connect(DB_URI)
        .then(() => console.log("Database connection successful"))
        .catch((error) => {
            console.log(error.message);
            process.exit(1);
        });
}

dbConnect()

const messageSchema = new mongoose.Schema({
  name: String,
  createdAt: String,
  message: String,
});

const Message = mongoose.model("Message", messageSchema);


app.get("/", async (req, res) => {
 
 try {
   const items = await Message.find();

  
   items.sort((a, b) => {
     const dateA = a.createdAt.split("-").reverse().join("-");
     const dateB = b.createdAt.split("-").reverse().join("-");
     return new Date(dateB) - new Date(dateA);
   });

   res.render("index", { message: "Timeline", items });
 } catch (error) {
   console.error(error);
   res.status(500).send("Internal Server Error");
  }
});

app.post("/newMessage", async (req, res) => {
  try {
    const { name, createdAt, message } = req.body;

    if (message.length < 25) {
      return res
        .status(400)
        .send("Message must be at least 25 characters long");
    }

    const newItem = {
      name,
      createdAt,
      message,
    };

    await Message.create(newItem);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});









