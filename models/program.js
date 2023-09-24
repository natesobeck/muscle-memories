import mongoose from 'mongoose'

const Schema = mongoose.Schema

const programExerciseSchema = new Schema({
  exercise: {
    type: Schema.Types.ObjectId,
    ref: 'Exercise'
  },
  sets: Number,
  reps: String,
  rpe: {
    type: Number,
    min: 1,
    max: 10,
  },
  tempo: String,
})

const individualWorkoutSchema = new Schema ({
  name: String,
  exercises: {
    type: [programExerciseSchema],
    default: []
  }
})

const programSchema = new Schema({
  name: String,
  split: {
    type: String,
    enum: ['Push/Pull/Legs', 'Upper/Lower', 'Full Body', 'Other']
  },
  daysPerWeek: {
    type: Number,
    Enum: [1, 2, 3, 4, 5, 6, 7]
  },
  workouts: {
    type: [individualWorkoutSchema],
    default: [],
  },
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
  Program,
  individualWorkoutSchema,
}
