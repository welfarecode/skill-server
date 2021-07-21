const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('morgan');

app.use(logger('dev', {}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const apiRouter = require('./routes/users');
app.use('/api',apiRouter);


app.listen(PORT, function() {
    console.log("포트 번호 " + PORT + "에서 서버가 열렸습니다.");
})

