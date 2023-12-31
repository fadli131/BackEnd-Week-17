const functions = require('firebase-functions')
const express = require('express')
const dotenv = require ('dotenv')
const useMiddleware = require('./middleware');
const router = require('./routes');


const app = express()
dotenv.config()

useMiddleware(app)

app.use(router)

const server_port = (process.env.SERVER_PORT) 

app.listen(server_port, () => {
 console.log(`Running on port http://localhost:${server_port}`);
})

exports.fadli_week_17 = functions.https.onRequest(app);