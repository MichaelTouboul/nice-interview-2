import * as crypto from 'crypto'

export interface IDishEntity {
    name: string,
    description: string,
    price: number,
    preparationTime: string,
}

export class DishEntity {
    name: string
    description: string
    price: number
    preparationTime: string
    readonly _id: string
    readonly created_at: Date

    constructor(props: IDishEntity) {
        this._id = crypto.randomUUID()
        this.name = props.name
        this.description = props.description
        this.preparationTime = props.preparationTime
        this.price = props.price
        this.created_at = new Date()
    }
}
