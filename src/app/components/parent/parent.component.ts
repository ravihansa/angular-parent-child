import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childMessage1: String;
  childMessage2: String;

  parentMessage1: String;

  constructor() { }

  ngOnInit() {
  }

  sendData(){
    this.childMessage1 =  'Hi Children';
    this.childMessage2 =  'How Are You';
  }

  resetData(){
    this.childMessage1 =  '';
    this.childMessage2 =  '';
  }

  childMessageHandler(msg: any) {
    this.parentMessage1 = msg[0] +' '+ msg [1];
  }

}
