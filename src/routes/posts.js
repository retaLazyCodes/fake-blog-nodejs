import cors from 'cors'
import { Router } from "express";
const router = Router()

import postsController from '../controllers/posts.controller'

// /api/posts/
router.get('/api/posts', cors(), postsController.getAllPosts)
router.post('/api/posts/', cors(), postsController.createPost)


// /api/posts/:postID
router.get('/api/posts/:id', cors(), postsController.getPost)
router.patch('/api/posts/:id', cors(), postsController.modifyPost)
router.delete('/api/posts/:id', cors(), postsController.deletePost)

module.exports = router;