const express = require('express')
const app = express()
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`))


app.get("/", (req, res) => {
    const data = {
      message: "Timeline",
      items: [
        {
          name: "Michael Choi",
          createdAt: "23-01-2013",
          message:
            "This is my message    This is my message This is my message This is my messageThis is my message This is my message    This is my message This is my message This is my messageThis is my message",
        },
        {
          name: "Maxima Korr",
          createdAt: "25-02-2013",
          message:
            "This is my message    This is my message This is my message This is my messageThis is my message This is my message    This is my message This is my message This is my messageThis is my message",
        },
        {
          name: "Andrew Born",
          createdAt: "12-08-2013",
          message:
            "This is my message    This is my message This is my message This is my messageThis is my message This is my message    This is my message This is my message This is my messageThis is my message",
        },
        {
          name: "Albert Gilmor",
          createdAt: "15-04-2013",
          message:
            "This is my message    This is my message This is my message This is my messageThis is my message This is my message    This is my message This is my message This is my messageThis is my message",
        },
      ],
  };
  
   data.items.sort((a, b) => {
     const dateA = a.createdAt.split("-").reverse().join("-");
     const dateB = b.createdAt.split("-").reverse().join("-");
     return new Date(dateB) - new Date(dateA);
   });

     res.render("index", data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});









