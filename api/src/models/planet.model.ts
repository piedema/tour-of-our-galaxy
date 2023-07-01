import { model } from 'mongoose'

import { PlanetInterface } from '../interfaces/planet.interface'
import planetSchema from '../schemas/planet.schema'

export default model<PlanetInterface>('Planet', planetSchema);