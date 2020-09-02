import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoEdicaoComponent } from './pedido-edicao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../../shared';
import { PedidoEdicaoRoutingModule } from './pedido-edicao-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { 
  MatTableModule,
  MatSortModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatPaginatorModule, 
  MatIconModule } from '@angular/material';

@NgModule({
  imports: [
      FormsModule, 
      ReactiveFormsModule,
      CommonModule,
      PedidoEdicaoRoutingModule,
      PageHeaderModule,
      CommonModule,
      PageHeaderModule,
      MatTableModule,
      MatSortModule,
      MatFormFieldModule,
      MatInputModule,
      MatPaginatorModule,
      MatIconModule,
      NgxMaskModule.forChild()
  ],
  declarations: [PedidoEdicaoComponent]
})
export class PedidoEdicaoModule { }
