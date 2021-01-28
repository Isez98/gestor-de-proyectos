const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:LRXIMWL8IN7Fm1HU@clustergpi.p0zcz.mongodb.net/gpiDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const Connection = mongoose.connection;

module.exports = Connection;