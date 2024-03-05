const Message = require('../models/messageModel')
const Comment = require('../models/commentModel')

async function postNewMessage(req, res) {
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
        console.error(error)
        return res.status(500).send("Internal Server Error")
  }
  res.redirect('/')
}

async function postNewComment(req, res) {
  try {
    const { postId, name, createdAt, comment } = req.body

    if (comment.length < 25) {
      return res
        .status(400)
        .send("Comment must be at least 25 characters long")
    }

    const newComment = {
      postId,
      name,
      createdAt,
      comment,
    }

    const createdComment = await Comment.create(newComment)

    const post = await Message.findById(postId)
    post.comments.push(createdComment._id)
    await post.save()

    
    res.redirect('/');
    
  } catch (error) {
    console.error(error)
    return res.status(500).send("Internal Server Error");
  }

}

module.exports = {postNewMessage, postNewComment}