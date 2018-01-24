import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { InfoWindowComponent } from './info-window/info-window.component';

import { ServiceWorkerModule } from '@angular/service-worker'; //Added for service worker
import { environment } from '../environments/environment'; //Added for service worker

@NgModule({
  declarations: [
    AppComponent,
    TieFighterComponent,
    InfoWindowComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),//linked to line 12+13
    FormsModule,
    HttpModule,
    InternalDefensesModule,
    AppRoutingModule
  ],
  providers: [
  // CheckForUpdateService,
  // LogUpdateService,
  // PromptUpdateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
