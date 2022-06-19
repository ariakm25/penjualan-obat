const { hashSync } = require('bcryptjs');
const User = require('./models/User');

User.findOne({
  where: {
    email: 'admin@admin.com',
  },
})
  .then((user) => {
    if (!user) {
      let password = hashSync('admin', 10);
      User.create({
        nama: 'admin',
        email: 'admin@admin.com',
        password,
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });

