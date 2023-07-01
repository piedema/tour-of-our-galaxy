import { Types } from 'mongoose'
import { SystemInterface } from './interfaces/system.interface'
import { StarInterface } from './interfaces/star.interface'
import { PlanetInterface } from './interfaces/planet.interface'
import { MoonInterface } from './interfaces/moon.interface'

import SystemModel from './models/system.model'
import StarModel from './models/star.model'
import PlanetModel from './models/planet.model'
import MoonModel from './models/moon.model'

export default async function updater(){

    // if(PlanetModel.collection){

    //     // PlanetModel.collection?.dropIndexes()
    //     PlanetModel.collection?.drop()

    // }

    // if(MoonModel.collection){

    //     // MoonModel.collection?.dropIndexes()
    //     MoonModel.collection?.drop()

    // }

    SystemModel.collection?.drop()
    StarModel.collection?.drop()
    PlanetModel.collection?.drop()
    MoonModel.collection?.drop()

    const data: any[] = await getData()

    data.map(body => Object.assign(body, { _id:new Types.ObjectId() }))

    const system: SystemInterface = {
        _id: new Types.ObjectId(),
        id:'solar system',
        name:'Solar System',
        englishName:'Solar System',
        type:'Celestial System',
        bodies:[], //data.map(body => body._id),
        rel:null
    }

    const stars: StarInterface[] = data
        .filter(body => body.bodyType === 'Star')
        .map(body => Object.assign(body, {
            type:body.bodyType,
            system:system._id,
            bodies:[],
            // bodies:data
            //     .filter(body2 => body2._id !== body._id)
            //     .map(body3 => body3._id)
        }))

    const planets: PlanetInterface[] = data
        .filter(body => body.bodyType === 'Planet')
        .map(body => Object.assign(body, {
            type:body.bodyType,
            system:system._id,
            aroundStars:[stars.find(body2 => body2.type === 'Star')._id],
            moons:data.filter(body3 => body.moons?.map(body4 => body4.rel).includes(body3.rel)).map(body5 => body5._id),
            bodies:[],
        }))

    const moons: MoonInterface[] = data
        .filter(body => body.bodyType === 'Moon')
        .map(body => Object.assign(body, {
            type:body.bodyType,
            system:system._id,
            aroundStars:[stars.find(body => body.type === 'Star')._id],
            aroundPlanets:data.filter(body2 => body2.rel === body.aroundPlanet.rel).map(body3 => body3._id),
            bodies:[],
        }))

    const systemDocument = await SystemModel.create(system)
    const starDocuments = await StarModel.create(stars)
    const planetDocuments = await PlanetModel.create(planets)
    const moonDocuments = await MoonModel.create(moons)

}

async function getData(): Promise<Body[]> {

    const request: RequestInfo = new Request('https://api.le-systeme-solaire.net/rest/bodies', {
        method: 'GET'
    })

    return fetch(request)
        .then(res => res.json())
        .then(res => {
            return res.bodies as Body[]
        })

}