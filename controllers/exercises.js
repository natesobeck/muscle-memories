import { Exercise } from "../models/exercise.js"

function newExercise(req, res) {
  Exercise.find({})
  .then(exercises => {
    exercises.sort((ex1, ex2) => {
      const a = ex1.mainTargetedGroup[0].toUpperCase()
      const b = ex2.mainTargetedGroup[0].toUpperCase()
      if (a === b) {
        if (ex1.name > ex2.name) {
          return 1
        } else {
          return -1
        }
      } else if (a > b) {
        return 1
      } else {
        return -1
      }
    })
    res.render('exercises/new', {
      title: 'Add Exercise',
      exercises: exercises,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/exercises/new')
  })
}

function create(req, res) {
  req.body.addedBy = req.user.profile._id
  Exercise.create(req.body)
  .then(exercise => {
    res.redirect('/exercises/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/exercises/new')
  })
}

export {
  newExercise as new,
  create
}