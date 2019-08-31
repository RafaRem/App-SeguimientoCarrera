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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"load\" style=\"height:100%; position: absolute; display:none; z-index:1100; background-color: #00000099;\">\n      <div class=\"row justify-content-center align-items-center\" style=\"height:100%\">\n            <div class=\"container\">\n                  <div class=\"row justify-content-center align-items-center\">\n                        <div class=\"spinner-border\" style=\"color:#0069D9; width:5rem; height:5rem;\" role=\"status\">\n                              <span class=\"sr-only\">Cargando...</span>\n                        </div>\n                  </div>\n                  <br>\n                  <div class=\"row justify-content-center align-items-center\">\n                        <p id=\"textCharge\" style=\"color:white; font-weight:700; font-size:32px;\" > Cargando... </p>\n                  </div>\n            </div>\n      </div>\n</div>\n\n<div class=\"container-fluid\" id=\"exito\" style=\"height:100%; position: absolute; display:none; z-index:1100;\">\n      <div class=\"row justify-content-center align-items-center\" style=\"height:100%\">\n            <div class=\"container\" style=\"background-color: #00000050; width: 160px; height: 160px; border-radius: 25px;\" >\n                  <div class=\"row justify-content-center align-items-center\" style=\"height:75%;\" >\n                        <svg class=\"mt-0\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 130.2 130.2\">\n                              <circle class=\"path circle\" fill=\"none\" stroke=\"#73AF55\" stroke-width=\"6\" stroke-miterlimit=\"10\" cx=\"65.1\" cy=\"65.1\" r=\"62.1\"/>\n                              <polyline class=\"path check\" fill=\"none\" stroke=\"#73AF55\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" points=\"100.2,40.2 51.5,88.8 29.8,67.5 \"/>\n                        </svg>\n                  </div>\n                  <div class=\"row justify-content-center align-items-center\" style=\"height:25%;\" >\n                        <p style=\"color:white; font-weight:550; font-size:20px;\" > ¡ Listo ! </p>\n                  </div>\n            </div>\n      </div>\n</div>\n<div class=\"container-fluid\" id=\"fallo\" style=\"height:100%; position: absolute; display:none; z-index:1100;\">\n      <div class=\"row justify-content-center align-items-center\" style=\"height:100%\">\n            <div class=\"container\" style=\"background-color: #00000050; width: 160px; height: 160px; border-radius: 25px;\" >\n                  <div class=\"row justify-content-center align-items-center\" style=\"height:75%;\" >\n                        <svg class=\"mt-0\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 130.2 130.2\">\n                              <circle class=\"path circle\" fill=\"none\" stroke=\"#D06079\" stroke-width=\"6\" stroke-miterlimit=\"10\" cx=\"65.1\" cy=\"65.1\" r=\"62.1\"/>\n                              <line class=\"path line\" fill=\"none\" stroke=\"#D06079\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"34.4\" y1=\"37.9\" x2=\"95.8\" y2=\"92.3\"/>\n                              <line class=\"path line\" fill=\"none\" stroke=\"#D06079\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"95.8\" y1=\"38\" x2=\"34.4\" y2=\"92.2\"/>\n                        </svg>\n                  </div>\n                  <div class=\"row justify-content-center align-items-center\" style=\"height:25%;\" >\n                        <p style=\"color:white; font-weight:550; font-size:20px;\" > ¡ Fallo ! </p>\n                  </div>\n            </div>\n      </div>\n</div>\n<div class=\"container-fluid\" id=\"load\" style=\"height:100%; position: absolute; display:none; z-index:1100; background-color: #00000099;\">\n      <div class=\"row justify-content-center align-items-center\" style=\"height:100%\">\n            <div class=\"container\">\n                  <div class=\"row justify-content-center align-items-center\">\n                        <div class=\"spinner-border\" style=\"color:#0069D9; width:5rem; height:5rem;\" role=\"status\">\n                              <span class=\"sr-only\">Cargando...</span>\n                        </div>\n                  </div>\n                  <br>\n                  <div class=\"row justify-content-center align-items-center\">\n                        <p id=\"textCharge\" style=\"color:white; font-weight:700; font-size:32px;\" > Cargando... </p>\n                  </div>\n            </div>\n      </div>\n</div>\n<div class=\"cabezera \">\n      <div class=\"container-fluid\" >\n       <img src=\"../../../assets/uascontrol.png\" routerLink=\"/\" class=\"rounded float-left\" alt=\"...\">\n       <div class=\"row justify-content-center texto\">      \n      </div>\n</div>\n</div>\n<br>\n<br>\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-sm-offset-1 col-md-offset 2\">\n<div><router-outlet ></router-outlet></div>\n</div>\n"

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
/* harmony import */ var _servicio_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicio/functions.service */ "./src/app/servicio/functions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(functionsService) {
        this.functionsService = functionsService;
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_servicio_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_servicio_alumno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/servicio/alumno.service */ "./src/app/servicio/alumno.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_alumnos_alumnos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/alumnos/alumnos.component */ "./src/app/componentes/alumnos/alumnos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _componentes_pdf_pdfextraction_pdfextraction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/pdf/pdfextraction/pdfextraction.component */ "./src/app/componentes/pdf/pdfextraction/pdfextraction.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _componentes_consultas_consultas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/consultas/consultas.component */ "./src/app/componentes/consultas/consultas.component.ts");
/* harmony import */ var _generacion_generacion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generacion/generacion.component */ "./src/app/generacion/generacion.component.ts");
/* harmony import */ var _componentes_carreras_carreras_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/carreras/carreras.component */ "./src/app/componentes/carreras/carreras.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', component: _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"] },
    { path: 'extalum', component: _componentes_alumnos_alumnos_component__WEBPACK_IMPORTED_MODULE_6__["AlumnosComponent"] },
    { path: 'con', component: _componentes_consultas_consultas_component__WEBPACK_IMPORTED_MODULE_12__["ConsultasComponent"] },
    { path: 'gen', component: _generacion_generacion_component__WEBPACK_IMPORTED_MODULE_13__["GeneracionComponent"] },
    { path: 'carrera', component: _componentes_carreras_carreras_component__WEBPACK_IMPORTED_MODULE_14__["CarrerasComponent"] },
    { path: '**', component: _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _componentes_alumnos_alumnos_component__WEBPACK_IMPORTED_MODULE_6__["AlumnosComponent"],
                _componentes_pdf_pdfextraction_pdfextraction_component__WEBPACK_IMPORTED_MODULE_10__["PdfextractionComponent"],
                _componentes_consultas_consultas_component__WEBPACK_IMPORTED_MODULE_12__["ConsultasComponent"],
                _generacion_generacion_component__WEBPACK_IMPORTED_MODULE_13__["GeneracionComponent"],
                _componentes_carreras_carreras_component__WEBPACK_IMPORTED_MODULE_14__["CarrerasComponent"],
                _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_11__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],],
            providers: [_app_servicio_alumno_service__WEBPACK_IMPORTED_MODULE_2__["AlumnoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentes/alumnos/alumnos.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/alumnos/alumnos.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabezera{\r\n    height: 150px;\r\n    width: 100%;\r\n    background-color: #103F91;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.texto{\r\n    font-family: \"Latin Modern Roman 10\";\r\n    font-weight: 900;\r\n    font-size: 35px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\na{\r\n    background-color: #103F91;\r\n    color: white;\r\n}\r\n\r\na .active{\r\n    color: black !important;\r\n}\r\n\r\n.btn:hover{\r\n    background: #41A5EE !important;\r\n}\r\n\r\n.scroll{\r\n    height: 300px;\r\n\twidth: 40%;\r\n\tborder: 1px solid #ddd;\r\n\tbackground: #f1f1f1;\r\n\toverflow-y: scroll;\r\n}"

/***/ }),

/***/ "./src/app/componentes/alumnos/alumnos.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/alumnos/alumnos.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row justify-content-center\">\n<div class=\"col-md-6\">\n    <h4>Seleccione una Carrera</h4>\n    <div class=\"input-group col-md-8\">\n    <div class=\"input-group-prepend\">\n        <span><img class=\"imagenn\" src=\"./assets/mortarboard.png\" alt=\"\">  </span>\n    </div>\n    <select class=\"custom-select\" [(ngModel)]=\"lic\" (change)=\"capturar()\">   \n        <img src=\"./assets/mortarboard.png\" width=\"30\" height=\"30\" alt=\"\">                           \n        <option *ngFor=\"let ress of varcar\" value={{ress.id}}> {{ress.nombre}} </option>\n    </select>\n   </div>\n\n    <br> <br>\n    <!--<p [hidden]=\"PlanE == ''\">Haz seleccionado el Opción Plan De Estudio {{ varplane }}</p>-->\n    <h4>Seleccione plan de estudio</h4>\n    <div class=\"input-group col col-md-8\">\n        <div class=\"input-group-prepend\">\n            <span><img class=\"imagenn\" src=\"./assets/books.png\" alt=\"\">  </span>\n        </div>    \n    <select class=\"custom-select \" [(ngModel)]=\"PlanE\" (change)=\"capturarPlan()\">                              \n            <option *ngFor=\"let rest of newplan\" value={{rest.plan}}> {{rest.plan}} </option>          \n    </select>\n    </div>\n    <br> <br>\n    <input type=\"file\" multiple (change)=\"setFile($event)\"/>\n    <button class=\"btn btn-primary\" (click)=\"procesarpdf()\" [disabled]=\"!this.PlanE || !this.file\" > Cargar Archivos </button> \n    <br>\n    <br>\n    <button style=\"margin-left:5px;\" class=\"btn btn-primary\" (click)=\"insert()\" [disabled]=\"!this.activador\"> Almaenar datos </button> \n</div>\n</div>\n<br>\n<br>\n<div class=\"row justify-content-center\">\n    <div class=\"col-md-6\"><h4>{{cantalum}}</h4></div>\n</div>\n<br>\n<div class=\"row justify-content-center\" [hidden]=\"!this.activador\"> \n<div class=\"scroll col-md-6\">\n<div class=\"col col-md-12\" *ngFor=\"let ress of estudiante\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n          {{ress.nombre}}-{{ress.matricula}}\n        </div>\n      </div>\n<br>\n</div>\n</div>\n</div>\n<br>\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n"

