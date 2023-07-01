import { Schema } from 'mongoose'

import { StarInterface } from '../interfaces/star.interface'

const starSchema = new Schema<StarInterface>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    englishName: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    bodies: [{ type: Schema.Types.ObjectId }],
    rel: { type: String },
})

export default starSchema