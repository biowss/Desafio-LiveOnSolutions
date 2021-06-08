const express = require('express');
const routesV1 = require('./api/v1/routes');
require('dotenv/config');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use('/v1/', routesV1);


app.listen(process.env.SERVER_PORT,  () => {
  console.log("👉 Back-end started! 👌");
});