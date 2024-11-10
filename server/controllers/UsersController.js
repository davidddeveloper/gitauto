const { ObjectId } = require('mongodb');
const hashPassword = require('../helpers/hash_password');
const dbClient = require('../utils/db');
const checkToken = require('../helpers/checkToken');
const findUser = require('../controllers/findUser');

const createNew = (req, res) => {
  // new user
  const { body } = req;

  const { username, email, password } = body;

  if (!username) return res.status(400).send({ error: 'Missing username' });

  if (!email) return res.status(400).send({ error: 'Missing email' });

  if (!password) return res.status(400).send({ error: 'Missing password' });

  return findUser(res, { $or: [{ email }, { username }] }).then(user => {
    if (user && user.email === email) {
      return res.status(400).send({ error: 'Already exist' });
    }

    if (user && user.username === username) {
      return res.status(400).send({ error: 'Already exist' });
    }

    // create the new user
    const newUser = {
      username,
      email,
      password: hashPassword(password),
    }
  
    return dbClient.client.db('gitauto').collection('users').insertOne(newUser)
    .then(result => {
      return res.status(201).send(
        {
          email: newUser.email,
          id: result.insertedId,
        },
      );
    }).catch(err => {
      return res.status(500).send({ error: 'Internal error' })
    })
  });
  
};

const getMe = (req, res) => {
  // me
  //extract token
  const token = checkToken.extract_token(req);

  if (!token) return res.status(401).send({error: "Unauthorized"});

  return checkToken.get_user_id(res, token).then(user_id => {

    return findUser(res, { _id: new ObjectId(user_id) }).then(user => {
      console.log("this is the user", user)
      return res.status(200).send({ username: user.username, email: user.email, id: user._id });
    }).catch((err) => {
      console.log("An unexpected error occoured!")
      return;
    })
  });

}

module.exports = {
  createNew,
  getMe
}