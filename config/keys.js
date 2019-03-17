
//keys.js - figure what set of keys to return 
if(process.env.NODE_ENV === 'production') {
   //we are in prod
   module.exports = require('./prod'); 
} else {
  //we are in dev - return dev keys 
  module.exports = require('./dev');
}

