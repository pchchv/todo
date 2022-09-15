import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import env from '@/helpers/env'
import todoRoutes from '@/routes'

const app: Express = express()

app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb+srv://${env.MONGO_USER}:${env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${env.MONGO_DB}?retryWrites=true&w=majority`
mongoose
    .connect(uri)
    .then(() =>
        app.listen(env.PORT, () =>
            console.log(`Server running on http://localhost:${env.PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })