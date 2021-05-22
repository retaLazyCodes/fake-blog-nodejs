const router = require('express').Router();
const postsController = require('../controllers/posts.controller');
const cors = require('cors')

// /api/posts/
router.get('/api/posts', cors(), postsController.getAllPosts)
router.post('/api/posts/', cors(), postsController.createPost)


// /api/posts/:postID
router.get('/api/posts/:id', cors(), postsController.getOne)
router.patch('/api/posts/:id', cors(), postsController.modifyPost)
router.delete('/api/posts/:id', cors(), postsController.deletePost)

module.exports = router;