/***/ }),

/***/ "./src/app/componentes/alumnos/alumnos.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/alumnos/alumnos.component.ts ***!
  \**********************************************************/
/*! exports provided: AlumnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnosComponent", function() { return AlumnosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicio_alumno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicio/alumno.service */ "./src/app/servicio/alumno.service.ts");
/* harmony import */ var _servicio_conexion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicio/conexion.service */ "./src/app/servicio/conexion.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servicio_cargar_pdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicio/cargar-pdf.service */ "./src/app/servicio/cargar-pdf.service.ts");
/* harmony import */ var src_app_servicio_materias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicio/materias.service */ "./src/app/servicio/materias.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_servicio_functions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicio/functions.service */ "./src/app/servicio/functions.service.ts");
/* harmony import */ var src_app_servicio_consumo_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicio/consumo-api.service */ "./src/app/servicio/consumo-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AlumnosComponent = /** @class */ (function () {
    function AlumnosComponent(API, functionsService, alumnoservice, spinnerService, conect, http, cargarpdf, materia) {
        var _this = this;
        this.API = API;
        this.functionsService = functionsService;
        this.alumnoservice = alumnoservice;
        this.spinnerService = spinnerService;
        this.conect = conect;
        this.http = http;
        this.cargarpdf = cargarpdf;
        this.materia = materia;
        this.activador = "";
        this.materias = [];
        this.maskardex = [];
        this.estudiante = [];
        this.datos = [];
        this.mat = [];
        this.functionsService.prepare(document.getElementById("load"), document.getElementById("textCharge"), document.getElementById("exito"), document.getElementById("fallo"));
        this.API.obtenerCarrera().subscribe(function (res) {
            _this.varcar = res;
        }, function (e) {
        });
    }
    AlumnosComponent.prototype.ngOnInit = function () {
    };
    AlumnosComponent.prototype.capturar = function () {
        var _this = this;
        this.newplan = undefined;
        this.API.obtenerPlanxcar(this.lic).subscribe(function (res) {
            _this.newplan = res;
        }, function (e) {
        });
    };
    AlumnosComponent.prototype.capturarPlan = function () {
        var _this = this;
        this.API.obtenerplanpdf(this.PlanE, this.lic).subscribe(function (res) {
            console.log(res);
            _this.materias = res;
        }, function (e) {
        });
    };
    AlumnosComponent.prototype.cargapdf = function (event) {
        //Carga el archivo al servidor para ser analisado
        this.functionsService.cargando();
        if (event.target.files && event.target.files[0]) {
            var foto = event.target.files[0];
            var formdata = new FormData();
            formdata.append('foto', foto);
            this.http.post('http://localhost:3000/uploadpdf', formdata)
                .subscribe(function (res) { return console.log("carga exitosa"); });
        } //imprime un error en caso de existir
        else {
            console.log("error");
        }
    };
    //inserta en la base de datos firebase la informacion del alumno
    AlumnosComponent.prototype.insert = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /*el arreglo estudiate contiene arreglos de la informacion de cada alumno por karde del pdf*/
                this.API.crearAlumno(this.estudiante).subscribe(function (res) {
                    if (res.status == 200) {
                        console.log(res);
                    }
                    else {
                        console.log(res);
                    }
                }, function (e) {
                    console.log(e);
                });
                return [2 /*return*/];
            });
        });
    };
    //se toma el pdf
    AlumnosComponent.prototype.setFile = function (event) {
        this.file = event.srcElement.files;
        this.maskardex = [];
        this.estudiante = [];
    };
    //
    AlumnosComponent.prototype.procesarpdf = function () {
        var _this = this;
        this.functionsService.cargando();
        this.cargarpdf.sendFile(this.file).subscribe(function (a) {
            //se envia todo el texto del pdf para ser separ cada kardex de uno en uno en un arreglo
            _this.separar(a);
        }, function (e) {
            //se imprime el error en caso de existir
            _this.functionsService.terminar(false);
        });
    };
    AlumnosComponent.prototype.separar = function (arraypdf) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _loop_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pdfmate = arraypdf[0];
                        _loop_1 = function (i) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            //se envia todo el texto para ser separado mediante recursividad
                                            _this.cardex(arraypdf[i]);
                                            resolve();
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < arraypdf.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.functionsService.terminar(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    //Seperar el cardex multiple en uno
    AlumnosComponent.prototype.cardex = function (text) {
        if (text.indexOf("ENCARGADO(A)") != -1) {
            this.maskardex.push(text.substring(0, text.indexOf("ENCARGADO(A)") + 31));
            var newtext = text.substring(text.indexOf("ENCARGADO(A)") + 31);
            this.cardex(newtext);
        }
        else {
            for (var i = 0; i < this.maskardex.length; i++) {
                //se envia cada kardex para extrar su informacion
                this.extraerdatospdf(this.maskardex[i]);
            }
        }
    };
    AlumnosComponent.prototype.extraerdatospdf = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var newtext, facultad, newtext, UNI, newtext, Alumno, newtext, cuenta, newtext, carrera, newtext, ciclo, i, buscarli, cal;
            return __generator(this, function (_a) {
                newtext = text.substring(text.search("-") + 1);
                facultad = newtext.substring(0, newtext.search(","));
                newtext = newtext.substring(newtext.search(",") + 8);
                UNI = newtext.substring(0, newtext.search(","));
                newtext = newtext.substring(newtext.search("C.") + 3);
                Alumno = newtext.substring(0, (newtext.search("con") - 1));
                newtext = newtext.substring(newtext.search("cuenta:") + 8);
                cuenta = newtext.substring(0, newtext.search(";"));
                cuenta = cuenta.trim();
                newtext = newtext.substring(newtext.search("carrera") + 8);
                carrera = newtext.substring(0, newtext.search("y") - 1);
                newtext = newtext.substring(newtext.search("GENERACIÓN") - 13);
                ciclo = newtext.substring(1, 12);
                ciclo = ciclo.replace("\n", " ");
                //se obtienen las materias dependiendo del plan de estudio
                /*await new Promise((resolve, reject) => {
                  this.materias = this.materia.getmatri();
                  console.log(this.materias)
                      resolve();
                
                });*/
                //correccion del texto en caso de espacios a los extremos
                facultad = facultad.replace("\n", " ");
                Alumno = Alumno.trim();
                carrera = carrera.replace("\n", " ");
                carrera = carrera.replace("  ", " ");
                carrera = carrera.trim();
                newtext = text.substring(text.search("-") + 1);
                this.datos = [];
                //Analisis de la calificación por cada materia
                for (i = 0; i < this.materias.length; i++) {
                    this.mate = this.materias[i].clave; //.clave;
                    if (newtext.search(this.mate + " ") == -1) {
                    }
                    else {
                        buscarli = newtext.substring(newtext.search(this.mate));
                        cal = buscarli.substring(41, 43);
                        //var newtext = newtext.substring("\n");
                        cal = cal.replace(" ", " ");
                        this.datos.push({
                            "clave": this.mate,
                            "nombre": this.materias[i].nombre,
                            "cal": cal,
                            "matricula": cuenta
                        });
                    }
                }
                //cargo datos al arreglo de estudiante
                this.estudiante.push({
                    "nombre": Alumno,
                    "generacion": ciclo,
                    "matricula": cuenta,
                    "plan": this.PlanE,
                    "idcarrera": this.lic,
                    "idfacultad": 2,
                    "status": 1,
                    "materias": this.datos
                });
                console.log(this.estudiante);
                this.cantalum = "Alumnos Capturados: " + this.estudiante.length;
                //activo el boton para registrar la informacion
                this.activador = "activar ";
                return [2 /*return*/];
            });
        });
    };
    AlumnosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alumnos',
            template: __webpack_require__(/*! ./alumnos.component.html */ "./src/app/componentes/alumnos/alumnos.component.html"),
            styles: [__webpack_require__(/*! ./alumnos.component.css */ "./src/app/componentes/alumnos/alumnos.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicio_consumo_api_service__WEBPACK_IMPORTED_MODULE_8__["ConsumoAPIService"], src_app_servicio_functions_service__WEBPACK_IMPORTED_MODULE_7__["FunctionsService"], _servicio_alumno_service__WEBPACK_IMPORTED_MODULE_1__["AlumnoService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"], _servicio_conexion_service__WEBPACK_IMPORTED_MODULE_2__["ConexionService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _servicio_cargar_pdf_service__WEBPACK_IMPORTED_MODULE_4__["CargarPdfService"], src_app_servicio_materias_service__WEBPACK_IMPORTED_MODULE_5__["MateriasService"]])
    ], AlumnosComponent);
    return AlumnosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/carreras/carreras.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/carreras/carreras.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabezera{\r\n    height: 150px;\r\n    width: 100%;\r\n    background-color: #103F91;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.trans{\r\n    background-color: #103F91;\r\n    text-align: center;\r\n}\r\n\r\n.btn:hover{\r\n    background: #41A5EE !important;\r\n}\r\n\r\n.modal{\r\n    position: fixed;\r\n}\r\n\r\n.texto{\r\n    font-family: \"Latin Modern Roman 10\";\r\n    font-weight: 900;\r\n    font-size: 35px;\r\n    color: white;\r\n    text-align: justify;\r\n    margin-left: 40%;\r\n}\r\n\r\na{\r\n    background-color: #103F91;\r\n    color: white;\r\n}\r\n\r\na .active{\r\n    color: black !important;\r\n}\r\n\r\n.modal-header{\r\n    background-color: #103F91;\r\n    color: white;\r\n}\r\n\r\n.modal-footer{\r\n    background-color: slategray;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/componentes/carreras/carreras.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/carreras/carreras.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h4>Carrera</h4>\n        <input class=\"col-md-8\" type=\"text\" [(ngModel)]=\"carNom\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modificarCarrera()\" data-toggle=\"modal\" data-target=\"#exiss\" data-dismiss=\"modal\">Modificar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal Registro -->\n<div class=\"modal fade\" id=\"ModalR\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Registro de Carrera</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body container-fluid\">\n\n        <h4>Carrera</h4>\n        <input class=\"col-md-8\" type=\"text\" [(ngModel)]=\"carNomn\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cerrar</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"nuevo()\"  data-dismiss=\"modal\">Guardar</button>\n      </div>\n    </div>\n  </div>\n</div>\n              \n<div class=\"row  justify-content-md-center\" >\n  <div class=\"col-md-8\" >\n      <button class=\"btn btn-outline-primary\" type=\"button\"  data-toggle=\"modal\" data-target=\"#ModalR\">Crear Nueva Carrera</button>\n      <br><br><br>    \n      <div class=\"card\" *ngFor=\"let ress of carrera\">\n          <div class=\"input-group\">\n          <div class=\"card-body\" aria-describedby=\"button-addon4\">\n                {{ress.nombre}} \n                </div>\n                <div class=\"input-group-append\" id=\"button-addon4\">\n                <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"Loadmodal(ress)\" data-toggle=\"modal\" data-target=\"#exampleModal\">Modificar</button>\n                </div>\n          </div>\n      </div> \n  <br>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/componentes/carreras/carreras.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/carreras/carreras.component.ts ***!
  \************************************************************/
/*! exports provided: CarrerasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrerasComponent", function() { return CarrerasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicio_consumo_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicio/consumo-api.service */ "./src/app/servicio/consumo-api.service.ts");
/* harmony import */ var src_app_servicio_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio/functions.service */ "./src/app/servicio/functions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarrerasComponent = /** @class */ (function () {
    function CarrerasComponent(API, functionsService) {
        var _this = this;
        this.API = API;
        this.functionsService = functionsService;
        this.exis = 1;
        this.estado = "";
        this.functionsService.prepare(document.getElementById("load"), document.getElementById("textCharge"), document.getElementById("exito"), document.getElementById("fallo"));
        this.API.obtenerCarrera().subscribe(function (res) {
            _this.carrera = res;
        }, function (e) {
        });
    }
    CarrerasComponent.prototype.ngOnInit = function () {
        this.carrera;
    };
    CarrerasComponent.prototype.crearCarrera = function (carrera) {
        var _this = this;
        this.functionsService.cargando();
        this.API.crearCarrera(this.carrera).subscribe(function (res) {
            if (res.status == 200) {
                _this.functionsService.terminar(true);
            }
            else {
                _this.functionsService.terminar(false);
            }
        }, function (e) {
        });
    };
    CarrerasComponent.prototype.Loadmodal = function (carrera) {
        this.carNom = carrera.nombre;
        this.modificar = carrera;
    };
    CarrerasComponent.prototype.nuevo = function () {
        var nueva = {
            nombre: this.carNomn.toUpperCase(),
            idfac: 2
        };
        this.API.crearCarrera(nueva).subscribe(function (res) {
            console.log(res);
        }, function (e) {
        });
    };
    CarrerasComponent.prototype.modificarCarrera = function () {
        var _this = this;
        this.functionsService.cargando();
        this.modificar.nombre = this.carNom.toUpperCase();
        this.API.modificarCarrera(this.modificar).subscribe(function (res) {
            console.log(res);
            if (res.status == 200) {
                _this.functionsService.terminar(true);
            }
            else {
                _this.functionsService.terminar(false);
            }
        }, function (e) {
        });
    };
    CarrerasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carreras',
            template: __webpack_require__(/*! ./carreras.component.html */ "./src/app/componentes/carreras/carreras.component.html"),
            styles: [__webpack_require__(/*! ./carreras.component.css */ "./src/app/componentes/carreras/carreras.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicio_consumo_api_service__WEBPACK_IMPORTED_MODULE_1__["ConsumoAPIService"], src_app_servicio_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]])
    ], CarrerasComponent);
    return CarrerasComponent;
}());



