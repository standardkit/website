import { NgModule } from '@angular/core';
import { SkCommonModule, SkComponentsModule } from '@standardkit/angular-components';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

const PAGES = [
  HomeComponent,
  TestComponent
];

@NgModule({
  imports: [
    SkCommonModule,
    SkComponentsModule
  ],
  declarations: PAGES,
  exports: PAGES
})
export class PagesModule {
}
