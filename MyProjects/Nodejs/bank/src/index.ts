import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'
import { todoRouter } from './routes/todo'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Worl')
})

/*
app.use(json())
app.use(todoRouter)

mongoose.connect('mongodb+srv://matheus:matheus@db@cluster0.cyk2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
  {},  ()  => {
  console.log('connected to database')
})
*/

app.listen(PORT, HOST)
