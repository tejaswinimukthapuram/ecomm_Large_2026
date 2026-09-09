
//this database is defined using sequelize
//this is for server to db connection 

import { Sequelize } from "sequelize";
import dotenv from "dotenv";



dotenv.config();

const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        dialect: "postgres", //In Sequelize, dialect means the type of SQL database you are using.
        port: process.env.PG_PORT
    }
);

export default sequelize;


