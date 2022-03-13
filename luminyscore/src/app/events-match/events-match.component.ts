import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-events-match',
  templateUrl: './events-match.component.html',
  styleUrls: ['./events-match.component.scss']
})
export class EventsMatchComponent implements OnInit {
  
  @Input() type:string;

  isAuth: boolean = false;
  constructor(private ScoreService: ScoreService,private http: HttpService) {
    //console.log("from score-view construc"+this.scoresLeagues);
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);

  }

  ngOnInit(): void {
  }

}
