function redirectIfLoggedIn(req, res, next) {
  console.log(req.locals)
  console.log(req.session)
  if (req.session && req.session.user) {
    return res.redirect('/');  // Redirect to homepage if logged in
  }
  next();
}

module.exports = redirectIfLoggedIn;