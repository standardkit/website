import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkCommonModule } from '@standardkit/angular-components';
import { DashboardLayout } from './dashboard/dashboard.layout';

const COMPONENTS = [
  DashboardLayout
];

@NgModule({
  imports: [RouterModule, SkCommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class LayoutModule {
}
