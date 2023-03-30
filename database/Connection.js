import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

const env = process.env;
const Connection = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
    host: env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2, 
    logging: false,
});

export default Connection;
