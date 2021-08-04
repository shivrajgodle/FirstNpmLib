import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  userDetails = [
    {name:'shivraj',email:"shivraj@gmail.com"},
    {name:'rohit',email:"rohit@gmail.com"},
    {name:'akshay',email:"akshay@gmail.com"},
    {name:'raj',email:"raj@gmail.com"},
  ]

  custDetails = [
    {customer_name:'shivraj',email:"shivraj@gmail.com"},
    {customer_name:'rohit',email:"rohit@gmail.com"},

  ]
}
