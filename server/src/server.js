const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT = 3001 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('  -> Connected to MongoDB!');
    app.listen(PORT, () => {
      console.log(`  -> Server:  http://localhost:${PORT}/`);
    });
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });
