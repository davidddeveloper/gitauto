const redisClient = require("../utils/redis");

const get_user_id = (res, token) => {

    const key = `auth_${token}`;

    return redisClient.client.get(key).then((userId) => {
        if (!userId) {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        return userId
    });
}

const extract_token = (req) => {
    return req.headers['x-token'];
}

module.exports = {
    get_user_id,
    extract_token
}