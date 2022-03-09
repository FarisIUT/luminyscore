import { Component, Input, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {


  @Input() score1: number;
  @Input() score2: number;
  @Input() equipe1: number;
  @Input() equipe2: number;
  @Input() index: number;
  @Input() id: number


  constructor(private scoreService: ScoreService) {
  }

  ngOnInit(): void {
  }

}
