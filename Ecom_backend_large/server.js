import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import sequelize from "./src/config/dataSource.js";
import "./src/models/itemsModel.js";
import itemRoutes from "./src/routes/itemRoutes.js"


const server = express();
dotenv.config();

server.use(express.json());

server.use(cors());
server.use(express.json()); // middleware to parse json
server.use(cookieParser());

server.use("/api", itemRoutes)




async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    server.listen(3000, () => console.log("Server running on port 3000"));
    // await sequelize.sync({ alter: true }); //this is to execute the model
  } catch (error) {
    console.error("Unable to connect:", error);
    process.exit(1);
  }
}

connectDB();


