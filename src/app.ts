import bodyParser from 'body-parser'
import cors from 'cors'
import dishesRoutes from './modules/dishes/dishes.routes'
import express from 'express'
import { healthCheck } from './middlewares'
import ordersRoutes from './modules/orders/orders.routes'
import routesV1 from './configs/app.routes'

const app = express()
app.use(bodyParser.json())

app.use(cors())
app.use(healthCheck)

app.use(
    `/${ routesV1.version }`,
    dishesRoutes,
)

app.use(
    `/${ routesV1.version }`,
    ordersRoutes,
)

export default app
