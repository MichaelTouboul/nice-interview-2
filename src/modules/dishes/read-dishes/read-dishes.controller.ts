import { DishEntity, IDishEntity } from '../create-dishes/dish.entity'
import { Request, Response } from 'express'

import { dishesCollection } from 'db/dishes.collections'

export class ReadDishesController {

    static async readAll(
        _req: Request, res: Response,
    ): Promise<Response<DishEntity>> {
        return new Promise((
            resolve, reject,
        ) => {
            try {
                resolve(res.status(200).json(dishesCollection))
            } catch (err) {
                console.error(`[ERROR]: failed to fetch menu ${ err }`)
                reject(res.status(res.statusCode).send(`[ERROR]: failed to fetch menu ${ err }`))
            }
        })
    }

    static async readOne(
        req: Request, res: Response,
    ): Promise<Response<DishEntity>> {
        return new Promise((
            resolve, reject,
        ) => {
            try {
                const dish = dishesCollection[req.params.id]
                resolve(res.status(200).json(dish))
            } catch (err) {
                console.error(`[ERROR]: failed to fetch menu ${ err }`)
                reject(res.status(res.statusCode).send(`[ERROR]: failed to fetch menu ${ err }`))
            }
        })
    }
}
