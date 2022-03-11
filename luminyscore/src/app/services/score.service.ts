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
      equipe: {
        0:'OM',
        1:'OGC Nice'
      },
      status: 'finish',
      score: {
        0:'1',
        1:'2',
      },
    },
    {
      id: 2,
      equipe: {
        0:'PSG',
        1:'Real Madrid'
      },
      status: 'to come',
      score: {
        0:'4',
        1:'0',
      },
    },
    {
      id: 3,
      equipe: {
        0:'FC Nantes',
        1:'OL'
      },
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

  getScore(){
    return this.scores;
  }
}
