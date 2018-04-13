import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QueComponent } from './que/que.component';
import { CircleComponent } from './circle/circle.component';


@NgModule({
  declarations: [
    AppComponent,
    QueComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
