import express from 'express'
import nodeSchedule from 'node-schedule'

import updater from './updater'

import system from './controllers/system.controller'
import planet from './controllers/planet.controller'
import moon from './controllers/moon.controller'

import mongodb from './databases/mongodb'
;(async () => {
const app = express()
const port = 3000
const db = await mongodb.connect()

nodeSchedule.scheduleJob('0 0 0 * * *', updater)
updater()

app.use('/system', system)
app.use('/planet', planet)
app.use('/moon', moon)

app.listen(port, () => {

    return console.log(`Express is listening on port ${port}`)

})})()