/***/ }),

/***/ "./src/app/componentes/consultas/consultas.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/consultas/consultas.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".yes{\r\n    background-color: green;\r\n    color: white;\r\n    text-align: center;\r\n    size: 25px;\r\n}\r\n.no{\r\n    background-color: red;\r\n    color: white;\r\n    text-align: center;\r\n    size: 25px;\r\n}\r\n.custom{\r\n    width: 25rem;\r\n}\r\n.custom2{\r\n    width: 10rem;\r\n}\r\n.modal-header{\r\n    background-color: red;\r\n    color: white;\r\n}\r\n.modal-footer{\r\n    background-color: slategray;\r\n    color: white;\r\n}\r\n.cabezera{\r\n    height: 150px;\r\n    width: 100%;\r\n    background-color: #103F91;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}\r\n.texto{\r\n    font-family: \"Latin Modern Roman 10\";\r\n    font-weight: 900;\r\n    font-size: 35px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\na{\r\n    background-color: #103F91;\r\n    color: white;\r\n}\r\na .active{\r\n    color: black !important;\r\n}\r\n.tab-content{\r\n    border-color: #103F91 !important;\r\n\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 6px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form):not(.ng-untouched)  {\r\n    border-left: 6px solid #a94442; /* red */\r\n}  "

/***/ }),

