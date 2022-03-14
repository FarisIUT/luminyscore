import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreService } from '../services/score.service';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-single-score',
  templateUrl: './single-score.component.html',
  styleUrls: ['./single-score.component.scss']
})
export class SingleScoreComponent implements OnInit {
  ScoreSubscription: Subscription;
  stadium: any;
  constructor(private route: ActivatedRoute, private ScoreService: ScoreService, private http: HttpService,private sanitizer: DomSanitizer) {


  }
  scores: any;
  events: any[];
  equipe1: any;
  equipe2: any;
  score1: any;
  score2: any;
  id: number;
  linkHome: any;
  linkAway: any;

  status: string;
  timestamp: number;
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params['id'];
    this.ScoreSubscription = this.http.getDataMatchbyId(this.route.snapshot.params['id']).subscribe(
      (scores: any) => {
        this.scores = scores;
        console.log(scores)
        this.equipe1 = Object.values(this.scores.equipe)[0];
        this.equipe2 = Object.values(this.scores.equipe)[1];
    
        this.score1 = Object.values(this.scores.score)[0];
        this.score2 = Object.values(this.scores.score)[1];
        this.linkAway = this.scores.linkAway;
        this.linkHome = this.scores.linkHome;
    
        this.stadium = '/assets/img/' + this.scores.stadium + '.jpg';
        //console.log("from singlescore")


        
        //console.log("id "+this.id)
        /*
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
        }*/

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

