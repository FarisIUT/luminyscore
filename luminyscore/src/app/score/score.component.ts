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
  @Input() idS: number;

  @Input() date: string;
  @Input() status: string;
  @Input() idSub: number;
<<<<<<< HEAD
  @Input() heart: string = 'fa-solid fa-heart';
 
=======
  live:string;

>>>>>>> 82f96e35b35883402fd268bb54fd866b9fb59bde
  scoreSubscription: Subscription;
  constructor(private scoreService: ScoreService,private http: HttpService) {
  }

  ngOnInit(): void {
    this.status = (this.status == 'Match Finished') ? 'Match terminé' : this.status;
    this.status = (this.status == 'Not Started') ? 'Débute à : ' + this.date : this.status;
    this.status = (this.status == 'First Half') ? '1er Période' : this.status;
    this.status = (this.status == 'Second Half') ? '2ème Période' : this.status;
<<<<<<< HEAD
=======
    this.status = (this.status == 'Halftime') ? 'Mi-temps' : this.status;
    if(this.status=='First Half' || this.status=='Second Half' || this.status=='Halftime'){
      this.live="🔴 LIVE"
    }


>>>>>>> 82f96e35b35883402fd268bb54fd866b9fb59bde
  }
  ngOnChanges(){
    
  }

  Onlike(){
    alert('on like le match id : ' + this.idS);
    this.heart = 'fa-solid fa-heart red'
    
  }

}
