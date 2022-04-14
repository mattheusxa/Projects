import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'

const URL = process.env.DB_COMN

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middleware()
    this.database()
    this.routes()
  }

  private middleware (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(`mongodb:${URL}`,
      () => {
        console.log('Connect to database')
      }
    )
  }

  private routes (): void {
    this.express.get('/', (req, res) => {
      res.send('Hello Worl')
    })
  }
}
export default new App().express
