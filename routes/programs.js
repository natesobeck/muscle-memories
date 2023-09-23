import { Router } from 'express'
import * as programsCtrl from '../controllers/programs.js'

const router = Router()

router.get('/', programsCtrl.index)
router.get('/new', programsCtrl.new)
router.get('/:programId', programsCtrl.show)
router.post('/', programsCtrl.create)

export {
  router
}
