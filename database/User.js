import Connection from "./Connection";
import { DataTypes } from "sequelize";

const UserTable = Connection.define(
    "users",
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        username: { type: DataTypes.STRING(255), allowNull: false },
        password: { type: DataTypes.STRING(255), allowNull: false },
        email: {
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false,
        },
        name: { type: DataTypes.STRING(255), allowNull: false },
        last_connection: { type: DataTypes.DATE, allowNull: true },
        email_verified_at: { type: DataTypes.DATE, allowNull: true },
        image: { type: DataTypes.STRING(255), allowNull: false },
        type: { type: DataTypes.STRING(255), allowNull: false },
        remember_token: { type: DataTypes.STRING(100), allowNull: true },
        api_token: { type: DataTypes.STRING(255), allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { timestamps: false }
);

export default UserTable;
