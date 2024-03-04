const Message = require("../models/messageModel");

async function getMessages(req, res) {
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
}

module.exports = { getMessages };
