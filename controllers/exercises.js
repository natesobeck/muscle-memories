import { Exercise } from "../models/exercise.js"

function newExercise(req, res) {
  res.render('exercises/new', {
    title: 'Add Exercise',
  })
  .catch(err => {
    console.log(err)
    res.redirect('/exercises/new')
  })
}

function create(req, res) {
  Exercise.create(req.body)
  .then(exercise => {
    res.redirect('/exercises/new')
  })
}

export {
  newExercise as new,
  create
}