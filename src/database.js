const mongoose  = require('mongoose');

const { APIREST_MONGODB_HOST, APIREST_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${APIREST_MONGODB_HOST}/${APIREST_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then (db => console.log('Base de Datos Conectada'))
    .catch(err => console.log(err));