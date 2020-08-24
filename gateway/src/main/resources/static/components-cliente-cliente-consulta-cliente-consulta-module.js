(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-cliente-cliente-consulta-cliente-consulta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente-consulta/cliente-consulta.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente-consulta/cliente-consulta.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition] style=\"margin-left: 35px;\">\n    <app-page-header [heading]=\"'Consultar cliente'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <strong>{{ message.text }}</strong>\n    </div>\n\n    <div class=\"container\">\n        <mat-form-field>\n            <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n    </div>\n\n    <div class=\"mat-elevation-z8\">\n        <table mat-table [dataSource]=\"dataSource\">\n\n            <ng-container matColumnDef=\"documentoReceitaFederal\">\n                <th mat-header-cell *matHeaderCellDef> CPF/CNPJ </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.documentoReceitaFederal}} </td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"nome\">\n                <th mat-header-cell *matHeaderCellDef> Nome </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.nome}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"foneMovel\">\n                <th mat-header-cell *matHeaderCellDef> Fone móvel </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.foneMovel}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"foneFixo\">\n                <th mat-header-cell *matHeaderCellDef> Fone fixo </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.foneFixo}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"email\">\n                <th mat-header-cell *matHeaderCellDef> E-mail </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"editar\">\n                    <th mat-header-cell *matHeaderCellDef> Editar</th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      <button mat-icon-button color=\"accent\" (click)=\"edit(element.id)\">\n                        <mat-icon color=\"accent\" class=\"mat-18\">edit</mat-icon>\n                      </button>\n                    </td>\n                  </ng-container>\n            \n                  <ng-container matColumnDef=\"delete\">\n                    <th mat-header-cell *matHeaderCellDef> Excluir </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      <button mat-icon-button color=\"basic\">\n                        <mat-icon color=\"warn\" class=\"mat-18\" (click)=\"delete(element.id)\">delete</mat-icon>\n                      </button>\n                    </td>\n                  </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator \n            #paginator\n            [length]=\"length\"\n            [pageIndex]=\"pageIndex\"\n            [pageSize]=\"pageSize\"\n            [pageSizeOptions]=\"pageSizeOptions\"\n            showFirstLastButtons>\n        </mat-paginator>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/cliente/cliente-consulta/cliente-consulta-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/cliente/cliente-consulta/cliente-consulta-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ClienteConsultaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteConsultaRoutingModule", function() { return ClienteConsultaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cliente_consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-consulta.component */ "./src/app/components/cliente/cliente-consulta/cliente-consulta.component.ts");
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
        path: '', component: _cliente_consulta_component__WEBPACK_IMPORTED_MODULE_2__["ClienteConsultaComponent"]
    }
];
var ClienteConsultaRoutingModule = /** @class */ (function () {
    function ClienteConsultaRoutingModule() {
    }
    ClienteConsultaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClienteConsultaRoutingModule);
    return ClienteConsultaRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/cliente/cliente-consulta/cliente-consulta.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/cliente/cliente-consulta/cliente-consulta.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nbutton {\n  border-bottom-width: 0px;\n  border-top-width: 0px;\n  border-left-width: 0px;\n  border-right-width: 0px;\n  background-color: white;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZGR5dGVjL0RvY3VtZW50b3MvZG9ja2VyL21vbm9saXRvLXRvLW1pY3Jvc2VydmljZS9zb25pZmxvcmVzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50ZS9jbGllbnRlLWNvbnN1bHRhL2NsaWVudGUtY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50ZS9jbGllbnRlLWNvbnN1bHRhL2NsaWVudGUtY29uc3VsdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudGUvY2xpZW50ZS1jb25zdWx0YS9jbGllbnRlLWNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDBweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cliente/cliente-consulta/cliente-consulta.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cliente/cliente-consulta/cliente-consulta.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClienteConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteConsultaComponent", function() { return ClienteConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/constants */ "./src/app/shared/utils/constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/cliente.service */ "./src/app/shared/services/cliente.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/table-utils */ "./src/app/shared/utils/table-utils.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
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









var ClienteConsultaComponent = /** @class */ (function () {
    function ClienteConsultaComponent(clienteService, dialogService, router) {
        var _this = this;
        this.clienteService = clienteService;
        this.dialogService = dialogService;
        this.router = router;
        this.pageIndex = _shared_utils_constants__WEBPACK_IMPORTED_MODULE_2__["PAGE_INDEX"];
        this.length = _shared_utils_constants__WEBPACK_IMPORTED_MODULE_2__["LENGTH"];
        this.pageSize = _shared_utils_constants__WEBPACK_IMPORTED_MODULE_2__["PAGE_SIZE"];
        this.pageSizeOptions = _shared_utils_constants__WEBPACK_IMPORTED_MODULE_2__["PAGE_SIZE_OPTIONS"];
        this.clientes = new Array();
        this.displayedColumns = [
            'documentoReceitaFederal',
            'nome',
            'foneMovel',
            'foneFixo',
            'email',
            'editar',
            'delete'
        ];
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.shared = _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    ClienteConsultaComponent.prototype.ngOnInit = function () {
        this.findAll();
    };
    ClienteConsultaComponent.prototype.findAll = function () {
        var _this = this;
        this.clienteService.findAll().subscribe(function (responseApi) {
            Object.keys(responseApi).forEach(function (key) {
                _this.clientes.push(responseApi[key]);
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.clientes);
            _this.length = _this.clientes.length;
            _this.dataSource.paginator = _this.paginator;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    ClienteConsultaComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 8000);
    };
    ClienteConsultaComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        if (type === 'error' || type === 'erro' || type === 'errors') {
            type = 'danger';
        }
        this.classCss['alert-' + type] = true;
    };
    ClienteConsultaComponent.prototype.edit = function (id) {
        this.router.navigate(['/cliente', id]);
    };
    ClienteConsultaComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm('Deseja realmente excluir cliente?')
            .then(function (canDelete) {
            if (canDelete) {
                _this.message = {};
                _this.clienteService.delete(id).subscribe(function (responseApi) {
                    _this.showMessage({
                        type: 'success',
                        text: 'Cliente excluido'
                    });
                    _shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_7__["TableUtils"].deleteRowDataTable(id, _this.dataSource, _this.paginator);
                }, function (err) {
                    _this.showMessage({
                        type: 'error',
                        text: err['error']['message']
                    });
                });
            }
        });
    };
    ClienteConsultaComponent.ctorParameters = function () { return [
        { type: _shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"] },
        { type: _dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ClienteConsultaComponent.prototype, "paginator", void 0);
    ClienteConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-consulta',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cliente-consulta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cliente/cliente-consulta/cliente-consulta.component.html")).default,
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_8__["routerTransition"])()],
            styles: [__importDefault(__webpack_require__(/*! ./cliente-consulta.component.scss */ "./src/app/components/cliente/cliente-consulta/cliente-consulta.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
            _dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ClienteConsultaComponent);
    return ClienteConsultaComponent;
}());



/***/ }),

/***/ "./src/app/components/cliente/cliente-consulta/cliente-consulta.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/cliente/cliente-consulta/cliente-consulta.module.ts ***!
  \********************************************************************************/
/*! exports provided: ClienteConsultaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteConsultaModule", function() { return ClienteConsultaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _cliente_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-consulta.component */ "./src/app/components/cliente/cliente-consulta/cliente-consulta.component.ts");
/* harmony import */ var _cliente_consulta_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente-consulta-routing.module */ "./src/app/components/cliente/cliente-consulta/cliente-consulta-routing.module.ts");
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








var ClienteConsultaModule = /** @class */ (function () {
    function ClienteConsultaModule() {
    }
    ClienteConsultaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cliente_consulta_routing_module__WEBPACK_IMPORTED_MODULE_6__["ClienteConsultaRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [_cliente_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ClienteConsultaComponent"]]
        })
    ], ClienteConsultaModule);
    return ClienteConsultaModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-cliente-cliente-consulta-cliente-consulta-module.js.map