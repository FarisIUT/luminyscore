import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-events-match',
  templateUrl: './events-match.component.html',
  styleUrls: ['./events-match.component.scss']
})
export class EventsMatchComponent implements OnInit {

  @Input() text:string;
  @Input() event:any;
  isAuth: boolean = false;
  constructor(private ScoreService: ScoreService,private http: HttpService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);

  }

  ngOnInit(): void {
    let txt=this.event.time.elapsed+"' :";
    if(this.event.detail=='Red Card'){    txt+=" 🟥 "+this.event.player.name  }
    if(this.event.detail=='Yellow Card'){    txt+=" 🟨 "+this.event.player.name  }
    if(this.event.type=='Goal'){    txt+=" ⚽ "+this.event.player.name+" for "+this.event.team.name  }
    if(this.event.type=='subst'){    txt+=" "+this.event.player.name+" 🔄 "+this.event.assist.name  }
    if(this.event.type=='Var'){    txt+=" 🎥 "+this.event.detail+" for "+this.event.player.name  }
    this.text=txt;
  }

}
