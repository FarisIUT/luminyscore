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
    this.scoreSubscription = this.http.getDataMatch().subscribe(
      (scores: any[]) => {
        this.scores = scores;


        
    });
    //this.scores = this.scoreService.getScore();
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }

}
