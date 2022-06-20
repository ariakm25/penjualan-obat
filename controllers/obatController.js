const Obat = require('../models/Obat');

module.exports = {
  index: async (req, res) => {
    // const posts = await Post.findAll();
    const obats = await Obat.findAll();
    return res.render('obat/index',{obats})
  },
  create: async (req, res) => {
    return res.render('obat/create');
  },

  store: async (req, res) => {
    await Obat.create({
      nama: req.body.nama,
      stok: req.body.stok,
    });

    return res.redirect('/');
  },

  
};
