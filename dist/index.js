"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const index_1 = __importDefault(require("./routes/index"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
console.log("URI de conexion:", process.env.MONGO_URI);
(0, database_1.default)();
app.get("/", (req, res) => {
    res.send("Hola desde express");
});
app.use("/api", index_1.default);
app.listen(PORT, () => {
    console.log(`server activo en puerto: ${PORT}`);
});
