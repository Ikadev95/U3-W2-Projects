import { CompletedPageComponent } from './components/completed-page/completed-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersPageComponent } from './components/users-page/users-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'

  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'completed',
    component:CompletedPageComponent
  },
  {
    path:'users',
    component:UsersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
