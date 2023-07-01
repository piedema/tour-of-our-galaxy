import mongoose from 'mongoose'

// dbUser vcUnYugvHnZKqhZI cluster0.3gneyki.mongodb.net tour-of-our-galaxy
const dbUrl = 'mongodb+srv://dbUser:vcUnYugvHnZKqhZI@cluster0.3gneyki.mongodb.net/tour-of-our-galaxy'

const connect = async () => {

    const db = await mongoose.connect(dbUrl)

    return db

}

export default {
    connect
}