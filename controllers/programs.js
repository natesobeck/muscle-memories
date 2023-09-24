import { Program } from "../models/program.js"
import { Exercise } from "../models/exercise.js"

function index(req, res) {
  Program.find({})
  .populate('addedBy')
  .then(programs => {
    res.render('programs/index', {
      title: 'All Programs',
      programs: programs
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/programs')
  })
}

function newProgram(req, res) {
  res.render('programs/new', {
    title: 'Add Program',
  })
  .catch(err => {
    console.log(err)
    res.redirect('/programs/new')
  })
}

function create(req, res) {
  req.body.addedBy = req.user.profile._id
  Program.create(req.body)
  .then(program => {
    res.redirect(`/programs/:programId`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/programs')
  })
}

function show(req, res) {
  Program.findById(req.params.programId)
  .populate('addedBy')
  .populate({
    path: 'workouts',
    populate: {
      path: 'exercises',
      populate: 'exercise'
    }
  })
  .then(program => {
    Exercise.find({})
    .then(exercises => {
      res.render('programs/show', {
        program,
        exercises,
        title: 'Program Details'
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/programs')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/programs')
  })
}

function createWorkout(req, res) {
  Program.findById(req.params.programId)
  .then (program => {
    program.workouts.push(req.body)
    program.save()
    .then(() => {
      res.redirect(`/programs/${program._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/programs/${program._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/programs`)
  })
}

function addExerciseToWorkout(req, res) {
  Program.findById(req.params.programId)
  .then(program => {
    const workout = program.workouts.id(req.params.workoutId)
    workout.exercises.push(req.body)
    program.save()
    .then(() => {
      res.redirect(`/programs/${program._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/programs`)
  })
}

function deleteProgram(req, res) {
  Program.findByIdAndDelete(req.params.programId)
  .then(program => {
    res.redirect(`/programs`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/programs`)
  })
}

function deleteExerciseFromWorkout(req, res) {
  Program.findById(req.params.programId)
  .then(program => {
    const workout = program.workouts.id(req.params.workoutId)
    const exercise = workout.exercises.id(req.params.exerciseId)
    exercise.deleteOne()
    program.save()
    .then(() => {
      res.redirect(`/programs/${program._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/programs/${program._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/programs`)
  })
}

function edit(req, res) {
  Program.findById(req.params.programId)
  .then(program => {
    res.render('programs/edit', {
      program,
      title: 'Edit Program',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/programs`)
  })
}

function update(req, res) {
  Program.findByIdAndUpdate(req.params.programId, req.body, {new: true})
  .then(program => {
    res.redirect(`/programs/${program._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/programs`)
  })
}

function createReview(req, res) {
  req.body.author = req.user.profile._id
  Program.findById(req.params.programId)
  .then(program => {
    program.reviews.push(req.body)
    program.save()
    .then(() => {
      res.redirect(`/programs/${program._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/programs${program._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/programs`)
  })
}

export {
  newProgram as new,
  create,
  index,
  show,
  createWorkout,
  addExerciseToWorkout,
  deleteExerciseFromWorkout,
  deleteProgram as delete,
  edit,
  update,
  createReview,
}