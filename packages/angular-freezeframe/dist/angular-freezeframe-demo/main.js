(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nicholas.ford/Sites/freezeframe.js/packages/angular-freezeframe/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NSEB":
/*!*******************************************************************************!*\
  !*** ./projects/angular-freezeframe/src/lib/angular-freezeframe.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AngularFreezeframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFreezeframeComponent", function() { return AngularFreezeframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var freezeframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! freezeframe */ "UjMJ");
/* harmony import */ var freezeframe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(freezeframe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* eslint-disable @angular-eslint/component-selector */




const _c0 = ["freezeRef"];
const _c1 = ["slotRef"];
function AngularFreezeframeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c2 = ["*"];
const SELECTOR = 'angular-freezeframe';
class AngularFreezeframeComponent {
    constructor() {
        this.isPlaying = false;
        this.startEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        this.$freezeframe = new freezeframe__WEBPACK_IMPORTED_MODULE_1___default.a(target, this.options);
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
AngularFreezeframeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularFreezeframeComponent, selectors: [["angular-freezeframe"]], viewQuery: function AngularFreezeframeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.freezeRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slotRef = _t.first);
    } }, inputs: { src: "src", options: "options" }, outputs: { startEvent: "startEvent", stopEvent: "stopEvent", toggleEvent: "toggleEvent" }, ngContentSelectors: _c2, decls: 5, vars: 1, consts: [[1, "angular-freezeframe"], [4, "ngIf"], ["slotRef", ""], [3, "src"], ["freezeRef", ""]], template: function AngularFreezeframeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularFreezeframeComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.innerHTML.trim());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _projects_angular_freezeframe_src_lib_angular_freezeframe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/angular-freezeframe/src/lib/angular-freezeframe.component */ "NSEB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["freeze"];
const _c1 = function () { return { overlay: true }; };
function AppComponent_angular_freezeframe_38_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-freezeframe", 15, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("startEvent", function AppComponent_angular_freezeframe_38_Template_angular_freezeframe_startEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.log("start", $event); })("stopEvent", function AppComponent_angular_freezeframe_38_Template_angular_freezeframe_stopEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.log("stop", $event); })("toggleEvent", function AppComponent_angular_freezeframe_38_Template_angular_freezeframe_toggleEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.log("toggle", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return { trigger: false, overlay: true }; };
class AppComponent {
    constructor() {
        this.title = 'angular-freezeframe-demo';
        this.destroyerVisible = true;
    }
    start() {
        var _a;
        (_a = this.freeze) === null || _a === void 0 ? void 0 : _a.start();
    }
    stop() {
        var _a;
        (_a = this.freeze) === null || _a === void 0 ? void 0 : _a.stop();
    }
    toggle() {
        var _a;
        (_a = this.freeze) === null || _a === void 0 ? void 0 : _a.toggle();
    }
    destroy() {
        this.destroyerVisible = false;
    }
    log(eventName, $event) {
        console.log({ eventName, $event });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.freeze = _t.first);
    } }, decls: 43, vars: 5, consts: [[1, "bold", "title"], [1, "section"], ["src", "https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w", 3, "startEvent", "stopEvent", "toggleEvent"], [3, "click"], ["src", "http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/55f96e21e4b0f86680e762dc/56aa551b8b38d446e39e933b/1454003533097/.gif", 3, "options", "startEvent", "stopEvent", "toggleEvent"], ["freeze", ""], [3, "options", "startEvent", "stopEvent", "toggleEvent"], [1, "grid"], [1, "cell"], ["src", "https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e801085229b264ca29fc/1519577337605/download.gif?format=1000w", "alt", ""], ["src", "https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e904c830257a34734ff5/1519577373504/Armani-Central-Park-6151.gif?format=1000w", "alt", ""], ["src", "https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a95c231419202eb9a763970/1519814094692/tumblr_nfro6qnt591qzcq51o1_500.gif?format=750w", "alt", ""], ["src", "https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a93f42471c10b0d656d1562/1519814094495/dirk-980.gif?format=1000w", "alt", ""], ["src", "https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w", 3, "options", "startEvent", "stopEvent", "toggleEvent", 4, "ngIf"], ["href", "http://www.cinemagraphs.com/"], ["src", "https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w", 3, "options", "startEvent", "stopEvent", "toggleEvent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "angular-freezeframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "basic,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "animate on hover.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "angular-freezeframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("startEvent", function AppComponent_Template_angular_freezeframe_startEvent_8_listener($event) { return ctx.log("start", $event); })("stopEvent", function AppComponent_Template_angular_freezeframe_stopEvent_8_listener($event) { return ctx.log("stop", $event); })("toggleEvent", function AppComponent_Template_angular_freezeframe_toggleEvent_8_listener($event) { return ctx.log("toggle", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "start/stop manually, with overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "angular-freezeframe", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("startEvent", function AppComponent_Template_angular_freezeframe_startEvent_18_listener($event) { return ctx.log("start", $event); })("stopEvent", function AppComponent_Template_angular_freezeframe_stopEvent_18_listener($event) { return ctx.log("stop", $event); })("toggleEvent", function AppComponent_Template_angular_freezeframe_toggleEvent_18_listener($event) { return ctx.log("toggle", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "using children & overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "angular-freezeframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("startEvent", function AppComponent_Template_angular_freezeframe_startEvent_23_listener($event) { return ctx.log("start", $event); })("stopEvent", function AppComponent_Template_angular_freezeframe_stopEvent_23_listener($event) { return ctx.log("stop", $event); })("toggleEvent", function AppComponent_Template_angular_freezeframe_toggleEvent_23_listener($event) { return ctx.log("toggle", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "destroy, remove event listeners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_36_listener() { return ctx.destroy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Destroy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AppComponent_angular_freezeframe_38_Template, 2, 2, "angular-freezeframe", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "cinemagraphs by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "cinemagraphs.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.destroyerVisible);
    } }, directives: [_projects_angular_freezeframe_src_lib_angular_freezeframe_component__WEBPACK_IMPORTED_MODULE_1__["AngularFreezeframeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #202020;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  text-align: center;\n  font-family: monospace;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 0px 10px 10px 0px;\n  padding: 5px 0px;\n  border: 1px solid #000;\n  background: #fff;\n  outline: none;\n  font-family: monospace;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  background: #000;\n  color: #fff;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-items: center;\n  align-items: center;\n}\n\n.grid[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\n  width: calc(50% - 24px);\n  height: auto;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgY29sb3I6ICMyMDIwMjA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMHB4IDEwcHggMTBweCAwcHg7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmNlbGwge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDI0cHgpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _projects_angular_freezeframe_src_lib_angular_freezeframe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/angular-freezeframe/src/lib/angular-freezeframe.component */ "NSEB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _projects_angular_freezeframe_src_lib_angular_freezeframe_component__WEBPACK_IMPORTED_MODULE_2__["AngularFreezeframeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map