import { Segments, celebrate } from 'celebrate'

import { CreateDishesController } from './create-dishes/create-dishes.controller'
import { ReadDishesController } from './read-dishes/read-dishes.controller'
import { Router } from 'express'
import { dishDto } from './dishes.dto'
import routesV1 from '@/configs/app.routes'

const dishesRoutes = Router()

dishesRoutes.get(
    `/${ routesV1.dishes.root }`,
    ReadDishesController.readAll,
)

dishesRoutes.get(
    `/${ routesV1.dishes.root }/:id`,
    ReadDishesController.readOne,
)

dishesRoutes.post(
    `/${ routesV1.dishes.root }`,
    celebrate({
        [Segments.BODY]: dishDto,
    }),
    CreateDishesController.apply,
)

export default dishesRoutes
