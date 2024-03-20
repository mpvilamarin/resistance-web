import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Contacto = sequelize.define('public.contactos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
         isEmail: true,
       },
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
       validate: {
         isNumeric: true,
       },
    },
    empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, { timestamps: true });