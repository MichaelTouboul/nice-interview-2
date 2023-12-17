/* eslint-disable @typescript-eslint/triple-slash-reference */
// eslint-disable-next-line spaced-comment
/// <reference path="./types/global/index.d.ts" />
import app from './app'
import dotenv from 'dotenv'
import  http from 'http'

dotenv.config()

const normalizePort = (port: string | number): number | Error => {
    if (typeof port === 'string') {
        return parseInt(port)
    }
    if (typeof port === 'number' && port >= 0) {
        return port
    }

    return Error('Port is not defined')
}

const port = normalizePort(process.env.PORT || 3100)
app.set(
    'port',
    port,
)

const server = http.createServer(app)

const errorHandler = (error: Api.NodeSystemError) => {
    if (error.syscall !== 'listen') {
        throw error
    }
    const address = server.address()
    const bind = typeof address === 'string' ? `pipe ${  address }` : `port: ${  port }`
    switch (error.code) {
        case 'EACCES':
            console.error(`${ bind  } requires elevated privileges.`)
            process.exit(1)
        case 'EADDRINUSE':
            console.error(`${ bind  } is already in use.`)
            process.exit(1)
        default:
            throw error
    }
}

server.on(
    'error',
    errorHandler,
)
server.on(
    'listening',
    () => {
        const address = server.address()
        const bind = typeof address === 'string' ? `pipe ${  address }` : `port ${  port }`
        console.log(`Listening on ${  bind }`)
    },
)

server.listen(port)





