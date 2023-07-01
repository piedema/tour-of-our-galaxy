import { Schema } from 'mongoose'

import { SystemInterface } from '../interfaces/system.interface'

const systemSchema = new Schema<SystemInterface>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    englishName: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    bodies: [{ type: Schema.Types.ObjectId }],
    rel: { type: String },
})

export default systemSchema