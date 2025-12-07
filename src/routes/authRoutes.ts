import { AuthController } from '../controllers/authController.ts'
import express from 'express'

const { register, login, logout, status, setup2FA, verify2FA, reset2FA } = AuthController
const router = express.Router()

router.post('/register', register).post('/login', login).post('/logout', logout)

router.get('/status', status)

router.post('/2fa/setup', setup2FA).post('/2fa/verify', verify2FA).post('/2fa/reset', reset2FA)

export default router
