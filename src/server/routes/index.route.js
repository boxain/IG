import express from 'express'
import story from './story.route'
import post from './post.route'

const router = express.Router()

router.get('/',(req,res)=>{
  res.send('father fucker')
})

router.use('/stories',story)
router.use('/posts',post)

export default router
