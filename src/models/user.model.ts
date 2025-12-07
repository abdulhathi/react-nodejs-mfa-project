import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IUser extends Document {
  username: string
  password: string
  isMFAActive: boolean
  twoFactorSecret: string
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    isMFAActive: { type: Boolean, required: false },
    twoFactorSecret: { type: String, required: false },
  },
  { timestamps: true }
)

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema)

export default User
