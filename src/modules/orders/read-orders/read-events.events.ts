import { Request, Response } from 'express'

import { EventEntity } from '../events'

export class ReadOrderEventController {

    static async read(
        req: Request, res: Response,
    ): Promise<Response> {
        return new Promise((
            resolve, reject,
        ) => {
            try {
                const dequeue = new EventEntity({
                    data: [],
                    domain: 'order',
                    action: 'pull',
                }).publishEvent()
                resolve(res.status(200).json(dequeue))
            } catch (err) {
                console.error(`[ERROR]: failed to create a new order ${ err }`)
                reject(res.status(res.statusCode).send(`[ERROR]: failed to create a new order ${ err }`))
            }
        })
    }
}
