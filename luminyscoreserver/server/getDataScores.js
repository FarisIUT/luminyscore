"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const {
  match
} = require("assert");

const request = require("request");

let timestampTest = new Date();
var FirstDay = Math.round(timestampTest.getTime() / 1000); //+ 90000000 pour plus 1 jour

function dateIterator() {
  let timestamp = FirstDay; // jour de dÃ©part iteration dates

  let date = new Date(timestamp * 1000).toLocaleDateString("en-US");
  let year = new Date(timestamp * 1000).getFullYear();
  let month = new Date(timestamp * 1000).getMonth();
  month++;
  let day = new Date(timestamp * 1000).getDate();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  ;
  return year + "-" + month + "-" + day;
}

function getOptions(paramsDate) {
  return {
    'method': 'GET',
    'url': 'https://v3.football.api-sports.io/fixtures',
    qs: {
      date: paramsDate,
      league: 140,
      season: '2021'
    },
    'headers': {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '0bed05814d17f569c5688a84a318f638'
    }
  };
}

async function matchAdder() {
  let options = getOptions(dateIterator());
  var matches = [];
  await new Promise(next => {
    request(options, async function (error, response) {
      if (error) throw new Error(error);

      for (let u = 0; u < JSON.parse(response.body).results; u++) {
        let idHome = JSON.parse(response.body).response[u].teams.home.name;
        let idAway = JSON.parse(response.body).response[u].teams.away.name;
        let status = JSON.parse(response.body).response[u].fixture.status.long;
        let timestamp = JSON.parse(response.body).response[u].fixture.timestamp;
        let goalsHome = JSON.parse(response.body).response[u].goals.home;
        let goalsAway = JSON.parse(response.body).response[u].goals.away;
        let date = new Date(timestamp * 1000).toLocaleDateString("en-US");
        let year = new Date(timestamp * 1000).getFullYear();
        let month = new Date(timestamp * 1000).getMonth();
        month++;
        let day = new Date(timestamp * 1000).getDate();
        let hours = new Date(timestamp * 1000).getHours();
        let minutes = new Date(timestamp * 1000).getMinutes();
        if (day < 10) {
          day = "0" + day;
        }

        if (month < 10) {
          month = "0" + month;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        date=day+"/"+month+"/"+year+" @ "+hours+":"+minutes

        matches.push({
          id: u,
          equipe: {
            0: idHome,
            1: idAway
          },
          status: status,
          score: {
            0: goalsHome,
            1: goalsAway
          },
          date: date
        });
      } //console.log(JSON.parse(response.body));


      next();
    });
  }); //console.log("from getData"+JSON.stringify(matches[0]))

  return matches;
}

matchAdder();
var _default = {
  matchAdder
};
exports.default = _default;