(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_recognize_recognize_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/recognize/recognize.component */ "./src/app/pages/recognize/recognize.component.ts");
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/list/list.component */ "./src/app/pages/list/list.component.ts");
/* harmony import */ var _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/upload/upload.component */ "./src/app/pages/upload/upload.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'ui/home', pathMatch: 'full' },
    //{ path: '**', redirectTo: 'ui' },
    { path: 'ui/home', component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"], pathMatch: 'full' },
    { path: 'ui/register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'ui/recognize', component: _pages_recognize_recognize_component__WEBPACK_IMPORTED_MODULE_4__["RecognizeComponent"] },
    { path: 'ui/list', component: _pages_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"] },
    { path: 'ui/upload', component: _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__["UploadComponent"] },
    { path: 'ui/login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true }),
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logo-png {\r\n  height: 46px;\r\n  margin: 0 10px 0px 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .pc_menu {\r\n      display: none !important;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<mat-toolbar color=\"primary\" class=\"toolbar mat-elevation-z5\">\r\n\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n\r\n    <button mat-menu-item routerLink=\"/ui/home\">\r\n      <mat-icon>home</mat-icon>\r\n      <span>Home</span>\r\n    </button>\r\n\r\n    <button mat-menu-item routerLink=\"/ui/register\">\r\n      <mat-icon>camera_alt</mat-icon>\r\n      <span>Register Face</span>\r\n    </button>\r\n\r\n    <button mat-menu-item routerLink=\"/ui/recognize\">\r\n      <mat-icon>pageview</mat-icon>\r\n      <span>Recognize Face</span>\r\n    </button>\r\n\r\n    <button mat-menu-item routerLink=\"/ui/list\">\r\n      <mat-icon>list</mat-icon>\r\n      <span>List Face</span>\r\n    </button>\r\n    \r\n    <!-- <button mat-menu-item routerLink=\"/upload\">\r\n      <mat-icon>cloud_upload</mat-icon>\r\n      <span>Upload Face</span>\r\n    </button> -->\r\n\r\n  </mat-menu>\r\n\r\n  <a mat-button routerLink=\"/ui/home\">\r\n    <h1><span>{{ title }}</span></h1>\r\n  </a>\r\n\r\n  <div class=\"pc_menu\">\r\n    <a mat-button routerLink=\"/ui/register\">Register Face</a>\r\n    <a mat-button routerLink=\"/ui/recognize\">Recognize Face</a>\r\n    <a mat-button routerLink=\"/ui/list\">List Face</a>\r\n    <a mat-button href=\"https://hemant-1332.github.io/blog/face-recognition-demo/\" target=\"_blank\">Read More..</a>\r\n    <!-- <a mat-button routerLink=\"/upload\">Upload Face</a> -->\r\n  </div>\r\n\r\n  \r\n  <!-- <button mat-icon-button [matMenuTriggerFor]=\"profileMenu\">      \r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n\r\n  <mat-menu #profileMenu=\"matMenu\">\r\n    <button mat-menu-item>Settings</button>\r\n    <button mat-menu-item>Help</button>\r\n  </mat-menu> -->\r\n\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FR Web App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_recognize_recognize_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/recognize/recognize.component */ "./src/app/pages/recognize/recognize.component.ts");
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/list/list.component */ "./src/app/pages/list/list.component.ts");
/* harmony import */ var _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/upload/upload.component */ "./src/app/pages/upload/upload.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _pages_recognize_recognize_component__WEBPACK_IMPORTED_MODULE_11__["RecognizeComponent"],
                _pages_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__["UploadComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container {\r\n  text-align: center;\r\n}\r\n\r\nh1 {\r\n  font-size: 38px;\r\n  margin: 150px auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <h1 class=\"mat-h1\">\r\n    Face Recognition Demo\r\n  </h1>\r\n\r\n  <a mat-raised-button routerLink=\"/ui/register\">Get started</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/pages/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/pages/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/pages/list/list.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/list/list.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh2 {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.flexContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 50px auto;\r\n  padding: 0px 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.flexItem {\r\n  width: 200px;\r\n  height: auto;\r\n  margin: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.person-img {\r\n  max-width: 150px;\r\n  margin: 20px;\r\n}\r\n\r\n.img-container {\r\n  position: relative;\r\n}\r\n\r\n.img-container i {\r\n  position: absolute;\r\n  top: 3%;\r\n  right: 3%;\r\n  cursor: pointer;\r\n}\r\n\r\n.delete {\r\n  color: orangered;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/list/list.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/list/list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2>Registered people list</h2>\r\n\r\n<div class=\"flexContainer\">\r\n\r\n  <mat-card class=\"flexItem\" *ngFor=\"let person of people\"\r\n    id=\"{{person.id}}\">\r\n\r\n    <div class=\"img-container\">\r\n      <i class=\"material-icons delete\" title=\"Remove\"\r\n        mat-button (click)=\"delete(person.id)\">cancel</i>\r\n\r\n      <img src=\"data:image/jpeg;base64,{{ person.photoBase64 }}\"\r\n        class=\"person-img\" title=\"ID: {{ person.id }}\">\r\n    </div>\r\n\r\n    <mat-card-title >\r\n      {{ person.name }}\r\n    </mat-card-title>\r\n\r\n  </mat-card>\r\n\r\n  <mat-card class=\"flexItem\" *ngIf=\"people?.length == 0\">\r\n    not yet registered.\r\n  </mat-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_face_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/face-api.service */ "./src/app/services/face-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(apiService) {
        this.apiService = apiService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getPeople().subscribe(function (people) {
            _this.people = people;
            console.log(people);
        });
    };
    ListComponent.prototype.delete = function (id) {
        console.log('deleting ' + id + '...');
        this.apiService.deletePerson(id).subscribe(function (res) {
            console.log('delete done');
            var elm = document.getElementById(id);
            elm.className = 'hide';
        }, function (err) {
            console.log('HTTP Error', err);
        }, function () { return console.log('HTTP request completed.'); });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/pages/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/pages/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_face_api_service__WEBPACK_IMPORTED_MODULE_1__["FaceApiService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\r\n    display: inline-block;\r\n    margin: 30px;\r\n  }\r\n  \r\n.container {\r\n  text-align: center;\r\n}\r\n  \r\nh1 {\r\n  font-size: 38px;\r\n  margin: 50px auto;\r\n}\r\n  \r\nh2 {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\n  <h1 id=\"title\" class=\"title\"><img [src]=\"loginlogoimg\"></h1>\n  <h2 class=\"sub-title\">Welcome to FR Demo! Log in with your email.</h2>\n\n<mat-card class='login'>\n\n  \n\n  <mat-form-field class=\"name-field\">\n    <input matInput [(ngModel)]=\"name\" placeholder=\"Username\" required>    \n  </mat-form-field>\n  <br>   \n  \n  <mat-form-field class=\"password-field\">\n    <input matInput [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\" required>\n  </mat-form-field>\n  <br>\n\n  <button mat-raised-button (click)=\"onClickLogin()\" [disabled]=\"!isGoodToRegister()\">\n    Login (In Progress)\n  </button>\n  <br>\n\n  {{ userMessage }}\n</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_fr_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/fr-api.service */ "./src/app/services/fr-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService) {
        this.apiService = apiService;
        this.loginlogoimg = 'assets/logo/LOGO.png';
        this.isGoodToRegister = function () {
            return false;
            // initial state is always active to promote click
            //return this.name !== '' && this.password !=='';
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClickLogin = function () {
        if (!this.name) {
            this.userMessage = 'Please fill name';
        }
        else if (!this.password) {
            this.userMessage = 'Please enter password';
        }
        else {
            console.log('Else..' + this.name + this.password);
            this.apiService.login(this.name, this.password).subscribe(function (data) {
                console.log(data);
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_fr_api_service__WEBPACK_IMPORTED_MODULE_1__["FrApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/recognize/recognize.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/recognize/recognize.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ncanvas {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.photo {\r\n  display: inline-block;\r\n  margin: 30px;\r\n}\r\n\r\n#video {\r\n  width: 80%;\r\n  max-width: 480px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/recognize/recognize.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/recognize/recognize.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <h2>\r\n    Step 2: Try to recognize face\r\n  </h2>\r\n\r\n  <mat-card class=\"photo\">\r\n\r\n    <video id=\"video\" #video autoplay playsinline></video>\r\n    <canvas id=\"canvas\" #canvas></canvas>\r\n\r\n    <br><br>\r\n    {{ userMessage }}<br><br>\r\n\r\n    <img src=\"{{ imgSrc }}\" alt=\"\"><br><br>\r\n    <!-- <img src=\"{{ url_for('video_feed') }}\" alt=\"\"><br><br> -->\r\n\r\n    <button id=\"cameraButton\" mat-raised-button (click)=\"onClickCamera()\">\r\n      {{ cameraButtonLabel }}\r\n    </button>\r\n\r\n\r\n  </mat-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/recognize/recognize.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/recognize/recognize.component.ts ***!
  \********************************************************/
/*! exports provided: RecognizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognizeComponent", function() { return RecognizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_face_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/face-api.service */ "./src/app/services/face-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecognizeComponent = /** @class */ (function () {
    function RecognizeComponent(apiService) {
        this.apiService = apiService;
        this.isCameraActive = false;
        this.cameraLabelActive = 'Stop camera';
        this.cameraLabelInactive = 'Start camera';
        this.intervalMillSec = 3000;
        this.medias = {
            audio: false,
            video: {
                facingMode: 'user',
            }
        };
    }
    RecognizeComponent.prototype.ngOnInit = function () {
        this.startCamera();
    };
    RecognizeComponent.prototype.ngOnDestroy = function () {
        this.stopCamera();
    };
    RecognizeComponent.prototype.startCamera = function () {
        var _this = this;
        console.log('starting camera...');
        window.navigator.mediaDevices.getUserMedia(this.medias)
            .then(function (stream) {
            _this.videoElm.nativeElement.srcObject = stream;
            _this.isCameraActive = true;
            _this.cameraButtonLabel = _this.cameraLabelActive;
            _this.refreshIntervalId = window.setInterval(function () {
                _this.findAllInImage();
            }, _this.intervalMillSec);
        })
            .catch(function (error) {
            console.error(error);
            alert(error);
        });
    };
    RecognizeComponent.prototype.stopCamera = function () {
        console.log('stopping camera...');
        this.videoElm.nativeElement.pause();
        if (this.videoElm.nativeElement.srcObject !== null) {
            var track = this.videoElm.nativeElement.srcObject.getTracks()[0];
            track.stop();
        }
        this.isCameraActive = false;
        this.cameraButtonLabel = this.cameraLabelInactive;
        window.clearInterval(this.refreshIntervalId);
    };
    RecognizeComponent.prototype.onClickCamera = function () {
        console.log('onClickCamera...');
        if (this.isCameraActive) {
            this.stopCamera();
        }
        else {
            this.startCamera();
        }
    };
    RecognizeComponent.prototype.draw = function () {
        console.log('Drawing...');
        var WIDTH = this.videoElm.nativeElement.clientWidth;
        var HEIGHT = this.videoElm.nativeElement.clientHeight;
        var ctx = this.canvasElm.nativeElement.getContext('2d');
        this.canvasElm.nativeElement.width = WIDTH;
        this.canvasElm.nativeElement.height = HEIGHT;
        return this.canvasElm.nativeElement.toDataURL(ctx.drawImage(this.videoElm.nativeElement, 0, 0, WIDTH, HEIGHT));
    };
    RecognizeComponent.prototype.findAllInImage = function () {
        var _this = this;
        console.log('findAllInImage...');
        this.captureData = this.draw();
        this.captureData = this.captureData.replace('data:image/png;base64,', '');
        //console.log('>>Sending: {}', this.captureData );
        this.apiService.findAllInImage(this.captureData).subscribe(function (res) {
            console.log(res);
            //console.log(res.photo.toString());
            var msg = res.persons.length + ' person found.';
            console.log(msg);
            _this.userMessage = msg;
            _this.imgSrc = 'data:image/png;base64,' + res.photo.toString();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('video'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RecognizeComponent.prototype, "videoElm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RecognizeComponent.prototype, "canvasElm", void 0);
    RecognizeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recognize',
            template: __webpack_require__(/*! ./recognize.component.html */ "./src/app/pages/recognize/recognize.component.html"),
            styles: [__webpack_require__(/*! ./recognize.component.css */ "./src/app/pages/recognize/recognize.component.css")]
        }),
        __metadata("design:paramtypes", [_services_face_api_service__WEBPACK_IMPORTED_MODULE_1__["FaceApiService"]])
    ], RecognizeComponent);
    return RecognizeComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ncanvas {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.photo {\r\n  display: inline-block;\r\n  margin: 30px;\r\n}\r\n\r\n#cameraButton {\r\n  font-size: small;\r\n}\r\n\r\n#video {\r\n  width: 80%;\r\n  max-width: 480px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <h2>\r\n    Step 1: Take a photo and register\r\n  </h2>\r\n\r\n  <mat-card class=\"photo\">\r\n\r\n    <video id=\"video\" #video autoplay playsinline></video>\r\n    <canvas id=\"canvas\" #canvas></canvas>\r\n    <br>\r\n    <br>\r\n\r\n    <button id=\"cameraButton\" mat-raised-button (click)=\"onClickCamera()\">\r\n      {{ cameraButtonLabel }}\r\n    </button>\r\n\r\n    <hr>\r\n\r\n    <mat-form-field class=\"name-field\">\r\n      <input matInput [(ngModel)]=\"name\" placeholder=\"Your name\" required>      \r\n    </mat-form-field>\r\n    <br>  \r\n\r\n    <!-- <mat-checkbox class = \"example-margin\" [(ngModel)] = \"isExistingFace\"> \r\n      Existing Face      \r\n    </mat-checkbox>\r\n    <br> -->\r\n\r\n    <button mat-raised-button (click)=\"onClickRegister()\" [disabled]=\"!isGoodToRegister()\">\r\n      {{ registerButtonLabel }}\r\n    </button>\r\n    <br>\r\n\r\n    {{ userMessage }}\r\n\r\n  </mat-card>\r\n  <br>\r\n\r\n  <button mat-raised-button (click)=\"onClickTrain()\" [disabled]=\"!isGoodToRegister()\">\r\n    Train Model\r\n  </button>\r\n  <br>\r\n\r\n  <a mat-raised-button routerLink=\"/ui/recognize\">\r\n    Move to Step2\r\n    <i class=\"material-icons\">arrow_forward</i>\r\n  </a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_face_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/face-api.service */ "./src/app/services/face-api.service.ts");
/* harmony import */ var src_app_services_fr_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fr-api.service */ "./src/app/services/fr-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(apiService, frService) {
        var _this = this;
        this.apiService = apiService;
        this.frService = frService;
        this.isExistingFace = false;
        this.isCameraActive = false;
        this.cameraLabelActive = 'Take a photo';
        this.cameraLabelInactive = 'Restart camera';
        this.cameraButtonLabel = this.cameraLabelActive;
        this.registerButtonLabel = 'Register this photo';
        this.medias = {
            audio: false,
            video: {
                facingMode: 'user',
            }
        };
        this.isGoodToRegister = function () {
            // initial state is always active to promote click
            return _this.captureData !== '' && _this.name !== '';
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.startCamera();
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.stopCamera();
    };
    RegisterComponent.prototype.startCamera = function () {
        var _this = this;
        console.log('starting camera...');
        window.navigator.mediaDevices.getUserMedia(this.medias)
            .then(function (stream) {
            _this.videoElm.nativeElement.srcObject = stream;
            _this.isCameraActive = true;
        })
            .catch(function (error) {
            console.error(error);
            alert(error);
        });
    };
    RegisterComponent.prototype.onClickCamera = function () {
        if (this.isCameraActive) {
            this.captureData = this.draw();
            this.captureData = this.captureData.replace('data:image/png;base64,', '');
            this.stopCamera();
            this.cameraButtonLabel = this.cameraLabelInactive;
        }
        else {
            this.captureData = '';
            this.startCamera();
            this.cameraButtonLabel = this.cameraLabelActive;
        }
    };
    RegisterComponent.prototype.draw = function () {
        var WIDTH = this.videoElm.nativeElement.clientWidth;
        var HEIGHT = this.videoElm.nativeElement.clientHeight;
        var ctx = this.canvasElm.nativeElement.getContext('2d');
        this.canvasElm.nativeElement.width = WIDTH;
        this.canvasElm.nativeElement.height = HEIGHT;
        return this.canvasElm.nativeElement.toDataURL(ctx.drawImage(this.videoElm.nativeElement, 0, 0, WIDTH, HEIGHT));
    };
    RegisterComponent.prototype.stopCamera = function () {
        console.log('stopping camera...');
        this.videoElm.nativeElement.pause();
        if (this.videoElm.nativeElement.srcObject !== null) {
            var track = this.videoElm.nativeElement.srcObject.getTracks()[0];
            track.stop();
        }
        this.isCameraActive = false;
    };
    RegisterComponent.prototype.onClickRegister = function () {
        this.registerPhoto();
    };
    RegisterComponent.prototype.onClickTrain = function () {
        this.trainModel();
    };
    RegisterComponent.prototype.registerPhoto = function () {
        var _this = this;
        if (!this.name) {
            this.userMessage = 'Please fill name';
        }
        else if (!this.captureData) {
            this.userMessage = 'Please take photo';
        }
        else {
            //console.log('>>', this.isExistingFace)
            this.frService.addPhoto(this.name, this.captureData, this.isExistingFace).subscribe(function (res) {
                console.log('>>Res: {} ', res);
                _this.userMessage = 'Registration done.';
            });
        }
    };
    RegisterComponent.prototype.trainModel = function () {
        var _this = this;
        if (!this.name) {
            this.userMessage = 'Please fill name';
        }
        else if (!this.captureData) {
            this.userMessage = 'Please take photo';
        }
        else {
            console.log('training model...');
            this.frService.trainModel().subscribe(function (res) {
                console.log('>>Res: {} ', res);
                _this.userMessage = 'Training done.';
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('video'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "videoElm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "canvasElm", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_face_api_service__WEBPACK_IMPORTED_MODULE_1__["FaceApiService"], src_app_services_fr_api_service__WEBPACK_IMPORTED_MODULE_2__["FrApiService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/upload/upload.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/upload/upload.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n  }\r\n  \r\n  .flexContainer {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 50px auto;\r\n    padding: 0px 30px;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .flexItem {\r\n    width: 200px;\r\n    height: auto;\r\n    margin: 30px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .person-img {\r\n    max-width: 150px;\r\n    margin: 20px;\r\n  }\r\n  \r\n  .img-container {\r\n    position: relative;\r\n  }\r\n  \r\n  .img-container i {\r\n    position: absolute;\r\n    top: 3%;\r\n    right: 3%;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .delete {\r\n    color: orangered;\r\n  }\r\n  \r\n  .hide {\r\n    display: none;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/upload/upload.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/upload/upload.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>File Upload</h1>\n<div class=\"flexContainer\">\n\n  <!-- <div class=\"img-container\" *ngIf=\"response && imageURL\">\n    <img [src]='imageURL' />\n  </div>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <input type=\"file\" name=\"profile\" (change)=\"onChange($event)\" />\n    <button mat-raised-button type=\"submit\">Upload Image File</button>\n\n  </form> -->\n  <iframe class=\"iframe\" src=\"http://localhost:5001\" frameborder=\"0\" allowfullscreen=\"\" height=\"900\" width=\"100%\">\n  </iframe>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/upload/upload.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/upload/upload.component.ts ***!
  \**************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadComponent = /** @class */ (function () {
    function UploadComponent(formBuilder, uploadService) {
        this.formBuilder = formBuilder;
        this.uploadService = uploadService;
        this.DJANGO_SERVER = 'http://127.0.0.1:8000';
        this.myTemplate = "";
        // this.uploadService.openHtml('assets/templates/index.html').subscribe(
        //   (data:any) => this.myTemplate = data
        // )
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            profile: ['']
        });
    };
    UploadComponent.prototype.onChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.form.get('profile').setValue(file);
        }
    };
    UploadComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('file', this.form.get('profile').value);
        this.uploadService.upload(formData).subscribe(function (res) {
            _this.response = res;
            _this.imageURL = "" + _this.DJANGO_SERVER + res.file;
            console.log(res);
            console.log(_this.imageURL);
        }, function (err) {
            console.log(err);
        });
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/pages/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/pages/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/services/face-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/face-api.service.ts ***!
  \**********************************************/
/*! exports provided: FaceApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceApiService", function() { return FaceApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var FaceApiService = /** @class */ (function () {
    function FaceApiService(http) {
        this.http = http;
        this.peopleUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].peopleUrl;
        //private registerUrl = environment.registerUrl;
        this.findFacesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].findFacesUrl;
    }
    FaceApiService.prototype.getPeople = function () {
        return this.http.get(this.peopleUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("List got"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listPerson')));
    };
    FaceApiService.prototype.deletePerson = function (id) {
        var url = this.peopleUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted person id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deletePerson')));
    };
    FaceApiService.prototype.findAllInImage = function (photoBase64) {
        return this.http.post(this.findFacesUrl, photoBase64).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(_); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('findAllInImage')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    FaceApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    FaceApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FaceApiService);
    return FaceApiService;
}());



/***/ }),

/***/ "./src/app/services/fr-api.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/fr-api.service.ts ***!
  \********************************************/
/*! exports provided: FrApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrApiService", function() { return FrApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var FrApiService = /** @class */ (function () {
    //DJANGO_SERVER: string = "http://127.0.0.1:8000";
    function FrApiService(http) {
        this.http = http;
        this.peopleUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].peopleUrl;
        this.findFacesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].findFacesUrl;
        this.peopleTrainingUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].peopleTrainingUrl;
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].tokenUrl;
    }
    FrApiService.prototype.getPeople = function () {
        return this.http.get(this.peopleUrl);
    };
    FrApiService.prototype.login = function (username, password) {
        var user = {
            username: username,
            password: password,
        };
        return this.http.post("" + this.loginUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log("received token=" + data.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Login')));
    };
    FrApiService.prototype.addPhoto = function (name, photo, isExisting) {
        var person = {
            name: name,
            photoBase64: photo,
            isExisting: isExisting
        };
        return this.http.post("" + this.peopleUrl, person).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (person1) { return console.log("added person w/ id=" + person1.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addPhoto')));
    };
    FrApiService.prototype.trainModel = function () {
        return this.http.get("" + this.peopleTrainingUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (person1) { return console.log("training done}"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addPhoto')));
    };
    FrApiService.prototype.deletePerson = function (id) {
        var url = this.peopleUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted person id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deletePerson')));
    };
    FrApiService.prototype.findAllInImage = function (photoBase64) {
        return this.http.post(this.findFacesUrl, photoBase64).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(_); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('findAllInImage')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    FrApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    FrApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FrApiService);
    return FrApiService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.DJANGO_SERVER = "http://127.0.0.1:8000";
    }
    UploadService.prototype.upload = function (formData) {
        return this.http.post(this.DJANGO_SERVER + "/upload/", formData);
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    peopleUrl: 'http://127.0.0.1:8000/upload/person',
    peopleTrainingUrl: 'http://127.0.0.1:8000/upload/train',
    findFacesUrl: 'http://127.0.0.1:8000/upload/stream',
    tokenUrl: 'http://127.0.0.1:8000/api-token-auth'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\py\facerecognition\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map