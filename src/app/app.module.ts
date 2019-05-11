import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TitleComponent } from './title/title.component';
import { FullScrComponent } from './full-scr/full-scr.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FullScrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
