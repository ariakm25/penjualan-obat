const { compareSync } = require('bcryptjs');
const Obat = require('../models/Obat');
const User = require('../models/User');

module.exports = {
  index: async (req, res) => {
    return res.render('index');
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.render('index', {
        error: 'Email tidak ditemukan',
      });
    }

    const isMatch = compareSync(password, user.password);

    if (!isMatch) {
      return res.render('index', {
        error: 'Password salah',
      });
    }

    req.session.user = {
      id: user.id,
      email: user.email,
      nama: user.nama,
    };

    return res.redirect('/dashboard');
  },

  dashboard: async (req, res) => {
    const countObat = await Obat.count();
    return res.render('dashboard', {countObat});
  },

  logout: async (req, res) => {
    req.session.destroy();
    return res.redirect('/');
  },
};