/***/ "./src/app/componentes/consultas/consultas.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/consultas/consultas.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">Alumnos Reprobados</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row  justify-content-md-center\" >\n      <div class=\"col-md-12\" *ngFor=\"let ress of alumnosrep\">\n          <div class=\"card\">\n          <div class=\"card-body\" aria-describedby=\"button-addon4\">\n              {{ress}} \n              </div>\n            </div>\n      </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      \n      <img src=\"./assets/uascontrol.png\" class=\"rounded float-right\" alt=\"...\">\n   </div>\n  </div>\n</div>\n</div>\n<div class=\"row  justify-content-md-center\">\n  <div class=\"col-md-8\">\n    <br>\n    <br>\n      <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" (click)=\"limpiar()\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Alumno</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"limpiar()\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Materia</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"limpiar()\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Generación</a>\n          </li> \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"limpiar()\" id=\"mejor-tab\" data-toggle=\"tab\" href=\"#mejor\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Mejor Promedio</a>\n          </li>\n\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <br>\n            <form #MatForm=\"ngForm\">   \n            <label for=\"datamatricula\">Matricula del alumno</label><br>\n            <div class=\"input-group col-md-8\">\n                <div class=\"input-group-prepend\">\n                    <span><img class=\"imagenn\" src=\"./assets/id.png\" alt=\"\">  </span>\n                </div>\n                    <input type=\"text\" name=\"datamatricula\" [(ngModel)]=\"datamatricula\" required pattern=\"[0-9]{7}-[0-9]\"><br>\n            </div>\n            <br>\n            <button class=\"btn btn-primary\" (click)=\"promedioxalumno()\" [disabled]=\"MatForm.form.invalid\"> Promedio por alumno </button>\n          </form>\n          </div>\n        <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n          <form #ClaveForm=\"ngForm\"> \n            <br>\n            <label for=\"mcarrera\">carrera*</label>                \n            <div class=\"input-group col-md-8\">\n                <div class=\"input-group-prepend\">\n                  <span><img class=\"imagenn\" src=\"./assets/mortarboard.png\" alt=\"\">  </span>\n            <select [(ngModel)]=\"mcarrera\"  class=\"form-control\" name=\"carrera\" (change)=\"mcapturar()\" required>\n                    <option *ngFor=\"let ress of varcar\" value={{ress.id}}> {{ress.nombre}}</option>\n            </select>\n            </div>\n            </div>\n              <p [hidden]=\"carrera == ''\">Haz seleccionado la carrera  {{ carrera }}</p>\n              <br>\n              <label for=\"mgen\">Generación*</label> \n              <div class=\"input-group col-md-8\">\n                  <div class=\"input-group-prepend\">\n                    <span><img class=\"imagenn\" src=\"./assets/ciclo.png\" alt=\"\">  </span>\n              <select [(ngModel)]=\"mgen\"  class=\"form-control\" name=\"mgen\" (change)=\"cargarPlan()\" required>\n                  <option *ngFor=\"let ress of arraygen\" value={{ress.generacion}}> {{ress.generacion}}</option>\n              </select>\n              </div>\n              </div>\n              <br>\n              <label for=\"clavemat\">Materia solicitada*</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span><img class=\"imagenn\" src=\"./assets/class.png\" alt=\"\">  </span>  \n                  <ng-select class=\"custom\" [(ngModel)]=\"clavemat\" name=\"clavemat\" (change)=\"pruebaa()\" [items]=\"varmateria\"  \n                    bindLabel=\"nombre\" \n                    bindValue=\"clave\"\n                    required pattern=\"[0-9]{4}\" maxlength=\"4\">   \n                  </ng-select>\n              </div>\n            </div>\n          <br>\n          <button class=\"btn btn-primary\" (click)=\"promedioxmateria()\" [disabled]=\"ClaveForm.form.invalid\"> Promedio por materia </button> \n        </form>  \n        </div>\n          <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n            <br>\n            <form #GenForm=\"ngForm\">\n              \n              <label for=\"carrera\">carrera*</label>                \n              <div class=\"input-group col-md-8\">\n                  <div class=\"input-group-prepend\">\n                      <span><img class=\"imagenn\" src=\"./assets/mortarboard.png\" alt=\"\">  </span>\n                    <select [(ngModel)]=\"carrera\"  class=\"form-control\" name=\"carrera\" (change)=\"capturar()\" required>\n                          <option *ngFor=\"let ress of varcar\" value={{ress.id}}> {{ress.nombre}}</option>\n                    </select>\n                  </div>\n              </div>\n              \n              <p [hidden]=\"carrera == ''\">Haz seleccionado la carrera  {{ carrera }}</p>\n              <br>\n              <label for=\"gen\">Generación*</label>\n            <div class=\"input-group col-md-8\">\n                <div class=\"input-group-prepend\">\n                  <span><img class=\"imagenn\" src=\"./assets/ciclo.png\" alt=\"\">  </span>\n                  <select [(ngModel)]=\"gen\"  class=\"form-control\" name=\"gen\" (change)=\"capturar()\" required>\n                      <option *ngFor=\"let ress of arraygengen\" value={{ress.generacion}}> {{ress.generacion}}</option>\n                  </select>\n                </div>\n            </div>\n              <br>\n              \n              <button class=\"btn btn-primary\" (click)=\"promedioxgeneracion()\"  [disabled]=\"GenForm.form.invalid\"> Promedio por generacion </button> \n            </form>\n          </div>\n          <div class=\"tab-pane fade show\" id=\"mejor\" role=\"tabpanel\" aria-labelledby=\"mejor-tab\">\n            <br>\n            <form #mejorForm=\"ngForm\">\n            <label for=\"carrera\">carrera*</label>\n            <div class=\"input-group col-md-8\">\n              <div class=\"input-group-prepend\">\n                <span><img class=\"imagenn\" src=\"./assets/mortarboard.png\" alt=\"\">  </span>\n                             \n              <select [(ngModel)]=\"mjrcarrera\"  class=\"form-control\" name=\"mjrcarrera\" (change)=\"mjrcapturar()\" required>\n                    <option *ngFor=\"let ress of varcar\" value={{ress.id}}> {{ress.nombre}}</option>\n            </select>\n            </div>\n            </div>\n              <p [hidden]=\"carrera == ''\">Haz seleccionado la carrera  {{ carrera }}</p>\n              <br>\n              <label for=\"gen\">Generación*</label>\n              <div class=\"input-group col-md-8\">\n                  <div class=\"input-group-prepend\">\n                    <span><img class=\"imagenn\" src=\"./assets/ciclo.png\" alt=\"\">  </span>    \n              <select [(ngModel)]=\"mjrgen\"  class=\"form-control custom2\" name=\"mjrgen\" (change)=\"mjrcapturar()\" required>\n                  <option *ngFor=\"let ress of arraygengen\" value={{ress.generacion}}> {{ress.generacion}}</option>\n              </select>\n              </div>\n              </div>\n              <br>\n              <button class=\"btn btn-primary\" (click)=\"mejorpromedio()\"  [disabled]=\"mejorForm.form.invalid\"> Mejor Promedio </button> \n            </form>\n          </div>\n        </div>\n      <div class=\"form-group\">\n       \n          <br>\n          <br>\n          <div *ngIf=\"promedio>0\"  class=\"list-group-item list-group-item-action list-group-item-dark\">\n          <h1 style=\"text-align:center;\">PROMEDIO</h1>\n            \n          <h3 style=\"text-align:center;\">\n            \n            {{promedio}}</h3>\n          </div>\n              \n          <div *ngIf=\"pasaron!=null; \"><div style=\"text-align:center;\" class=\"list-group-item list-group-item-action list-group-item-success\" >{{pasaron}}</div></div>\n         \n          <div *ngIf=\"reprobados!= null;\"><div style=\"text-align:center;\"  data-toggle=\"modal\" data-target=\"#exampleModal\" class=\"list-group-item list-group-item-action list-group-item-danger\">{{reprobados}}</div></div>\n  </div>\n  </div>\n\n      \n  </div>\n"

/***/ }),

/***/ "./src/app/componentes/consultas/consultas.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/consultas/consultas.component.ts ***!
  \**************************************************************/
