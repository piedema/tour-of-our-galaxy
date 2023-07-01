import { Types } from 'mongoose'

export interface MoonInterface {
    _id: Types.ObjectId
    id: string
    name: string
    englishName: string
    type: string
    system: Types.ObjectId
    bodies: Types.ObjectId[]
    aroundPlanets: Types.ObjectId[]
    semimajorAxis: string
    perihelion: string
    aphelion: string
    eccentricity: string
    inclination: string
    mass: {
        massValue: string
        massExponent: string
    }
    vol: {
        volValue: string
        volExponent: string
    }
    density: string
    gravity: string
    escape: string
    meanRadius: string
    equaRadius: string
    polarRadius: string
    flattening: string
    dimension: string
    sideralOrbit: string
    sideralRotation: string
    discoveredBy: string
    discoveryDate: string
    alternativeName: string
    axialTilt: string
    avgTemp: string
    mainAnomaly: string
    argPeriapsis: string
    longAscNode: string
    rel: string
}