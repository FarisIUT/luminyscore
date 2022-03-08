import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoreService } from '../services/score.service';
import { StudentService } from '../services/student.service';
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
  constructor(private scoreService: ScoreService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
    ngOnInit() {
    this.scoreSubscription = this.scoreService.scoreSubject.subscribe(
      (scores: any[]) => {
        this.scores = scores;
    });
    this.scoreService.emitStudentSubject();
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }

}
