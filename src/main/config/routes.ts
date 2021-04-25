import { Express, Router } from 'express'
import { readdirSync } from 'node:fs'
import * as path from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  readdirSync(path.join(__dirname, '..', 'routes')).map(async fileName => {
    (await import(`../routes/${fileName}`)).default(router)
  })
}