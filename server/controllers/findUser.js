const dbClient = require('../utils/db')

async function findUser(res, obj) {
  try {
    const user = await dbClient.client.db('gitauto').collection('users').findOne(obj);
    // Now user is set, you can use it here or return it.
    return user;
  } catch (err) {
    return res.status(500).send({ error: `Internal error${err}` });
  }
  // Use user here as needed
}

module.exports = findUser;