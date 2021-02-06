/* eslint-disable @angular-eslint/component-selector */
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Freezeframe from 'freezeframe'
import { FreezeframeOptions } from 'freezeframe/types'

@Component({
  selector: 'angular-freezeframe',
  template: `
    <div className="angular-freezeframe">
      <div #slotRef><ng-content></ng-content></div>
      <div *ngIf="!slotRef.innerHTML.trim()">
        <img #freezeRef src="{{src}}" />
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AngularFreezeframeComponent implements AfterViewInit {
  freeze!: Freezeframe

  @Input() src?: string
  @Input() options?: FreezeframeOptions
  @ViewChild('freezeRef', { read: ElementRef }) freezeRef!: ElementRef;
  @ViewChild('slotRef') slotRef!: ElementRef;

  ngAfterViewInit(): void {
    if (this.slotRef.nativeElement.innerHTML.trim().length) {
      this.freeze = new Freezeframe(this.slotRef.nativeElement, this.options)
    } else if (this.src?.length) {
      this.freeze = new Freezeframe(this.freezeRef.nativeElement, this.options)
    }
  }

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
