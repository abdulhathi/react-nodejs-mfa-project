import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/react-node-2fa')
    console.log(`Mongo DB connected ${conn.connection.host}`)
  } catch (error: any) {
    console.log(`Error : ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
