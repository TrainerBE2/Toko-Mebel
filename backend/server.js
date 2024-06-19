import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';
dotenv.config()
const app = express();
const port = process.env.PORT

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))
import authRouter from "./routers/authRouter.js"
import productRouter from "./routers/productRouter.js"
import OrderRouter from "./routers/orderRouter.js"
// Parent Router
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/order', OrderRouter)
app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Berjalan ya ges yak dengan port: ${port}`)
})
// Connection DB
mongoose.connect(process.env.DATABASE, {
}).then(() => {
    console.log('Connected to DB')
}).catch((err) => {
})
