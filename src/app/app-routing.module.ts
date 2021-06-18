import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { FirstComponent } from './first/first.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SecondComponent } from './second/second.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'first',
    pathMatch:'full'
  },
  {
    path:'first',
    component:FirstComponent
  },
  {
    path:'second',
    component:SecondComponent
  },
  {
    path:'template',
    component:TemplateFormComponent
  },
  {
    path:'reactive-form',
    component:ReactiveFormComponent
  },
  {
    path:'reactive',
    component:ReactiveComponent
  },
  {
    path:'employees',
    component:EmployeeListComponent
  },
  {
    path:'add-employee',
    component:EmployeeFormComponent
  },
  {
    path:'edit-employee/:id',
    component:EmployeeFormComponent
  },
  {
    path:'todo',
    loadChildren: () => import('./todo/todo.module').then(m=>m.TodoModule)
  },
  {
    path:'**',
    component:NotFoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
