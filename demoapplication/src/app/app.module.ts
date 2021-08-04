import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MydemoLibModule} from 'mydemo-lib'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MydemoLibModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
