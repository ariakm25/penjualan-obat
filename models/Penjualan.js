const { DataTypes } = require('sequelize');
const db = require('../database');
const Obat = require('./Obat');
const User = require('./User');

const Penjualan = db.define('Penjualan', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	obat_id: {
		type: DataTypes.INTEGER,
		references: {
			model: Obat,
			key: 'id',
		},
	},
	tanggal: DataTypes.DATE,
	qty: DataTypes.INTEGER,
	admin_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: User,
			key: 'id',
		},
	},
});

module.exports = Penjualan;
