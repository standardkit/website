import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkCommonModule, SkFormModule, SkLayoutModule } from '@standardkit/angular-components';
import { DashboardLayout } from './dashboard/dashboard.layout';

const COMPONENTS = [
  DashboardLayout
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SkCommonModule,
    SkFormModule,
    SkLayoutModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class LayoutModule {
}
