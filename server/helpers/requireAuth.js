// Middleware to protect routes that require login
function requireAuth(req, res, next) {
  if (!req.session.user) {
    req.flash('error', 'You must be logged in to access this page.');
    return res.redirect('/login');
  }
  next();
}

module.exports = requireAuth;