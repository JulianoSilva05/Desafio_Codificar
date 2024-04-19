const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { collection: 'posts' }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;