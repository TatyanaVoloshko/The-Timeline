const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
    name: String,
    createdAt: String,
    comment: String,
})


const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment