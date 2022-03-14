import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() events: any[];
  @Input() team:string;
  @Input() score:any;
  @Input() linkImage:string;
  @Input() home:boolean;
  text:string;
  constructor() { }

  ngOnInit(): void {


    delay(1000).then(()=>{

      if(this.score==null){this.score=""}
      if(this.home==true){
        this.text=this.team+"      "+this.score;

      }
      if(this.home==false){
        this.text=this.score+"      "+this.team;

      }
    })
    
  }
  ngOnChange(): void {

    if(this.home==true){
      this.text=this.team+" "+this.score;

    }
    if(this.home==false){
      this.text=this.score+" "+this.team;

    }
  }

}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}