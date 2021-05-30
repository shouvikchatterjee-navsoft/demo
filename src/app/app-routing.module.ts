import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
