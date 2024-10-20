const { ObjectId } = require('mongodb');
const hashPassword = require('../helpers/hash_password');
const dbClient = require('../utils/db');
const checkToken = require('../helpers/checkToken');
const findUser = require('../controllers/findUser');

const createNew = (req, res) => {
  // new user
  const { body } = req;
  console.log(body)
  const { email, password } = body;

  if (!email) return res.status(400).send({ error: 'Missing email' });

  if (!password) return res.status(400).send({ error: 'Missing password' });

  findUser(res, { email }).then(user => {
    if (user && user.email === email) {
      return res.status(400).send({ error: 'Already exist' });
    }
  });

  const newUser = {
    email,
    password: hashPassword(password),
  }

  return dbClient.client.db('gitauto').collection('users').insertOne(newUser, (err, result) => {
    if (err) {
      return res.status(500).send({ error: 'Internal error' });
    }
    return res.status(201).send(
      {
        email: result.ops[0].email,
        id: result.ops[0]._id,
      },
    );
  });
};

const getMe = (req, res) => {
  // me
  //extract token
  const token = checkToken.extract_token(req);

  if (!token) return res.status(401).send({error: "Unauthorized"});

  return checkToken.get_user_id(res, token).then(user_id => {
    findUser(res, { _id: new ObjectId(user_id) }).then(user => {
      return res.status(200).send({ email: user.email, id: user._id });
    })
  });

}

module.exports = {
  createNew,
  getMe
}