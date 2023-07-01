import { model } from 'mongoose'

import { SystemInterface } from '../interfaces/system.interface'
import systemSchema from '../schemas/system.schema'

export default model<SystemInterface>('System', systemSchema);