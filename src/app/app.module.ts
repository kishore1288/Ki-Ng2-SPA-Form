import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    // CoreModule,
    AppComponent,
    // LayoutModule,
    // SharedModule,
    // RoutesModule
  ],
  imports: [
    CoreModule,
    LayoutModule,
    SharedModule,
    RoutesModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
