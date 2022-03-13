import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreService } from '../services/score.service';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-single-score',
  templateUrl: './single-score.component.html',
  styleUrls: ['./single-score.component.scss']
})
export class SingleScoreComponent implements OnInit {
  ScoreSubscription: Subscription;
  constructor(private route: ActivatedRoute, private ScoreService: ScoreService, private http: HttpService) {


  }
  scores: any;
  events: any[];
  equipe1: any;
  equipe2: any;
  score1: any;
  score2: any;
  id: number;
  status: string;
  timestamp: number;
  async ngOnInit(): Promise<void> {
    this.ScoreSubscription = this.http.getDataMatchbyId(this.id).subscribe(
      (scores: any[]) => {
        this.scores = scores;
        //console.log("from singlescore")


        this.id = this.route.snapshot.params['id'];
        //console.log("id "+this.id)
        ent:
        for (let a = 0; a < this.scores.length; a++) {
          for (let u = 0; u < this.scores[a].length; u++) {
            //console.log(this.scores[a][u])
            if (this.scores[a][u].idS == this.id) {
              //console.log(this.scores[a][u])
              //console.log(Object.values(this.scores[a][u].equipe))
              this.scores = this.scores[a][u];
              this.equipe1 = Object.values(this.scores.equipe)[0];
              this.equipe2 = Object.values(this.scores.equipe)[1];

              this.score1 = Object.values(this.scores.score)[0];
              this.score2 = Object.values(this.scores.score)[1];
              break ent;
            }
          }
        }

        //console.log("/from singlescore")
      }
    );


    this.ScoreSubscription = this.http.getEventsMatch(this.route.snapshot.params['id']).subscribe(
      (events: any) => {
        //console.log("id params"+this.route.snapshot.params['id'])

        this.events = events.response;

      }
    )
    //await delay(1000);
    //console.log("events " + this.events)
    //console.log("scores " + this.scores)
  }

  ngOnDestroy() {
    this.ScoreSubscription.unsubscribe();
  }

}


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}