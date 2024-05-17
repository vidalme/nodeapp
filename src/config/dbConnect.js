import mongoose from "mongoose";

async function conectaNaDatabase(){
    // mongoose.connect("mongodb://root:example@mongo:27017")
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection;
}

export default conectaNaDatabase;

