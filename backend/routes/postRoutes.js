
const express = require('express');
const router = express.Router();
const { createPost, getFeed, getUserPosts } = require('../controllers/postController');
const auth = require('../middleware/auth');

router.post('/', auth, createPost);
router.get('/', getFeed);
router.get('/user/:id', getUserPosts);

module.exports = router;
