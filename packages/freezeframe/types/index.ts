export type RequireProps<T extends {}, K extends keyof T> = Omit<T, K> & {
  [MK in K]-?: NonNullable<T[MK]>
}

export type SelectorOrNodes = string
  | Element
  | HTMLCollectionOf<Element>
  | NodeListOf<Element>

export type TriggerType = string | false

export enum FreezeframeEventTypes {
  START = 'start',
  STOP = 'stop',
  TOGGLE = 'toggle'
}

export interface FreezeframeOptions {
  selector?: SelectorOrNodes,
  responsive?: boolean,
  trigger?: TriggerType,
  overlay?: boolean,
  warnings?: boolean
}

export interface Freeze {
  $container: HTMLElement,
  $canvas: HTMLCanvasElement,
  $image: HTMLImageElement
}

export interface FreezeframeEvent {
  $image: HTMLImageElement,
  event: string,
  listener: EventListenerOrEventListenerObject
}
