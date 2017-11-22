webpackJsonp([1,4],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(154);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/NodeJS/NIP task - aveneo/angular/src/main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(314),
            styles: [__webpack_require__(312)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=D:/NodeJS/NIP task - aveneo/angular/src/app.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_search_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_validate_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_8__services_validate_service__["a" /* ValidateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=D:/NodeJS/NIP task - aveneo/angular/src/app.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(searchService, validateService, formBuilder) {
        this.searchService = searchService;
        this.validateService = validateService;
        this.formBuilder = formBuilder;
        this.foundCompany = {
            name: "",
            province: "",
            county: "",
            city: "",
            street: "",
            postal: ""
        };
        this.alert = "";
        this.searchForm = this.formBuilder.group({
            search: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(7)]]
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribing for form field changes
        this.searchForm.valueChanges.subscribe(function (data) {
            _this.onSearchSubmit();
        });
    };
    HomeComponent.prototype.onSearchSubmit = function () {
        var _this = this;
        var obj = {
            number: this.validateService.stripNonNumerics(this.searchForm.value.search) // stripping non-numerics
        };
        if (this.validateService.validateSearch(obj.number)) {
            //save request attempt to db
            this.searchService.saveRequest(obj).subscribe(function (data) {
                console.log(data);
            });
            //check for company
            this.searchService.getByNumber(obj).subscribe(function (data) {
                if (data.success && null != data.company) {
                    _this.foundCompany = data.company;
                    _this.alertFeedback("Company details below", true);
                }
                else {
                    _this.foundCompany = { name: "", province: "", county: "", city: "", street: "", postal: "" };
                    _this.alertFeedback("No match found", false);
                }
            });
        }
        else {
            this.alertFeedback("Check what you wrote", false);
        }
    };
    // alert msg function
    HomeComponent.prototype.alertFeedback = function (text, success) {
        var _this = this;
        if (success) {
            this.alert = "<p class=\"alert alert-success text-center\">\n" + text + "\n </p>";
        }
        else {
            this.alert = "<p class=\"alert alert-danger text-center\">\n" + text + "\n </p>";
        }
        var inst = setTimeout(function () {
            _this.alert = "";
        }, 3000);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(315),
            styles: [__webpack_require__(313)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=D:/NodeJS/NIP task - aveneo/angular/src/home.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/NodeJS/NIP task - aveneo/angular/src/environment.js.map

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 4%;\" class=\"container\">\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color: whitesmoke\">\n  <div class=\"container m-b-l\">\n    <h4>Examples: <strong class=\"text-success\"> NIP PL000-000-00-00, KRS 0123456789, REGON 092312345</strong></h4>\n    <form [formGroup]=\"searchForm\" class=\"m-t-l \" (submit)=\"onSearchSubmit()\">\n      <label class=\"sr-only\" for=\"search\">NIP/REGON/KRS</label>\n      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n        <input autocomplete=\"off\" formControlName=\"search\" name=\"number\" type=\"text\" class=\"form-control\" id=\"search\" placeholder=\"NIP/REGON/KRS\">\n        <button class=\"btn btn-secondary\" type=\"submit\">Search</button>\n      </div>\n    </form>\n  </div>\n  <div *ngIf=\"alert != ''\" [innerHTML]=\"alert\">\n  </div>\n  <hr>\n  <div class=\"container m-b-l\">\n    <h4 *ngIf=\"foundCompany.name != '';\">Company found:</h4>\n    <form class=\"form-group m-t-m\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"foundCompany.name\" name=\"name\" type=\"text\" class=\"form-control\" id=\"name\">\n      <div class=\"form-group row m-t-s\">\n        <div class=\"col-6\">\n          <label for=\"province\">Province</label>\n          <input [(ngModel)]=\"foundCompany.province\" name=\"province\" type=\"text\" class=\"form-control\" id=\"province\">\n        </div>\n        <div class=\"col-6\">\n          <label for=\"county\">County</label>\n          <input [(ngModel)]=\"foundCompany.county\" name=\"county\" type=\"text\" class=\"form-control\" id=\"county\">\n        </div>\n      </div>\n      <label for=\"street\">Street</label>\n      <input [(ngModel)]=\"foundCompany.street\" name=\"street\" type=\"text\" class=\"form-control\" id=\"street\">\n      <div class=\"form-group row m-t-s\">\n        <div class=\"col-6\">\n          <label for=\"city\">City</label>\n          <input [(ngModel)]=\"foundCompany.city\" name=\"city\" type=\"text\" class=\"form-control\" id=\"city\">\n        </div>\n        <div class=\"col-6\">\n          <label for=\"postal\">Postal</label>\n          <input [(ngModel)]=\"foundCompany.postal\" name=\"postal\" type=\"text\" class=\"form-control\" id=\"postal\">\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.getAll = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/companies/getAll');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.getByNumber = function (number) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/companies/getByNumber');
        return this.http.post(ep, number, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // function that creates request in db
    SearchService.prototype.saveRequest = function (number) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/requests/addRequest');
        return this.http.post(ep, number, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.prepEndpoint = function (ep) {
        return 'http://numberseeker.herokuapp.com/' + ep; // for heroku http://numberseeker.herokuapp.com/
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());

//# sourceMappingURL=D:/NodeJS/NIP task - aveneo/angular/src/search.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateSearch = function (text) {
        if (text.length < 14 && text.length > 6) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.stripNonNumerics = function (text) {
        var stripped = text.replace(/\D/g, ''); // NIP can be in XXxxx-x.. format so were removing all non-numbers
        return stripped;
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=D:/NodeJS/NIP task - aveneo/angular/src/validate.service.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.bundle.map