/*! exports provided: ConsultasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultasComponent", function() { return ConsultasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicio_conexion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicio/conexion.service */ "./src/app/servicio/conexion.service.ts");
/* harmony import */ var src_app_servicio_consumo_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio/consumo-api.service */ "./src/app/servicio/consumo-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ConsultasComponent = /** @class */ (function () {
    function ConsultasComponent(API, conect, fb) {
        var _this = this;
        this.API = API;
        this.conect = conect;
        this.fb = fb;
        this.todos = ['FACULTAD  DE INGENIERÍA MOCHIS'];
        this.array = [];
        this.arraygen = [];
        this.arraygengen = [];
        this.carrera = "";
        this.mjrcarrera = "";
        this.mcarrera = "";
        this.datamatricula = "";
        this.varcarrera = "";
        this.varmcar = "";
        this.clavemat = "";
        this.varclavemat = "";
        this.alumnosrep = [];
        this.gen = "";
        this.mjrgen = "";
        this.vargen = "";
        this.mgen = "";
        this.calificaciones = [];
        this.rep = 0;
        this.apr = 0;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.firebd = this.conect.getstore();
        this.API.obtenerCarrera().subscribe(function (res) {
            _this.varcar = res;
        }, function (e) {
        });
        //-----------------------------------------------------------------------------
    }
    ConsultasComponent.prototype.ngOnInit = function () {
        this.pasaron;
        this.reprobados;
    };
    ConsultasComponent.prototype.cargarPlan = function () {
        var _this = this;
        console.log(this.mgen);
        console.log(this.varcarrera);
        this.API.obtenerPlangen(this.mgen, this.varcarrera).subscribe(function (res) {
            console.log(res);
            _this.varmateria = res;
            _this.varmateria = res.filter(function (valorActual, indiceActual, arreglo) {
                //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
                return arreglo.findIndex(function (valorDelArreglo) { return JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual); }) === indiceActual;
            });
        }, function (e) {
        });
    };
    ConsultasComponent.prototype.mcapturar = function () {
        var _this = this;
        this.varcarrera = this.mcarrera;
        this.arraygen = [];
        this.API.obtenerGeneracion(this.varcarrera).subscribe(function (res) {
            var newarray = [];
            newarray.push(res[0]);
            for (var i in res) {
                var enc = 0;
                var noenc = 0;
                var cont = newarray;
                for (var j in cont) {
                    if (newarray[j].generacion == res[i].generacion) {
                        enc = 1;
                        break;
                    }
                }
                if (enc != 1) {
                    newarray.push(res[i]);
                    _this.arraygen = newarray;
                }
            }
        }, function (e) {
        });
        this.cargarPlan();
    };
    ConsultasComponent.prototype.capturar = function () {
        var _this = this;
        this.varcarrera = this.carrera;
        this.vargen = this.gen;
        this.varclavemat = this.clavemat;
        this.arraygengen = [];
        this.API.obtenerGeneracion(this.varcarrera).subscribe(function (res) {
            var newarray = [];
            newarray.push(res[0]);
            for (var i in res) {
                var enc = 0;
                var noenc = 0;
                var cont = newarray;
                for (var j in cont) {
                    if (newarray[j].generacion == res[i].generacion) {
                        console.log("se encontro");
                        enc = 1;
                        break;
                    }
                }
                if (enc != 1) {
                    newarray.push(res[i]);
                    _this.arraygengen = newarray;
                }
            }
        }, function (e) {
        });
    };
    ConsultasComponent.prototype.mjrcapturar = function () {
        var _this = this;
        this.varcarrera = this.mjrcarrera;
        this.vargen = this.mjrgen;
        this.API.obtenerGeneracion(this.varcarrera).subscribe(function (res) {
            var newarray = [];
            newarray.push(res[0]);
            for (var i in res) {
                var enc = 0;
                var noenc = 0;
                var cont = newarray;
                for (var j in cont) {
                    if (newarray[j].generacion == res[i].generacion) {
                        console.log("se encontro");
                        enc = 1;
                        break;
                    }
                }
                if (enc != 1) {
                    newarray.push(res[i]);
                    _this.arraygengen = newarray;
                }
            }
        }, function (e) {
        });
    };
    // obtengo los arreglos de las materias de la generacion recordatorio mever esto a un servicio
    ConsultasComponent.prototype.getDataGen = function (gen, carrera) {
        var _this = this;
        return new Promise(function (res, rej) {
            var copia = [];
            _this.API.obtenerMateriagen(gen, carrera).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.array = res;
                    this.obtenerproedio(res);
                    this.separodeDumis(res, "CATIDAD DE MATERIAS APROBADAS", "CANTIDAD DE MATERIAS REPROBADAS");
                    return [2 /*return*/];
                });
            }); }, function (e) {
                console.log(e);
            });
        });
    };
    // Mejor alumno De la generacion
    ConsultasComponent.prototype.getDataMejor = function (gen, carrera) {
        var _this = this;
        return new Promise(function (res, rej) {
            var copia = [];
            _this.API.obtenerMateriagen(gen, carrera).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.array = res;
                    this.obtenerMejor(res);
                    return [2 /*return*/];
                });
            }); }, function (e) {
                console.log(e);
            });
        });
    };
    ConsultasComponent.prototype.getdata = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.API.obtenerAlumno(_this.datamatricula).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(res);
                    this.obtenerproedio(res);
                    this.separodeDumis(res, "MATERIAS APROBADAS", "MATERIAS REPROBADAS");
                    return [2 /*return*/];
                });
            }); }, function (e) {
            });
        });
    };
    //obtener promedio de una materia por generacion 
    ConsultasComponent.prototype.promedioxmateria = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.vargen = this.mgen;
                this.getDataMat(this.clavemat, this.vargen);
                return [2 /*return*/];
            });
        });
    };
    ConsultasComponent.prototype.getDataMat = function (clave, gen) {
        var _this = this;
        return new Promise(function (res, rej) {
            var copia = [];
            _this.API.obtenerMateriamat(clave, gen).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(res);
                    this.obtenerproedio(res);
                    this.separodeDumis(res, "ALUMNOS APROBADOS", "ALUMNOS REPROBADOS");
                    return [2 /*return*/];
                });
            }); }, function (e) {
                console.log(e);
            });
        });
    };
    //promedio por alumno
    ConsultasComponent.prototype.promedioxalumno = function () {
        return __awaiter(this, void 0, void 0, function () {
            var varmateria, copia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        varmateria = this.varclavemat;
                        return [4 /*yield*/, this.getdata()];
                    case 1:
                        copia = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConsultasComponent.prototype.limpiar = function () {
        this.pasaron = undefined;
        this.reprobados = undefined;
        this.promedio = undefined;
        this.clavemat = undefined;
        this.datamatricula = null;
        this.ngOnInit();
    };
    ConsultasComponent.prototype.obtenerproedio = function (copia) {
        this.promedio = null;
        var promedio = 0; // variable par obtener el promedio
        for (var i in copia) {
            promedio += copia[i].calificacion;
        }
        promedio = promedio / copia.length;
        this.promedio = promedio;
    };
    ConsultasComponent.prototype.obtenerMejor = function (copia) {
        console.log(copia);
        var chingon;
        var promedio = 0;
        var mejorp = 0;
        var enc = 0;
        var entro = 0;
        var mejorm;
        var respaldo;
        chingon = copia[0].nombre;
        for (var _i = 0, copia_1 = copia; _i < copia_1.length; _i++) {
            var i = copia_1[_i];
            var matricula = i.nombre;
            if (matricula == chingon) {
                promedio += i.calificacion;
                chingon = matricula;
                enc += 1;
            }
            else if (matricula != chingon) {
                entro += 1;
                if (promedio > mejorp) {
                    mejorm = chingon;
                    mejorp = promedio;
                    if (entro == 1) {
                        respaldo = enc;
                    }
                    enc = 1;
                }
                promedio = i.calificacion;
                chingon = matricula;
            }
        }
        if (entro == 0) {
            mejorm = chingon;
            mejorp = promedio;
        }
        console.log(respaldo);
        this.promedio = mejorp / respaldo;
        this.pasaron = "MEJOR ESTUDIANTE: " + mejorm;
    };
    ConsultasComponent.prototype.separodeDumis = function (copia, mensajev, mensajer) {
        this.pasaron = null;
        this.reprobados = null;
        var menzos = 0;
        var dostres = 0;
        for (var i in copia) {
            var enc = 0;
            if (copia[i].calificacion >= 6) {
                dostres += 1;
            }
            else {
                menzos += 1;
                if (this.alumnosrep.length == 0) {
                    console.log("se inserto uno");
                    this.alumnosrep.push(copia[i].nombre);
                }
                else {
                    for (var j in this.alumnosrep) {
                        console.log("PENDEJO" + this.alumnosrep[j]);
                        console.log("COMPIA " + copia[i].nombre);
                        if (this.alumnosrep[j] == copia[i].nombre) {
                            enc = 1;
                            break;
                        }
                    }
                    if (enc != 1) {
                        this.alumnosrep.push(copia[i].nombre);
                    }
                }
            }
        }
        this.pasaron = mensajev + " " + dostres;
        this.reprobados = mensajer + " " + menzos;
        console.log(this.alumnosrep);
    };
    //promedio general del ciclo escolar y a demas obtengo los reprobados por materia
    ConsultasComponent.prototype.promedioxgeneracion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getDataGen(this.vargen, this.varcarrera);
                return [2 /*return*/];
            });
        });
    };
    ConsultasComponent.prototype.mejorpromedio = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getDataMejor(this.vargen, this.varcarrera);
                return [2 /*return*/];
            });
        });
    };
    ConsultasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultas',
            template: __webpack_require__(/*! ./consultas.component.html */ "./src/app/componentes/consultas/consultas.component.html"),
            styles: [__webpack_require__(/*! ./consultas.component.css */ "./src/app/componentes/consultas/consultas.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_servicio_consumo_api_service__WEBPACK_IMPORTED_MODULE_2__["ConsumoAPIService"], src_app_servicio_conexion_service__WEBPACK_IMPORTED_MODULE_1__["ConexionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ConsultasComponent);
    return ConsultasComponent;
}());



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabezera{\r\n  height: 150px;\r\n  width: 100%;\r\n  background-color:#052654;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.texto{\r\n  font-family: \"Latin Modern Roman 10\";\r\n  font-weight: 900;\r\n  font-size: 35px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\na{\r\n  background-color: #103F91;\r\n  color: white;\r\n}\r\n\r\na .active{\r\n  color: black !important;\r\n}\r\n\r\n.btn-sq-lg {\r\n    background: #052654 !important;\r\n    width: 150px !important;\r\n    height: 150px !important;\r\n    padding:2px;\r\n    margin: 3px;\r\n  }\r\n\r\n.btn-sq {\r\n    background: #052654 !important;\r\n    width: 100px !important;\r\n    height: 100px !important;\r\n    font-size: 10px;\r\n    padding:2px;\r\n    margin: 3px;\r\n  }\r\n\r\n.btn-sq-sm {\r\n    background: #052654 !important;\r\n    width: 50px !important;\r\n    height: 50px !important;\r\n    font-size: 10px;\r\n    margin: 3px;\r\n  }\r\n\r\n.btn-sq-xs {\r\n    background: #052654 !important;\r\n    width: 25px !important;\r\n    height: 25px !important;\r\n    padding:2px;\r\n    margin: 3px;\r\n  }\r\n\r\n.btn:hover{\r\n    background: #41A5EE !important;\r\n}"

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.html":
/*!******************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container justify-content-center\">\n  <div class=\"row justify-content-center\">\n    <p>\n      <a routerLink=\"extalum\" class=\"btn btn-sq-lg btn-primary\">\n          <br>\n          <img src=\"./assets/pdf.png\"   style=\"width: 50%; height: 50%;\" alt=\"...\"> <br>\n          <i class=\"fa fa-user fa-5x\"></i><br/>\n          Extraer Datos PDF<br>\n      </a>\n      <a routerLink=\"con\" class=\"btn btn-sq-lg btn-primary\">\n          <br>\n          <img src=\"./assets/learn.png\"   style=\"width: 50%; height: 50%;\" alt=\"...\"> <br>\n          <i class=\"fa fa-user fa-5x\"></i><br/>\n          Consultas<br>\n      </a>\n      <a routerLink=\"gen\" class=\"btn btn-sq-lg btn-primary\">\n          <br>\n          <img src=\"./assets/storage.png\"   style=\"width: 50%; height: 50%;\" alt=\"...\"> <br>\n          <i class=\"fa fa-user fa-5x\"></i><br/>\n          Plan de Estudio<br>\n      </a>\n      <a routerLink=\"carrera\" class=\"btn btn-sq-lg btn-primary\">\n          <br>\n          <img src=\"machiwi.tech/apiassets/carrera.png\"   style=\"width: 50%; height: 50%;\" alt=\"...\"> <br>\n          <i class=\"fa fa-user fa-5x\"></i><br/>\n          Carrera<br>\n      </a>\n    </p>\n  </div>\n</div>  \n"

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/componentes/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/componentes/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/componentes/pdf/pdfextraction/pdfextraction.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/pdf/pdfextraction/pdfextraction.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/pdf/pdfextraction/pdfextraction.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/pdf/pdfextraction/pdfextraction.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row justify-content-md-center\">\n\n    <div class=\"col-md-6\">\n        \n            <input type=\"file\" multiple (change)=\"setFile($event)\"/>\n            <button class=\"btn btn-primary\" (click)=\"insertar()\"> Cargar Archivos </button>\n      \n        \n        <mat-accordion>\n    \n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n               1- Primer semestre\n              </mat-expansion-panel-header>\n          \n              <div *ngFor=\"let ress of s1\">\n                <p>{{ress.clave}} {{ress.nombre}} {{ress.cal}}</p>\n              </div>\n          \n            </mat-expansion-panel>\n          \n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                2- Segundo semestre\n              </mat-expansion-panel-header>\n              \n              <div *ngFor=\"let ress of s2\">\n                  <p>{{ress.clave}} {{ress.nombre}} {{ress.cal}}</p>\n                </div>\n          \n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                3- Tercer semestre\n              </mat-expansion-panel-header>\n              \n              <div *ngFor=\"let ress of s3\">\n                  <p>{{ress.clave}} {{ress.nombre}} {{ress.cal}}</p>\n                </div>\n          \n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                4- Cuarto semestre\n              </mat-expansion-panel-header>\n              \n              <div *ngFor=\"let ress of s4\">\n                  <p>{{ress.clave}} {{ress.nombre}} {{ress.cal}}</p>\n                </div>\n          \n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                5- Quinto semestre\n              </mat-expansion-panel-header>\n              \n              <div *ngFor=\"let ress of s5\">\n                  <p>{{ress.clave}} {{ress.nombre}} {{ress.cal}}</p>\n                </div>\n          \n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                6- Sexto semestre\n              </mat-expansion-panel-header>\n              \n              <div *ngFor=\"let ress of s6\">\n                  <p>{{ress.clave}} {{ress.nombre}} {{ress.cal}}</p>\n                </div>\n          \n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                7- Septimo semestre\n              </mat-expansion-panel-header>\n              \n              <div *ngFor=\"let ress of s7\">\n                  <p>{{ress.clave}} {{ress.nombre}} {{ress.cal}}</p>\n                </div>\n          \n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                8- Octavo semestre\n              </mat-expansion-panel-header>\n              \n              <div *ngFor=\"let ress of s8\">\n                  <p>{{ress.clave}} {{ress.nombre}} {{ress.cal}}</p>\n                </div>\n          \n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                9- Noveno semestre\n              </mat-expansion-panel-header>\n              \n              <div *ngFor=\"let ress of s9\">\n                  <p>{{ress.clave}} {{ress.nombre}} {{ress.cal}}</p>\n              </div>\n          \n            </mat-expansion-panel>\n          \n          </mat-accordion>\n    </div>\n    \n      <div class=\"col-md-auto\">\n        \n        <div class=\"form-group\">\n            <div class=\"card text-center\">\n                <div class=\"card-header\">\n                    <h5>{{est.nombre}}</h5>\n                </div>\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Informcaión Extraida del Kardex</h5>\n                  <h5 class=\"card-text\">Facultad: </h5>\n                  <p class=\"card-text\">{{est.facultad}}</p>\n                  <h5 class=\"card-text\">Universidad:</h5>\n                  <p class=\"card-text\">{{est.universidad}}</p>\n                  <h5 class=\"card-text\">Carrera:</h5>\n                  <p class=\"card-text\">{{est.carrera}}</p>\n                  <h5 class=\"card-text\">Ciclo: {{est.ciclo}}</h5>\n                  <a href=\"#\" class=\"btn btn-primary\" (click)=\"insert()\">Almacenar y continuar</a>\n                </div>\n                <div class=\"card-footer text-muted\">\n                    Sursum Versus\n                </div>\n              </div>\n       \n        </div>\n      </div>\n    \n    </div>\n    \n"

/***/ }),

