import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() score1: number;
  @Input() score2: number;
  @Input() equipe1: number;
  @Input() equipe2: number;
  @Input() index: number;
  @Input() id: number;
  @Input() idS: number;
  @Input() likes: number;
  @Input() date: string;
  @Input() status: string;
  @Input() idSub: number;
  @Input() heart: string = 'fa-solid fa-heart';
  @Input() live: string;

  scoreSubscription: Subscription;
  constructor(
    private scoreService: ScoreService,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      this.status == 'First Half' ||
      this.status == 'Second Half' ||
      this.status == 'Halftime'
    ) {
      this.live = '🔴 LIVE';
    }
    this.status =
      this.status == 'Match Finished' ? 'Match terminé' : this.status;
    this.status =
      this.status == 'Not Started' ? 'Débute à : ' + this.date : this.status;
    this.status = this.status == 'First Half' ? '1er Période' : this.status;
    this.status = this.status == 'Second Half' ? '2ème Période' : this.status;
    this.getLikes();
    this.heart =
      localStorage.getItem(this.idS.toString()) === 'red'
        ? 'fa-solid fa-heart red'
        : 'fa-solid fa-heart';

    this.status = this.status == 'Halftime' ? 'Mi-temps' : this.status;
  }

  getLikes() {
    this.httpService.getLikes(this.idS).subscribe(
      (response) => {
        if (response) {
          this.likes = response.count;
        } else {
          this.likes = 0;
        }
      },
      (e) => {
        console.log('erreur', e);
      }
    );
  }

  onLike() {
    if (this.heart === 'fa-solid fa-heart red') {
    } else {
      if (this.likes === 0) {
        this.httpService.initLikes(this.idS).subscribe(
          (response) => {
            if (response && response.matchId === 'ok') {
              this.getLikes();
              this.heart = 'fa-solid fa-heart red';
              localStorage.setItem(this.idS.toString(), 'red');
              this.router.navigate(['scores']);
            } else {
              alert('Erreur lors du like');
            }
          },
          (e) => {
            console.log('erreur', e);
          }
        );
      } else {
        this.httpService.likeMatch(this.idS).subscribe(
          (response) => {
            if (response && response.matchId) {
              setTimeout(() => {
                this.getLikes();
              }, 1000);
              this.heart = 'fa-solid fa-heart red';
              localStorage.setItem(this.idS.toString(), 'red');
              this.router.navigate(['scores']);
            } else {
              alert('Erreur lors du like');
            }
          },
          (e) => {
            console.log('erreur', e);
          }
        );
      }
    }
  }
}
