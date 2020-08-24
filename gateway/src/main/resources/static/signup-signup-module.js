(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img class=\"user-avatar\" src=\"assets/images/logo.png\" width=\"150px\" />\n            <h1>SB Admin BS4 Angular5</h1>\n            <form role=\"form\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Full Name\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Repeat Password\">\n                    </div>\n                </div>\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/dashboard']\"> Register </a>&nbsp;\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/login']\"> Log in </a>\n            </form>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #005000;\n  text-align: center;\n  color: #fff;\n  padding: 3em;\n}\n\n.login-page .col-lg-4 {\n  padding: 0;\n}\n\n.login-page .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n\n.login-page .input-underline {\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: 0;\n}\n\n.login-page .input-underline:focus {\n  border-bottom: 2px solid #fff;\n  box-shadow: none;\n}\n\n.login-page .rounded-btn {\n  border-radius: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background: #005000;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px;\n}\n\n.login-page .rounded-btn:hover,\n.login-page .rounded-btn:focus,\n.login-page .rounded-btn:active,\n.login-page .rounded-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n\n.login-page h1 {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\n.login-page h1 small {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.login-page .form-group {\n  padding: 8px 0;\n}\n\n.login-page .form-group input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-content {\n  padding: 40px 0;\n}\n\n.login-page .user-avatar {\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZGR5dGVjL0RvY3VtZW50b3MvZG9ja2VyL21vbm9saXRvLXRvLW1pY3Jvc2VydmljZS9zb25pZmxvcmVzLWFwcC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQVhzQjtFQVl0QixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0FDRVI7O0FEQUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0VSOztBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQUk7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQUk7RUFFSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBekNrQjtFQTBDbEIsMENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQUk7Ozs7RUFJSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDRVI7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQVE7RUFDSSwrQkFBQTtBQ0VaOztBREVJO0VBQ0ksY0FBQTtBQ0FSOztBRENRO0VBQ0ksMENBQUE7QUNDWjs7QURFUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNBWjs7QURHUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNEWjs7QURJUTtFQUNJLDBDQUFBO0FDRlo7O0FES0k7RUFDSSxlQUFBO0FDSFI7O0FES0k7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgODAsIDApO1xuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxvZ2luLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAzZW07XG4gICAgLmNvbC1sZy00IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmlucHV0LWxnIHtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gICAgLmlucHV0LXVuZGVybGluZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IDAgMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gICAgLmlucHV0LXVuZGVybGluZTpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAucm91bmRlZC1idG4ge1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgfVxuICAgIC5yb3VuZGVkLWJ0bjpob3ZlcixcbiAgICAucm91bmRlZC1idG46Zm9jdXMsXG4gICAgLnJvdW5kZWQtYnRuOmFjdGl2ZSxcbiAgICAucm91bmRlZC1idG46dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBGaXJlZm94IDE4LSAqL1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOSsgKi9cbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvcm0tY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICB9XG4gICAgLnVzZXItYXZhdGFyIHtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9naW4tcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogIzAwNTAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogM2VtO1xufVxuLmxvZ2luLXBhZ2UgLmNvbC1sZy00IHtcbiAgcGFkZGluZzogMDtcbn1cbi5sb2dpbi1wYWdlIC5pbnB1dC1sZyB7XG4gIGhlaWdodDogNDZweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubG9naW4tcGFnZSAuaW5wdXQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZDogMCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmxvZ2luLXBhZ2UgLmlucHV0LXVuZGVybGluZTpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBiYWNrZ3JvdW5kOiAjMDA1MDAwO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjpob3Zlcixcbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjpmb2N1cyxcbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjphY3RpdmUsXG4ubG9naW4tcGFnZSAucm91bmRlZC1idG46dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubG9naW4tcGFnZSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi5sb2dpbi1wYWdlIGgxIHNtYWxsIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWNvbnRlbnQge1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG4ubG9naW4tcGFnZSAudXNlci1hdmF0YXIge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__importDefault(__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"]
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map