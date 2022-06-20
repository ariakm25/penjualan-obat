const { DataTypes } = require('sequelize');
const db = require('../database');

const Obat = db.define('Obat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama : DataTypes.STRING(80),
  stok : DataTypes.INTEGER(100),
});

module.exports = Obat;
