//prod keys can be committed to heroku
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI, 
    mongoDbUser:process.env.MONGO_DB_USER,
    mongoDbPassword: process.env.MONGO_DB_PASSWORD,
    mongoDbName: process.env.MONGO_DB_NAME, 
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY, 
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
  };