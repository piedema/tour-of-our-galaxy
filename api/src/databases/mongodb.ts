import mongoose from 'mongoose'

const dbUrl = process.env.DB_URL

const connect = async () => {

    const db = await mongoose.connect(dbUrl)

    return db

}

export default {
    connect
}