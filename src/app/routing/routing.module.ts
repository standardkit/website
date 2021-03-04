import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayout } from '../layout/dashboard/dashboard.layout';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: DashboardLayout, children: [
      {path: '', pathMatch: 'full', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
