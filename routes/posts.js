import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', postsCtrl.index)
router.get('/:postId', postsCtrl.show)
router.post('/', postsCtrl.create)
router.post('/:postId/comments/', postsCtrl.createComment)
router.put('/:postId', postsCtrl.updatePost)
router.put('/:postId/comments/:commentId', postsCtrl.updateComment)
router.delete('/:postId', postsCtrl.delete)
router.delete('/:postId/comments/:commentId', postsCtrl.deleteComment)

export {
  router
}