(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-cliente-cliente-edicao-cliente-edicao-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente-edicao/cliente-edicao.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente-edicao/cliente-edicao.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition] style=\"margin-left: 20px;\">\n    <app-page-header [heading]=\"form.get('id').value > 0 ? 'Atualização de Cliente': 'Cadastro de Cliente'\"\n        [icon]=\"'fa-edit'\"></app-page-header>\n    <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\"><strong>{{ message.text }}</strong></div>\n\n    <div class=\"card m-3\">\n        <h4 *ngIf=\"form.get('id').value > 0\" class=\"card-header\">Atualização de Cliente</h4>\n        <h4 *ngIf=\"form.get('id').value === null\" class=\"card-header\">Cadastro de Cliente</h4>\n        <div class=\"card-body mat-elevation-z8\">\n            <form [formGroup]=\"form\" (ngSubmit)=\"salvar(form.value)\">\n                <div class=\"row\">\n                    <div *ngIf=\"form.get('id').value > 0\" class=\"form-group col-md-2\">\n                        <label for=\"id\">Código</label>\n                        <input \n                            disabled \n                            formControlName=\"id\" \n                            type=\"text\" \n                            class=\"form-control\" \n                            name=\"id\" \n                            id=\"id\"\n                            placeholder=\"Código\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"nome\">Nome</label>\n                        <input \n                            formControlName=\"nome\" \n                            type=\"text\" \n                            class=\"form-control\" \n                            id=\"nome\"\n                            placeholder=\"Nome do cliente\">\n                        <div *ngIf=\"form.get('nome').invalid && (form.get('nome').dirty ||\n                            form.get('nome').touched)\" class=\"alert alert-danger\"> \n                            O Nome é Obrigatório \n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"radio-inline col-md-4\" for=\"fisica\">\n                            <input \n                                formControlName=\"tipo\" \n                                value=\"FISICA\" \n                                type=\"radio\" \n                                id=\"fisica\" checked>\n                                Pessoa Física\n                        </label>\n                        <label class=\"radio-inline\" \n                               for=\"juridica\">\n                            <input formControlName=\"tipo\" \n                                   value=\"JURIDICA\" \n                                   type=\"radio\" \n                                   id=\"juridica\">\n                                   Pessoa Jurídica\n                        </label>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-4\">\n                        <label *ngIf=\"form.get('tipo').value === 'FISICA'\" for=\"documentoReceitaFederal\">CPF</label>\n                        <label *ngIf=\"form.get('tipo').value === 'JURIDICA'\" for=\"documentoReceitaFederal\">CNPJ</label>\n                        <input formControlName=\"documentoReceitaFederal\"\n                            [mask]=\"form?.get('tipo')?.value === 'FISICA' ? '000.000.000-00' : '00.000.000/0000-00'\"\n                            type=\"text\" name=\"documentoReceitaFederal\" \n                            id=\"documentoReceitaFederal\" \n                            class=\"form-control\"\n                            placeholder=\"Documento\">\n                        <div *ngIf=\"form.get('documentoReceitaFederal').invalid && (form.get('documentoReceitaFederal').dirty ||\n                            form.get('documentoReceitaFederal').touched)\" class=\"alert alert-danger\"> \n                            Documento é Obrigatório \n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"foneMovel\">Fone móvel</label>\n                        <input formControlName=\"foneMovel\" [mask]=\"'(00) 00000-0000'\" type=\"text\" id=\"foneMovel\"\n                            class=\"form-control\" placeholder=\"Fone móvel\">\n                        <div *ngIf=\"form.get('foneMovel').invalid && (form.get('foneMovel').dirty ||\n                            form.get('foneMovel').touched)\" class=\"alert alert-danger\"> \n                            Celular é Obrigatório \n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"foneFixo\">Fone fixo</label>\n                        <input formControlName=\"foneFixo\" [mask]=\"'(00) 0000-0000'\" type=\"text\" name=\"foneFixo\"\n                            id=\"foneFixo\" class=\"form-control\" placeholder=\"Fone fixo\" aria-describedby=\"helpId\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-8\">\n                        <label for=\"email\">Email</label>\n                        <input formControlName=\"email\" type=\"email\" name=\"email\" id=\"email\" class=\"form-control\"\n                            placeholder=\"Email\" aria-describedby=\"helpId\">\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <input type=\"button\" class=\"btn btn-primary mb-2\" (click)=\"adicionarEnderecos()\" value=\"Adicionar endereço\">\n                </div>\n                    <section class=\"container mb-4 p-3\" formArrayName=\"enderecos\"\n                        *ngFor=\"let endereco of enderecoControls; let i = index;\">\n                        <div [formGroupName]=\"i\">\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <h4>Endereço {{i + 1}}</h4>\n                                </div>\n                                <div class=\"col-8 text-right\">\n                                    <input \n                                        type=\"button\" \n                                        class=\"btn btn-danger btn-sm\" \n                                        (click)=\"removerEndereco(i)\"\n                                        value=\"Remove\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-2\">\n                                    <div class=\"form-group\">\n                                        <label>CEP</label>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"cep\"\n                                            placeholder=\"CEP\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-8\">\n                                    <div class=\"form-group\">\n                                        <label>Logradouro</label>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"logradouro\"\n                                            placeholder=\"Rua Soniflores\" />\n                                        <div *ngIf=\"endereco.get('logradouro').invalid && (endereco.get('logradouro').dirty ||\n                                            endereco.get('logradouro').touched)\" class=\"alert alert-danger\"> \n                                            Logradouro é Obrigatório \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>    \n                            <div class=\"row\">\n                                <div class=\"col-2\">\n                                    <div class=\"form-group\">\n                                        <label>Número</label>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"numero\"\n                                            placeholder=\"Nº\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label>Bairro</label>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"bairro\"\n                                            placeholder=\"Seu bairro\" />\n                                        <div *ngIf=\"endereco.get('bairro').invalid && (endereco.get('bairro').dirty ||\n                                            endereco.get('bairro').touched)\" class=\"alert alert-danger\"> \n                                            Bairro é Obrigatório \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-8\">\n                                    <div class=\"form-group\">\n                                        <label>Complemento</label>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"complemento\"\n                                            placeholder=\"Complemento de endereço\" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-5\">\n                                    <div class=\"form-group\">\n                                        <label>Cidade</label>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"cidade\"\n                                            placeholder=\"Cidade das Flores\" />\n                                        <div *ngIf=\"endereco.get('cidade').invalid && (endereco.get('cidade').dirty ||\n                                            endereco.get('cidade').touched)\" class=\"alert alert-danger\"> \n                                            Cidade é Obrigatória \n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"uf\">UF</label>\n                                        <select formControlName=\"uf\" \n                                                class=\"custom-select\" \n                                                id=\"uf\" \n                                                [compareWith]=\"compararEstados\" >\n                                            <option \n                                                *ngFor=\"let uf of estados\" \n                                                [ngValue]=\"uf\" >\n                                                    {{ uf }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </section>\n\n                    <input class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\" value=\"Cancelar\">\n                    <input [disabled]=\"!form.valid\" class=\"btn btn-primary\" (click)=\"scrollTop()\" type=\"submit\"\n                        value=\"Salvar\">\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/cliente/cliente-edicao/cliente-edicao-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/cliente/cliente-edicao/cliente-edicao-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ClienteEdicaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteEdicaoRoutingModule", function() { return ClienteEdicaoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cliente_edicao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-edicao.component */ "./src/app/components/cliente/cliente-edicao/cliente-edicao.component.ts");
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
        path: '', component: _cliente_edicao_component__WEBPACK_IMPORTED_MODULE_2__["ClienteEdicaoComponent"]
    }
];
var ClienteEdicaoRoutingModule = /** @class */ (function () {
    function ClienteEdicaoRoutingModule() {
    }
    ClienteEdicaoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClienteEdicaoRoutingModule);
    return ClienteEdicaoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/cliente/cliente-edicao/cliente-edicao.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cliente/cliente-edicao/cliente-edicao.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nbutton {\n  border-bottom-width: 0px;\n  border-top-width: 0px;\n  border-left-width: 0px;\n  border-right-width: 0px;\n  background-color: white;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.container-edicao {\n  position: relative;\n  padding: 1rem;\n  margin: 1rem -15px 0;\n  border: solid #f8f9fa;\n  border-width: 0.2rem 0 0;\n}\n\n.mat-elevation-z8 {\n  background: #005000;\n  color: #999;\n}\n\n.card-header {\n  color: #005000;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZGR5dGVjL0RvY3VtZW50b3MvZG9ja2VyL21vbm9saXRvLXRvLW1pY3Jvc2VydmljZS9zb25pZmxvcmVzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50ZS9jbGllbnRlLWVkaWNhby9jbGllbnRlLWVkaWNhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL2NsaWVudGUtZWRpY2FvL2NsaWVudGUtZWRpY2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL2NsaWVudGUtZWRpY2FvL2NsaWVudGUtZWRpY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDBweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4uY29udGFpbmVyLWVkaWNhbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtIC0xNXB4IDA7XG4gICAgYm9yZGVyOiBzb2xpZCAjZjhmOWZhO1xuICAgIGJvcmRlci13aWR0aDogLjJyZW0gMCAwO1xuICB9XG5cbiAgLm1hdC1lbGV2YXRpb24tejgge1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCA4MCwgMCk7XG4gICAgY29sb3I6ICM5OTk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGNvbG9yOnJnYigwLCA4MCwgMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWVkaWNhbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIC0xNXB4IDA7XG4gIGJvcmRlcjogc29saWQgI2Y4ZjlmYTtcbiAgYm9yZGVyLXdpZHRoOiAwLjJyZW0gMCAwO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJhY2tncm91bmQ6ICMwMDUwMDA7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBjb2xvcjogIzAwNTAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cliente/cliente-edicao/cliente-edicao.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cliente/cliente-edicao/cliente-edicao.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClienteEdicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteEdicaoComponent", function() { return ClienteEdicaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/cliente.service */ "./src/app/shared/services/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_cliente_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/model/cliente.model */ "./src/app/shared/model/cliente.model.ts");
/* harmony import */ var _shared_utils_estados__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/estados */ "./src/app/shared/utils/estados.ts");
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








var ClienteEdicaoComponent = /** @class */ (function () {
    function ClienteEdicaoComponent(formBuider, clienteService, route) {
        this.formBuider = formBuider;
        this.clienteService = clienteService;
        this.route = route;
        this.submitted = false;
        this.estados = new Array();
        this.shared = _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    ClienteEdicaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inicializarFormulario();
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
        else {
            this.uf = 'BA';
        }
        Object.keys(_shared_utils_estados__WEBPACK_IMPORTED_MODULE_7__["Estados"]).forEach(function (key) {
            _this.estados.push(key);
        });
    };
    ClienteEdicaoComponent.prototype.inicializarFormulario = function () {
        this.form = this.formBuider.group({
            id: [null],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tipo: ['FISICA', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            documentoReceitaFederal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            foneMovel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            foneFixo: [],
            email: [],
            enderecos: this.formBuider.array([this.novoEndereco()])
        });
    };
    ClienteEdicaoComponent.prototype.novoEndereco = function () {
        return this.formBuider.group({
            id: '',
            cep: '',
            logradouro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            numero: '',
            bairro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            complemento: '',
            cidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            uf: ['BA', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    ClienteEdicaoComponent.prototype.adicionarEnderecos = function () {
        this.enderecosForm = this.form.get('enderecos');
        this.enderecosForm.push(this.novoEndereco());
    };
    ClienteEdicaoComponent.prototype.removerEndereco = function (i) {
        this.enderecosForm.removeAt(i);
    };
    Object.defineProperty(ClienteEdicaoComponent.prototype, "enderecoControls", {
        get: function () {
            return this.form.get('enderecos')['controls'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteEdicaoComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    ClienteEdicaoComponent.prototype.onReset = function () {
        this.submitted = false;
        this.form.reset();
        this.cliente = null;
        this.inicializarFormulario();
    };
    ClienteEdicaoComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 8000);
    };
    ClienteEdicaoComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        if (type === 'error' || type === 'erro' || type === 'errors') {
            type = 'danger';
        }
        this.classCss['alert-' + type] = true;
    };
    ClienteEdicaoComponent.prototype.salvar = function (form) {
        var _this = this;
        this.message = {};
        if (this.f.email.value != null) {
            this.findByEmail(this.f.email.value);
        }
        if (this.f.id.value != null) {
            this.findById(this.f.id.value);
        }
        var id = this.cliente != undefined ? this.cliente.id : null;
        this.cliente = new _shared_model_cliente_model__WEBPACK_IMPORTED_MODULE_6__["Cliente"](id, this.f.nome.value, this.f.foneMovel.value, this.f.foneFixo.value, this.f.email.value, this.f.documentoReceitaFederal.value, this.f.tipo.value, this.f.enderecos.value);
        this.clienteService.createOrUpdate(this.cliente).subscribe(function (responseApi) {
            _this.cliente = null;
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
    ClienteEdicaoComponent.prototype.messagemRetorno = function (id) {
        var messagenRetorno = '';
        if (id != null) {
            messagenRetorno = "Cliente atualizado com sucesso";
        }
        else {
            messagenRetorno = "Cliente cadastrado com sucesso";
        }
        return messagenRetorno;
    };
    ClienteEdicaoComponent.prototype.findById = function (id) {
        var _this = this;
        this.clienteService.findById(id).subscribe(function (responseApi) {
            _this.cliente = new _shared_model_cliente_model__WEBPACK_IMPORTED_MODULE_6__["Cliente"](responseApi['id'], responseApi['nome'], responseApi['foneMovel'], responseApi['foneFixo'], responseApi['email'], responseApi['documentoReceitaFederal'], responseApi['tipo'], responseApi['enderecos']);
            for (var x = 0; x < _this.cliente.enderecos.length - 1; x++) {
                _this.adicionarEnderecos();
            }
            _this.form.patchValue(_this.cliente);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    ClienteEdicaoComponent.prototype.findByEmail = function (email) {
        var _this = this;
        this.clienteService.findByEmail(email).subscribe(function (responseApi) {
            _this.cliente = new _shared_model_cliente_model__WEBPACK_IMPORTED_MODULE_6__["Cliente"](responseApi['id'], responseApi['nome'], responseApi['foneMovel'], responseApi['foneFixo'], responseApi['email'], responseApi['documentoReceitaFederal'], responseApi['tipo'], responseApi['enderecos']);
            _this.form.patchValue(_this.cliente);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    ClienteEdicaoComponent.prototype.compararEstados = function (objeto1, objeto2) {
        return objeto1 && objeto2 ? objeto1 === objeto2 : objeto1 === objeto2;
    };
    ClienteEdicaoComponent.prototype.scrollTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    ClienteEdicaoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ClienteEdicaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-edicao',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cliente-edicao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente-edicao/cliente-edicao.component.html")).default,
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__importDefault(__webpack_require__(/*! ./cliente-edicao.component.scss */ "./src/app/components/cliente/cliente-edicao/cliente-edicao.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ClienteEdicaoComponent);
    return ClienteEdicaoComponent;
}());



/***/ }),

/***/ "./src/app/components/cliente/cliente-edicao/cliente-edicao.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/cliente/cliente-edicao/cliente-edicao.module.ts ***!
  \****************************************************************************/
/*! exports provided: ClienteEdicaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteEdicaoModule", function() { return ClienteEdicaoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cliente_edicao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-edicao.component */ "./src/app/components/cliente/cliente-edicao/cliente-edicao.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _cliente_edicao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-edicao-routing.module */ "./src/app/components/cliente/cliente-edicao/cliente-edicao-routing.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ClienteEdicaoModule = /** @class */ (function () {
    function ClienteEdicaoModule() {
    }
    ClienteEdicaoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cliente_edicao_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClienteEdicaoRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forChild()
            ],
            declarations: [_cliente_edicao_component__WEBPACK_IMPORTED_MODULE_2__["ClienteEdicaoComponent"]]
        })
    ], ClienteEdicaoModule);
    return ClienteEdicaoModule;
}());



/***/ }),

/***/ "./src/app/shared/model/cliente.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/model/cliente.model.ts ***!
  \***********************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, foneMovel, foneFixo, email, documentoReceitaFederal, tipo, enderecos) {
        this.id = id;
        this.nome = nome;
        this.foneMovel = foneMovel;
        this.foneFixo = foneFixo;
        this.email = email;
        this.documentoReceitaFederal = documentoReceitaFederal;
        this.tipo = tipo;
        this.enderecos = enderecos;
    }
    return Cliente;
}());



/***/ }),

/***/ "./src/app/shared/utils/estados.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/utils/estados.ts ***!
  \*****************************************/
/*! exports provided: Estados */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estados", function() { return Estados; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Estados;
(function (Estados) {
    Estados["AC"] = "Acre";
    Estados["AL"] = "Alagoas";
    Estados["AP"] = "Amap\u00E1";
    Estados["AM"] = "Amazonas";
    Estados["BA"] = "Bahia";
    Estados["CE"] = "Cear\u00E1";
    Estados["DF"] = "Distrito Federal";
    Estados["ES"] = "Esp\u00EDrito Santo";
    Estados["GO"] = "Goi\u00E1s";
    Estados["MA"] = "Maranh\u00E3o";
    Estados["MT"] = "Mato Grosso";
    Estados["MS"] = "Mato Grosso do Sul";
    Estados["MG"] = "Minas Gerais";
    Estados["PA"] = "Par\u00E1";
    Estados["PB"] = "Para\u00EDba";
    Estados["PR"] = "Paran\u00E1";
    Estados["PE"] = "Pernambuco";
    Estados["PI"] = "Piau\u00ED";
    Estados["RJ"] = "Rio de Janeiro";
    Estados["RN"] = "Rio Grande do Norte";
    Estados["RS"] = "Rio Grande do Sul";
    Estados["RO"] = "Rond\u00F4nia";
    Estados["RR"] = "Roraima";
    Estados["SC"] = "Santa Catarina";
    Estados["SP"] = "S\u00E3o Paulo";
    Estados["SE"] = "Sergipe";
    Estados["TO"] = "Tocantins";
})(Estados || (Estados = {}));


/***/ })

}]);
//# sourceMappingURL=components-cliente-cliente-edicao-cliente-edicao-module.js.map