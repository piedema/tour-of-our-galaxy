import { PlanetInterface } from '../interfaces/planet.interface'
import PlanetModel from '../models/planet.model'

const get = async (filters: any): Promise<PlanetInterface[]> => {

    return new Promise<PlanetInterface[]> ((resolve, reject) => {
        
        PlanetModel.find(filters)
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