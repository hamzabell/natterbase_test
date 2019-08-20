const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const routes = require('./routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);
const PORT = process.env.PORT | 4000

app.listen(PORT, ()=>  console.info(`Server is running on port ${PORT}`) );