/***/ "./src/app/componentes/pdf/pdfextraction/pdfextraction.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/pdf/pdfextraction/pdfextraction.component.ts ***!
  \**************************************************************************/
/*! exports provided: PdfextractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfextractionComponent", function() { return PdfextractionComponent; });
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

var PdfextractionComponent = /** @class */ (function () {
    function PdfextractionComponent() {
    }
    PdfextractionComponent.prototype.ngOnInit = function () {
    };
    PdfextractionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdfextraction',
            template: __webpack_require__(/*! ./pdfextraction.component.html */ "./src/app/componentes/pdf/pdfextraction/pdfextraction.component.html"),
            styles: [__webpack_require__(/*! ./pdfextraction.component.css */ "./src/app/componentes/pdf/pdfextraction/pdfextraction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PdfextractionComponent);
    return PdfextractionComponent;
}());



/***/ }),

/***/ "./src/app/generacion/generacion.component.css":
/*!*****************************************************!*\
  !*** ./src/app/generacion/generacion.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabezera{\r\n    height: 150px;\r\n    width: 100%;\r\n    background-color: #103F91;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.texto{\r\n    font-family: \"Latin Modern Roman 10\";\r\n    font-weight: 900;\r\n    font-size: 35px;\r\n    color: white;\r\n    text-align: left;\r\n}\r\n\r\na{\r\n    background-color: #103F91;\r\n    color: white;\r\n}\r\n\r\na .active{\r\n    color: black !important;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 6px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form):not(.ng-untouched)  {\r\n    border-left: 6px solid #a94442; /* red */\r\n} \r\n\r\n"

/***/ }),

/***/ "./src/app/generacion/generacion.component.html":
/*!******************************************************!*\
  !*** ./src/app/generacion/generacion.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row  justify-content-md-center\">\n    <div class=\"col-md-8\">\n    <form #GeneralForm=\"ngForm\">\n        <label for=\"carrera\">Carrera</label>\n        <br>\n        <div class=\"form-group aling-center\" > <!--SELECCION DE LA CARRERA PARA DAR DE ALTA UN PLAN DE ESTUDIO O BIEN AGREGAR MATERIAS-->\n            <select [(ngModel)]=\"carrera\" (change)=\"capturar()\"  required name=\"carrera\" >                              \n                <option *ngFor=\"let ress of varcar\" value={{ress.id}}> {{ress.nombre}} </option>\n            </select>\n            <p [hidden]=\"carrera == invalid\">carrera seleccionada {{ carrera }}</p>\n            \n            <p>Generación que comprende el Plan de estudio</p>\n            <input type=\"text\" [(ngModel)]=\"ciclo\" placeholder=\"ejem: 2018-2019\" name=\"ciclo\" pattern=\"[0-9]{4}-[0-9]{4}\" required maxlength=\"9\">   \n        </div>\n      <div >\n        <br>  \n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\"  >\n            <li  class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#rpdf\" role=\"tab\" aria-controls=\"rpdf\" aria-selected=\"true\">Registro por PDF</a>\n            </li>\n            <li class=\"nav-item\" >\n                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#rmanual\" role=\"tab\" aria-controls=\"rmanual\" aria-selected=\"false\">Registro Manual</a>\n            </li> \n                 \n        </ul>\n    </div> \n    </form>  \n        <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active\" id=\"rpdf\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                <form #PdfForm=\"ngForm\">\n                <div class=\"form-group aling-center\" >\n                    <p>Seleccione un archivo</p>    \n                    <input type=\"file\" multiple [(ngModel)]=\"newplan\" (change)=\"setFile($event)\" name=\"newplan\" required/>\n                    <br>\n                    <br>\n                    <button class=\"btn btn-primary\" (click)=\"analizar()\" [disabled]=\"PdfForm.form.invalid||GeneralForm.form.invalid\" > Registrar Plan de Estudio </button> \n                    <br>\n                    <br>\n                </div>\n                </form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"rmanual\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                <div class=\"row  justify\">\n                    <div class=\"col-md-8\">\n                        <div class=\"form-group aling-center\" >\n                        <br>\n                        <form #ManualForm=\"ngForm\">\n                            <p>seleccione plan de estudia al que asignara la materia</p>\n                           \n                                <label for=\"planE\">Plan</label>\n                                <br>\n                                <select [(ngModel)]=\"PlanE\" (change)=\"capturarPlan()\" name=\"PlanE\" required >     \n                                    <option value=\"0\">Nuevo Plan</option>                         \n                                    <option *ngFor=\"let rest of newplanarray\" value={{rest.plan}}> {{rest.plan}} </option>  \n                                </select>\n                                <p [hidden]=\"PlanE == ''\">Haz seleccionado el Opción Plan De Estudio {{ varplane }}</p>\n                       \n                            <p>Clave</p>\n                            <input type=\"text\" [(ngModel)]=\"rclave\" class=\"form-control\" placeholder=\"xxxx\" name=\"rclave\" required>\n                            <p>Nobre</p>\n                            <input type=\"text\" [(ngModel)]=\"rnombre\" class=\"form-control\" placeholder=\"Nombre de la materia\" name=\"rnombre\" required>\n                            <br>\n                            <button class=\"btn btn-primary\" (click)=\"addmateria()\" [disabled]=\"ManualForm.form.invalid||GeneralForm.form.invalid\">Agregar Materia</button>\n                            <br> <br>\n                        </form>\n                        </div> \n                    </div>         \n                </div>\n            </div>\n        </div>\n   \n    </div>\n</div>\n\n<ng4-loading-spinner> </ng4-loading-spinner>\n"

/***/ }),

/***/ "./src/app/generacion/generacion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/generacion/generacion.component.ts ***!
  \****************************************************/
