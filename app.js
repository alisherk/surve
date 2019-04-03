'use strict';
const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

//bring mongoDB model and passport service
require('./models/User');
require('./services/passport');

//initialize app to express function given to us by require above
const app = express();

//make use of cookies
app.use(
  cookieSession({
    //this is in milliseconds we want it for 24 hours hence the algorithm 
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//setting up middleware for passport
app.use(passport.initialize());
app.use(passport.session());

//body parser middleware
app.use(express.json());

//connection set up to mongoDB
const db = require('./config/dev').mongoURI;
mongoose.connect(db, { useNewUrlParser: true });

/*bring authRoutes module from routes dir and passing app to the function exported which initializes 
the routes defined in authRoutes.js
*/
require('./routes/authRoutes')(app);

//bring billing routes
require('./routes/billingRoutes')(app);

//settin up a custom env port or local dev port
const port = process.env.PORT || 5000;

//production mode
if (process.env.NODE_ENV === 'production') {
  //express will serve react assets if routes are uknown 
  app.use(express.static('client/build')); 
 
  //express will serve the index.html if it does not recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//set up the app to listen on specific port 
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
