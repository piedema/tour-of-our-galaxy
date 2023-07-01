import { model } from 'mongoose'

import { StarInterface } from '../interfaces/star.interface'
import starSchema from '../schemas/star.schema'

export default model<StarInterface>('Star', starSchema);