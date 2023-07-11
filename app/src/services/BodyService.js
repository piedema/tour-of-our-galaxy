import axios from 'axios'

export async function getBodiesOf(data){

    const options = {
        url:`${process.env.REACT_APP_API_PREFIX}/bodies`,
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    }

    return await axios(options)

}

export async function getSystems(filters){

    const options = {
        url:`${process.env.REACT_APP_API_PREFIX}/systems`,
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        data:filters,
    }

    return await axios(options)

}

export async function getStars(filters){

    const options = {
        url:`${process.env.REACT_APP_API_PREFIX}/stars`,
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        data:filters,
    }

    return await axios(options)

}

export async function getPlanets(filters){

    const options = {
        url:`${process.env.REACT_APP_API_PREFIX}/planets`,
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        data:filters,
    }

    return await axios(options)

}

export async function getMoons(filters){

    const options = {
        url:`${process.env.REACT_APP_API_PREFIX}/moons`,
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        data:filters,
    }

    return await axios(options)

}