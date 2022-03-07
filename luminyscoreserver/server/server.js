import express from 'express';
import router from './users';

const app = express();
app.use(express.json())
app.use(express.static('./app/luminyscore'))
app.use('/users', router);
app.get('/', function (req, res) {
 res.sendFile('index.html');
});
app.listen(8080);

