import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  q={
    "que":"Rate Your Experience! ",
    "choice":[
      {
        "value":"Y",
        "color":"green"
      },
      {
        "value":"N",
        "color":"red"

      },
    ],
    "ans":{
      "value":"",
      "color":""
    }
  };
  clickans(edata){
    this.q.ans.value=edata.value;
    this.q.ans.color=edata.color;

  }

}