/*! exports provided: GeneracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneracionComponent", function() { return GeneracionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicio_alumno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicio/alumno.service */ "./src/app/servicio/alumno.service.ts");
/* harmony import */ var _servicio_conexion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicio/conexion.service */ "./src/app/servicio/conexion.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servicio_cargar_pdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicio/cargar-pdf.service */ "./src/app/servicio/cargar-pdf.service.ts");
/* harmony import */ var src_app_servicio_materias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicio/materias.service */ "./src/app/servicio/materias.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_servicio_functions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicio/functions.service */ "./src/app/servicio/functions.service.ts");
/* harmony import */ var _servicio_consumo_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../servicio/consumo-api.service */ "./src/app/servicio/consumo-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var GeneracionComponent = /** @class */ (function () {
    function GeneracionComponent(API, functionsService, alumnoservice, spinnerService, conect, http, cargarpdf, materia) {
        var _this = this;
        this.API = API;
        this.functionsService = functionsService;
        this.alumnoservice = alumnoservice;
        this.spinnerService = spinnerService;
        this.conect = conect;
        this.http = http;
        this.cargarpdf = cargarpdf;
        this.materia = materia;
        this.materias = [];
        this.generacion = [];
        this.arraymanual = [];
        this.functionsService.prepare(document.getElementById("load"), document.getElementById("textCharge"), document.getElementById("exito"), document.getElementById("fallo"));
        this.API.obtenerCarrera().subscribe(function (res) {
            _this.varcar = res;
            console.log(_this.varcar);
        }, function (e) {
        });
    }
    GeneracionComponent.prototype.ngOnInit = function () {
    };
    GeneracionComponent.prototype.pruebaa = function () {
        console.log(this.probando);
    };
    GeneracionComponent.prototype.loadcard = function (clave, nombre) {
        this.rclave = clave;
        this.rnombre = nombre;
    };
    GeneracionComponent.prototype.addmateria = function () {
        this.arraymanual[0] = {
            "nombre": this.rnombre.toUpperCase(),
            "clave": this.rclave,
            "plan": this.PlanE,
            "idcarrera": this.variablecar,
            "ciclo": this.ciclo
        };
        this.insert(this.arraymanual);
        /*
        if (this.arraymanual.length == 0){
          this.arraymanual.push({
            "nombre": this.rnombre,
            "clave" : this.rclave,
            "plan": this.newplan,
            "idcarrera" :this.variablecar,
            "ciclo": this.ciclo
          });
        }else{
          let cambio = false;
          for (let i in this.arraymanual) {
            if(this.rclave == this.arraymanual[i].clave){
              this.arraymanual[i].nombre=this.rnombre,
              this.arraymanual[i].clave=this.rclave,
              this.arraymanual[i].plan=this.newplan,
              this.arraymanual[i].carrera=this.variablecar,
              this.arraymanual[i].ciclo=this.ciclo
              cambio = true;
            }
            }
          if (cambio == false){
            this.arraymanual.push({
              "nombre": this.rnombre,
              "clave" : this.rclave,
              "plan": this.newplan,
              "idcarrera" :this.variablecar,
              "ciclo": this.ciclo
            });
          }
        }*/
        this.rnombre = "";
        this.rclave = "";
    };
    GeneracionComponent.prototype.deletemateria = function () {
        for (var i in this.arraymanual) {
            if (this.rclave == this.arraymanual[i].clave) {
                var ni = parseInt(i);
                this.arraymanual.splice(ni, 1);
            }
        }
    };
    GeneracionComponent.prototype.capturarPlan = function () {
        this.newplan = this.PlanE;
        if (this.newplan == 0) {
            this.capturar();
        }
        else {
            this.PlanE = this.newplan;
        }
    };
    GeneracionComponent.prototype.capturar = function () {
        var _this = this;
        this.variablecar = this.carrera; //SE OBTIENE EL ID DE LA CARRERA
        this.newplanarray = null; //VACIO EL ARREGLO DEL PLANES DE ESTUDIO DE LA CARRERA
        //this.newplan = null; // PONGO EN NULL EL VALOR DEL NUEVO PLAN
        this.API.obtenerPlan(this.variablecar).subscribe(function (res) {
            if (res[0].w != null) {
                _this.PlanE = res[0].w + 1;
            }
            else {
                _this.PlanE = 1;
            }
            console.log(_this.PlanE);
        }, function (e) {
        });
        this.API.obtenerPlanxcar(this.variablecar).subscribe(function (res) {
            _this.newplanarray = res;
        }, function (e) {
        });
    };
    //obtener archivo
    GeneracionComponent.prototype.setFile = function (event) {
        this.file = event.srcElement.files;
    };
    //obtener materias clave-nombre
    GeneracionComponent.prototype.analizar = function () {
        var _this = this;
        this.functionsService.cargando();
        this.cargarpdf.sendFile(this.file).subscribe(function (a) {
            //se envia todo el texto del pdf para ser separ cada kardex de uno en uno en un arreglo
            _this.prueba(a);
        }, function (e) {
            //se imprime el error en caso de existir
            console.log(e);
        });
    };
    GeneracionComponent.prototype.prueba = function (arraypdf) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pdfmate = arraypdf[0];
                        this.functionsService.cargando();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                //se envia todo el texto para ser separado mediante recursividad
                                _this.prueba2(_this.pdfmate);
                                resolve();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneracionComponent.prototype.prueba2 = function (text) {
        if (text.indexOf("CORRESPONDA") != -1) {
            this.functionsService.terminar(false);
            return "";
        }
        else {
            var newtext = text.trim();
            var cateo = void 0;
            var clave = void 0;
            var nombre = void 0;
            do {
                cateo = newtext.indexOf("\n");
                clave = newtext.substring(0, newtext.indexOf(" "));
                newtext = newtext.substring(newtext.indexOf(" "));
                nombre = newtext.substring(0, newtext.indexOf("\n"));
                if (cateo == -1) {
                    nombre = newtext.substring(0, 50);
                }
                clave = clave.trim();
                nombre = nombre.trim();
                this.generacion.push({
                    "nombre": nombre,
                    "clave": clave,
                    "plan": this.PlanE,
                    "idcarrera": this.variablecar,
                    "ciclo": this.ciclo
                });
                newtext = newtext.substring(newtext.indexOf("\n") + 1);
            } while (cateo != -1);
            this.insert(this.generacion);
        }
    };
    GeneracionComponent.prototype.insert = function (generacion) {
        var _this = this;
        this.functionsService.cargando();
        this.API.crearMateria(generacion).subscribe(function (res) {
            if (res.status == 200) {
                _this.functionsService.terminar(true);
                console.log("Todo salio correctamente");
            }
            else {
                _this.functionsService.terminar(false);
                console.log("Algo salio Mal");
            }
        }, function (e) {
            console.log(e);
        });
    };
    GeneracionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generacion',
            template: __webpack_require__(/*! ./generacion.component.html */ "./src/app/generacion/generacion.component.html"),
            styles: [__webpack_require__(/*! ./generacion.component.css */ "./src/app/generacion/generacion.component.css")]
        }),
        __metadata("design:paramtypes", [_servicio_consumo_api_service__WEBPACK_IMPORTED_MODULE_8__["ConsumoAPIService"], src_app_servicio_functions_service__WEBPACK_IMPORTED_MODULE_7__["FunctionsService"], _servicio_alumno_service__WEBPACK_IMPORTED_MODULE_1__["AlumnoService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"], _servicio_conexion_service__WEBPACK_IMPORTED_MODULE_2__["ConexionService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _servicio_cargar_pdf_service__WEBPACK_IMPORTED_MODULE_4__["CargarPdfService"], src_app_servicio_materias_service__WEBPACK_IMPORTED_MODULE_5__["MateriasService"]])
    ], GeneracionComponent);
    return GeneracionComponent;
}());



/***/ }),

/***/ "./src/app/servicio/alumno.service.ts":
/*!********************************************!*\
  !*** ./src/app/servicio/alumno.service.ts ***!
  \********************************************/
/*! exports provided: AlumnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoService", function() { return AlumnoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlumnoService = /** @class */ (function () {
    function AlumnoService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    AlumnoService.prototype.getalumno = function () {
        console.log(this.domain + "/pdf");
        return this.http.get(this.domain + "/pdf").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var dat = data.text;
            return dat;
        }));
    };
    AlumnoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlumnoService);
    return AlumnoService;
}());



/***/ }),

/***/ "./src/app/servicio/cargar-pdf.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicio/cargar-pdf.service.ts ***!
  \************************************************/
/*! exports provided: CargarPdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarPdfService", function() { return CargarPdfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CargarPdfService = /** @class */ (function () {
    function CargarPdfService(http) {
        this.http = http;
        this.apiURL = 'http://localhost:3000';
    }
    CargarPdfService.prototype.sendFile = function (file) {
        console.log(file);
        var formu = new FormData();
        for (var i = 0; i < file.length; i++) {
            formu.append('gatos', file[i]);
        }
        return this.http.post(this.apiURL + '/upload', formu);
    };
    CargarPdfService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    CargarPdfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CargarPdfService);
    return CargarPdfService;
}());



/***/ }),

/***/ "./src/app/servicio/conexion.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicio/conexion.service.ts ***!
  \**********************************************/
/*! exports provided: ConexionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConexionService", function() { return ConexionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app */ "../../../../../node_modules/@firebase/app/dist/esm/index.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ "../../../../../node_modules/@firebase/firestore/dist/esm/index.js");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/auth */ "../../../../../node_modules/@firebase/auth/dist/auth.js");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConexionService = /** @class */ (function () {
    function ConexionService() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAHi890tyZEQe9wzNG9z8VmgGdsZeVmehg",
            authDomain: "uascontrolescolar.firebaseapp.com",
            databaseURL: "https://uascontrolescolar.firebaseio.com",
            projectId: "uascontrolescolar",
            storageBucket: "uascontrolescolar.appspot.com",
            messagingSenderId: "536410604554"
        };
        _firebase_app__WEBPACK_IMPORTED_MODULE_1__["firebase"].initializeApp(config);
    }
    ConexionService.prototype.getstore = function () {
        return _firebase_app__WEBPACK_IMPORTED_MODULE_1__["firebase"].firestore();
    };
    ConexionService.prototype.getauth = function () {
        return _firebase_app__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth();
    };
    ConexionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConexionService);
    return ConexionService;
}());



/***/ }),

/***/ "./src/app/servicio/consumo-api.service.ts":
/*!*************************************************!*\
  !*** ./src/app/servicio/consumo-api.service.ts ***!
  \*************************************************/
