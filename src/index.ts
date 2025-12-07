import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import session from 'express-session'
import passport from 'passport'
import connectDB from './configs/connectDB.ts'
import router from './routes/authRoutes.ts'

dotenv.config()
connectDB()

const app = express()
// Middlewares
app.use(json({ limit: '100mb' }))
app.use(urlencoded({ limit: '100mb', extended: true }))
app.use(
  cors({
    origin: ['http://localhost:3001'],
    credentials: true,
  })
)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600,
    },
  })
)
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/api/auth', router)

// Listen app
const port = process.env.PORT || 7001
app.listen(port, () => console.log(`Server is running on port ${port}`))
