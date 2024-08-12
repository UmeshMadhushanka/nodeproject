const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
            'mongodb+srv://umesh:haw9$eoN@login.18nh6.mongodb.net/registerdb?retryWrites=true&w=majority&appName=login');
    console.log(`MongoDB Connected`);
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;