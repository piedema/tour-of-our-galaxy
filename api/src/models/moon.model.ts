import { model } from 'mongoose'

import { MoonInterface } from '../interfaces/moon.interface'
import moonSchema from '../schemas/moon.schema'

export default model<MoonInterface>('Moon', moonSchema);