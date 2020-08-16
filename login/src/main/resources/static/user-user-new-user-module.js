(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-new-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user/user-new/user.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user/user-new/user.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition] style=\"margin-left: 20px;\">\n    <app-page-header [heading]=\"usuarioForm.get('nome').value === null ? 'Cadastro de usuario' : 'Alteração de usuario'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-12\" style=\"text-align: center\">\n                <form [formGroup]=\"usuarioForm\" (ngSubmit)=\"register(usuarioForm.value)\">\n                    <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n                        <strong>{{ message.text }}</strong>\n                    </div>\n                <img src=\"assets/images/logo.png\" height=\"40px\" width=\"40px\" class=\"user-avatar\" />\n                <div class=\"container col-md-4\">\n                    <mat-form-field>\n                        <input  formControlName=\"nome\" matInput placeholder=\"Nome\">\n                        <mat-error *ngIf=\"usuarioForm.get('nome').dirty && !usuarioForm.get('nome').valid && usuarioForm.get('nome').touched\">\n                            O nome é <strong>obrigatório</strong>\n                        </mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"email\" formControlName=\"email\" matInput placeholder=\"Email\">\n                        <mat-error *ngIf=\"usuarioForm.get('email').dirty && !usuarioForm.get('email').valid && usuarioForm.get('email').touched\">\n                            O Email é <strong>obrigatório.</strong>\n                        </mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"password\" formControlName=\"senha\" matInput placeholder=\"Senha\">\n                        <mat-error *ngIf=\"usuarioForm.get('senha').dirty && !usuarioForm.get('senha').valid && usuarioForm.get('senha').touched\">\n                            A senha é <strong>obrigatória</strong>\n                        </mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-select formControlName=\"grupos\" placeholder=\"Perfil do Usuário\" multiple>\n                            <mat-option *ngFor=\"let grupo of listaPerfil\" [value]=\"grupo\">{{grupo.descricao}}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"usuarioForm.get('grupos').dirty && !usuarioForm.get('grupos').valid && usuarioForm.get('grupos').touched\">\n                            O perfil é <strong>obrigatório</strong>\n                        </mat-error>\n                    </mat-form-field>\n                    <td colspan=\"2\" style=\"margin-top: 5px\">\n                        <button mat-raised-button\n                            [disabled]=\"usuarioForm.invalid\" \n                            color=\"primary\">Cadastrar</button>\n                    </td>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layout/user/user-new/user-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/user/user-new/user-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/layout/user/user-new/user.component.ts");
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
        path: '', component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user/user-new/user.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/layout/user/user-new/user.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyL3VzZXItbmV3L3VzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/user/user-new/user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/user/user-new/user.component.ts ***!
  \********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/model/user.model */ "./src/app/shared/model/user.model.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_grupo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/grupo.service */ "./src/app/shared/services/grupo.service.ts");
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








var UserComponent = /** @class */ (function () {
    function UserComponent(fb, userService, grupoService, route, router) {
        this.fb = fb;
        this.userService = userService;
        this.grupoService = grupoService;
        this.route = route;
        this.router = router;
        this.user = new _shared_model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '', new Array());
        this.listaPerfil = new Array();
        this.shared = _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance();
    }
    UserComponent.prototype.ngOnInit = function () {
        this.usuarioForm = this.fb.group({
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email])],
            senha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            grupos: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
        this.findGrupoAll();
    };
    UserComponent.prototype.findById = function (id) {
        var _this = this;
        this.userService.findById(id).subscribe(function (responseApi) {
            _this.user = new _shared_model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](responseApi['id'], responseApi['nome'], responseApi['email'], '', responseApi['grupos']);
            _this.usuarioForm.patchValue(_this.user);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserComponent.prototype.register = function (form) {
        var _this = this;
        this.message = {};
        this.findById(form['email']);
        this.user = new _shared_model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](this.user.id !== null ? this.user.id : null, form['nome'], form['email'], form['senha'], form['grupos']);
        this.userService.createOrUpdate(this.user).subscribe(function (responseApi) {
            _this.user = new _shared_model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '', new Array());
            var email = responseApi['email'];
            _this.usuarioForm.reset();
            _this.showMessage({
                type: 'success',
                text: "Usu\u00E1rio " + email + " cadastrado com sucesso"
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 5000);
    };
    UserComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        if (type === 'error' || type === 'erro' || type === 'errors') {
            type = 'danger';
        }
        this.classCss['alert-' + type] = true;
    };
    UserComponent.prototype.getFormGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    UserComponent.prototype.findGrupoAll = function () {
        var _this = this;
        this.grupoService.findAll().subscribe(function (responseApi) {
            Object.keys(responseApi).forEach(function (key) {
                _this.listaPerfil.push(responseApi[key]);
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _shared_services_grupo_service__WEBPACK_IMPORTED_MODULE_7__["GrupoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user/user-new/user.component.html")).default,
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__importDefault(__webpack_require__(/*! ./user.component.scss */ "./src/app/layout/user/user-new/user.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _shared_services_grupo_service__WEBPACK_IMPORTED_MODULE_7__["GrupoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/user-new/user.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/user/user-new/user.module.ts ***!
  \*****************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/layout/user/user-new/user-routing.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/layout/user/user-new/user.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_6__["ShowOnDirtyErrorStateMatcher"] }
            ],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-new-user-module.js.map