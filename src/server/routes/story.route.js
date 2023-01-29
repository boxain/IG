import express from 'express'
import storyContorller from '../controller/story.controller'

const router = express.Router()
router.route('/')
  .get(storyContorller.storiesGET)
  .post(storyContorller.storiesPOST)

export default router
