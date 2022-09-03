import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddTesteComponent } from './add-teste/add-teste.component';
import { TesteListaComponent } from './teste-lista/teste-lista.component';
import { EditTesteComponent } from './edit-teste/edit-teste.component';

const routes: Routes = [
  { path: '', redirectTo: '/register-teste', pathMatch: 'full' },
  { path: 'register-teste', component: AddTesteComponent },
  { path: 'view-testes', component: TesteListaComponent },
  { path: 'edit-teste/:id', component: EditTesteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
