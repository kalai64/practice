import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './connections/dbConnect.js'
import router from './router/router.js'

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 8000

app.use('/', router)

dbConnect().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`PORT is running on ${PORT}`)
    })
})

