import { Types } from 'mongoose'

export interface StarInterface {
    _id: Types.ObjectId
    id: string
    name: string
    englishName: string
    type: string
    bodies: Types.ObjectId[]
    rel: string
}
