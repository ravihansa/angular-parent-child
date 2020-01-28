import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

 
  @Input() childMessage1: string;
  @Input() childMessage2: string;

  @Output() messageEvent: EventEmitter<any> = new EventEmitter();

  // messages: string[] = ['Hi', 'Parent', 'HowAreYou'];
  parentMsg: string; //to parent

  constructor() { }

  ngOnInit() {
  }

  sendData(){
    this.messageEvent.emit(this.parentMsg);
  }

  resetData(){
    // this.messageEvent.emit(['','','']);
    this.messageEvent.emit('');
    this.parentMsg = '';
  }

}
