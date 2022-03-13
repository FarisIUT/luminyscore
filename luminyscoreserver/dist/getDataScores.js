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
var FirstDay = Math.round(1647043200 //timestampTest.getTime() / 1000
); //+ 90000000 pour plus 1 jour

const leagues = [140, 78, 39];

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

function getOptions(paramsDate, league) {
  return {
    'method': 'GET',
    'url': 'https://v3.football.api-sports.io/fixtures',
    qs: {
      date: paramsDate,
      league: league,
      season: '2021'
    },
    'headers': {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '0bed05814d17f569c5688a84a318f638'
    }
  };
}

async function matchAdder() {
  var matches = [];
  var matches2 = [];

  for (let a = 0; a < leagues.length; a++) {
    console.log("a " + a);
    matches.push([]);
    let options = getOptions(dateIterator(), leagues[a]);
    var timestamps = [];
    await new Promise(next => {
      request(options, async function (error, response) {
        if (error) throw new Error(error);

        for (let u = 0; u < JSON.parse(response.body).results; u++) {
          let idHome = JSON.parse(response.body).response[u].teams.home.name;
          let idAway = JSON.parse(response.body).response[u].teams.away.name;
          let status = JSON.parse(response.body).response[u].fixture.status.long;
          let timestamp = JSON.parse(response.body).response[u].fixture.timestamp;
          let idSub = JSON.parse(response.body).response[u].fixture.id;
          let stadium = JSON.parse(response.body).response[u].fixture.venue.name;
          let league = JSON.parse(response.body).response[u].league.name;
          let linkHome = JSON.parse(response.body).response[u].teams.home.logo;
          let linkAway = JSON.parse(response.body).response[u].teams.away.logo;
          timestamps.push(timestamp);
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

          date = day + "/" + month + "/" + year + " @ " + hours + ":" + minutes;
          matches[a].push({
            id: u,
            idS: idSub,
            equipe: {
              0: idHome,
              1: idAway
            },
            status: status,
            score: {
              0: goalsHome,
              1: goalsAway
            },
            date: date,
            timestamp: timestamp,
            stadium: stadium,
            league: league,
            linkHome: linkHome,
            linkAway: linkAway
          });
          matches2.push(idHome + "-" + idAway);
          idSub++;
        } //console.log(JSON.parse(response.body));


        let Matches = [];
        timestamps.sort();

        for (let t = 0; t < matches[a].length; t++) {
          for (let s = 0; s < timestamps.length; s++) {
            if (timestamps[t] == matches[a][s].timestamp) {
              Matches.push(matches[a][s]);
              matches[a][s] = 0;
            }
          }
        }

        matches[a] = Matches;
        next();
      });
    }); //console.log("from getData"+JSON.stringify(matches[0]))
  } //console.log(matches2);


  return matches;
}

async function matchById(id) {
  let options = {
    'method': 'GET',
    'url': 'https://v3.football.api-sports.io/fixtures',
    qs: {
      id: id
    },
    'headers': {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '0bed05814d17f569c5688a84a318f638'
    }
  };
  await new Promise(next => {
    var reponse;
    request(options, async function (error, response) {
      if (error) throw new Error(error);

      for (let u = 0; u < JSON.parse(response.body).results; u++) {
        let idHome = JSON.parse(response.body).response[u].teams.home.name;
        let idAway = JSON.parse(response.body).response[u].teams.away.name;
        let status = JSON.parse(response.body).response[u].fixture.status.long;
        let timestamp = JSON.parse(response.body).response[u].fixture.timestamp;
        let idSub = JSON.parse(response.body).response[u].fixture.id;
        let stadium = JSON.parse(response.body).response[u].fixture.venue.name;
        let league = JSON.parse(response.body).response[u].league.name;
        let linkHome = JSON.parse(response.body).response[u].teams.home.logo;
        let linkAway = JSON.parse(response.body).response[u].teams.away.logo;
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

        date = day + "/" + month + "/" + year + " @ " + hours + ":" + minutes;
        reponse = {
          id: u,
          idS: idSub,
          equipe: {
            0: idHome,
            1: idAway
          },
          status: status,
          score: {
            0: goalsHome,
            1: goalsAway
          },
          date: date,
          timestamp: timestamp,
          stadium: stadium,
          league: league,
          linkHome: linkHome,
          linkAway: linkAway
        };
      }

      next();
    });
  });
  return reponse;
}

async function getEvents(idMatch) {
  var events;
  let options = {
    'method': 'GET',
    'url': 'https://v3.football.api-sports.io/fixtures/events',
    qs: {
      'fixture': idMatch
    },
    'headers': {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '0bed05814d17f569c5688a84a318f638'
    }
  };
  await new Promise(next => {
    request(options, async function (error, response) {
      if (error) throw new Error(error);
      events = JSON.parse(response.body);
      next();
    });
  });
  return events;
} //matchAdder();


var _default = {
  matchAdder,
  getEvents,
  matchById
};
exports.default = _default;