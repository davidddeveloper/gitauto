const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'gitauto';

    this.client = new MongoClient(`mongodb://${host}:${port}/${database}`);

    // connect to mongodb
    this.client.connect();
  }
}

const dbClient = new DBClient()
module.exports = dbClient;