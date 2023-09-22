import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  programsAdded: [{
    type: Schema.Types.ObjectId,
    ref: "Program"
  }],
  exercisesAdded: [{
    type: Schema.Types.ObjectId,
    ref: "Exercise"
  }]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
