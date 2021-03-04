import { NgModule } from '@angular/core';
import { SkCommonModule, SkComponentsModule } from '@standardkit/angular-components';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';

const PAGES = [
  HomeComponent
];

@NgModule({
  imports: [
    ComponentsModule,
    SkCommonModule,
    SkComponentsModule
  ],
  declarations: PAGES,
  exports: PAGES
})
export class PagesModule {
}
