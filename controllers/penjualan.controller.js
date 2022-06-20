const Penjualan = require('../models/Penjualan');

module.exports = {
	index: async (req, res) => {
		const penjualans = await Penjualan.findAll();
		return res.render('penjualan/index', { penjualans });
	},
	create: async (req, res) => {
		return res.render('penjualan/create');
	},
	store: async (req, res) => {
		await Penjualan.create({
			obat_id: req.body.obat_id,
			tanggal: req.body.tanggal,
			qty: req.body.qty,
			admin_id: req.body.admin_id,
		});
		return res.redirect('/penjualans');
	},
	delete: async (req, res) => {
		await Penjualan.destroy({
			where: {
				id: req.params.id,
			},
		});
		return res.redirect('/penjualans');
	},
};
