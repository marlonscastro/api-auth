import express from 'express'
import routes from './routes'

// Verbos do HTTP : POST, GET, PUT, DELETE, PATCH 

const app = express()

app.use(routes) 

export default app