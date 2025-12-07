import type { verify } from 'crypto'
import type { Request, Response, NextFunction } from 'express'

export const AuthController = {
  register(req: Request, res: Response, next: NextFunction) {},
  login(req: Request, res: Response, next: NextFunction) {},
  logout(req: Request, res: Response, next: NextFunction) {},
  status(req: Request, res: Response, next: NextFunction) {},

  setup2FA(req: Request, res: Response, next: NextFunction) {},
  verify2FA(req: Request, res: Response, next: NextFunction) {},
  reset2FA(req: Request, res: Response, next: NextFunction) {},
}
