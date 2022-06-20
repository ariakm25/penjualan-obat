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

    return res.redirect('/obats');
  },

  edit: async (req, res) => {
    const obat = await Obat.findByPk(req.params.id);
    return res.render('obat/edit', {
      obat
    })
  },  

  update : async (req, res)=>{
    console.log(req.body)
    await Obat.update(req.body, {
      where: {
        id: req.params.id
      },
    })
    
    return res.redirect('/obats')
  },

	// delete post from database
	delete: async (req, res) => {
		await Obat.destroy({
			where: {
				id: req.params.id,
			},
		});
		return res.redirect('/obats');
	}  
  
};
