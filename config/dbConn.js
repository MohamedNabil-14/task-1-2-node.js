const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
    } catch (error) {
        console.log(console.error)
    }
}
module.exports = connectDB