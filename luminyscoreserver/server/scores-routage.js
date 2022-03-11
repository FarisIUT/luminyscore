import express from 'express';
import asyncHandler from 'express-async-handler';
import usersHandler from './users-handler';

const scoresRouter = express.Router();

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
  {
    id: 2,
    equipe: {
      0:'PSG',
      1:'Real Madrid'
    },
    status: 'to come',
    score: {
      0:'4',
      1:'0',
    },
  },
  {
    id: 3,
    equipe: {
      0:'FC Nantes',
      1:'OL'
    },
    status: 'finish',
    score: {
      0:2,
      1:2,
    },
  },
];

scoresRouter.get('/', function (req, res) {
    res.send(scores);
});
scoresRouter.post('/', function (req, res) {
    const userExist = users.find(user => user.firstName === req.body.firstName);
    if (userExist) {
        res.send({});
    } else {
        users.push(req.body);
        res.send({ firstName : 'ok' });
    }
});

scoresRouter.get('/', usersHandler.getUsers);
scoresRouter.post('/', usersHandler.create);
scoresRouter.get('/', asyncHandler(usersHandler.getUsers));
scoresRouter.post('/', asyncHandler(usersHandler.create));


export default scoresRouter;