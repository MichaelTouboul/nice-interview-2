import cors from 'cors'
import express from 'express'
import { healthCheck } from './middlewares'

const app = express()

app.use(cors())
app.use(healthCheck)

export default app
