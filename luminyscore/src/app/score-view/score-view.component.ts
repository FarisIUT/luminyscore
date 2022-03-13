import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-score-view',
  templateUrl: './score-view.component.html',
  styleUrls: ['./score-view.component.scss']
})
export class ScoreViewComponent implements OnInit {

  @Input() scoresLeagues: any[];
  @Input() id: number
  isAuth: boolean = false;
  lastUpdate = new Date();
  scoreSubscription: Subscription;
  scores: any;
  constructor(private ScoreService: ScoreService,private http: HttpService) {
    console.log("from score-view construc"+this.scoresLeagues);
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);

  }
    ngOnInit() {
    console.log("from score-view ng on init"+this.scoresLeagues);
    this.scores = this.ScoreService.getScore();
  }

}
