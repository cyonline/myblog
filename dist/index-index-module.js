(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./src/app/page/index/index-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/page/index/index-routing.module.ts ***!
  \****************************************************/
/*! exports provided: routes, IndexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoutingModule", function() { return IndexRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.component */ "./src/app/page/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"],
    }
];
var IndexRoutingModule = /** @class */ (function () {
    function IndexRoutingModule() {
    }
    IndexRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IndexRoutingModule);
    return IndexRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/index/index.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/index/index.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"banner\">\n</div>\n<div class=\"list-group\">\n  <div class=\"list\" *ngFor=\"let item of list\">\n      <div class=\"list-image\">\n        <img [src]=\"item.image\">\n      </div>\n      <div class=\"list-content\">\n        <h3>{{item.title}}</h3>\n        <p>{{item.content}}</p>\n      </div>\n  </div>\n</div>\n<svg data-v-73fdaaa2=\"\" version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\"\n  height=\"100%\" viewBox=\"0 0 340.000000 250.000000\" preserveAspectRatio=\"xMidYMid meet\" color-interpolation-filters=\"sRGB\"\n  class=\"el-tooltip\" style=\"margin: auto;\">\n  <!-- <rect data-v-73fdaaa2=\"\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"#fff\" fill-opacity=\"1\"></rect> -->\n  <rect data-v-73fdaaa2=\"\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#watermark)\" fill-opacity=\"1\" class=\"watermarklayer\"></rect>\n  <g data-v-73fdaaa2=\"\" fill=\"#000\" class=\"bordersvg\" transform=\"translate(50.389991760253906,76.17053604125977)\">\n    <polyline stroke=\"#000\" stroke-width=\"3\" fill-opacity=\"0\" fill=\"url(#93)\" points=\"119.6100082397461,20 119.6100082397461,10 239.2200164794922,0 239.2200164794922,97.6589241027832 119.6100082397461,87.6589241027832 119.6100082397461,77.6589241027832\"></polyline>\n    <g transform=\"translate(0,20)\">\n      <rect stroke-width=\"2\" x=\"0\" y=\"0\" width=\"239.22000122070312\" height=\"57.65892791748047\" fill-opacity=\"0\"></rect>\n      <!---->\n      <!---->\n      <g transform=\"translate(10,3)\">\n        <g class=\"tp-name\" transform=\"translate(0,0)\">\n          <g>\n            <path transform=\"translate(-2.03125,33.640625)\" d=\"M28.75-18.91L27.50-15.63L21.56-15.63L21.56-12.97L27.97-12.97L26.88-9.84L21.56-9.84L21.56-7.03L26.25-7.03L26.25-7.03Q28.28-7.19 28.91-5L28.91-5L28.91-5Q29.53-3.28 30.63 5L30.63 5L29.69 5.16L29.69 5.16Q28.13-4.22 25.31-3.28L25.31-3.28L11.25-3.28L12.66-7.03L19.84-7.03L19.84-9.06L19.84-9.84L13.13-9.84L14.38-12.97L19.69-12.97L19.69-12.97Q19.38-15.78 17.50-15.63L17.50-15.63L12.81-15.63L14.06-18.91L28.75-18.91ZM2.81-25.78L2.81-25.78L2.19-26.41L2.19-26.41Q4.69-31.25 7.03-30.78L7.03-30.78L13.13-30.78L11.72-27.03L8.75-27.03L8.75-21.72L13.59-21.72L12.03-17.81L8.75-17.81L8.75-12.66L9.84-16.41L9.84-16.41Q12.19-17.34 12.81-9.22L12.81-9.22L12.03-8.91L12.03-8.91Q10.78-12.50 8.75-12.66L8.75-12.66L8.75 0.16L7.03 0.16L7.03-17.50L7.03-17.50Q5.47-17.19 3.28-3.59L3.28-3.59L2.34-3.75L2.34-3.75Q3.75-15.16 4.38-17.81L4.38-17.81L2.03-17.81L3.59-21.72L7.03-21.72L7.03-21.72Q7.03-26.41 5.78-27.03L5.78-27.03L5.78-27.03Q4.69-26.88 2.81-25.78ZM28.44-20.47L27.81-20L27.81-20Q26.41-21.09 23.91-20.94L23.91-20.94L15.78-20.94L17.19-24.22L24.53-24.22L24.53-24.22Q24.84-24.22 25.31-24.06L25.31-24.06L25.31-24.06Q25.63-24.06 25.78-24.06L25.78-24.06L25.78-24.06Q25.63-27.19 23.59-27.19L23.59-27.19L19.06-27.19L19.06-27.19Q16.25-27.66 15.31-20.31L15.31-20.31L14.22-20.47L14.22-20.47Q14.22-24.84 14.69-27.19L14.69-27.19L13.28-27.19L14.53-30.78L28.13-30.78L27.50-27.66L27.50-22.50L27.50-22.50Q27.97-21.88 28.44-20.47L28.44-20.47ZM57.03-22.50L55.78-18.75L49.06-18.75L49.06-15L61.56-15L60.16-11.09L49.06-11.09L49.06-3.44L49.06-3.44Q49.84 0.94 44.06 3.28L44.06 3.28L43.44 2.50L43.44 2.50Q47.66-0.47 47.03-3.28L47.03-3.28L47.03-11.09L34.22-11.09L35.94-15L47.03-15L47.03-15Q46.72-19.06 44.53-18.75L44.53-18.75L38.13-18.75L39.69-22.50L57.03-22.50ZM49.22-29.53L61.25-29.53L59.69-22.34L58.59-22.50L59.38-25.78L37.19-25.78L37.19-21.88L35.94-21.88L35.94-21.88Q35.63-25.47 35-25.94L35-25.94L36.25-29.53L48.91-29.53L48.91-29.53Q47.50-31.09 44.22-30.94L44.22-30.94L45.78-33.59L45.78-33.59Q48.75-34.06 49.69-29.84L49.69-29.84L49.22-29.53ZM80.63-2.03L79.84-1.56L79.84-1.56Q77.50-4.53 75.16-4.22L75.16-4.22L68.59-4.22L68.59-4.22Q68.44-2.81 68.44-1.41L68.44-1.41L67.19-1.41L67.19-1.41Q67.66-23.91 67.97-25.47L67.97-25.47L66.41-25.47L67.97-29.53L69.69-29.53L69.69-29.53Q71.09-32.03 72.81-33.59L72.81-33.59L75.94-31.72L75.94-31.72Q74.06-31.09 71.72-29.53L71.72-29.53L79.69-29.53L78.91-26.25L78.91-6.25L78.91-6.25Q79.84-4.84 80.63-2.03L80.63-2.03ZM92.50-29.53L91.72-25.94L91.72 5L90.16 5L90.16-18.28L90.16-18.28Q90.16-25.31 87.66-25.31L87.66-25.31L83.44-25.31L83.44-25.31Q83.13-24.38 82.19-22.34L82.19-22.34L82.19-22.34Q80.78-19.22 80-17.19L80-17.19L79.22-17.50L79.22-17.50Q82.66-33.59 84.22-33.59L84.22-33.59L87.50-31.72L87.50-31.72Q86.41-31.09 85.31-29.53L85.31-29.53L92.50-29.53ZM77.34-19.06L75.94-15.16L69.06-15.16L69.06-15.16Q68.91-10.94 68.59-4.22L68.59-4.22L70.16-8.13L76.25-8.13L76.25-8.13Q76.88-8.13 77.34-7.81L77.34-7.81L77.34-18.91L77.34-18.91Q77.34-25.47 74.84-25.47L74.84-25.47L72.50-25.47L72.50-25.47Q69.84-26.41 69.22-15.31L69.22-15.31L70.63-19.06L77.34-19.06ZM87.66-11.25L86.72-10.63L86.72-10.63Q84.84-15.16 81.25-14.84L81.25-14.84L82.81-18.75L82.81-18.75Q86.88-19.53 87.66-11.25L87.66-11.25ZM98.59-11.56L97.66-12.03L97.66-12.03Q104.38-26.72 106.88-29.84L106.88-29.84L106.88-29.84Q109.22-33.59 112.66-33.28L112.66-33.28L113.75-30.16L113.75-30.16Q117.03-31.88 125.78-12.50L125.78-12.50L124.84-11.72L124.84-11.72Q118.91-22.50 116.88-24.38L116.88-24.38L116.88-24.38Q114.84-26.72 110.31-26.41L110.31-26.41L111.09-28.59L111.09-28.59Q107.97-29.38 98.59-11.56L98.59-11.56ZM112.50-19.38L112.50 3.75L110.47 3.75L110.47-18.44L109.69-19.38L110.31-23.28L112.97-23.28L112.50-19.38ZM157.34 4.53L156.09 5L156.09 5Q150-9.69 147.34-12.34L147.34-12.34L147.34-12.34Q145-15.63 138.91-15.31L138.91-15.31L140.63-20L140.63-20Q146.09-20.47 148.59-16.09L148.59-16.09L148.59-16.09Q151.56-12.19 157.34 4.53L157.34 4.53ZM130.63-1.09L129.53-1.56L129.53-1.56Q136.72-22.97 139.53-27.34L139.53-27.34L139.53-27.34Q142.03-32.66 146.56-32.03L146.56-32.03L148.44-27.03L148.44-27.03Q144.06-27.50 141.41-23.13L141.41-23.13L141.41-23.13Q138.59-19.53 130.63-1.09L130.63-1.09ZM189.06-29.69L187.81-26.41L180.31-26.41L180.31-25L187.66-25L187.19-23.13L187.19-13.28L185.63-13.28L185.63-19.06L185.63-19.06Q185.63-22.34 183.44-22.34L183.44-22.34L180.31-22.34L180.31-20.94L185.16-20.94L184.22-18.44L180.31-18.44L180.31-17.03L185.16-17.03L184.22-14.69L180.31-14.69L180.31-12.81L178.75-12.81L178.75-14.69L173.44-14.69L174.38-17.03L178.75-17.03L178.75-18.44L174.22-18.44L175.16-20.94L178.75-20.94L178.75-22.34L176.25-22.34L176.25-22.34Q173.91-23.13 172.81-13.13L172.81-13.13L171.88-13.13L171.88-13.13Q172.19-19.38 172.66-22.34L172.66-22.34L171.25-22.34L172.19-25L178.75-25L178.75-26.41L170.47-26.41L171.72-29.69L178.59-29.69L177.97-30.47L178.75-33.59L180.94-33.59L180.31-30.31L180.31-29.69L185.94-29.69L185.94-29.69Q184.53-31.25 182.34-31.09L182.34-31.09L183.44-33.44L183.44-33.44Q186.09-34.06 186.88-30L186.88-30L186.25-29.69L189.06-29.69ZM185-9.06L185 3.91L183.28 3.91L183.28-9.06L169.22-9.06L170.63-12.34L182.97-12.34L183.28-14.22L185.31-14.22L185.16-12.34L189.38-12.34L188.28-9.06L185-9.06ZM167.34-0.16L165.78-0.16L165.78-20.63L161.41-20.63L163.13-24.84L165.78-24.84L165.78-28.75L165-29.84L165.63-33.28L167.97-33.28L167.34-30.16L167.34-24.84L171.25-24.84L169.84-20.63L167.34-20.63L167.34-0.16ZM179.84-1.88L178.91-1.25L178.91-1.25Q176.41-5.47 172.34-4.84L172.34-4.84L173.75-8.13L173.75-8.13Q178.28-9.22 179.84-1.88L179.84-1.88ZM211.41-9.06L203.44-9.06L203.44-9.06Q200.47-10 198.75-1.56L198.75-1.56L197.81-1.72L197.81-1.72Q198.44-7.19 198.91-9.06L198.91-9.06L197.34-9.06L198.75-12.50L215.16-12.50L215.16-12.50Q210.31-15.31 207.03-16.41L207.03-16.41L207.03-16.41Q200-12.03 196.56-12.34L196.56-12.34L196.56-12.34Q193.44-12.34 193.44-15.78L193.44-15.78L193.44-15.78Q193.75-18.44 198.13-19.69L198.13-19.69L197.66-20.16L197.66-20.16Q200.94-24.69 203.13-26.56L203.13-26.56L196.88-26.56L196.88-23.28L195.63-23.28L195.63-23.28Q195.63-26.25 194.84-26.88L194.84-26.88L195.94-30.16L208.28-30.16L208.28-30.16Q206.88-31.25 203.75-31.09L203.75-31.09L205.16-33.59L205.16-33.59Q208.28-33.91 209.06-30.63L209.06-30.63L208.59-30.16L219.84-30.16L218.44-23.28L217.19-23.44L217.97-26.56L205.78-26.56L207.19-25.78L207.19-25.78Q206.25-25.47 204.38-24.53L204.38-24.53L216.25-24.53L215-21.41L215-21.41Q214.53-21.09 213.59-20.47L213.59-20.47L213.59-20.47Q212.34-19.53 210-18.13L210-18.13L210-18.13Q213.28-16.41 221.25-10.16L221.25-10.16L220.63-9.22L220.63-9.22Q219.69-9.84 217.81-10.94L217.81-10.94L217.81-10.94Q216.88-11.56 216.41-11.88L216.41-11.88L215.94-9.69L215.94-4.53L215.94-4.53Q216.88-2.03 217.97 4.84L217.97 4.84L217.03 5.16L217.03 5.16Q215.63-4.06 212.66-3.13L212.66-3.13L200.31-3.13L201.72-7.03L213.28-7.03L213.28-7.03Q213.44-7.03 213.75-7.03L213.75-7.03L213.75-7.03Q214.06-6.88 214.22-6.88L214.22-6.88L214.22-6.88Q213.75-9.06 211.41-9.06L211.41-9.06ZM197.34-15.16L197.34-15.16L197.34-15.16Q200.63-14.84 204.53-17.03L204.53-17.03L204.53-17.03Q202.66-17.50 200.78-17.50L200.78-17.50L200.78-17.50Q194.53-17.50 194.69-16.41L194.69-16.41L194.69-16.41Q194.53-15.16 197.34-15.16ZM212.66-21.41L200.78-21.41L200.78-21.41Q199.69-20.78 198.44-19.84L198.44-19.84L198.44-19.84Q200.47-20.47 203.28-20.47L203.28-20.47L203.28-20.47Q205.78-20.47 208.44-19.06L208.44-19.06L212.66-21.41Z\"></path>\n          </g>\n        </g>\n        <g class=\"tp-slogan\" transform=\"translate(88.09500122070312,40.64085006713867)\">\n          <g>\n            <path transform=\"translate(-0.375,8.578125)\" d=\"M5.72-4.13L5.72-4.13L4.69-4.13L4.69-4.13Q4.55-5.48 3.23-5.48L3.23-5.48L3.23-5.48Q1.55-5.39 1.45-3.14L1.45-3.14L1.45-3.14Q1.45-0.70 3.19-0.70L3.19-0.70L3.19-0.70Q4.45-0.80 4.69-2.20L4.69-2.20L5.72-2.20L5.72-2.20Q5.34 0.05 3.19 0.09L3.19 0.09L3.19 0.09Q0.47 0 0.38-2.95L0.38-2.95L0.38-2.95Q0.47-6.38 3.38-6.47L3.38-6.47L3.38-6.47Q5.44-6.42 5.72-4.13ZM9-1.13L9.05-1.13L10.69-6.28L11.86-6.28L11.86-6.28Q11.63-5.67 11.20-4.45L11.20-4.45L11.20-4.45Q10.17-1.59 9.61-0.14L9.61-0.14L9.61-0.14Q8.81 1.83 8.48 2.06L8.48 2.06L8.48 2.06Q8.16 2.48 7.13 2.44L7.13 2.44L7.13 2.44Q6.94 2.44 6.70 2.34L6.70 2.34L6.70 1.41L6.70 1.41Q6.75 1.41 6.80 1.45L6.80 1.45L6.80 1.45Q7.08 1.55 7.31 1.55L7.31 1.55L7.31 1.55Q7.92 1.78 8.44 0.09L8.44 0.09L6.14-6.28L7.31-6.28L9-1.13ZM12.42-3.14L12.42-3.14L12.42-3.14Q12.61-6.33 15.33-6.47L15.33-6.47L15.33-6.47Q18.05-6.33 18.23-3.14L18.23-3.14L18.23-3.14Q18.05 0 15.33 0.09L15.33 0.09L15.33 0.09Q12.61 0 12.42-3.14ZM13.50-3.14L13.50-3.14L13.50-3.14Q13.64-0.80 15.33-0.75L15.33-0.75L15.33-0.75Q17.02-0.80 17.16-3.14L17.16-3.14L17.16-3.14Q17.02-5.48 15.33-5.53L15.33-5.53L15.33-5.53Q13.64-5.48 13.50-3.14ZM24.52-4.27L24.52-4.27L24.52 0L23.48 0L23.48-3.84L23.48-3.84Q23.58-5.58 22.13-5.48L22.13-5.48L22.13-5.48Q20.53-5.39 20.48-3.42L20.48-3.42L20.48 0L19.41 0L19.41-6.28L20.44-6.28L20.44-5.39L20.44-5.39Q21.19-6.47 22.36-6.47L22.36-6.47L22.36-6.47Q24.47-6.42 24.52-4.27ZM26.11-8.58L27.19-8.58L27.19 0L26.11 0L26.11-8.58ZM28.73-6.28L29.81-6.28L29.81 0L28.73 0L28.73-6.28ZM29.81-8.58L29.81-7.41L28.73-7.41L28.73-8.58L29.81-8.58ZM36.42-4.27L36.42-4.27L36.42 0L35.39 0L35.39-3.84L35.39-3.84Q35.48-5.58 34.03-5.48L34.03-5.48L34.03-5.48Q32.44-5.39 32.39-3.42L32.39-3.42L32.39 0L31.31 0L31.31-6.28L32.34-6.28L32.34-5.39L32.34-5.39Q33.09-6.47 34.27-6.47L34.27-6.47L34.27-6.47Q36.38-6.42 36.42-4.27ZM42.28-1.97L42.28-1.97L43.31-1.97L43.31-1.97Q43.13-0.89 42.19-0.23L42.19-0.23L42.19-0.23Q41.67 0.09 40.50 0.09L40.50 0.09L40.50 0.09Q37.83 0 37.69-2.95L37.69-2.95L37.69-2.95Q37.78-6.38 40.69-6.47L40.69-6.47L40.69-6.47Q43.36-6.42 43.41-2.77L43.41-2.77L38.81-2.77L38.81-2.77Q38.81-0.70 40.64-0.70L40.64-0.70L40.64-0.70Q41.95-0.80 42.28-1.97ZM38.81-3.61L38.81-3.61L42.33-3.61L42.33-3.61Q42.19-5.48 40.55-5.48L40.55-5.48L40.55-5.48Q39-5.34 38.81-3.61Z\"></path>\n          </g>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n</div>\n"

/***/ }),

