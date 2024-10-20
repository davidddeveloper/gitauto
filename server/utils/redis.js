const { createClient } = require('redis');

class RedisClient {
  constructor() {
    // Create Redis client (v2.8.0)
    this.client = createClient();

    // Handle errors
    this.client.on('error', (err) => {
      console.error('Redis Client Error:', err);
    });

    // Connect
    (async () => {
      try {
        await this.client.connect();
      } catch (err) {
        console.error('Connection Error:', err);
      }
    })();
  }

  // Check if the Redis client is alive
  isAlive() {
    return this.client.ready;
  }
}

const redisClient = new RedisClient()
module.exports = redisClient;
