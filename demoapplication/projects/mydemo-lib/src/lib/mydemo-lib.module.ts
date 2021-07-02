import { NgModule } from '@angular/core';
import { MydemoLibComponent } from './mydemo-lib.component';
import { CounterComponent } from './counter/counter.component';




@NgModule({
  declarations: [
    MydemoLibComponent,
    CounterComponent
  ],
  imports: [
  ],
  exports: [
    MydemoLibComponent,CounterComponent
  ]
})
export class MydemoLibModule { }
