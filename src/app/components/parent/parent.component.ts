import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childMessage1: String; //to child
  childMessage2: String; //to child

  parentMessage1: String; //from child

  message:string; //from sibling

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
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
    // this.parentMessage1 = msg[0] +' '+ msg [1];
    this.parentMessage1 = msg;
  }

}
