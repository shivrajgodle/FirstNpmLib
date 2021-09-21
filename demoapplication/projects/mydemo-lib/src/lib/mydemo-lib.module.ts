import { NgModule } from '@angular/core';
import { MydemoLibComponent } from './mydemo-lib.component';
import { CounterComponent } from './counter/counter.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ButtionComponent } from './buttion/buttion.component';
import { CCInputBoxComponent } from './ccinput-box/ccinput-box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    MydemoLibComponent,
    CounterComponent,
    ButtionComponent,
    CCInputBoxComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    MydemoLibComponent,CounterComponent, ButtionComponent , CCInputBoxComponent
  ]
})
export class MydemoLibModule { }
