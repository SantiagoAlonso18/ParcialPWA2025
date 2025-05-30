import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/index";
import connectDB from "./database";

const app=express();

const PORT=process.env.PORT||3000;

app.use(cors());

app.use(express.json());

console.log ("URI de conexion:", process.env.MONGO_URI);

connectDB();

app.get("/",(req,res)=>{
    res.send("Hola desde express")
});

app.use("/api",routes);

app.listen(PORT,()=>{
    console.log(`server activo en puerto: ${PORT}`)
});

