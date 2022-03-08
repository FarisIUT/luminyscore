import { Component,Inject,Injectable,OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ScoreService {
  scoreSubject = new Subject<any[]>() ;
  constructor(){
  }
  private scores = [
    {
      id: 1,
      name: 'Henri',
      status: 'finish',
      score: {
        equipe1:'1',
        equipe2:'2',
      },
    },
    {
      id: 2,
      name: 'Louis',
      status: 'to come',
      score: {
        0:'4',
        1:'0',
      },
    },
    {
      id: 3,
      name: 'Philippe',
      status: 'finish',
      score: {
        0:2,
        1:2,
      },
    },
  ];
  emitStudentSubject() {
    this.scoreSubject.next(this.scores.slice());
  }
  switchOnAll() {
    this.emitStudentSubject();
    for (let score of this.scores) {
      score.status = 'to come';
    }
  }
  switchOffAll() {
    this.emitStudentSubject();
    for (let score of this.scores) {
      score.status = 'finish';
    }
  }
  switchOnOne(i: number) {
    this.emitStudentSubject();
    this.scores[i].status = 'present';
  }
  switchOffOne(i: number) {
    this.emitStudentSubject();
    this.scores[i].status = 'absent';
  }

  getstudentById(id: number) {
    const student = this.scores.find((s) => {
      return s.id === id;
    });
    return student;
  }


}
