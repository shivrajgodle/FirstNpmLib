import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapplication';
  total = 0;


  message = "";

  btnConfig = 'click here';
  icon = 'home';


  // currentCount =0;
  // handleCountChanged(e:any){
  //   this.currentCount = e;
  //   this.total = this.currentCount * 80;
  // }



  buttonClick(){

    alert("hello")
    this.message;


  }



}
