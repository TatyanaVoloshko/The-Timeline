const Message = require('../models/messageModel')

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

module.exports = {postNewMessage}