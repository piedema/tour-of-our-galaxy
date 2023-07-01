import express from 'express'
import { Request, Response } from 'express'

import MoonService from '../services/moon.service'

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {

    const filters = req.body

    const moons = await MoonService.get(filters)

    res.status(200).send(moons)

})

export default router
