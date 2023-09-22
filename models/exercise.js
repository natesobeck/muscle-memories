import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  name: String,
  mainTarget: [String],
  secondaryTarget: [String],
  generalFatigueCost: String,
  note: String,
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