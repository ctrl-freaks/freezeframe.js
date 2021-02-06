import { Component, ViewChild } from '@angular/core';
import { AngularFreezeframeComponent } from '../../projects/angular-freezeframe/src/lib/angular-freezeframe.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-freezeframe-demo';

  @ViewChild('freeze') freeze!: AngularFreezeframeComponent

  start() {
    this.freeze?.start()
  }

  stop() {
    this.freeze?.stop()
  }

  toggle() {
    this.freeze?.toggle()
  }
}
