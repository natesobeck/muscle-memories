import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', postsCtrl.index)
router.get('/:postId', postsCtrl.show)
router.post('/', postsCtrl.create)
router.post('/:postId/comments/:commentId', postsCtrl.createComment)
router.delete('/:postId', postsCtrl.delete)

export {
  router
}