//keys.js - figure what set of keys to return 
if(process.env.NODE_ENV === 'production') {
   //in prod
   module.exports = require('./prod'); 
} else {
  //in dev - return dev keys 
  module.exports = require('./dev');
}

