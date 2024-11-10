function redirectIfLoggedIn(req, res, next) {
  if (req.session.user) {
    return res.redirect('/');  // Redirect to homepage if logged in
  }
  next();
}

module.exports = redirectIfLoggedIn;