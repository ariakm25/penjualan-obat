module.exports = auth = (req, res, next) => {
  console.log(req.session.user);
  if (req.session && req.session.user) {
    res.locals.user = req.session.user;
    return next();
  }

  return res.redirect('/');
};
