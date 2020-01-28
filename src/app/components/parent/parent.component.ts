import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  // @ViewChild(ChildComponent,{static: false}) child;
  @ViewChild(ChildComponent, {static: false})
  private child: ChildComponent;

  childMessage1: String; //to child
  childMessage2: String; //to child

  parentMessage1: String; //from child

  message:string; //from sibling
  ViewChildmessage:string;

  constructor(private data: DataService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngAfterViewInit() {
    this.ViewChildmessage = this.child.message;
    this.cdr.detectChanges(); // for prevent ExpressionChangedAfterItHasBeenCheckedError
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
