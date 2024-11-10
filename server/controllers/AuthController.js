const dbClient = require('../utils/db');
const redisClient = require('../utils/redis');
const {ObjectId} = require('mongodb')
const hashPassword = require('../helpers/hash_password');
const generateJwt = require('../helpers/generate_jwt');
const findUser = require('../controllers/findUser');
const checkToken = require('../helpers/checkToken');

const isAuthenticated = async (req, res) => {
    const token = checkToken.extract_token(req);

    if (!token) return false;

    try {
        const user_id = await checkToken.get_user_id(res, token);
        console.log("This is waht checkToken.get_user_id returns", user_id);
        const user = await findUser(res, { _id: new ObjectId(user_id) });

        if (user) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).send({ error: "Unauthorized" });
    }
}

const Connect = (req, res) => {
    //TODO:
    //extract email:password
    const authCookieHeader = req.headers.authorization;
    if (!authCookieHeader) return res.status(404).send({ "error": "Unauthorized"} );

    // remove 'Bearer ' and get the actual token
    const authCookie = authCookieHeader.split(" ")[1];
    if (!authCookie) return res.status(404).send({ "error": "Unauthorized"} );

    try {
        // extract email and password from base64 encoding
        const [email, password] = Buffer.from(authCookie, 'base64').toString('utf8').split(':');
        // checks in db for the user with email and password

        return findUser(res, {email, password: hashPassword(password) })
        .then(user => {
            if (!user) return res.status(401).send({ "error": "Unauthorized" });

            // generate a jwttoken
            const jwttoken = generateJwt(user.username);
            // associate jwttoken with user id in redis
            const key = `auth_${jwttoken}`;
            const expiration = 60 * 60 * 700; //29d

            return redisClient.client.set(key, user._id.toString(), 'EX', expiration)
            .then(() => res.status(200).json({ token: jwttoken }))
            .catch((err) => {console.log(err)
                res.status(500).send({ error: 'Internal error' })});

        })
        .catch ((err) => {
            console.log('err', err);
            return res.status(401).send({ error: 'Unauthorized' });
        })
    } catch (err) { console.log('error', err)
        return res.status(401).send({ error: 'Unauthorized' });
    }
}

module.exports = {
    isAuthenticated,
    Connect
}