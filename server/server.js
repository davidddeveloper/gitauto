const express = require('express');
const routes = require('./routes/index');
const app = express();
const port = process.env.PORT || 5000
const hostname = process.env.HOST || '127.0.0.1'

app.use(express.json());

app.use('/', routes);

app.listen(port, hostname, () => {
    console.log(`Server running on ${
        hostname == '127.0.0.1' ? 'localhost' : hostname
    } port ${port}`)
});