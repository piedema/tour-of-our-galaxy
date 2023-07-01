import { SystemInterface } from '../interfaces/system.interface'
import SystemModel from '../models/system.model'

const get = async (filters: any): Promise<SystemInterface[]> => {

    return new Promise<SystemInterface[]> ((resolve, reject) => {
        
        SystemModel.find(filters)
            .then(data => {

                resolve(data)

            })
            .catch(error => {

                console.log(error)

                reject(error)

            })

    })

}

export default {
    get
}