import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-que',
  templateUrl: './que.component.html',
  styleUrls: ['./que.component.css']
})
export class QueComponent implements OnInit {
  @Input() q;
  @Output() qChange=new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  getans(objdata){
    this.qChange.emit(objdata);
    
  }
  

}
