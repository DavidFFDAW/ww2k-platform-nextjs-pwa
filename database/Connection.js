import { Sequelize } from "sequelize";

const env = process.env;
const Connection = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
    host: env.DB_HOST,
    dialect: "mysql",
    logging: false,
});

export default Connection;
