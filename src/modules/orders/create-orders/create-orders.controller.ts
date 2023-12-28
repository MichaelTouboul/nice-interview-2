import { IOrderEntity, OrderEntity } from './order.entity'
import { Request, Response } from 'express'

import { EventEntity } from '../events'
import { ordersCollection } from 'db/order.collection'

export class CreateOrderController {

    static async apply(
        req: Request<object, any, IOrderEntity>, res: Response,
    ): Promise<Response> {
        return new Promise((
            resolve, reject,
        ) => {
            try {
                const body = req.body
                const orderEntity = new OrderEntity(body)
                ordersCollection[orderEntity._id] = orderEntity
                new EventEntity({
                    data: orderEntity,
                    domain: 'order',
                    action: 'create',
                }).addEvent()
                resolve(res.status(200).json({ id: orderEntity._id }))
            } catch (err) {
                console.error(`[ERROR]: failed to create a new order ${ err }`)
                reject(res.status(res.statusCode).send(`[ERROR]: failed to create a new order ${ err }`))
            }
        })
    }
}
