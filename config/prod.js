//prod keys can be committed to heroku
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI, 
    mongoDbUser:process.env.MONGO_DB_USER,
    mongoDbPassword: process.env.MONGO-DB-PASSWORD,
    mongoDbName: process.env.MONGO_DB_NAME, 
    cookieKey: process.env.COOKIE_KEY
  };