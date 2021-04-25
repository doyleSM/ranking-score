import { setupRoutes } from './routes'
import { setupApolloServer } from './apollo-server'
import express from 'express'

const app = express()

setupRoutes(app)
setupApolloServer(app)

export default app
