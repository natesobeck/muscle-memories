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
    res.redirect('/programs/new')
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
    res.redirect(`/programs/new`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/programs/new')
  })
}

export {
  newProgram as new,
  create,
  index,
}