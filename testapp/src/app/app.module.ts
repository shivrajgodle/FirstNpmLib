import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MydemoLibModule} from 'mydemo-lib'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MydemoLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
