import { Router } from 'express'
import * as exercisesCtrl from '../controllers/exercises.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', exercisesCtrl.new)
router.post('/', isLoggedIn, exercisesCtrl.create)

export {
  router
}