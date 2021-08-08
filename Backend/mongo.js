const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGOURL1, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
