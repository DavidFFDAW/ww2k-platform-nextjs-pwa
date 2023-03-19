import Connection from './Connection';
import { DataTypes } from 'sequelize';

const BlogPostsTable = Connection.define(
    'news',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        image: { type: DataTypes.STRING(255), allowNull: true },
        title: { type: DataTypes.STRING(255), allowNull: false },
        content: { type: DataTypes.STRING(255), allowNull: false },
        exceptr: { type: DataTypes.TEXT, allowNull: true },
        visible: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: true },
        category: { type: DataTypes.STRING(255), allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { timestamps: false },
);

export default BlogPostsTable;
