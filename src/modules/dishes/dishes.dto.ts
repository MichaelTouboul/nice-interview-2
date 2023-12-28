import joi from 'joi'

export const dishDto = {
    name: joi
        .string()
        .required(),
    description: joi
        .string()
        .required(),
    price: joi
        .number()
        .required(),
    preparationTime: joi
        .number()
        .required(),
}
