function redirectIfLoggedIn(req, res, next) {
  if (req.session && req.session.user) {
    return res.redirect('/how-to-use');  // Redirect to homepage if logged in
  }
  next();
}

module.exports = redirectIfLoggedIn;