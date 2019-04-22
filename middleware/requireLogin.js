
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in !' });
  }
  //next functions passes the request to the next middleware in the chain
  next();
};
