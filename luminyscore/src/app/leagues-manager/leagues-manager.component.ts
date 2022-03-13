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
  @Input() id: number
  isAuth: boolean = false;
  lastUpdate = new Date();
  scoreSubscription: Subscription;

  constructor(private scoreService: ScoreService,private http: HttpService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.timestamp=1647189649;
    this.scoreSubscription = this.http.getDataMatch(this.timestamp).subscribe(
      (scores: any[]) => {
        this.scores = scores;


        
    });
    //this.scores = this.scoreService.getScore();
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }
  
  dayUp(){
    this.timestamp+=86400;
    this.scoreSubscription = this.http.getDataMatch(this.timestamp).subscribe(
      (scores: any[]) => {
        this.scores = scores;
    });
  }

  dayDown(){
    this.timestamp-=86400;
    this.scoreSubscription = this.http.getDataMatch(this.timestamp).subscribe(
      (scores: any[]) => {
        this.scores = scores;
    });
  }

}
