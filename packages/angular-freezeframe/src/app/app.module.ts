import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFreezeframeComponent } from '../../projects/angular-freezeframe/src/lib/angular-freezeframe.component'

@NgModule({
  declarations: [
    AppComponent,
    AngularFreezeframeComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
