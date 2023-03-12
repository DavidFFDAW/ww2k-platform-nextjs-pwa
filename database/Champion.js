import Connection from "./Connection";
import { DataTypes } from "sequelize";

const ChampionsReigns = Connection.define(
    "championship_reigns",
    {
        days: DataTypes.INTEGER,
        current: DataTypes.BOOLEAN,
        wrestler_id: DataTypes.BIGINT,
        championship_id: DataTypes.BIGINT,
        won_date: DataTypes.DATE,
        lost_date: DataTypes.DATE,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
    },
    { timestamps: false }
);

export default ChampionsReigns;
