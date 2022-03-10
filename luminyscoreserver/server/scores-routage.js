import express from 'express';
import asyncHandler from 'express-async-handler';
import usersHandler from './users-handler';

const scoresRouter = express.Router();
let users = [
    {
        firstName:'Will',
        lastName: 'Alexander',
        email: 'will@will.com',
        diploma: 'License 3 Informatique',
        options: ['web application', 'baby-foot']
    }
];

let scores = [
    {
      id: 1,
      equipe: {
        0:'OM',
        1:'OGC Nice'
      },
      status: 'finish',
      score: {
        0:'1',
        1:'2',
      },
    },
]

usersRouter.get('/', function (req, res) {
    res.send(users);
});
usersRouter.post('/', function (req, res) {
    const userExist = users.find(user => user.firstName === req.body.firstName);
    if (userExist) {
        res.send({});
    } else {
        users.push(req.body);
        res.send({ firstName : 'ok' });
    }
});

usersRouter.get('/', usersHandler.getUsers);
usersRouter.post('/', usersHandler.create);
usersRouter.get('/', asyncHandler(usersHandler.getUsers));
usersRouter.post('/', asyncHandler(usersHandler.create));
usersRouter.delete('/:id', asyncHandler(usersHandler.userDelete));


export default scoresRouter;