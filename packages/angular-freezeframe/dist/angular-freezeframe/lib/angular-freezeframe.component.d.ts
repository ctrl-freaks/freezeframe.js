import { ElementRef, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import Freezeframe from 'freezeframe';
import { FreezeframeOptions, Freeze } from 'freezeframe/types';
import * as i0 from "@angular/core";
export interface AngularFreezeframeEvent {
    items: Freeze[];
    isPlaying: boolean;
}
export declare class AngularFreezeframeComponent implements AfterViewInit, OnDestroy {
    $freezeframe: Freezeframe;
    isPlaying: boolean;
    src?: string;
    options?: FreezeframeOptions;
    startEvent: EventEmitter<AngularFreezeframeEvent>;
    stopEvent: EventEmitter<AngularFreezeframeEvent>;
    toggleEvent: EventEmitter<AngularFreezeframeEvent>;
    freezeRef: ElementRef;
    slotRef: ElementRef;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private init;
    private initEventListeners;
    private get slotIsEmpty();
    start(): void;
    stop(): void;
    toggle(): void;
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<AngularFreezeframeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AngularFreezeframeComponent, "angular-freezeframe", never, { "src": "src"; "options": "options"; }, { "startEvent": "startEvent"; "stopEvent": "stopEvent"; "toggleEvent": "toggleEvent"; }, never, ["*"]>;
}
//# sourceMappingURL=angular-freezeframe.component.d.ts.map