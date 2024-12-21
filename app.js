const express = require('express');
const app = express();
const basicroutes = require('./routes/basic-routes')

app.use(express.json()); 

app.use('/api/hospitals', basicroutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
