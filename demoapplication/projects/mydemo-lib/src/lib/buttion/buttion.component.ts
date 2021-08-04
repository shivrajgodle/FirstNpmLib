import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-buttion',
  templateUrl: './buttion.component.html',
  styleUrls: ['./buttion.component.css']
})
export class ButtionComponent implements OnInit {
@Input() buttonText!:String;
@Input() iconName!:String;


// @Output() buttonClickEmit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){

    // this.buttonClickEmit.emit('you have clicked on button');

  }

}
