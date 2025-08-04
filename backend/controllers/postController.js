
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { content } = req.body;
  try {
    const post = new Post({ content, author: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getFeed = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.id }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
