import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StandardKitModule } from '@standardkit/angular-components';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  imports: [
    RoutingModule,
    BrowserModule,
    PagesModule,
    LayoutModule,
    StandardKitModule.forRoot({
      iconSet: 'font-awesome',
      alert: {hasIcon: true}
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
