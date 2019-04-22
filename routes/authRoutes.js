const passport = require('passport');

//@ module.exports = function(app) assumes that we are going to pass app.js as a param to this function
module.exports = app => {
  /*route handler
   @param string google associates to a google strategy set up in services
   @param Object scope tells the google server what we want to access in this case profile & email
*/
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  /*setting up a handler that google redirects users to 
    passport is provided as a second param with google string to connect to strategy above
    also once route is executed, it activates a cb call in GoogleStartegy 
*/
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.post('/api/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        res.status(500).send('Internal server error');
      }
      if (info !== undefined) {
        res.status(403).send('This username is taken');
      } else {
        req.logIn(user, err => {
          if (err) {
            console.log(err);
          } else {
            res.send('user is created');
          }
        });
      }
    })(req, res, next);
  });

  app.post('/api/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        res.status(500).send('Internal server error');
      }
      if (info !== undefined) {
          res.status(403).send(info.message); 
      } else {
        req.logIn(user, err => {
          if (err) {
            console.log(err);
          } else {
            res.send('authenticated');
          }
        });
      }
    })(req, res, next);
  });
};
