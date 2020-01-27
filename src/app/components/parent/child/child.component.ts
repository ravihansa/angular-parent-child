import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

 
  @Input() childMessage1: string;
  @Input() childMessage2: string;

  @Output() messageEvent: EventEmitter<any> = new EventEmitter();

  messages: string[] = ['Hi', 'Parent', 'HowAreYou'];

  constructor() { }

  ngOnInit() {
  }

  sendData(){
    this.messageEvent.emit(this.messages);
  }

  resetData(){
    this.messageEvent.emit(['','','']);
  }

}
