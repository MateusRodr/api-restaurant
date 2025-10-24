import "reflect-metadata"
import './shared/container'
import express, { Express} from 'express'
import productRouter from './routes/product.routes'

const app: Express = express()

app.use(express.json())

app.use("/product", productRouter)

export default app;