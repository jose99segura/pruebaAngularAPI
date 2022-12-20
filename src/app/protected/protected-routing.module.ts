import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'detalle/:id', component: DetalleComponent},
      {path: '**', redirectTo: 'dashboard'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
