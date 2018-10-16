// server.js

const express = require('express');
const app = express();
const Mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var morgan      = require('morgan');
var config = require('./config'); // get our config file
app.set('appsecret', config.secret);

const PORT = config.port;

const ServerPortRouter = require('./routes/ServerPortRouter');
const User = require('./routes/User');
const Dashboard = require('./routes/Dashboard');
const Property = require('./routes/Property');


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/serverport', ServerPortRouter);
app.use('/user', User);
app.use('/dashboard', Dashboard);
app.use('/property', Property);

Mongo.connect(config.dburl, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  db = client.db(config.dbname) // whatever your database name is
  console.log(`Mongo Listening to Port: ${config.dbport}`);
  app.listen(PORT, function(){
    console.log('Server is running on Port: ',PORT);
  });
})
