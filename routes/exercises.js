import { Router } from 'express'
import * as exercisesCtrl from '../controllers/exercises.js'

const router = Router()

router.get('/new', exercisesCtrl.new)

export {
  router
}