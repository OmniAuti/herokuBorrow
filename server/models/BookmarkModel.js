const mongoose = require('mongoose')

const BookmarkSchema = new mongoose.Schema({
    _uid: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true,
    },
    postType: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('BookmarkSchema', BookmarkSchema, 'bookmarkItems')