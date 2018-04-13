import { Component, OnInit,Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  @Input() choice;

  @Output() sendans=new EventEmitter<void>();
  col="";

  constructor() { }

  ngOnInit() {
  }
  changecircle(){
   
    this.col=this.choice.color; 
  
    this.sendans.emit(this.choice);
    
  }
  
}
