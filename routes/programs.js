import { Router } from 'express'
import * as programsCtrl from '../controllers/programs.js'

const router = Router()

router.get('/', programsCtrl.index)
router.get('/new', programsCtrl.new)
router.get('/:programId', programsCtrl.show)
router.get('/:programId/edit', programsCtrl.edit)
router.post('/', programsCtrl.create)
router.post('/:programId/workouts', programsCtrl.createWorkout)
router.post('/:programId/workouts/:workoutId/exercises', programsCtrl.addExerciseToWorkout)
router.post('/:programId/reviews', programsCtrl.createReview)
router.put('/:programId', programsCtrl.update)
router.delete('/:programId', programsCtrl.delete)
router.delete('/:programId/reviews/:reviewId', deleteReview)
router.delete('/:programId/workouts/:workoutId/exercises/:exerciseId', programsCtrl.deleteExerciseFromWorkout)

export {
  router
}