import { Component, Input, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { HttpService } from '../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leagues-manager',
  templateUrl: './leagues-manager.component.html',
  styleUrls: ['./leagues-manager.component.scss'],
})
export class LeaguesManagerComponent implements OnInit {
  timestamp: number;
  scores: any[];
  @Input() id: number;
  @Input() idS: number;
  isAuth: boolean = false;
  @Input() matchdate;
  @Input() showmatchday;
  scoreSubscription: Subscription;

  constructor(private scoreService: ScoreService, private http: HttpService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.timestamp = 1647189649;

    this.matchdate = new Date(Date.now());
    this.showmatchday = this.matchdate.toLocaleDateString('en-GB');
    this.scoreSubscription = this.http
      .getDataMatch(this.timestamp)
      .subscribe((scores: any[]) => {
        this.scores = scores;
      });

    let timestampTest = new Date();
    var FirstDay = Math.round(timestampTest.getTime() / 1000);
    this.timestamp = FirstDay;

    this.matchdate = new Date(Date.now());

    this.showmatchday = this.matchdate.toLocaleDateString('en-GB');
    this.scoreSubscription = this.http
      .getDataMatch(this.timestamp)
      .subscribe((scores: any[]) => {
        this.scores = scores;
      });
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }

  dayUp() {
    this.timestamp += 86400;
    this.matchdate = this.addDaysToDate(this.matchdate, 1);
    this.showmatchday = this.matchdate.toLocaleDateString('en-GB');
    this.scoreSubscription = this.http
      .getDataMatch(this.timestamp)
      .subscribe((scores: any[]) => {
        this.scores = scores;
      });
  }

  dayDown() {
    this.timestamp -= 86400;
    this.matchdate = this.lessDaysToDate(this.matchdate, 1);
    this.showmatchday = this.matchdate.toLocaleDateString('en-GB');
    this.scoreSubscription = this.http
      .getDataMatch(this.timestamp)
      .subscribe((scores: any[]) => {
        this.scores = scores;
      });
  }

  addDaysToDate(date, days) {
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }
  lessDaysToDate(date, days) {
    var res = new Date(date);
    res.setDate(res.getDate() - days);
    return res;
  }
}
