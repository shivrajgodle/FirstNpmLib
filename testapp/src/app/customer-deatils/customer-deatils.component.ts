import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-customer-deatils',
  templateUrl: './customer-deatils.component.html',
  styleUrls: ['./customer-deatils.component.css']
})
export class CustomerDeatilsComponent implements OnInit {

  constructor() { }
  @Input() cust:{customer_name:string,email:string} = {customer_name:'',email:''};

  ngOnInit(): void {
  }

}
