import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { UserDeatilsComponent } from './user-deatils/user-deatils.component';
import { CustomerDeatilsComponent } from './customer-deatils/customer-deatils.component';
;

@NgModule({
  declarations: [
    AppComponent,
    UsdInrPipe,
    UserDeatilsComponent,
    CustomerDeatilsComponent
  ],
  imports: [
    BrowserModule,
    my
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
