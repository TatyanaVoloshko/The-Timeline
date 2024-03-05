const Message = require("../models/messageModel");

async function getMessages(req, res) {
  try {
    const items = await Message.find().populate("comments");

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

async function getPost(req, res) {
  try {
    const postId = req.params.postId;
    console.log(postId)
    const post = await Message.findById(postId)
      

    if (!post) {
      // Обработка ситуации, когда пост не найден
      return res.status(404).send("Post not found");
    }

    
    // Отправка поста на страницу
    res.render("index", { message: "Post", items: [post] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}



module.exports = { getMessages, getPost };
