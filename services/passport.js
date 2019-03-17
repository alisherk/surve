const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

//this gets id from db and add it to the cookie  
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//this takes id from cookie and turns this back into user modal
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
       done(null, user)
    });
}); 

//telling passport to use this specific google strategy
//new GoogleStrategy function creates a new instance of google passport strategy
//passport is generic register of a strategy
passport.use(
  new GoogleStrategy(
    {
      /* this takes in the obj containg clientID and clientSecret creds
       **for out google app created so that passport can know what is working with
       */
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', 
      proxy: true 
    },
    //arrow function is addded as cb
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
