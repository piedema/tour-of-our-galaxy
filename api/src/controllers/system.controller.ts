import express from 'express'
import { Request, Response } from 'express'

import SystemService from '../services/system.service'

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {

    const filters = req.body

    const system = await SystemService.get(filters)

    res.status(200).send(system)

})

export default router
