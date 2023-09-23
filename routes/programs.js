import { Router } from 'express'
import * as programsCtrl from '../controllers/programs.js'

const router = Router()

router.get('/new', programsCtrl.new)
router.post('/', programsCtrl.create)

export {
  router
}
