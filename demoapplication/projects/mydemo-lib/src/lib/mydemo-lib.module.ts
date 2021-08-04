import { NgModule } from '@angular/core';
import { MydemoLibComponent } from './mydemo-lib.component';
import { CounterComponent } from './counter/counter.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ButtionComponent } from './buttion/buttion.component';




@NgModule({
  declarations: [
    MydemoLibComponent,
    CounterComponent,
    ButtionComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MydemoLibComponent,CounterComponent, ButtionComponent
  ]
})
export class MydemoLibModule { }
