import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-single-score',
  templateUrl: './single-score.component.html',
  styleUrls: ['./single-score.component.scss']
})
export class SingleScoreComponent implements OnInit {

  constructor(private studentService: ScoreService,private route: ActivatedRoute) {


  }

  equipe1: string;
  equipe2: string;

  status: string;
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.equipe1 = this.studentService.getstudentById(+id).equipe[0];
    this.equipe2 = this.studentService.getstudentById(+id).equipe[1];
    this.status = this.studentService.getstudentById(+id).status;
  }
}
