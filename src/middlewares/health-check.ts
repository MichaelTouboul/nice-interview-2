import { Router } from 'express'

const route = Router()

// Health check endpoint
route.get(
    '/health-check',
    (
        _req, res, next,
    ) => {
        try {
            const timestamp = new Date()
            const response = {
                success: 'OK',
                data: {
                    message: 'OK',
                    timestamp,
                    date: timestamp.toUTCString(),
                },
            }
            res.status(200).json(response)
        } catch (err) {
            const response = {
                success: false,
                data: {
                    message: err,
                },
            }
            res.status(res.statusCode).json(response)
        }
    },
)

export const healthCheck = route
