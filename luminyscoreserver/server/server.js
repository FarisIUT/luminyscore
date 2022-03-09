import express from 'express';
import usersRouter from './users-routage';

const app = express();
app.use(express.json())
app.use(express.static('./app/luminyscore'))
app.use('/users', usersRouter);
app.get('/', function (req, res) {
 res.sendFile('index.html');
});
app.listen(8080);

