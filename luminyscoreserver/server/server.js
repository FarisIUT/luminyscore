import express from 'express';
import usersRouter from './users-routage';
import scoresRouter from './scores-routage';

const app = express();
app.use(express.json())
app.use(express.static('./app/luminyscore'))
app.use('/users', usersRouter);
app.use('/score', scoresRouter);

app.get('/', function (req, res) {
 res.sendFile('index.html');
});
app.listen(8080);

