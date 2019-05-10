import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
 import { PlayComponent } from './play/play.component';
 import { SuccessComponent } from './success/success.component';

 

 import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
     PlayComponent,
     SuccessComponent,
    
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
