import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SigninComponent } from './+signin/signin.component';
import { AppRoutingModule } from './/app-routing.module';
import { PhotoDetailComponent } from './+photodetail/photodetail.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    PhotoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
