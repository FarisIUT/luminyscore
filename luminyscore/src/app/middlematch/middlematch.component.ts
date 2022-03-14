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
  constructor() { }

  ngOnInit(): void {
  }

}
