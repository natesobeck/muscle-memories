import { Router } from 'express'
import * as programsCtrl from '../controllers/programs.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', programsCtrl.index)
router.get('/new', programsCtrl.new)
router.get('/:programId', programsCtrl.show)
router.get('/:programId/edit', isLoggedIn, programsCtrl.edit)
router.post('/', programsCtrl.create)
router.post('/:programId/workouts', isLoggedIn, programsCtrl.createWorkout)
router.post('/:programId/workouts/:workoutId/exercises', isLoggedIn, programsCtrl.addExerciseToWorkout)
router.post('/:programId/reviews', isLoggedIn, programsCtrl.createReview)
router.put('/:programId', isLoggedIn, programsCtrl.update)
router.put('/:programId/reviews/:reviewId', programsCtrl.updateReview)
router.delete('/:programId', isLoggedIn, programsCtrl.delete)
router.delete('/:programId/reviews/:reviewId', isLoggedIn, programsCtrl.deleteReview)
router.delete('/:programId/workouts/:workoutId/exercises/:exerciseId', isLoggedIn, programsCtrl.deleteExerciseFromWorkout)

export {
  router
}