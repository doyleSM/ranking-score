import { Request, Response } from 'express'
import { Controller } from '../../presentation/controllers/contracts'

export const adapteResolver = async (controller: Controller): Promise<any> => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle()
    return httpResponse.data
  }
}
