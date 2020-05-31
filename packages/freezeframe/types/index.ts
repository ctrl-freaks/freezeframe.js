export type SelectorOrNotes = string | HTMLAllCollection

export type TriggerType = 'hover' | 'click' | false

export enum FreezeFrameEventTypes {
  START = 'start',
  STOP = 'stop',
  TOGGLE = 'toggle'
}

export interface FreezeFrameOptions {
  selector?: string,
  responsive: boolean,
  trigger: TriggerType,
  overlay: boolean,
  warnings: boolean
}

export interface Freeze {
  $container: HTMLElement,
  $canvas: HTMLCanvasElement,
  $image: HTMLImageElement
}

export interface FreezeFrameEvent {
  $image: HTMLImageElement,
  event: string,
  listener: EventListenerOrEventListenerObject
}
