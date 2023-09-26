import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', postsCtrl.index)
router.post('/', postsCtrl.create)
router.delete('/:postId', postsCtrl.delete)

export {
  router
}