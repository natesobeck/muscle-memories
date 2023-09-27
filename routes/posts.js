import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', postsCtrl.index)
router.get('/:postId', postsCtrl.show)
router.post('/', isLoggedIn, postsCtrl.create)
router.post('/:postId/comments/', isLoggedIn, postsCtrl.createComment)
router.put('/:postId', isLoggedIn, postsCtrl.updatePost)
router.put('/:postId/comments/:commentId', isLoggedIn, postsCtrl.updateComment)
router.delete('/:postId', isLoggedIn, postsCtrl.delete)
router.delete('/:postId/comments/:commentId', isLoggedIn, postsCtrl.deleteComment)

export {
  router
}