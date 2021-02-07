import { ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵpropertyInterpolate, ɵɵsanitizeUrl, EventEmitter, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵprojectionDef, ɵɵtemplate, ɵɵprojection, ɵɵreference, ɵɵproperty, ɵsetClassMetadata, Component, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import Freezeframe from 'freezeframe';

/* eslint-disable @angular-eslint/component-selector */
const _c0 = ["freezeRef"];
const _c1 = ["slotRef"];
function AngularFreezeframeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "img", 3, 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("src", ctx_r0.src, ɵɵsanitizeUrl);
} }
const _c2 = ["*"];
const SELECTOR = 'angular-freezeframe';
class AngularFreezeframeComponent {
    constructor() {
        this.isPlaying = false;
        this.startEvent = new EventEmitter();
        this.stopEvent = new EventEmitter();
        this.toggleEvent = new EventEmitter();
    }
    ngAfterViewInit() {
        this.init();
    }
    ngOnDestroy() {
        this.destroy();
    }
    init() {
        const target = this.slotIsEmpty && this.src
            ? this.freezeRef.nativeElement
            : this.slotRef.nativeElement;
        this.$freezeframe = new Freezeframe(target, this.options);
        this.initEventListeners();
    }
    initEventListeners() {
        this.$freezeframe.on('toggle', (items, isPlaying) => {
            this.isPlaying = isPlaying;
            if (isPlaying) {
                this.startEvent.emit({ items, isPlaying });
            }
            else {
                this.stopEvent.emit({ items, isPlaying });
            }
            this.toggleEvent.emit({ items, isPlaying });
        });
    }
    get slotIsEmpty() {
        var _a, _b, _c;
        return !((_c = (_b = (_a = this.slotRef) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.innerHTML) === null || _c === void 0 ? void 0 : _c.trim());
    }
    start() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.start();
    }
    stop() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.stop();
    }
    toggle() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.toggle();
    }
    destroy() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
AngularFreezeframeComponent.ɵfac = function AngularFreezeframeComponent_Factory(t) { return new (t || AngularFreezeframeComponent)(); };
AngularFreezeframeComponent.ɵcmp = ɵɵdefineComponent({ type: AngularFreezeframeComponent, selectors: [["angular-freezeframe"]], viewQuery: function AngularFreezeframeComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 1);
        ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.freezeRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slotRef = _t.first);
    } }, inputs: { src: "src", options: "options" }, outputs: { startEvent: "startEvent", stopEvent: "stopEvent", toggleEvent: "toggleEvent" }, ngContentSelectors: _c2, decls: 5, vars: 1, consts: [[1, "angular-freezeframe"], [4, "ngIf"], ["slotRef", ""], [3, "src"], ["freezeRef", ""]], template: function AngularFreezeframeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, AngularFreezeframeComponent_div_1_Template, 3, 1, "div", 1);
        ɵɵelementStart(2, "div", null, 2);
        ɵɵprojection(4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(3);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !_r1.innerHTML.trim());
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AngularFreezeframeComponent, [{
        type: Component,
        args: [{
                selector: SELECTOR,
                template: `
    <div class="${SELECTOR}">
      <div *ngIf="!slotRef.innerHTML.trim()">
        <img #freezeRef src="{{src}}" />
      </div>
      <div #slotRef><ng-content></ng-content></div>
    </div>
  `
            }]
    }], null, { src: [{
            type: Input
        }], options: [{
            type: Input
        }], startEvent: [{
            type: Output
        }], stopEvent: [{
            type: Output
        }], toggleEvent: [{
            type: Output
        }], freezeRef: [{
            type: ViewChild,
            args: ['freezeRef']
        }], slotRef: [{
            type: ViewChild,
            args: ['slotRef']
        }] }); })();

class AngularFreezeframeModule {
}
AngularFreezeframeModule.ɵmod = ɵɵdefineNgModule({ type: AngularFreezeframeModule });
AngularFreezeframeModule.ɵinj = ɵɵdefineInjector({ factory: function AngularFreezeframeModule_Factory(t) { return new (t || AngularFreezeframeModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AngularFreezeframeModule, { declarations: [AngularFreezeframeComponent], exports: [AngularFreezeframeComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AngularFreezeframeModule, [{
        type: NgModule,
        args: [{
                declarations: [AngularFreezeframeComponent],
                imports: [],
                exports: [AngularFreezeframeComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-freezeframe
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularFreezeframeComponent, AngularFreezeframeModule };
//# sourceMappingURL=angular-freezeframe.js.map
