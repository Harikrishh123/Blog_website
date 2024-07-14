
const mongoose = require('mongoose')

const mongUrl = process.env.MONGO_URL

const connectToMo = () => {
    mongoose.connect(mongUrl).then(console.log("mongoose is connected"))
}

module.exports = connectToMo ;
