'use strict'
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

//this gets id from db and add it to the cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//this takes id from cookie and turns this back into user modal
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleID: profile.id
      });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({
          googleID: profile.id,
          googleUsername: profile.displayName
        }).save();
        done(null, user);
      }
    }
  )
);

const BCRYPT_SALT_ROUNDS = 12;

passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
      session: false
    },
    async (req, username, password, done) => {
      try {
        const existingUser = await User.findOne({ localUsername: username });
        if (existingUser) {
          return done(null, false, { message: 'username is taken' });
        }
      } catch (err) {
        console.log(err);
      }
      try {
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        const user = await new User({
          localUsername: username,
          localPassword: hashedPassword
        }).save();
        if (user) {
          done(null, user);
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ localUsername: username });
        if (user === null) {
          return done(null, false, { message: 'User does not exist' });
        }
        const match = await bcrypt.compare(password, user.localPassword);
        if (!match) {
          console.log('passwords do not match');
          return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, user);
      } catch (err) {
        console.log(err);
      }
    }
  )
);
