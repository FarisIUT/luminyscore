import { Component,Inject,Injectable,OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable()
export class ScoreService {
  scoreSubject = new Subject<any[]>() ;
  constructor(private HttpService:HttpService){
    
  }
  private scores = [];
  
  getScore(){
    return this.HttpService.getDataMatch(0);
  }

  getEvents(id){
    return this.HttpService.getEventsMatch(id);
  }
}
