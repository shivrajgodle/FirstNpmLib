import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-deatils',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.css']
})
export class UserDeatilsComponent implements OnInit {

  constructor() { }

  @Input() user:{name:string,email:string} = {name:'',email:''};

  ngOnInit(): void {
  }

}
