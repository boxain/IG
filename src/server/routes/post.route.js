import express from 'express'
import postController from '../controller/post.controller'

const router = express.Router()
router.route('/')
  .get(postController.postsGET)
  .post(postController.postsPOST)

export default router
