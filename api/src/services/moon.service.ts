import { MoonInterface } from '../interfaces/moon.interface'
import MoonModel from '../models/moon.model'

const get = async (filters: any): Promise<MoonInterface[]> => {

    return new Promise<MoonInterface[]> ((resolve, reject) => {
        
        MoonModel.find(filters)
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