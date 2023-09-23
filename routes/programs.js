import { Router } from 'express'
import * as programsCtrl from '../controllers/programs.js'

const router = Router()

router.get('/', programsCtrl.index)
router.get('/new', programsCtrl.new)
router.get('/:programId', programsCtrl.show)
router.get('/:programId/edit', programsCtrl.edit)
router.post('/', programsCtrl.create)
router.post('/:programId/exercises', programsCtrl.createExerciseSchemaWithinProgram)
router.put('/:programId', programsCtrl.update)
router.delete('/:programId', programsCtrl.delete)
router.delete('/:programId/exercises/:exerciseId', programsCtrl.deleteExerciseFromProgram)

export {
  router
}