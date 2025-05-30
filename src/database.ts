import mongoose from "mongoose";

const connectDB=async()=>{
    try { 
        await mongoose.connect(process.env.MONGO_URI ?? "");
        console.log ("data base conectada con exito")
    } catch (error) { console.log ("conexion a base de datos fallida",error);

        process.exit(1);

    } 
}
export default connectDB;
