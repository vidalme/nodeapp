import mongoose from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect("mongodb+srv://andrinho:M3W2RdPexyjlKxPa@cluster0.aqdh46g.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection;
}

export default conectaNaDatabase;

