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
    path: 'exercises',
    model: 'programExerciseSchema',
    populate: {
      path: 'exercise',
      model: 'Exercise',
    }
  })
  .then(program => {
    console.log(program.exercises)
    Exercise.find({})
    .then(exercises => {
      res.render('programs/show', {
        program,
        exercises,
        title: 'Program Details'
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/programs')
  })
}

function createExerciseSchemaWithinProgram(req, res) {
  Program.findById(req.params.programId)
  .populate('exercises')
  .then(program => {
    program.exercises.push(req.body)
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

export {
  newProgram as new,
  create,
  index,
  show,
  createExerciseSchemaWithinProgram,
}