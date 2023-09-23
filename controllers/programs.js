import { Program } from "../models/program.js"
import { Exercise } from "../models/exercise.js"

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
}