import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit,OnChanges {


  @Input() score1: number;
  @Input() score2: number;
  @Input() equipe1: number;
  @Input() equipe2: number;
  @Input() index: number;
  @Input() id: number;
  @Input() date: string;
  @Input() status: string;
  @Input() idSub: number;

  scoreSubscription: Subscription;
  constructor(private scoreService: ScoreService,private http: HttpService) {
  }

  ngOnInit(): void {
  }
  ngOnChanges(){
    
  }

}
