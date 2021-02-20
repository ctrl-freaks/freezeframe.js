/* eslint-disable @angular-eslint/component-selector */
import { Component, ElementRef, Input, Output, ViewChild, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import Freezeframe from 'freezeframe'
import { FreezeframeOptions, Freeze } from 'freezeframe/types'

export interface AngularFreezeframeEvent {
  items: Freeze[],
  isPlaying: boolean
}

const SELECTOR = 'angular-freezeframe'

@Component({
  selector: SELECTOR,
  template: `
    <div class="${SELECTOR}">
      <div *ngIf="!slotRef.innerHTML.trim()">
        <img #freezeRef src="{{src}}" />
      </div>
      <div #slotRef><ng-content></ng-content></div>
    </div>
  `
})
export class AngularFreezeframeComponent implements AfterViewInit, OnDestroy {
  $freezeframe!: Freezeframe
  isPlaying = false

  @Input() src?: string
  @Input() options?: FreezeframeOptions
  @Output() startEvent = new EventEmitter<AngularFreezeframeEvent>();
  @Output() stopEvent = new EventEmitter<AngularFreezeframeEvent>();
  @Output() toggleEvent = new EventEmitter<AngularFreezeframeEvent>();

  @ViewChild('freezeRef') freezeRef!: ElementRef;
  @ViewChild('slotRef') slotRef!: ElementRef;

  ngAfterViewInit(): void {
    this.init()
  }

  ngOnDestroy(): void {
    this.destroy()
  }

  private init(): void {
    const target = this.slotIsEmpty && this.src
      ? this.freezeRef.nativeElement
      : this.slotRef.nativeElement
    this.$freezeframe = new Freezeframe(target, this.options)
    this.initEventListeners()
  }

  private initEventListeners(): void {
    this.$freezeframe.on('toggle', (items: Freeze[], isPlaying: boolean) => {
      this.isPlaying = isPlaying
      if (isPlaying) {
        this.startEvent.emit({ items, isPlaying })
      } else {
        this.stopEvent.emit({ items, isPlaying })
      }
      this.toggleEvent.emit({ items, isPlaying })
    });
  }

  private get slotIsEmpty(): boolean {
    return !this.slotRef?.nativeElement?.innerHTML?.trim()
  }

  start(): void {
    this.$freezeframe?.start()
  }

  stop(): void {
    this.$freezeframe?.stop()
  }

  toggle(): void {
    this.$freezeframe?.toggle()
  }

  destroy(): void {
    this.$freezeframe?.destroy()
  }
}
