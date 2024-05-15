import mongoose from "mongoose";

export const connectDB = async() => {//No recibe respuesta inmediata

    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/PBiblioteca");
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.error(`Error al conectarse a la BdD : ${error}`);
    }
};