import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreService } from '../services/score.service';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-single-score',
  templateUrl: './single-score.component.html',
  styleUrls: ['./single-score.component.scss']
})
export class SingleScoreComponent implements OnInit {
  ScoreSubscription: Subscription;
  constructor(private route: ActivatedRoute, private ScoreService: ScoreService,private http: HttpService) {


  }
  @Input() scores: any;
  @Input() equipe1: any;
  @Input() equipe2: any;
  

  status: string;
  ngOnInit(): void {
    this.ScoreSubscription = this.http.getDataMatch().subscribe(
      (scores: any[]) => {
        this.scores = scores;
        console.log("from singlescore")
        console.log(this.scores.length)
        
        for(let q=0;q<3;q++){
          console.log(this.scores[q].length);
          console.log(this.scores[q]);
        }
        const id = this.route.snapshot.params['id'];
        console.log("id "+id)
        for(let a=0;a<this.scores.length;a++){
          for(let u=0;u<this.scores[a].length;u++){
            //console.log(this.scores[a][u])
            if(this.scores[a][u].idS==id){
              console.log(this.scores[a][u])
              console.log(Object.values(this.scores[a][u].equipe))
              this.equipe1=Object.values(this.scores[a][u].equipe)[0];
              this.equipe2=Object.values(this.scores[a][u].equipe)[1];
            }
          }
        }
        console.log("team1 "+this.equipe1);

    });
    
  }
}
