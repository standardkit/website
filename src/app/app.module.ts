import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StandardKitModule } from '@standardkit/angular-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    PagesModule,
    StandardKitModule.forRoot({iconSet: 'font-awesome', alert: {hasIcon: true, isDismissable: true}})
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
