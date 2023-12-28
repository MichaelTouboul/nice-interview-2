import * as crypto from 'crypto'

import { billsStore, ordersStore } from '../../../store'

export interface IEventEntity {
    data: any,
    domain: 'bill' | 'order',
    action: 'create' | 'update' | 'delete' | 'pull',
}

export class EventEntity {
    protected data: any
    protected store: any[]
    domain: 'bill' | 'order'
    action: 'create' | 'update' | 'delete' | 'pull'

    readonly _id: string
    readonly created_at: Date

    constructor(props: IEventEntity) {
        this._id = crypto.randomUUID()
        this.data = props.data
        this.store = props.domain !== 'bill' ? ordersStore : billsStore
        this.action = props.action
        this.created_at = new Date()
    }

    public addEvent() { // enqueue
        this.store.push(this.data)
    }

    public publishEvent() { // dequeue
        return this.store.shift()
    }
}
