import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ccinput-box',
  templateUrl: './ccinput-box.component.html',
  styleUrls: ['./ccinput-box.component.css']
})
export class CCInputBoxComponent implements OnInit {

  @Input() placeholderText!:String;
  @Input() cardNumber!:String;
  @Input() iconText!:String;





  constructor() { }

  ngOnInit(): void {
  }



@HostListener('input', ['$event'])
onKeyDown(event: KeyboardEvent) {
  const input = event.target as HTMLInputElement;

  let trimmed = input.value.replace(/\s+/g, '');
  if (trimmed.length > 16) {
    trimmed = trimmed.substr(0, 16);
  }

  let numbers = [];
  for (let i = 0; i < trimmed.length; i += 4) {
    numbers.push(trimmed.substr(i, 4));
  }

  input.value = numbers.join(' ');

}



}
