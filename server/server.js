const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./routes/index');
const app = express();
const port = process.env.PORT || 5000
const hostname = process.env.HOST || '127.0.0.1'
const path = require('path');
require('dotenv').config()

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(session({
secret: process.env.TOKEN_SECRET,  // replace this with a strong, unique secret in production
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }  // 1 day session expiry
}));

app.use(flash());

// Making session data available in all views
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.listen(port, hostname, () => {
  console.log(`Server running on ${
      hostname == '127.0.0.1' ? 'localhost' : hostname
  } port ${port}`)
});