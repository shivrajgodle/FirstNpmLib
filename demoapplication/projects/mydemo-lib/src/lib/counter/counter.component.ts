import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Output() countChanged: EventEmitter<any> = new EventEmitter();
  clickCount:any =0;

  constructor() { }

  ngOnInit(): void {
  }
  onPlusClick(){
    this.clickCount++;
    this.countChanged.emit(this.clickCount)

  }
  onMinusClick(){
    this.clickCount--;
    this.countChanged.emit(this.clickCount);
  }

}
