import { StarInterface } from '../interfaces/star.interface'
import StarModel from '../models/star.model'

const get = async (filters: any): Promise<StarInterface[]> => {

    return new Promise<StarInterface[]> ((resolve, reject) => {
        
        StarModel.find(filters)
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