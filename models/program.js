import mongoose from 'mongoose'

const Schema = mongoose.Schema

const programExerciseSchema = new Schema({
  exercise: {
    type: Schema.Types.ObjectId,
    ref: 'Exercise'
  },
  sets: Number,
  reps: String,
  weight: {
    type: Number,
    min: 1,
  },
  rpe: {
    type: Number,
    min: 1,
    max: 10,
  },
  tempo: String,
})

const programSchema = new Schema({
  name: String,
  split: {
    type: String,
    enum: ['Push/Pull/Legs', 'Upper/Lower', 'Full Body', 'Other']
  },
  daysPerWeek: {
    type: Number,
    min: 1,
    max: 7,
  },
  exercises: [programExerciseSchema],
  note: String,
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }
}, {
  timestamps: true
})

const Program = mongoose.model('Program', programSchema)

export {
  Program
}
