import { DishEntity, IDishEntity } from './dish.entity'
import { Request, Response } from 'express'

import { dishesCollection } from 'db'

export class CreateDishesController {

    static async apply(
        req: Request<object, any, IDishEntity>, res: Response,
    ): Promise<Response> {
        return new Promise((
            resolve, reject,
        ) => {
            try {
                const body = req.body
                const dishEntity = new DishEntity(body)
                dishesCollection[dishEntity._id] = dishEntity
                resolve(res.status(200).json({ id: dishEntity._id }))
            } catch (err) {
                console.error(`[ERROR]: failed to store the new dish ${ err }`)
                reject(res.status(res.statusCode).send(`[ERROR]: failed to store the new dish ${ err }`))
            }
        })
    }
}
