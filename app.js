const express = require('express');

//initialize app to express function given to us by require above
const app = express();

//settin up a custom env port or local port
const port = process.env.port || 5000;

//setting up initial route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//setting up app const to listen on the port above
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
