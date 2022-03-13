import { Component, Input, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { HttpService } from '../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leagues-manager',
  templateUrl: './leagues-manager.component.html',
  styleUrls: ['./leagues-manager.component.scss']
})
export class LeaguesManagerComponent implements OnInit {

  timestamp:number;
  scores: any[];
  @Input() id: number;
  @Input() idS :number;
  isAuth: boolean = false;
  @Input() matchdate;
  @Input() showmatchday;
  scoreSubscription: Subscription;

  constructor(private scoreService: ScoreService,private http: HttpService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.timestamp=1647189649;

    this.matchdate = new Date(Date.now());
    this.showmatchday = this.matchdate.toLocaleDateString("en-GB");
    this.scoreSubscription = this.http.getDataMatch(this.timestamp).subscribe(
      (scores: any[]) => {
        this.scores = scores;


  
    });
    this.scores = [
      [
        {
          "id": 0,
          "idS": 721017,
          "equipe": {
            "0": "Rayo Vallecano",
            "1": "Sevilla"
          },
          "status": "Match Finished",
          "score": {
            "0": 1,
            "1": 1
          },
          "date": "13/03/2022 @ 14:00",
          "timestamp": 1647176400,
          "stadium": "Estadio de Vallecas",
          "league": "La Liga",
          "linkHome": "https://media.api-sports.io/football/teams/728.png",
          "linkAway": "https://media.api-sports.io/football/teams/536.png"
        },
        {
          "id": 1,
          "idS": 721011,
          "equipe": {
            "0": "Real Betis",
            "1": "Athletic Club"
          },
          "status": "Match Finished",
          "score": {
            "0": 1,
            "1": 0
          },
          "date": "13/03/2022 @ 16:15",
          "timestamp": 1647184500,
          "stadium": "Estadio Benito Villamarín",
          "league": "La Liga",
          "linkHome": "https://media.api-sports.io/football/teams/543.png",
          "linkAway": "https://media.api-sports.io/football/teams/531.png"
        },
        {
          "id": 2,
          "idS": 721016,
          "equipe": {
            "0": "Real Sociedad",
            "1": "Alaves"
          },
          "status": "Match Finished",
          "score": {
            "0": 1,
            "1": 0
          },
          "date": "13/03/2022 @ 18:30",
          "timestamp": 1647192600,
          "stadium": "Reale Arena",
          "league": "La Liga",
          "linkHome": "https://media.api-sports.io/football/teams/548.png",
          "linkAway": "https://media.api-sports.io/football/teams/542.png"
        },
        {
          "id": 3,
          "idS": 721010,
          "equipe": {
            "0": "Barcelona",
            "1": "Osasuna"
          },
          "status": "Second Half",
          "score": {
            "0": 3,
            "1": 0
          },
          "date": "13/03/2022 @ 21:00",
          "timestamp": 1647201600,
          "stadium": "Camp Nou",
          "league": "La Liga",
          "linkHome": "https://media.api-sports.io/football/teams/529.png",
          "linkAway": "https://media.api-sports.io/football/teams/727.png"
        }
      ],
      [
        {
          "id": 2,
          "idS": 719576,
          "equipe": {
            "0": "Bayer Leverkusen",
            "1": "FC Koln"
          },
          "status": "Match Finished",
          "score": {
            "0": 0,
            "1": 1
          },
          "date": "13/03/2022 @ 15:30",
          "timestamp": 1647181800,
          "stadium": "BayArena",
          "league": "Bundesliga 1",
          "linkHome": "https://media.api-sports.io/football/teams/168.png",
          "linkAway": "https://media.api-sports.io/football/teams/192.png"
        },
        {
          "id": 0,
          "idS": 719574,
          "equipe": {
            "0": "Borussia Dortmund",
            "1": "Arminia Bielefeld"
          },
          "status": "Match Finished",
          "score": {
            "0": 1,
            "1": 0
          },
          "date": "13/03/2022 @ 17:30",
          "timestamp": 1647189000,
          "stadium": "Signal-Iduna-Park",
          "league": "Bundesliga 1",
          "linkHome": "https://media.api-sports.io/football/teams/165.png",
          "linkAway": "https://media.api-sports.io/football/teams/188.png"
        },
        {
          "id": 1,
          "idS": 719575,
          "equipe": {
            "0": "Eintracht Frankfurt",
            "1": "VfL BOCHUM"
          },
          "status": "Match Finished",
          "score": {
            "0": 2,
            "1": 1
          },
          "date": "13/03/2022 @ 17:30",
          "timestamp": 1647189000,
          "stadium": "Deutsche Bank Park",
          "league": "Bundesliga 1",
          "linkHome": "https://media.api-sports.io/football/teams/169.png",
          "linkAway": "https://media.api-sports.io/football/teams/176.png"
        },
        {
          "id": 3,
          "idS": 719582,
          "equipe": {
            "0": "SpVgg Greuther Furth",
            "1": "RB Leipzig"
          },
          "status": "Match Finished",
          "score": {
            "0": 1,
            "1": 6
          },
          "date": "13/03/2022 @ 19:30",
          "timestamp": 1647196200,
          "stadium": "Sportpark Ronhof Thomas Sommer",
          "league": "Bundesliga 1",
          "linkHome": "https://media.api-sports.io/football/teams/178.png",
          "linkAway": "https://media.api-sports.io/football/teams/173.png"
        }
      ],
      [
        {
          "id": 0,
          "idS": 710839,
          "equipe": {
            "0": "Chelsea",
            "1": "Newcastle"
          },
          "status": "Match Finished",
          "score": {
            "0": 1,
            "1": 0
          },
          "date": "13/03/2022 @ 15:00",
          "timestamp": 1647180000,
          "stadium": "Stamford Bridge",
          "league": "Premier League",
          "linkHome": "https://media.api-sports.io/football/teams/49.png",
          "linkAway": "https://media.api-sports.io/football/teams/34.png"
        },
        {
          "id": 1,
          "idS": 710841,
          "equipe": {
            "0": "Everton",
            "1": "Wolves"
          },
          "status": "Match Finished",
          "score": {
            "0": 0,
            "1": 1
          },
          "date": "13/03/2022 @ 15:00",
          "timestamp": 1647180000,
          "stadium": "Goodison Park",
          "league": "Premier League",
          "linkHome": "https://media.api-sports.io/football/teams/45.png",
          "linkAway": "https://media.api-sports.io/football/teams/39.png"
        },
        {
          "id": 2,
          "idS": 710842,
          "equipe": {
            "0": "Leeds",
            "1": "Norwich"
          },
          "status": "Match Finished",
          "score": {
            "0": 2,
            "1": 1
          },
          "date": "13/03/2022 @ 15:00",
          "timestamp": 1647180000,
          "stadium": "Elland Road",
          "league": "Premier League",
          "linkHome": "https://media.api-sports.io/football/teams/63.png",
          "linkAway": "https://media.api-sports.io/football/teams/71.png"
        },
        {
          "id": 3,
          "idS": 710844,
          "equipe": {
            "0": "Southampton",
            "1": "Watford"
          },
          "status": "Match Finished",
          "score": {
            "0": 1,
            "1": 2
          },
          "date": "13/03/2022 @ 15:00",
          "timestamp": 1647180000,
          "stadium": "St. Mary's Stadium",
          "league": "Premier League",
          "linkHome": "https://media.api-sports.io/football/teams/41.png",
          "linkAway": "https://media.api-sports.io/football/teams/38.png"
        },
        {
          "id": 4,
          "idS": 710845,
          "equipe": {
            "0": "West Ham",
            "1": "Aston Villa"
          },
          "status": "Match Finished",
          "score": {
            "0": 2,
            "1": 1
          },
          "date": "13/03/2022 @ 15:00",
          "timestamp": 1647180000,
          "stadium": "London Stadium",
          "league": "Premier League",
          "linkHome": "https://media.api-sports.io/football/teams/48.png",
          "linkAway": "https://media.api-sports.io/football/teams/66.png"
        },
        {
          "id": 5,
          "idS": 710836,
          "equipe": {
            "0": "Arsenal",
            "1": "Leicester"
          },
          "status": "Match Finished",
          "score": {
            "0": 2,
            "1": 0
          },
          "date": "13/03/2022 @ 17:30",
          "timestamp": 1647189000,
          "stadium": "Emirates Stadium",
          "league": "Premier League",
          "linkHome": "https://media.api-sports.io/football/teams/42.png",
          "linkAway": "https://media.api-sports.io/football/teams/46.png"
        }
      ]
    ]
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }
  
  dayUp(){
    this.timestamp+=86400;
    this.matchdate = this.addDaysToDate(this.matchdate,1);
    this.showmatchday = this.matchdate.toLocaleDateString("en-GB");
    this.scoreSubscription = this.http.getDataMatch(this.timestamp).subscribe(
      (scores: any[]) => {
        this.scores = scores;
    });
  }

  

  dayDown(){
    this.timestamp-=86400;
    this.matchdate = this.lessDaysToDate(this.matchdate,1);
    this.showmatchday = this.matchdate.toLocaleDateString("en-GB");
    this.scoreSubscription = this.http.getDataMatch(this.timestamp).subscribe(
      (scores: any[]) => {
        this.scores = scores;
    });
  }

  addDaysToDate(date, days){
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }
  lessDaysToDate(date, days){
    var res = new Date(date);
    res.setDate(res.getDate() - days);
    return res;
  }
}
