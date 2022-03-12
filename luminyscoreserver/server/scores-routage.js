import express from 'express';
import asyncHandler from 'express-async-handler';
import getDataScores from './getDataScores';

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



// scoresRouter.get('/', asyncHandler(getDataScores.matchAdder()));
// scoresRouter.post('/', asyncHandler(getDataScores.matchAdder()));



export default scoresRouter;