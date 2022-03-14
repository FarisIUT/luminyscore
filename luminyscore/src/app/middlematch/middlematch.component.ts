import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-middlematch',
  templateUrl: './middlematch.component.html',
  styleUrls: ['./middlematch.component.scss']
})
export class MiddlematchComponent implements OnInit {
  @Input() stade:string;
  @Input() status:string;
  @Input() date:string;
  @Input() score1:number;
  @Input() score2:number;

  constructor() { }

  ngOnInit(): void {
  }

}
