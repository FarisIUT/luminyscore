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
    this.scoreService.emitStudentSubject();
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }

}
