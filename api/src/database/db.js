import Sequelize from "sequelize"

export const sequelize = new Sequelize('resistance','postgres','152417',{
    host: 'localhost',
    dialect: 'postgres'
})