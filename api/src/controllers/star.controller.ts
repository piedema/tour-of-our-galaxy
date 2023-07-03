import express from 'express'
import { Request, Response } from 'express'

import StarService from '../services/star.service'

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {

    const filters = req.body

    const star = await StarService.get(filters)

    res.status(200).send(star)

})

export default router