/***/ "./src/app/page/index/index.component.scss":
/*!*************************************************!*\
  !*** ./src/app/page/index/index.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background: #eee;\n  overflow: hidden; }\n\n.banner {\n  width: 100%;\n  height: 400px;\n  background: url('banner.jpg') no-repeat 100% 100%; }\n\n.list-group {\n  margin-top: 100px; }\n\n.list-group .list {\n    display: flex;\n    width: 1000px;\n    height: 250px;\n    background: #fff;\n    box-shadow: 0px 1px 5px #aaa;\n    margin: 0 auto 40px; }\n\n.list-group .list .list-image {\n      display: inline-block;\n      width: 400px;\n      height: 250px;\n      cursor: pointer;\n      overflow: hidden; }\n\n.list-group .list .list-image img {\n        width: 100%;\n        height: 100%;\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        transition: all linear .2s;\n        -webkit-filter: opacity(50%);\n        filter: opacity(50%); }\n\n.list-group .list .list-image img:hover {\n          -webkit-transform: scale(1.1);\n                  transform: scale(1.1);\n          -webkit-filter: opacity(100%);\n          filter: opacity(100%); }\n\n.list-group .list .list-content {\n      padding: 40px; }\n\n.list-group .list .list-content h3 {\n        cursor: pointer; }\n\n.list-group .list .list-content h3:hover {\n          color: #ff7f21; }\n\n.list-group .list .list-content p {\n        font-size: 14px;\n        margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/page/index/index.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/index/index.component.ts ***!
  \***********************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.list = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 5; i++) {
            this.list.push({
                title: "blog" + (i + 1),
                content: "\u7B2C" + (i + 1) + "\u6761",
                image: "../../../assets/img/sy_img" + (i + 1) + ".jpg"
            });
        }
        this.template();
    };
    IndexComponent.prototype.template = function () {
        var template = '<p>Hello,my name is <%name%>. I am  <%age%> years old.</p>';
        var data = {
            name: 'zyn',
            age: 31
        };
        var match;
        var regex = /<%([^%>]+)?%>/g;
        var TemplateEngine = function (tpl, data) {
            while (match = regex.exec(tpl)) {
                console.info(match);
                tpl = tpl.replace(match[0], data[match[1]]);
            }
            return tpl;
        };
        var string = TemplateEngine(template, data);
        console.log(string);
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cyb-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/page/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/page/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/page/index/index.module.ts":
/*!********************************************!*\
  !*** ./src/app/page/index/index.module.ts ***!
  \********************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.component */ "./src/app/page/index/index.component.ts");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/page/index/index-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _index_routing_module__WEBPACK_IMPORTED_MODULE_3__["IndexRoutingModule"]
            ],
            declarations: [_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]]
        })
    ], IndexModule);
    return IndexModule;
}());



/***/ })

}]);
//# sourceMappingURL=index-index-module.js.map