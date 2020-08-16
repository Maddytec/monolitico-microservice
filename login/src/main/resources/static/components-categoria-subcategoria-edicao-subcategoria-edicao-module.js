(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-categoria-subcategoria-edicao-subcategoria-edicao-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition] style=\"margin-left: 20px;\">\n    <app-page-header [heading]=\"form.get('id').value > 0 ? 'Atualização de Subcategoria': 'Cadastro de Subcategoria'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\"><strong>{{ message.text }}</strong></div>\n\n    <div class=\"card m-3\">\n        <h4 *ngIf=\"form.get('id').value > 0\" class=\"card-header\">Atualização de Subcategoria</h4>\n        <h4 *ngIf=\"form.get('id').value === null\" class=\"card-header\">Cadastro de Subcategoria</h4>\n        <div class=\"card-body mat-elevation-z8\">\n            <form [formGroup]=\"form\" (ngSubmit)=\"salvar(form.value)\">\n                <div class=\"row\">\n                    <div *ngIf=\"form.get('id').value > 0\" class=\"form-group col-md-2\">\n                        <label for=\"id\">Código</label>\n                        <input disabled formControlName=\"id\" type=\"text\" class=\"form-control\" name=\"id\" id=\"id\"\n                            placeholder=\"Código\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"nome\">Descrição</label>\n                        <input formControlName=\"descricao\" type=\"text\" class=\"form-control\" id=\"descricao\"\n                            placeholder=\"Descrição da subcategoria\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"categoria\">Categoria</label>\n                        <div class=\"input-group mb-3\">\n                            <select formControlName=\"categoria\" class=\"custom-select\" id=\"inputGroupSelect01\"\n                                (change)=\"findSubcategoriaFiltradas()\" [compareWith]=\"compararCategorias\">\n                                <option [value]=\"null\" disabled>Selecione</option>\n                                <option *ngFor=\"let categoria of categorias\" [ngValue]=\"categoria\" >\n                                    {{ categoria.descricao }}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <input class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\" value=\"Cancelar\">\n                <input \n                    [disabled]=\"!form.valid || (!form.get('descricao').dirty && !form.get('categoria').dirty)\"\n                    class=\"btn btn-primary\" \n                    type=\"submit\" \n                    value=\"Salvar\">\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: SubcategoriaEdicaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriaEdicaoRoutingModule", function() { return SubcategoriaEdicaoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subcategoria_edicao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcategoria-edicao.component */ "./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.ts");
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
        path: '', component: _subcategoria_edicao_component__WEBPACK_IMPORTED_MODULE_2__["SubcategoriaEdicaoComponent"]
    }
];
var SubcategoriaEdicaoRoutingModule = /** @class */ (function () {
    function SubcategoriaEdicaoRoutingModule() {
    }
    SubcategoriaEdicaoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SubcategoriaEdicaoRoutingModule);
    return SubcategoriaEdicaoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nbutton {\n  border-bottom-width: 0px;\n  border-top-width: 0px;\n  border-left-width: 0px;\n  border-right-width: 0px;\n  background-color: white;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.container-edicao {\n  position: relative;\n  padding: 1rem;\n  margin: 1rem -15px 0;\n  border: solid #f8f9fa;\n  border-width: 0.2rem 0 0;\n}\n\n.mat-elevation-z8 {\n  background: #005000;\n  color: #999;\n}\n\n.card-header {\n  color: #005000;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZGR5dGVjL0RvY3VtZW50b3MvZG9ja2VyL21vbm9saXRvLXRvLW1pY3Jvc2VydmljZS9zb25pZmxvcmVzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmlhL3N1YmNhdGVnb3JpYS1lZGljYW8vc3ViY2F0ZWdvcmlhLWVkaWNhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWEvc3ViY2F0ZWdvcmlhLWVkaWNhby9zdWJjYXRlZ29yaWEtZWRpY2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWEvc3ViY2F0ZWdvcmlhLWVkaWNhby9zdWJjYXRlZ29yaWEtZWRpY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDBweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4uY29udGFpbmVyLWVkaWNhbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtIC0xNXB4IDA7XG4gICAgYm9yZGVyOiBzb2xpZCAjZjhmOWZhO1xuICAgIGJvcmRlci13aWR0aDogLjJyZW0gMCAwO1xuICB9XG5cbiAgLm1hdC1lbGV2YXRpb24tejgge1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCA4MCwgMCk7XG4gICAgY29sb3I6ICM5OTk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGNvbG9yOnJnYigwLCA4MCwgMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWVkaWNhbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIC0xNXB4IDA7XG4gIGJvcmRlcjogc29saWQgI2Y4ZjlmYTtcbiAgYm9yZGVyLXdpZHRoOiAwLjJyZW0gMCAwO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJhY2tncm91bmQ6ICMwMDUwMDA7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBjb2xvcjogIzAwNTAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SubcategoriaEdicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriaEdicaoComponent", function() { return SubcategoriaEdicaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/categoria.service */ "./src/app/shared/services/categoria.service.ts");
/* harmony import */ var _shared_model_categoria_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/categoria.model */ "./src/app/shared/model/categoria.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var SubcategoriaEdicaoComponent = /** @class */ (function () {
    function SubcategoriaEdicaoComponent(formBuider, categoriaService, route) {
        this.formBuider = formBuider;
        this.categoriaService = categoriaService;
        this.route = route;
        this.categorias = new Array();
        this.subcategorias = new Array();
        this.subcategoriasFiltradas = new Array();
        this.submitted = false;
        this.shared = _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance();
    }
    SubcategoriaEdicaoComponent.prototype.ngOnInit = function () {
        this.inicializarFormulario();
        this.findCategoriaAll();
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    SubcategoriaEdicaoComponent.prototype.inicializarFormulario = function () {
        this.form = this.formBuider.group({
            id: [null],
            descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            categoria: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(SubcategoriaEdicaoComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    SubcategoriaEdicaoComponent.prototype.onReset = function () {
        this.submitted = false;
        this.form.reset();
        this.subcategoria = null;
        this.inicializarFormulario();
        this.findCategoriaAll();
    };
    SubcategoriaEdicaoComponent.prototype.findSubcategoriaFiltradas = function () {
        var _this = this;
        this.subcategoriasFiltradas = this.subcategorias.filter(function (subcategoria) {
            return subcategoria.categoriaPai !== undefined
                && subcategoria.categoriaPai.id === _this.f.categoria.value.id;
        });
    };
    SubcategoriaEdicaoComponent.prototype.findCategoriaAll = function () {
        var _this = this;
        this.categoriaService.findAll().subscribe(function (responseApi) {
            Object.keys(responseApi).forEach(function (key) {
                _this.categorias.push(responseApi[key]);
                _this.categorias = _this.categorias.filter(function (categoria) { return categoria.categoriaPai === undefined; });
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    SubcategoriaEdicaoComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 8000);
    };
    SubcategoriaEdicaoComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        if (type === 'error' || type === 'erro' || type === 'errors') {
            type = 'danger';
        }
        this.classCss['alert-' + type] = true;
    };
    SubcategoriaEdicaoComponent.prototype.salvar = function (form) {
        var _this = this;
        this.message = {};
        var id = this.subcategoria != undefined ? this.subcategoria.id : null;
        this.subcategoria = new _shared_model_categoria_model__WEBPACK_IMPORTED_MODULE_5__["Categoria"](id, this.f.descricao.value, this.f.categoria.value);
        this.categoriaService.createOrUpdate(this.subcategoria).subscribe(function (responseApi) {
            _this.subcategoria = null;
            _this.inicializarFormulario();
            _this.showMessage({
                type: 'success',
                text: _this.messagemRetorno(id)
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    SubcategoriaEdicaoComponent.prototype.messagemRetorno = function (id) {
        var messagenRetorno = '';
        if (id != null) {
            messagenRetorno = "Subcategoria atualizada com sucesso";
        }
        else {
            messagenRetorno = "Subcategoria cadastrada com sucesso";
        }
        return messagenRetorno;
    };
    SubcategoriaEdicaoComponent.prototype.findById = function (id) {
        var _this = this;
        this.categoriaService.findById(id).subscribe(function (responseApi) {
            _this.subcategoria = new _shared_model_categoria_model__WEBPACK_IMPORTED_MODULE_5__["Categoria"](responseApi['id'], responseApi['descricao'], responseApi['categoriaPai']);
            _this.form.patchValue(_this.subcategoria);
            _this.form.get('categoria').setValue(_this.subcategoria.categoriaPai);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    SubcategoriaEdicaoComponent.prototype.compararCategorias = function (objeto1, objeto2) {
        return objeto1 && objeto2 ? objeto1.descricao === objeto2.descricao : objeto1 === objeto2;
    };
    SubcategoriaEdicaoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    SubcategoriaEdicaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subcategoria-edicao',
            template: __importDefault(__webpack_require__(/*! raw-loader!./subcategoria-edicao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.html")).default,
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__importDefault(__webpack_require__(/*! ./subcategoria-edicao.component.scss */ "./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], SubcategoriaEdicaoComponent);
    return SubcategoriaEdicaoComponent;
}());



/***/ }),

/***/ "./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SubcategoriaEdicaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriaEdicaoModule", function() { return SubcategoriaEdicaoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _subcategoria_edicao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategoria-edicao.component */ "./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao.component.ts");
/* harmony import */ var _subcategoria_edicao_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategoria-edicao-routing.module */ "./src/app/components/categoria/subcategoria-edicao/subcategoria-edicao-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var SubcategoriaEdicaoModule = /** @class */ (function () {
    function SubcategoriaEdicaoModule() {
    }
    SubcategoriaEdicaoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _subcategoria_edicao_routing_module__WEBPACK_IMPORTED_MODULE_6__["SubcategoriaEdicaoRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
            ],
            declarations: [_subcategoria_edicao_component__WEBPACK_IMPORTED_MODULE_5__["SubcategoriaEdicaoComponent"]]
        })
    ], SubcategoriaEdicaoModule);
    return SubcategoriaEdicaoModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-categoria-subcategoria-edicao-subcategoria-edicao-module.js.map