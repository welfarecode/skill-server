const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const apiRouter = require('./routes/users');
app.use('/api',apiRouter);




app.listen(PORT, function() {
    console.log("start! express server on port 3000")
})

