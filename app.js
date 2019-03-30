'use strict';
const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

//initialize app to express function given to us by require above
const app = express();

//make use of cookies
app.use(
  cookieSession({
    //this is in milliseconds we want it for 24 hours hence the calculation
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//setting up middleware for passport
app.use(passport.initialize());
app.use(passport.session());

//body parser middleware
app.use(express.json());

//Mongoose set up
const db = require('./config/dev').mongoURI;
mongoose.connect(db, { useNewUrlParser: true });

/*we are bringing authRoutes module from routes dir and passing app to the function exported which initializes 
the routes defined in authRoutes.js
*/
require('./routes/authRoutes')(app);

//billing rouates
require('./routes/billingRoutes')(app);

//settin up a custom env port or local port.Note that PORT should be in capitals for deploy to heroku
const port = process.env.PORT || 5000;

//setting up app const to listen on the port above
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
