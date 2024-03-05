const mongoose = require('mongoose')
const { Schema } = mongoose

const messageSchema = new mongoose.Schema({
    name: String,
    createdAt: String,
    message: String,
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message