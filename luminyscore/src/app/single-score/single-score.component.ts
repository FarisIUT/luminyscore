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
  constructor(private route: ActivatedRoute, private ScoreService: ScoreService, private http: HttpService) {
  }
  scores: any;
  events: any[];
  events1:any[]=[];
  events2:any[]=[];
  equipe1: any;
  equipe2: any;
  score1: any;
  score2: any;
  id: number;
  linkHome: any;
  linkAway: any;

  status: string;
  timestamp: number;
  True:boolean=true;
  False:boolean=false;
  linkImgHome: string;
  linkImgAway: string;
  date:string;
  stade:string;
  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params['id'];
    await new Promise<void>(next=>{this.ScoreSubscription = this.http.getDataMatchbyId(this.route.snapshot.params['id']).subscribe(
      (scores: any) => {
        this.scores = scores;
        this.equipe1 = Object.values(this.scores.equipe)[0];
        this.equipe2 = Object.values(this.scores.equipe)[1];
        this.score1 = Object.values(this.scores.score)[0];
        this.score2 = Object.values(this.scores.score)[1];
        this.stade=scores.stadium;
        this.status=scores.status;
        this.date=scores.date;
        this.linkImgHome=scores.linkHome;
        this.linkImgAway=scores.linkAway;
        next();
      }
    );
    //console.log("next S");
    })

  await new Promise<void>(next=>{
    this.ScoreSubscription = this.http.getEventsMatch(this.route.snapshot.params['id']).subscribe(
      (events: any) => {
        this.events = events.response;
        for(let event of this.events){
          if(event.team.name==this.equipe1){
            this.events1.push(event);
          }
          if(event.team.name==this.equipe2){
            this.events2.push(event);
          }
        }
        next();
      }
    );//console.log("next E");
  })
  //console.log(this.events);
  //console.log(this.equipe1)
  //console.log(this.events1);
  //console.log(this.events2);
  }
  ngOnDestroy() {
    this.ScoreSubscription.unsubscribe();
  }
}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
