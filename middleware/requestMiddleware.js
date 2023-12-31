const { v4: uuidv4 } = require('uuid');

const requestMiddleware = (req, res, next) => {
    if (req.headers["x-request-id"]) {
        res.headers["x-request-id", req.headers["x-request-id"]];
        req.requestId = req.headers["x-request-id"];
    } else {
        const uuid = uuidv4();
        res.setHeader("x-request-id", uuid);
        req.requestId = uuid;
    }
    next();
};

module.exports = requestMiddleware;
