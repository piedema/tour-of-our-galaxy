import express from 'express'
import nodeSchedule from 'node-schedule'
import dotenv from 'dotenv'

import updater from './updater'

import system from './controllers/system.controller'
import star from './controllers/star.controller'
import planet from './controllers/planet.controller'
import moon from './controllers/moon.controller'

import mongodb from './databases/mongodb'

;(async () => {

    dotenv.config()
    
    const app = express()
    const port = process.env.API_PORT
    const db = await mongodb.connect()

    nodeSchedule.scheduleJob('0 0 0 * * *', updater)
    updater()

    app.use('/systems', system)
    app.use('/stars', star)
    app.use('/planets', planet)
    app.use('/moons', moon)

    app.listen(port, () => {

        return console.log(`Express is listening on port ${port}`)

    })

})()