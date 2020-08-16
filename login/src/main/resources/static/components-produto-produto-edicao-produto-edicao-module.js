(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-produto-produto-edicao-produto-edicao-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produto/produto-edicao/produto-edicao.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/produto/produto-edicao/produto-edicao.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition] style=\"margin-left: 20px;\">\n    <app-page-header [heading]=\"form.get('id').value > 0 ? 'Atualização de Produto': 'Cadastro de Produto'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\"><strong>{{ message.text }}</strong></div>\n\n    <div class=\"card m-3\">\n        <h4 *ngIf=\"form.get('id').value > 0\" class=\"card-header\">Atualização de Produto</h4>\n        <h4 *ngIf=\"form.get('id').value === null\" class=\"card-header\">Cadastro de Produto</h4>\n        <div class=\"card-body mat-elevation-z8\">\n            <form [formGroup]=\"form\" (ngSubmit)=\"salvar(form.value)\">\n                <div class=\"row\">\n                    <div class=\"form-group col-md-2\">\n                        <label for=\"sku\">Código</label>\n                        <input formControlName=\"sku\" type=\"text\" class=\"form-control\" name=\"sku\" id=\"sku\"\n                            placeholder=\"Código\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"nome\">Nome</label>\n                        <input formControlName=\"nome\" type=\"text\" class=\"form-control\" id=\"nome\"\n                            placeholder=\"Nome do produto\">\n                        <div *ngIf=\"submitted && f.nome.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.nome.errors.required\">O campo nome é obrigatório.</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"categoria\">Categoria</label>\n                        <div class=\"input-group mb-3\">\n                            <select formControlName=\"categoria\" class=\"custom-select\" id=\"inputGroupSelect01\"\n                                (change)=\"findSubcategoriaFiltradas()\" [compareWith]=\"compararCategorias\">\n                                <option [value]=\"null\" disabled>Selecione</option>\n                                <option *ngFor=\"let categoria of categorias\" [ngValue]=\"categoria\" >\n                                    {{ categoria.descricao }}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"subCategoria\">Subcategoria</label>\n                        <div class=\"input-group mb-3\">\n                            <select formControlName=\"subcategoria\" class=\"custom-select\" id=\"inputGroupSelect01\" [compareWith]=\"compararCategorias\">\n                                <option [value]=\"null\">Selecione</option>\n                                <option *ngFor=\"let subcategoria of subcategoriasFiltradas\" [ngValue]=\"subcategoria\">\n                                    {{ subcategoria.descricao }}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"estoque\">Estoque</label>\n                        <input formControlName=\"quantidadeEstoque\" type=\"text\" class=\"form-control\" name=\"estoque\" id=\"estoque\"\n                            placeholder=\"Estoque\">\n                    </div>\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"valor\">Valor</label>\n                        <input formControlName=\"valorUnitario\" type=\"text\" class=\"form-control\" id=\"valor\" placeholder=\"Valor\">\n                    </div>\n                </div>\n                <input class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\" value=\"Cancelar\">\n                <input [disabled]=\"!form.valid\"\n                    class=\"btn btn-primary\" \n                    type=\"submit\" value=\"Salvar\">\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/produto/produto-edicao/produto-edicao-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/produto/produto-edicao/produto-edicao-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ProdutoEdicaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoEdicaoRoutingModule", function() { return ProdutoEdicaoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _produto_edicao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produto-edicao.component */ "./src/app/components/produto/produto-edicao/produto-edicao.component.ts");
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
        path: '', component: _produto_edicao_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoEdicaoComponent"]
    }
];
var ProdutoEdicaoRoutingModule = /** @class */ (function () {
    function ProdutoEdicaoRoutingModule() {
    }
    ProdutoEdicaoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProdutoEdicaoRoutingModule);
    return ProdutoEdicaoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/produto/produto-edicao/produto-edicao.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/produto/produto-edicao/produto-edicao.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nbutton {\n  border-bottom-width: 0px;\n  border-top-width: 0px;\n  border-left-width: 0px;\n  border-right-width: 0px;\n  background-color: white;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.container-edicao {\n  position: relative;\n  padding: 1rem;\n  margin: 1rem -15px 0;\n  border: solid #f8f9fa;\n  border-width: 0.2rem 0 0;\n}\n\n.mat-elevation-z8 {\n  background: #005000;\n  color: #999;\n}\n\n.card-header {\n  color: #005000;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZGR5dGVjL0RvY3VtZW50b3MvZG9ja2VyL21vbm9saXRvLXRvLW1pY3Jvc2VydmljZS9zb25pZmxvcmVzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHV0by9wcm9kdXRvLWVkaWNhby9wcm9kdXRvLWVkaWNhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdXRvL3Byb2R1dG8tZWRpY2FvL3Byb2R1dG8tZWRpY2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdXRvL3Byb2R1dG8tZWRpY2FvL3Byb2R1dG8tZWRpY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDBweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4uY29udGFpbmVyLWVkaWNhbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtIC0xNXB4IDA7XG4gICAgYm9yZGVyOiBzb2xpZCAjZjhmOWZhO1xuICAgIGJvcmRlci13aWR0aDogLjJyZW0gMCAwO1xuICB9XG5cbiAgLm1hdC1lbGV2YXRpb24tejgge1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCA4MCwgMCk7XG4gICAgY29sb3I6ICM5OTk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGNvbG9yOnJnYigwLCA4MCwgMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWVkaWNhbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIC0xNXB4IDA7XG4gIGJvcmRlcjogc29saWQgI2Y4ZjlmYTtcbiAgYm9yZGVyLXdpZHRoOiAwLjJyZW0gMCAwO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJhY2tncm91bmQ6ICMwMDUwMDA7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBjb2xvcjogIzAwNTAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/produto/produto-edicao/produto-edicao.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/produto/produto-edicao/produto-edicao.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProdutoEdicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoEdicaoComponent", function() { return ProdutoEdicaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/categoria.service */ "./src/app/shared/services/categoria.service.ts");
/* harmony import */ var _shared_services_produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/produto.service */ "./src/app/shared/services/produto.service.ts");
/* harmony import */ var _shared_model_produto_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/model/produto.model */ "./src/app/shared/model/produto.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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








var ProdutoEdicaoComponent = /** @class */ (function () {
    function ProdutoEdicaoComponent(formBuider, categoriaService, produtoService, route) {
        this.formBuider = formBuider;
        this.categoriaService = categoriaService;
        this.produtoService = produtoService;
        this.route = route;
        this.categorias = new Array();
        this.subcategorias = new Array();
        this.subcategoriasFiltradas = new Array();
        this.submitted = false;
        this.shared = _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance();
    }
    ProdutoEdicaoComponent.prototype.ngOnInit = function () {
        this.inicializarFormulario();
        this.findCategoriaAll();
        this.findSubcategoriaAll();
        var sku = this.route.snapshot.params['id'];
        if (sku != undefined) {
            this.findBySku(sku);
        }
    };
    ProdutoEdicaoComponent.prototype.inicializarFormulario = function () {
        this.form = this.formBuider.group({
            id: [null],
            sku: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            categoria: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subcategoria: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            quantidadeEstoque: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            valorUnitario: ['']
        });
    };
    Object.defineProperty(ProdutoEdicaoComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    ProdutoEdicaoComponent.prototype.onReset = function () {
        this.submitted = false;
        this.form.reset();
        this.produto = null;
        this.inicializarFormulario();
        this.findCategoriaAll();
    };
    ProdutoEdicaoComponent.prototype.findSubcategoriaFiltradas = function () {
        var _this = this;
        this.subcategoriasFiltradas = this.subcategorias.filter(function (subcategoria) {
            return subcategoria.categoriaPai !== undefined
                && subcategoria.categoriaPai.id === _this.f.categoria.value.id;
        });
    };
    ProdutoEdicaoComponent.prototype.findSubcategoriaAll = function () {
        var _this = this;
        this.categoriaService.findAll().subscribe(function (responseApi) {
            Object.keys(responseApi).forEach(function (key) {
                _this.subcategorias.push(responseApi[key]);
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    ProdutoEdicaoComponent.prototype.findCategoriaAll = function () {
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
    ProdutoEdicaoComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 8000);
    };
    ProdutoEdicaoComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        if (type === 'error' || type === 'erro' || type === 'errors') {
            type = 'danger';
        }
        this.classCss['alert-' + type] = true;
    };
    ProdutoEdicaoComponent.prototype.salvar = function (form) {
        var _this = this;
        this.message = {};
        if (this.f.sku.value != null) {
            this.findBySku(this.f.sku.value);
        }
        var id = this.produto != undefined ? this.produto.id : null;
        this.produto = new _shared_model_produto_model__WEBPACK_IMPORTED_MODULE_6__["Produto"](id, this.f.nome.value, this.f.sku.value, this.f.valorUnitario.value, this.f.quantidadeEstoque.value, this.f.subcategoria.value);
        this.produtoService.createOrUpdate(this.produto).subscribe(function (responseApi) {
            _this.produto = null;
            _this.inicializarFormulario();
            _this.showMessage({
                type: 'success',
                text: "Produto cadastrado com sucesso"
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    ProdutoEdicaoComponent.prototype.findBySku = function (sku) {
        var _this = this;
        this.produtoService.findBySku(sku).subscribe(function (responseApi) {
            _this.produto = new _shared_model_produto_model__WEBPACK_IMPORTED_MODULE_6__["Produto"](responseApi['id'], responseApi['nome'], responseApi['sku'], responseApi['valorUnitario'], responseApi['quantidadeEstoque'], responseApi['categoria']);
            _this.form.patchValue(_this.produto);
            _this.form.get('categoria').setValue(_this.produto.categoria.categoriaPai);
            _this.categoriaService.findAll().subscribe(function () {
                _this.findSubcategoriaFiltradas();
            });
            _this.form.get('subcategoria').setValue(_this.produto.categoria);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    ProdutoEdicaoComponent.prototype.compararCategorias = function (objeto1, objeto2) {
        return objeto1 && objeto2 ? objeto1.descricao === objeto2.descricao : objeto1 === objeto2;
    };
    ProdutoEdicaoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"] },
        { type: _shared_services_produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    ProdutoEdicaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produto-edicao',
            template: __importDefault(__webpack_require__(/*! raw-loader!./produto-edicao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/produto/produto-edicao/produto-edicao.component.html")).default,
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__importDefault(__webpack_require__(/*! ./produto-edicao.component.scss */ "./src/app/components/produto/produto-edicao/produto-edicao.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"],
            _shared_services_produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ProdutoEdicaoComponent);
    return ProdutoEdicaoComponent;
}());



/***/ }),

/***/ "./src/app/components/produto/produto-edicao/produto-edicao.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/produto/produto-edicao/produto-edicao.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProdutoEdicaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoEdicaoModule", function() { return ProdutoEdicaoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _produto_edicao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produto-edicao-routing.module */ "./src/app/components/produto/produto-edicao/produto-edicao-routing.module.ts");
/* harmony import */ var _produto_edicao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produto-edicao.component */ "./src/app/components/produto/produto-edicao/produto-edicao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var ProdutoEdicaoModule = /** @class */ (function () {
    function ProdutoEdicaoModule() {
    }
    ProdutoEdicaoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _produto_edicao_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdutoEdicaoRoutingModule"],
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
            declarations: [_produto_edicao_component__WEBPACK_IMPORTED_MODULE_6__["ProdutoEdicaoComponent"]]
        })
    ], ProdutoEdicaoModule);
    return ProdutoEdicaoModule;
}());



/***/ }),

/***/ "./src/app/shared/model/produto.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/model/produto.model.ts ***!
  \***********************************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Produto = /** @class */ (function () {
    function Produto(id, nome, sku, valorUnitario, quantidadeEstoque, categoria) {
        this.id = id;
        this.nome = nome;
        this.sku = sku;
        this.valorUnitario = valorUnitario;
        this.quantidadeEstoque = quantidadeEstoque;
        this.categoria = categoria;
    }
    return Produto;
}());



/***/ })

}]);
//# sourceMappingURL=components-produto-produto-edicao-produto-edicao-module.js.map