/*! exports provided: ConsumoAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumoAPIService", function() { return ConsumoAPIService; });
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


var ConsumoAPIService = /** @class */ (function () {
    function ConsumoAPIService(client) {
        this.client = client;
        this.url = 'http://machiwi.tech/api/?u=';
    }
    ConsumoAPIService.prototype.obtenerMateria = function (plan, carrera) {
        return this.client.get(this.url + "selectMateria&carrera=" + carrera + "&plan=" + plan);
    };
    ConsumoAPIService.prototype.obtenerplanpdf = function (plan, carrera) {
        console.log(plan + " " + carrera);
        return this.client.get("http://machiwi.tech/api/?u=selectPlanpdf&carrera=" + carrera + "&plan=" + plan);
    };
    ConsumoAPIService.prototype.obtenerMateriagen = function (gen, carrera) {
        console.log(gen);
        return this.client.get("http://machiwi.tech/api/?u=selectMateriaGen&generacion=" + gen + "&carrera=" + carrera);
    };
    ConsumoAPIService.prototype.obtenerPlangen = function (gen, carrera) {
        console.log(gen);
        return this.client.get("http://machiwi.tech/api/?u=selectPlanCargar&generacion=" + gen + "&carrera=" + carrera);
    };
    ConsumoAPIService.prototype.obtenerMateriamat = function (clave, generacion) {
        return this.client.get("http://machiwi.tech/api/?u=selectMateriaMat&materia=" + clave + "&generacion=" + generacion);
    };
    ConsumoAPIService.prototype.crearAlumno = function (alumno) {
        return this.client.post("http://machiwi.tech/api/?u=insertAlumno", alumno);
    };
    ConsumoAPIService.prototype.crearMateria = function (materia) {
        return this.client.post("http://machiwi.tech/api/?u=insertMateria", materia);
    };
    ConsumoAPIService.prototype.crearCarrera = function (carrera) {
        return this.client.post(this.url + "insertCarrera", carrera);
    };
    ConsumoAPIService.prototype.obtenerAlumno = function (matricula) {
        return this.client.get(this.url + "selectAlumno&matricula=" + matricula);
    };
    ConsumoAPIService.prototype.obtenerCarrera = function () {
        return this.client.get(this.url + "selectCarrera");
    };
    ConsumoAPIService.prototype.obtenerGeneracion = function (carrera) {
        return this.client.get(this.url + "selectGeneracion&carrera=" + carrera);
    };
    ConsumoAPIService.prototype.obtenerPlan = function (carrera) {
        return this.client.get(this.url + "selectPlan&carrera=" + carrera);
    };
    ConsumoAPIService.prototype.obtenerPlanxcar = function (carrera) {
        return this.client.get(this.url + "selectPlanxcar&carrera=" + carrera);
    };
    ConsumoAPIService.prototype.modificarCarrera = function (carrera) {
        return this.client.post("http://machiwi.tech/api/?u=updateCarrera", carrera);
    };
    ConsumoAPIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsumoAPIService);
    return ConsumoAPIService;
}());



/***/ }),

/***/ "./src/app/servicio/functions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicio/functions.service.ts ***!
  \***********************************************/
/*! exports provided: FunctionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsService", function() { return FunctionsService; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var FunctionsService = /** @class */ (function () {
    function FunctionsService() {
    }
    FunctionsService.prototype.prepare = function (loadi, texti, exitoi, falloi) {
        this.load = loadi;
        this.text = texti;
        this.exito = exitoi;
        this.fallo = falloi;
    };
    FunctionsService.prototype.cargando = function (texi) {
        if (texi == null)
            texi = "Cargando...";
        this.text.innerHTML = texi;
        this.load.style.display = "block";
    };
    FunctionsService.prototype.terminar = function (bool) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.load.style.display = "none";
                if (bool == true) {
                    this.exito.style.display = "block";
                    setTimeout(function () {
                        _this.exito.style.display = "none";
                    }, 1000);
                }
                else if (bool == false) {
                    this.fallo.style.display = "block";
                    setTimeout(function () {
                        _this.fallo.style.display = "none";
                    }, 1000);
                }
                return [2 /*return*/];
            });
        });
    };
    FunctionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FunctionsService);
    return FunctionsService;
}());



/***/ }),

/***/ "./src/app/servicio/materias.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicio/materias.service.ts ***!
  \**********************************************/
/*! exports provided: MateriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriasService", function() { return MateriasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conexion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conexion.service */ "./src/app/servicio/conexion.service.ts");
/* harmony import */ var _consumo_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumo-api.service */ "./src/app/servicio/consumo-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MateriasService = /** @class */ (function () {
    function MateriasService(conect, API) {
        this.conect = conect;
        this.API = API;
        this.matri2 = [
            ["5101", 'MATEMÁTICAS DISCRETAS '],
            ["5102", 'ALGEBRA LINEAL '],
            ["5103", 'FUNDAMENTOS DE COMPUTACIÓN '],
            ["5104", 'ALGORITMOS Y LOGICA COMPUTACIONAL '],
            ["5105", 'LABORATORIO ALGORITMOS Y LOGICA COMPUTACIONAL'],
            ["5106", 'COMPRENCIÓN Y PRODUCCION DE TEXTOS '],
            ["5107", 'ADMINISTRACIÓN Y CONTABILIDAD '],
            ["5208", 'CÁLCULO DIFERENCIAL E INTEGRAL'], ["5209", 'ARQUITECTURA DE COMPUTADORAS '], ["5210", 'COMPRENSION Y PRODUCCION DE TEXTOS EN INGLES'],
            ["5211", 'PROGRAMACION I'], ["5212", 'LABORATORIO DE PROGRAMACIÓN I'], ["5213", 'SISTEMAS OPERATIVOS'],
            ["5214", 'LABORATORIO DE SISTEMAS OPERATIVOS'], ["5215", 'COSTOS'], ["5316", 'TEORÍA DE LA COMPUTACIÓN'],
            ["5317", 'ARQUITECTURA DE COMPUTADORAS II'], ["5318", 'LABORATORIO DE ARQUITECTURA DE COMPUTADORAS II'], ["5319", 'ESTRUCTURA DE DATOS'],
            ["5320", 'LABORATORIO DE ESTRUCTURA DE DATOS'], ["5321", 'PROGRAMACIÓN II'], ["5322", 'LABORATORIO DE PROGRAMACIÓN II'],
            ["5323", 'PROBABILIDAD Y ESTADISTICA'], ["5324", 'VALORES Y ÉTICA PROFECIONAL'], ["5425", 'INVESTIGACION Y OPERACIONES'],
            ["5426", 'INGENIERIA DE SOFTWARE I'], ["5427", 'REDES I'], ["5428", 'LABORATORIO DE REDES I'],
            ["5429", 'PROGRAMACION ORIENTADA A OBJETOS'], ["5430", 'LABORATORIO DE PROGRAMACION ORIENTADA A OBJETOS'], ["5431", 'FUNDAMENTO DE BASE DE DATOS'],
            ["5432", 'LABORATORIO FUNDAMENTOS DE BASE DE DATOS'], ["5433", 'SISTEMAS DIGITALES'], ["5534", 'INGENIERÍA ECONÓMICA'],
            ["5535", 'INGENIERÍA DE SOFTWARE II'], ["5536", 'REDES II'], ["5537", 'LABORATORIO DE REDES II'],
            ["5538", 'LENGUAJES DE PROGRAMACIÓN'], ["5539", 'LABORATORIO LENGUAJES DE PROGRAMACION'], ["5540", 'BASES DE DATOS DISTRIBUIDAS'],
            ["5541", 'LABORATORIO BASES DE DATOS DISTRIBUIDAS'], ["5542", 'METODOLOGÍA DE LA INVESTIGACIÓN'], ["5643", 'SISTEMA DE INFORMACIÓN'],
            ["5644", 'DESARROLLO DE APLICACIONES WEB I'], ["5645", 'LABORATORIO DESARROLLO DE APLICACIONES WEB I'], ["5646", 'INTERACCCIÓN HUMANO COMPUTADORA'],
            ["5647", 'LABORATORIO INTERACCIÓN HUMANO COMPUTADORA'], ["5649", 'ADMINISTRACIÓN DE PROYECTOS DE SOFTWARE I'], ["5650", 'LABORATORIO ADMINISTRACIÓN DE PROYECTOS DE SOFTWARE I'],
            ["5651", 'ADMINISTRACIÓN DE SISTEMAS'], ["5652", 'LABORATORIO ADMINISTRACIÓN DE SISTEMAS'], ["5753", 'SOFTWARE DE SISTEMAS'],
            ["5754", 'DESARROLLO DE APLICACIONES WEB II'], ["5755", 'LABORATORIO DESARROLLO DE APLICACIONES WEB II'], ["5756", 'SISTEMAS DE APOYO A LA TOMA DE DECISIONES '],
            ["5757", 'ADMINISTRACIÓN DE PROYECTOS DE SOFTWARE II'], ["5758", 'LABORATORIO ADMINISTRACIÓN DE PROYECTOS DE SOFTWARE'], ["5759", 'MODELADO DE PROCESOS'],
        ];
        /*matri:any=  [
          ["0101", 'UNA MATERIA '], ["0102", 'UNA MATERIA '], ["0103", 'UNA MATERIA '],
          ["0104", 'UNA MATERIA '], ["0105", 'UNA MATERIA '], ["1106", 'UNA MATERIA '],
          ["1107", 'UNA MATERIA '], ["1108", 'UNA MATERIA '], ["1109", 'UNA MATERIA '],
          ["1110", 'UNA MATERIA '], ["2111", 'UNA MATERIA '], ["2112", 'UNA MATERIA '],
          ["2114", 'UNA MATERIA '], ["2115", 'UNA MATERIA '], ["3116", 'UNA MATERIA '],
        ];*/
        this.matri = [];
        this.firebd = this.conect.getstore();
    }
    MateriasService.prototype.getmat = function (plan, carrera) {
        var _this = this;
        this.API.obtenerMateria(plan, carrera).subscribe(function (res) {
            console.log(res);
            _this.matri2 = res;
        }, function (e) {
        });
    };
    MateriasService.prototype.getmatri = function () {
        return this.matri2;
    };
    MateriasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_conexion_service__WEBPACK_IMPORTED_MODULE_1__["ConexionService"], _consumo_api_service__WEBPACK_IMPORTED_MODULE_2__["ConsumoAPIService"]])
    ], MateriasService);
    return MateriasService;
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
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\edgar\Desktop\Proyectos\serve\src\cliente\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map