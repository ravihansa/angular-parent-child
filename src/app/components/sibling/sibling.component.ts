import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    // this.data.changeMessage("Hello from Sibling");
    this.data.messageSource.next(this.message);
  }

  resetData(){
    this.message =  '';
  }

  changeData(){
    this.data.messageSource.next(this.message);
  }

}
