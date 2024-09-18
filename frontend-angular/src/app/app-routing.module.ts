import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LayoutComponent }
  // { path: 'clientes-form', component: ClientesFormComponent },
  // { path: 'clientes-lista', component: ClientesListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
