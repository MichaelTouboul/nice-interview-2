import * as crypto from 'crypto'

import { STATUS } from '../types'

export interface IOrderEntity {
    dishes: string[],
    tableNumber: number,
    comment?: string,
}

export class OrderEntity {
    dishes: string[]
    tableNumber: number
    status: STATUS
    comment: string
    readonly _id: string
    readonly created_at: Date

    constructor(props: IOrderEntity) {
        this._id = crypto.randomUUID()
        this.dishes = props.dishes
        this.tableNumber = props.tableNumber
        this.status = STATUS.ORDERED
        this.comment = props.comment ? props.comment : ''
        this.created_at = new Date()
    }
}
