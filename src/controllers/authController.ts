import type { Request, Response, NextFunction } from 'express'
import type { IUser } from '../models/user.model.ts'
import User from '../models/user.model.ts'
import bcrypt from 'bcryptjs'

export const AuthController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body
      const hashPassword = await bcrypt.hash(password, 10)
      const newUser: IUser = new User({
        username,
        password: hashPassword,
        isMFAActive: false,
      })
      console.log('New user: ', newUser)
      await newUser.save()
      res.status(201).send({ message: 'User registered successfully' })
    } catch (error: any) {
      next(error)
    }
  },
  async login(req: Request, res: Response, next: NextFunction) {},
  async logout(req: Request, res: Response, next: NextFunction) {},
  async status(req: Request, res: Response, next: NextFunction) {},

  async setup2FA(req: Request, res: Response, next: NextFunction) {},
  async verify2FA(req: Request, res: Response, next: NextFunction) {},
  async reset2FA(req: Request, res: Response, next: NextFunction) {},
}
