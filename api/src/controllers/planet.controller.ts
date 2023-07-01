import express from 'express'
import { Request, Response } from 'express'

import PlanetService from '../services/planet.service'

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {

    const filters = req.body

    const planets = await PlanetService.get(filters)

    res.status(200).send(planets)

})

export default router
