import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayout } from '../layout/dashboard/dashboard.layout';
import { HomeComponent } from '../pages/home/home.component';
import { TestComponent } from '../pages/test/test.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: '', component: DashboardLayout, children: [
      {path: 'home', component: HomeComponent},
      {path: 'test', component: TestComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
