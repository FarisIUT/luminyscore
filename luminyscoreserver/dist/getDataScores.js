"use strict";

const {
  match
} = require("assert");

const request = require("request");

timestampTest = new Date();
var FirstDay = Math.round(timestampTest.getTime() / 1000); //+ 90000000 pour plus 1 jour

console.log(FirstDay);
var days = 0;

function dateIterator(days) {
  let timestamp = FirstDay + days * 86400; // jour de dÃ©part iteration dates

  date = new Date(timestamp * 1000).toLocaleDateString("en-US");
  year = new Date(timestamp * 1000).getFullYear();
  month = new Date(timestamp * 1000).getMonth();
  month++;
  day = new Date(timestamp * 1000).getDate();

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
      league: 2,
      season: '2021'
    },
    'headers': {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '0bed05814d17f569c5688a84a318f638'
    }
  };
}

async function matchAdder() {
  options = getOptions(dateIterator(days));
  console.log(options.qs.date);
  request(options, async function (error, response) {
    if (error) throw new Error(error);

    for (u = 0; u < JSON.parse(response.body).results; u++) {
      let idHome = JSON.parse(response.body).response[u].teams.home.name;
      let idAway = JSON.parse(response.body).response[u].teams.away.name;
      let timestamp = JSON.parse(response.body).response[u].fixture.timestamp;
      console.log(idHome, " ", idAway, " ", timestamp);
    } //console.log(JSON.parse(response.body));

  });
  days++;
  setTimeout(matchAdder, 60000);
}

matchAdder();