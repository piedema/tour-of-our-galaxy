import mongoose from 'mongoose'

const connect = async () => {

    const dbUrl = process.env.DB_URL

    const db = await mongoose.connect(dbUrl)

    return db

}

export default {
    connect
}