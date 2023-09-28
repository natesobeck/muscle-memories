import { Exercise } from "../models/exercise.js"

function newExercise(req, res) {
  Exercise.find({})
  .then(exercises => {
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