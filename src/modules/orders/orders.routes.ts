import { Segments, celebrate } from 'celebrate'

import { CreateOrderController } from './create-orders/create-orders.controller'
import { ReadDishesController } from '../dishes/read-dishes/read-dishes.controller'
import { ReadOrderEventController } from './read-orders/read-events.events'
import { Router } from 'express'
import { orderDto } from './order.dts'
import routesV1 from '@/configs/app.routes'

const ordersRoutes = Router()

ordersRoutes.get(
    `/${ routesV1.orders.root }`,
    ReadOrderEventController.read,
)

// ordersRoutes.get(
//     `/${ routesV1.orders.root }/:id`,
//     ReadDishesController.readOne,
// )

ordersRoutes.post(
    `/${ routesV1.orders.root }`,
    celebrate({
        [Segments.BODY]: orderDto,
    }),
    CreateOrderController.apply,
)

export default ordersRoutes
