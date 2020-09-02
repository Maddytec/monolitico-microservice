import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoEdicaoComponent } from './pedido-edicao.component';

const routes: Routes = [
  {
      path: '', component: PedidoEdicaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoEdicaoRoutingModule { }
