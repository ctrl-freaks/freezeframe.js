import { Component, ViewChild } from '@angular/core';
import { AngularFreezeframeComponent, AngularFreezeframeEvent } from '../../projects/angular-freezeframe/src/lib/angular-freezeframe.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-freezeframe-demo';
  destroyerVisible = true

  @ViewChild('freeze') freeze!: AngularFreezeframeComponent

  start(): void {
    this.freeze?.start()
  }

  stop(): void {
    this.freeze?.stop()
  }

  toggle(): void {
    this.freeze?.toggle()
  }

  destroy(): void {
    this.destroyerVisible = false
  }

  log(eventName: string, $event: AngularFreezeframeEvent): void {
    console.log({ eventName, $event })
  }
}
