import { Schema } from 'mongoose'

import { MoonInterface } from '../interfaces/moon.interface'

const moonSchema = new Schema<MoonInterface>({
    id: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    englishName: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    system: { type: Schema.Types.ObjectId, required: true },
    bodies: [Schema.Types.ObjectId],
    aroundPlanets: [Schema.Types.ObjectId],
    semimajorAxis: String,
    perihelion: String,
    aphelion: String,
    eccentricity: String,
    inclination: String,
    mass: {
        massValue: String,
        massExponent: String
    },
    vol: {
        volValue: String,
        volExponent: String
    },
    density: String,
    gravity: String,
    escape: String,
    meanRadius: String,
    equaRadius: String,
    polarRadius: String,
    flattening: String,
    dimension: String,
    sideralOrbit: String,
    sideralRotation: String,
    discoveredBy: String,
    discoveryDate: String,
    alternativeName: String,
    axialTilt: String,
    avgTemp: String,
    mainAnomaly: String,
    argPeriapsis: String,
    longAscNode: String,
    rel: { type: String },
})

export default moonSchema