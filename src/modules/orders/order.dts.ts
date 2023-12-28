import joi from 'joi'

export const orderDto = {
    dishes: joi
        .array()
        .required(),
    tableNumber: joi
        .number()
        .required(),
    comment: joi
        .number()
        .optional(),
}
