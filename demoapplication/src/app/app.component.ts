import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fmg!: FormGroup;

  cardnumber !: string;

  title = 'demoapplication';
  total = 0;


  message = "";

  btnConfig = 'home';
  btnConfig1 = 'add';
  btnConfig2 = 'jai shree ram';

  icon = 'home';
  icon1 = 'add';


  constructor(private formBuilder: FormBuilder){

    this.addProductForm();
  }



  // currentCount =0;
  // handleCountChanged(e:any){
  //   this.currentCount = e;
  //   this.total = this.currentCount * 80;
  // }


  addProductForm() {
    this.fmg = this.formBuilder.group(
      {
        CNumber:new FormControl('', [Validators.required]),
      }
    );
  }

  add(){
   this.cardnumber =  this.fmg.value

   console.log(this.cardnumber);


  }

  buttonClick(){

   alert("from HOME button")


  }


  buttonClick1(){

    alert("from ADD button")



  }


}
