(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-list-user-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user/user-list/user-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user/user-list/user-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition] style=\"margin-left: 20px;\">\n    <app-page-header [heading]=\"'Consultar Usuarios'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n  <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n    <strong>{{ message.text }}</strong>\n  </div>\n\n  <div class=\"container\">\n    <mat-form-field>\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Pesquisar por id, nome ou email\">\n      </mat-form-field>\n  </div>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> Id </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"nome\">\n        <th mat-header-cell *matHeaderCellDef> Nome </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.nome}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Email</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"editar\">\n        <th mat-header-cell *matHeaderCellDef> Editar</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-icon-button color=\"accent\" (click)=\"edit(element.id)\">\n            <mat-icon color=\"accent\" class=\"mat-18\">edit</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef> Excluir </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-icon-button color=\"basic\">\n            <mat-icon color=\"warn\" class=\"mat-18\" (click)=\"delete(element.id)\">delete</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n<mat-paginator \n        #paginator\n        [length]=\"length\"\n        [pageIndex]=\"pageIndex\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"\n        showFirstLastButtons>\n</mat-paginator>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/layout/user/user-list/user-list-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/user/user-list/user-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListRoutingModule", function() { return UserListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.component */ "./src/app/layout/user/user-list/user-list.component.ts");
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
        path: '', component: _user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"]
    }
];
var UserListRoutingModule = /** @class */ (function () {
    function UserListRoutingModule() {
    }
    UserListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserListRoutingModule);
    return UserListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user/user-list/user-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/user/user-list/user-list.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nbutton {\n  border-bottom-width: 0px;\n  border-top-width: 0px;\n  border-left-width: 0px;\n  border-right-width: 0px;\n  background-color: white;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZGR5dGVjL0RvY3VtZW50b3MvZG9ja2VyL21vbm9saXRvLXRvLW1pY3Jvc2VydmljZS9zb25pZmxvcmVzLWFwcC9zcmMvYXBwL2xheW91dC91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDBweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDBweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDBweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/user/user-list/user-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/user/user-list/user-list.component.ts ***!
  \**************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/table-utils */ "./src/app/shared/utils/table-utils.ts");
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








var UserListComponent = /** @class */ (function () {
    function UserListComponent(dialogService, userService, router) {
        var _this = this;
        this.dialogService = dialogService;
        this.userService = userService;
        this.router = router;
        this.pageIndex = 0;
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = ['5', '10', '30', '50'];
        this.displayedColumns = ['id', 'nome', 'email', 'editar', 'delete'];
        this.usuarios = new Array();
        this.filtroEncontrado = false;
        this.filtroInicializado = false;
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.shared = _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.findAll();
    };
    UserListComponent.prototype.findAll = function () {
        var _this = this;
        this.userService.findAll().subscribe(function (responseApi) {
            Object.keys(responseApi).forEach(function (key) {
                _this.usuarios.push(responseApi[key]);
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.usuarios);
            _this.length = _this.usuarios.length;
            _this.dataSource.paginator = _this.paginator;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserListComponent.prototype.findAllLazy = function (pageIndex, pageSize) {
        var _this = this;
        this.userService.findAllLazy(pageIndex, pageSize).subscribe(function (responseApi) {
            _this.usuarios = responseApi['elements'];
            _this.length = responseApi['totalElements'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.usuarios);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserListComponent.prototype.edit = function (id) {
        this.router.navigate(['/users', id]);
    };
    UserListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm('Deseja realmente excluir o usuario?')
            .then(function (canDelete) {
            if (canDelete) {
                _this.message = {};
                _this.userService.delete(id).subscribe(function (responseApi) {
                    _this.showMessage({
                        type: 'success',
                        text: 'Usuario excluido'
                    });
                    _shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_7__["TableUtils"].deleteRowDataTable(id, _this.dataSource, _this.paginator);
                }, function (err) {
                    _this.showMessage({
                        type: 'error',
                        text: err['error']['errors'][0]
                    });
                });
            }
        });
    };
    UserListComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 5000);
    };
    UserListComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        if (type === 'error' || type === 'erro' || type === 'errors') {
            type = 'danger';
        }
        this.classCss['alert-' + type] = true;
    };
    UserListComponent.ctorParameters = function () { return [
        { type: _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], UserListComponent.prototype, "paginator", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user/user-list/user-list.component.html")).default,
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_6__["routerTransition"])()],
            styles: [__importDefault(__webpack_require__(/*! ./user-list.component.scss */ "./src/app/layout/user/user-list/user-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/user-list/user-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/user/user-list/user-list.module.ts ***!
  \***********************************************************/
/*! exports provided: UserListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListModule", function() { return UserListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list-routing.module */ "./src/app/layout/user/user-list/user-list-routing.module.ts");
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list.component */ "./src/app/layout/user/user-list/user-list.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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








var UserListModule = /** @class */ (function () {
    function UserListModule() {
    }
    UserListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserListRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [
                _user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"]
            ]
        })
    ], UserListModule);
    return UserListModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-list-user-list-module.js.map