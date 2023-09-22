import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    enum: ['Dumbbell', 'Barbell', 'Bodyweight', 'Cable', 'Machine', 'Other']
  },
  mainTargetedGroup: {
    type: [String],
    default: ["Muscle group information not added."],
  },
  secondaryTargetedGroup: {
    type: [String], 
    default: ["Muscle group information not added."]},
  fatigueCost: {
    type: String,
    enum: ["Low", "Medium", "High"]
  },
  note: {
    type: String,
    default: ''
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }
}, {
  timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

export {
  Exercise
}